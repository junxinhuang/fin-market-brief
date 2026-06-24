#!/usr/bin/env python3
"""Generate a standalone macro dashboard HTML from data/macro/latest.json."""

from __future__ import annotations

import json
from datetime import datetime, timezone, timedelta
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LATEST_PATH = ROOT / "data" / "macro" / "latest.json"
HISTORY_DIR = ROOT / "data" / "macro" / "history"
OUT_PATH = ROOT / "reports" / "macro" / "dashboard.html"


FREQUENCY_LABELS = {
    "week": "周频",
    "month": "月频",
    "quarter": "季频",
    "year": "年频",
}


CORE_IDS = [
    "us_10y_real_yield",
    "us_policy_rate_expectations",
    "us_dxy",
    "us_ism_manufacturing_pmi",
    "us_core_pce",
    "cn_tsf_stock_yoy",
    "cn_m1_yoy",
    "cn_official_manufacturing_pmi",
    "cn_real_estate_development_investment_yoy",
    "eu_core_hicp",
    "global_manufacturing_pmi",
    "global_copper_price",
    "xasset_gold_price",
    "xasset_vix",
    "xasset_move_index",
    "xasset_btc_price_trend",
    "xasset_stablecoin_supply",
]


REGION_ORDER = ["US", "China", "Europe", "Japan", "Global", "CrossAsset"]


THEME_LABELS = {
    "rates": "利率",
    "fx": "汇率",
    "growth": "增长",
    "inflation": "通胀",
    "liquidity": "流动性",
    "credit": "信用",
    "labor": "就业",
    "consumption": "消费",
    "investment": "投资",
    "trade": "贸易",
    "real_estate": "地产",
    "commodities": "商品",
    "precious_metals": "贵金属",
    "risk": "风险",
    "equity_index": "权益",
    "equity_valuation": "估值",
    "equity_earnings": "盈利",
    "crypto": "加密",
    "crypto_liquidity": "加密流动性",
    "crypto_derivatives": "加密衍生品",
}


UNIT_BY_ID = {
    "us_fed_funds_rate": "%",
    "us_policy_rate_expectations": "百分点",
    "us_10y_treasury_yield": "%",
    "us_10y_real_yield": "%",
    "us_2y10y_spread": "百分点",
    "us_dxy": "指数点",
    "us_real_gdp_growth": "十亿美元",
    "us_ism_manufacturing_pmi": "指数点",
    "us_ism_services_pmi": "指数点",
    "us_retail_sales": "百万美元",
    "us_cpi": "指数点",
    "us_core_cpi": "指数点",
    "us_core_pce": "指数点",
    "us_oil_price": "美元/桶",
    "us_unemployment_rate": "%",
    "us_nonfarm_payrolls": "千人",
    "us_initial_jobless_claims": "人",
    "us_m2_yoy": "十亿美元",
    "us_fed_balance_sheet": "百万美元",
    "us_bank_reserves": "十亿美元",
    "us_high_yield_spread": "百分点",
    "us_sp500_forward_pe": "代理比值",
    "us_sp500_eps_growth": "%",
    "us_30y_mortgage_rate": "%",
    "us_case_shiller_hpi": "指数点",
    "cn_tsf_stock_yoy": "%",
    "cn_tsf_flow": "亿元",
    "cn_m1_yoy": "%",
    "cn_m2_yoy": "%",
    "cn_new_rmb_loans": "亿元",
    "cn_corporate_medium_long_loans": "亿元",
    "cn_household_medium_long_loans": "亿元",
    "cn_official_manufacturing_pmi": "指数点",
    "cn_caixin_manufacturing_pmi": "指数点",
    "cn_industrial_production_yoy": "%",
    "cn_fixed_asset_investment_yoy": "%",
    "cn_real_estate_development_investment_yoy": "%",
    "cn_commercial_housing_sales_area_yoy": "%",
    "cn_70_city_home_price": "指数点",
    "cn_cpi_yoy": "%",
    "cn_ppi_yoy": "%",
    "cn_retail_sales_yoy": "%",
    "cn_exports_yoy": "%",
    "cn_usdcny": "人民币/美元",
    "cn_10y_gov_bond_yield": "%",
    "eu_ecb_policy_rate": "%",
    "eu_core_hicp": "%",
    "eu_eurusd": "美元/欧元",
    "eu_composite_pmi": "指数点",
    "de_manufacturing_pmi": "%",
    "jp_10y_jgb_yield": "%",
    "jp_usdjpy": "日元/美元",
    "global_manufacturing_pmi": "指数点",
    "global_brent_oil": "美元/桶",
    "global_copper_price": "美元/吨",
    "xasset_gold_price": "美元",
    "xasset_vix": "指数点",
    "xasset_move_index": "年化百分点",
    "xasset_sp500": "指数点",
    "xasset_nasdaq100": "美元",
    "xasset_msci_acwi": "美元",
    "xasset_btc_price_trend": "美元",
    "xasset_btc_dominance": "%",
    "xasset_eth_btc": "ETH/BTC",
    "xasset_stablecoin_supply": "美元",
    "xasset_crypto_funding_rate": "费率",
    "xasset_crypto_open_interest": "美元",
    "xasset_defi_tvl": "美元",
    "xasset_hyg": "美元",
    "xasset_reit_index": "美元",
}


DESCRIPTION_BY_ID = {
    "us_policy_rate_expectations": "用 2 年期美债收益率减联邦基金利率，观察市场对未来政策利率方向的定价。",
    "us_sp500_forward_pe": "用标普 500 指数除以 NIPA 税后企业利润构造长期估值压力代理，不是卖方一致预期 Forward P/E。",
    "us_sp500_eps_growth": "用美国 NIPA 税后企业利润同比作为盈利周期代理，不是标普 500 一致预期 EPS 增速。",
    "eu_composite_pmi": "用 OECD/FRED 欧元区商业信心指标代理欧元区 PMI 景气度。",
    "de_manufacturing_pmi": "用德国工业生产同比代理德国制造业周期。",
    "xasset_move_index": "用 10 年期美债收益率 60 个交易日实现波动率代理债券波动率，不是 ICE/BofA MOVE 指数。",
}


ZH_LABEL_BY_ID = {
    "us_fed_funds_rate": "美国联邦基金利率",
    "us_policy_rate_expectations": "美国政策利率预期代理",
    "us_10y_treasury_yield": "美国10年期国债收益率",
    "us_10y_real_yield": "美国10年期实际利率",
    "us_2y10y_spread": "美国10年-2年国债利差",
    "us_dxy": "美元指数代理",
    "us_real_gdp_growth": "美国实际GDP",
    "us_ism_manufacturing_pmi": "美国ISM制造业PMI",
    "us_ism_services_pmi": "美国ISM服务业PMI",
    "us_retail_sales": "美国零售销售",
    "us_cpi": "美国CPI",
    "us_core_cpi": "美国核心CPI",
    "us_core_pce": "美国核心PCE",
    "us_oil_price": "美国WTI原油价格",
    "us_unemployment_rate": "美国失业率",
    "us_nonfarm_payrolls": "美国非农就业",
    "us_initial_jobless_claims": "美国初请失业金人数",
    "us_m2_yoy": "美国M2货币供应",
    "us_fed_balance_sheet": "美联储资产负债表",
    "us_bank_reserves": "美国银行准备金",
    "us_high_yield_spread": "美国高收益债利差",
    "us_sp500_forward_pe": "标普500估值代理",
    "us_sp500_eps_growth": "美国企业盈利周期代理",
    "us_30y_mortgage_rate": "美国30年抵押贷款利率",
    "us_case_shiller_hpi": "美国Case-Shiller房价指数",
    "cn_tsf_stock_yoy": "中国社融存量同比",
    "cn_tsf_flow": "中国社融增量",
    "cn_m1_yoy": "中国M1同比",
    "cn_m2_yoy": "中国M2同比",
    "cn_new_rmb_loans": "中国新增人民币贷款",
    "cn_corporate_medium_long_loans": "中国企业中长期贷款",
    "cn_household_medium_long_loans": "中国居民中长期贷款",
    "cn_official_manufacturing_pmi": "中国官方制造业PMI",
    "cn_caixin_manufacturing_pmi": "中国财新制造业PMI",
    "cn_industrial_production_yoy": "中国工业增加值同比",
    "cn_fixed_asset_investment_yoy": "中国固定资产投资同比",
    "cn_real_estate_development_investment_yoy": "中国房地产开发投资同比",
    "cn_commercial_housing_sales_area_yoy": "中国商品房销售面积同比",
    "cn_70_city_home_price": "中国70城房价指数",
    "cn_cpi_yoy": "中国CPI同比",
    "cn_ppi_yoy": "中国PPI同比",
    "cn_retail_sales_yoy": "中国社会消费品零售同比",
    "cn_exports_yoy": "中国出口同比",
    "cn_usdcny": "美元兑人民币",
    "cn_10y_gov_bond_yield": "中国10年期国债收益率",
    "eu_ecb_policy_rate": "欧洲央行存款便利利率",
    "eu_core_hicp": "欧元区核心HICP同比",
    "eu_eurusd": "欧元兑美元",
    "eu_composite_pmi": "欧元区增长景气代理",
    "de_manufacturing_pmi": "德国工业周期代理",
    "jp_10y_jgb_yield": "日本10年期国债收益率",
    "jp_usdjpy": "美元兑日元",
    "global_manufacturing_pmi": "全球制造业PMI代理",
    "global_brent_oil": "布伦特原油价格",
    "global_copper_price": "铜价",
    "xasset_gold_price": "黄金价格",
    "xasset_vix": "VIX美股波动率",
    "xasset_move_index": "美债利率波动率代理",
    "xasset_sp500": "标普500指数",
    "xasset_nasdaq100": "纳斯达克100代理",
    "xasset_msci_acwi": "全球股票ACWI代理",
    "xasset_btc_price_trend": "BTC价格趋势",
    "xasset_btc_dominance": "BTC市占率",
    "xasset_eth_btc": "ETH/BTC比价",
    "xasset_stablecoin_supply": "稳定币供应量",
    "xasset_crypto_funding_rate": "加密资金费率",
    "xasset_crypto_open_interest": "加密未平仓合约代理",
    "xasset_defi_tvl": "DeFi总锁仓量",
    "xasset_hyg": "高收益债ETF HYG",
    "xasset_reit_index": "REIT地产ETF代理",
}


SIMPLE_EXPLANATION_BY_ID = {
    "us_fed_funds_rate": "美联储实际政策利率，是美元资金成本的锚。",
    "us_policy_rate_expectations": "用2年期美债与政策利率的差值观察市场对未来降息或加息的预期。",
    "us_10y_treasury_yield": "长期美元无风险利率，反映增长、通胀和期限溢价。",
    "us_10y_real_yield": "扣除通胀预期后的长期真实利率，衡量持有现金/债券相对风险资产的吸引力。",
    "us_2y10y_spread": "长短端利率差，常用于观察经济周期和衰退压力。",
    "us_dxy": "美元相对一篮子货币的强弱，代表全球美元流动性压力。",
    "us_real_gdp_growth": "美国实体经济总量，观察经济扩张或放缓的大背景。",
    "us_ism_manufacturing_pmi": "美国制造业景气度，50以上通常代表扩张。",
    "us_ism_services_pmi": "美国服务业景气度，更贴近美国经济主体。",
    "us_retail_sales": "美国消费需求强弱，消费是美国经济核心驱动力。",
    "us_cpi": "美国居民端总体通胀，包含食品和能源。",
    "us_core_cpi": "剔除食品和能源后的美国通胀，更看粘性价格压力。",
    "us_core_pce": "美联储更重视的核心通胀指标。",
    "us_oil_price": "美国WTI油价，影响能源通胀和周期资产。",
    "us_unemployment_rate": "美国劳动力市场松紧程度。",
    "us_nonfarm_payrolls": "美国每月新增就业，是增长和政策判断的核心数据。",
    "us_initial_jobless_claims": "更高频的就业压力指标，能较早反映裁员变化。",
    "us_m2_yoy": "广义货币供应量，观察金融体系流动性背景。",
    "us_fed_balance_sheet": "美联储资产规模，反映QE/QT流动性方向。",
    "us_bank_reserves": "银行体系准备金，衡量美元金融系统流动性缓冲。",
    "us_high_yield_spread": "垃圾债相对国债的利差，反映信用风险偏好。",
    "us_sp500_forward_pe": "用公开利润数据构造的估值压力代理，数值越高代表估值越贵。",
    "us_sp500_eps_growth": "用企业利润同比观察盈利周期，不是卖方一致预期EPS。",
    "us_30y_mortgage_rate": "美国房贷成本，影响购房能力和地产周期。",
    "us_case_shiller_hpi": "美国核心城市房价趋势。",
    "cn_tsf_stock_yoy": "中国实体经济融资存量增速，观察信用扩张或收缩。",
    "cn_tsf_flow": "当月新增社融规模，观察信用投放节奏。",
    "cn_m1_yoy": "企业活期资金和交易活跃度的代理。",
    "cn_m2_yoy": "中国广义货币增速，观察总量流动性。",
    "cn_new_rmb_loans": "银行新增人民币贷款，反映信贷投放力度。",
    "cn_corporate_medium_long_loans": "企业长期融资意愿，观察投资和扩产信心。",
    "cn_household_medium_long_loans": "居民长期贷款，主要反映房贷和居民加杠杆意愿。",
    "cn_official_manufacturing_pmi": "官方制造业景气度，更偏大中型企业。",
    "cn_caixin_manufacturing_pmi": "财新制造业景气度，更偏民企和外向型链条。",
    "cn_industrial_production_yoy": "工业部门实际产出增速。",
    "cn_fixed_asset_investment_yoy": "基建、制造业和地产等投资总趋势。",
    "cn_real_estate_development_investment_yoy": "地产开发投资强弱，是中国地产周期核心指标。",
    "cn_commercial_housing_sales_area_yoy": "商品房销售面积，观察地产需求端。",
    "cn_70_city_home_price": "主要城市新房价格变化。",
    "cn_cpi_yoy": "中国居民端通胀，观察消费需求和价格压力。",
    "cn_ppi_yoy": "工业品出厂价格，观察上游周期和企业利润压力。",
    "cn_retail_sales_yoy": "中国消费需求强弱。",
    "cn_exports_yoy": "中国外需和全球贸易周期的反映。",
    "cn_usdcny": "人民币汇率压力和美元流动性传导指标。",
    "cn_10y_gov_bond_yield": "中国长期无风险利率，反映增长和政策预期。",
    "eu_ecb_policy_rate": "欧洲央行政策利率，决定欧元区短端资金成本。",
    "eu_core_hicp": "欧元区核心通胀，剔除能源、食品、酒精和烟草。",
    "eu_eurusd": "欧元相对美元强弱，影响美元指数和全球风险偏好。",
    "eu_composite_pmi": "用商业信心代理欧元区综合景气。",
    "de_manufacturing_pmi": "用德国工业生产同比代理欧洲制造业周期。",
    "jp_10y_jgb_yield": "日本长期利率，影响全球套息交易和债券市场。",
    "jp_usdjpy": "日元汇率，观察套息交易和避险情绪。",
    "global_manufacturing_pmi": "用中美PMI构造的全球制造业景气代理。",
    "global_brent_oil": "全球原油基准价格，影响通胀和能源资产。",
    "global_copper_price": "铜常被视为全球工业需求和中国需求的风向标。",
    "xasset_gold_price": "黄金价格，受实际利率、美元和避险需求影响。",
    "xasset_vix": "美股隐含波动率，衡量权益市场恐慌程度。",
    "xasset_move_index": "用10年美债收益率波动代理债券市场不确定性。",
    "xasset_sp500": "美国大盘股票风险资产锚。",
    "xasset_nasdaq100": "美国科技成长股风险偏好代理。",
    "xasset_msci_acwi": "全球股票市场整体风险偏好代理。",
    "xasset_btc_price_trend": "BTC价格趋势，用作加密风险资产核心锚。",
    "xasset_btc_dominance": "BTC在加密总市值中的占比，观察资金偏防守还是扩散到山寨。",
    "xasset_eth_btc": "ETH相对BTC强弱，观察加密内部风险偏好。",
    "xasset_stablecoin_supply": "稳定币总供应，观察加密市场可用美元流动性。",
    "xasset_crypto_funding_rate": "合约资金费率，观察多空拥挤程度。",
    "xasset_crypto_open_interest": "加密合约未平仓规模代理，观察杠杆拥挤度。",
    "xasset_defi_tvl": "DeFi锁仓规模，观察链上风险资金活跃度。",
    "xasset_hyg": "高收益债ETF价格，观察信用风险偏好。",
    "xasset_reit_index": "公开市场地产ETF，观察利率和地产资产压力。",
}


BEGINNER_GUIDE_BY_ID = {
    "us_fed_funds_rate": "把它理解成美元世界的“官方资金价格”。它上升，说明美联储在让借钱变贵，目的是压通胀和降温经济；股票、房子、黄金、BTC都会因为折现率变高而更吃力。它下降，说明政策开始放松，通常对风险资产更友好，但也可能是经济已经变弱才被迫降息。",
    "us_policy_rate_expectations": "这个是用2年期美债减去当前联邦基金利率做的代理。2年期更像市场对未来一两年政策利率的投票：如果它明显低于当前政策利率，市场在押未来降息；如果它上升，说明市场觉得降息没那么快，甚至未来利率会更高更久。",
    "us_10y_treasury_yield": "10年期美债利率可以理解成全球长期资金的“地心引力”。它上升，可能有三种原因：经济更强、通胀更顽固、或者投资者要求更高期限溢价。结果是股票估值、房贷、黄金和BTC都会感到压力，因为未来收益要用更高利率折现。它下降也不一定总是好事：可能是市场觉得未来增长变差、要降息，或者避险资金买入长债。",
    "us_10y_real_yield": "实际利率是扣掉通胀预期后的真实回报。它上升，意思是持有安全资产也能拿到不错的真实收益，黄金和BTC这种不产生现金流的资产会更难受；成长股也会因为远期利润折现变贵而承压。它下降，通常更利好黄金、BTC和成长股。",
    "us_2y10y_spread": "这是10年期利率减2年期利率。正常经济里，长期利率通常高于短期，因为借10年风险更久；如果差值变小甚至倒挂，说明短端政策很紧，同时市场觉得未来经济可能撑不住、以后要降息。重点不是只看高低，而是看它为什么变化：2年期动得多，偏政策预期；10年期动得多，偏增长、通胀和期限溢价。",
    "us_dxy": "美元指数上升，通常表示美元更强、全球拿美元更贵。对非美资产、新兴市场、商品、黄金、BTC往往不是好风；但如果美元强是因为美国经济很强，股票可能还能扛。美元下行则通常让全球流动性舒服一些。",
    "us_ism_manufacturing_pmi": "PMI可以看成企业经理人的景气投票，50以上偏扩张，50以下偏收缩。制造业PMI上升，通常说明订单、生产和库存周期改善，利好商品和周期资产；下降则说明实体需求转弱。但美国经济服务业占比更大，所以要和服务业PMI、就业一起看。",
    "us_ism_services_pmi": "美国服务业更贴近美国经济主体。它上升说明消费、服务需求和就业韧性强，可能支撑美股盈利；但如果太强，也可能让通胀更粘，导致美联储不急着降息。",
    "us_core_pce": "这是美联储最关注的核心通胀之一。它上升或下不来，说明降息空间受限，利率可能更高更久；它持续降温，才更容易进入宽松周期。看它时不要只看一个月，要看连续趋势。",
    "us_high_yield_spread": "高收益债利差可以理解成市场对“差一点的公司会不会出事”的保险费。利差扩大，说明信用风险上升，股票和加密通常也要小心；利差收窄，说明市场风险胃口好，上涨质量更健康。",
    "us_unemployment_rate": "失业率上升说明劳动力市场变松，消费和企业利润可能承压，但也会增加降息可能。对资产来说，它有两面性：刚开始上升可能被市场理解成降息利好；如果上升太快，就是衰退风险。",
    "us_initial_jobless_claims": "初请失业金人数更高频，像就业市场的早期警报器。它持续上升，说明裁员压力变大；偶尔一周波动意义不大，要看连续几周趋势。",
    "cn_tsf_stock_yoy": "社融存量同比可以理解成实体经济拿到钱的总水位增速。它上升，说明信用在扩张，通常对A股、商品、地产链更友好；它下降，说明钱进实体的速度慢，复苏弹性会弱。中国周期里它非常重要。",
    "cn_tsf_flow": "社融增量是当月新增融资，波动会很大。单月特别高不一定代表趋势变了，要看连续几个月，以及是否流向企业中长期贷款、居民贷款这些更有质量的部分。",
    "cn_m1_yoy": "M1更像企业手里随时能用的钱。M1上升，说明企业交易和投资意愿可能恢复；M1弱，说明钱可能停在银行或没有进入活跃交易。它和社融一起看，能判断宽信用有没有变成真实活力。",
    "cn_m2_yoy": "M2是更宽的货币总量。它上升代表总量流动性多，但不一定代表实体变强；如果M2高、M1弱，可能是钱在金融系统里空转。",
    "cn_official_manufacturing_pmi": "中国官方PMI看制造业景气，50是荣枯线。站上50说明生产和订单有改善，但如果地产、社融、PPI还弱，说明只是局部修复，不一定是全面复苏。",
    "cn_real_estate_development_investment_yoy": "地产投资是中国资产负债表周期的核心。它下滑，说明开发商拿地、开工、施工都弱，会拖累钢铁、水泥、地方财政、银行和居民信心。它止跌改善，才更像地产链真正减压。",
    "cn_commercial_housing_sales_area_yoy": "商品房销售面积比地产投资更靠前。销售先好，开发商现金流才会改善，后面投资和开工才可能跟上；如果销售还弱，地产投资的修复通常不稳。",
    "cn_ppi_yoy": "PPI是工业品出厂价格。它上升，说明上游价格和工业利润可能改善，利好周期行业；它长期为负，说明工业部门有通缩压力，企业利润修复困难。",
    "cn_cpi_yoy": "CPI看居民消费端价格。中国CPI太低，通常不是好事，可能说明需求偏弱；太高则会限制政策宽松。它要和PPI一起看，判断是消费弱、工业弱，还是全面通胀。",
    "cn_usdcny": "美元兑人民币上升，意思是人民币相对美元走弱。它可能来自强美元，也可能来自中国增长或资本流动压力。人民币稳定通常有利于外资信心和人民币资产；快速贬值会压制风险偏好。",
    "global_brent_oil": "油价上升会推高能源通胀，也可能说明需求强或供给紧。对能源股有利，但对降息、消费和非能源企业利润不一定好。油价下跌可能利好通胀下降，也可能代表需求变差。",
    "global_copper_price": "铜常被叫作“经济博士”，因为它和建筑、电力、制造业需求相关。铜价上升通常说明工业需求或风险偏好改善；但也可能是供给扰动或金融投机，所以要和中国PMI、PPI一起看。",
    "xasset_gold_price": "黄金不产生利息，所以它最怕实际利率和美元上升。黄金上涨通常来自实际利率下降、美元走弱、避险需求或央行买入。看黄金时，别只看价格，要一起看10年实际利率和美元。",
    "xasset_vix": "VIX是美股恐慌温度计。它很低说明市场平静，但也可能表示大家太放松；它快速上升说明市场在买保护，风险偏好转差。VIX要和信用利差一起看，判断是不是系统性压力。",
    "xasset_move_index": "这是美债波动代理。债券市场是全球资产定价的地基，如果利率波动很大，股票、黄金、BTC都会不舒服，因为折现率和杠杆成本变得不稳定。",
    "xasset_sp500": "标普500是美国风险资产的主锚。它上涨不一定代表经济很好，可能是盈利好、估值扩张、流动性宽松或AI等主题驱动。要看它上涨时信用利差、VIX和利率是否配合。",
    "xasset_btc_price_trend": "BTC可以看作高波动的全球流动性资产。美元走弱、实际利率下降、稳定币扩张时，背景通常更友好；如果BTC上涨但资金费率和OI很热，说明杠杆拥挤，波动风险也更大。",
    "xasset_stablecoin_supply": "稳定币供应是加密市场里的美元弹药。它扩张，说明场内可用资金变多，长期更利好风险偏好；它收缩，说明场内资金在撤退或变谨慎。",
    "xasset_crypto_funding_rate": "资金费率可以看多空拥挤。正得很高，说明多头愿意付钱持仓，市场可能过热；接近0说明合约不算极端拥挤。它不能单独决定方向，只能提示拥挤程度。",
    "xasset_crypto_open_interest": "OI是未平仓合约规模。价格上涨且OI大增，可能是杠杆在推；价格上涨但OI不极端，通常更健康。OI太高时，价格容易因为爆仓链条而剧烈波动。",
    "xasset_eth_btc": "ETH/BTC上升，说明资金从BTC扩散到更高beta的加密资产，风险偏好更强；下降说明市场更偏防守，BTC相对占优。",
}


IMPACT_SCOPE_BY_ID = {
    "us_fed_funds_rate": "美元、短债、银行流动性、股票估值、黄金、加密",
    "us_policy_rate_expectations": "美元利率曲线、成长股、黄金、BTC、风险偏好",
    "us_10y_treasury_yield": "全球折现率、股票估值、房贷、黄金、美元",
    "us_10y_real_yield": "黄金、BTC、成长股、房地产、长期债券",
    "us_2y10y_spread": "经济周期、银行股、信用利差、衰退预期",
    "us_dxy": "美元流动性、黄金、新兴市场、人民币、加密",
    "us_real_gdp_growth": "美股盈利、美元、商品、全球增长预期",
    "us_ism_manufacturing_pmi": "周期股、商品、信用、高收益债、全球制造链",
    "us_ism_services_pmi": "美股、美元、通胀预期、就业预期",
    "us_retail_sales": "消费股、美股盈利、美元、通胀预期",
    "us_cpi": "美联储政策、美元利率、黄金、股票估值",
    "us_core_cpi": "美联储政策、长端利率、成长股、黄金",
    "us_core_pce": "美联储政策路径、美元、实际利率、风险资产",
    "us_oil_price": "通胀、能源股、航空运输、商品货币",
    "us_unemployment_rate": "美联储政策、消费、信用风险、股债切换",
    "us_nonfarm_payrolls": "美元、利率、股票、黄金、加密短期风险偏好",
    "us_initial_jobless_claims": "就业拐点、衰退风险、美债、美元",
    "us_m2_yoy": "流动性、股票估值、房地产、加密、黄金",
    "us_fed_balance_sheet": "美元流动性、美债、股票估值、加密",
    "us_bank_reserves": "银行体系、美元融资、风险资产流动性",
    "us_high_yield_spread": "信用风险、美股、HYG、衰退预期、加密风险偏好",
    "us_sp500_forward_pe": "美股估值、成长股、长期预期收益",
    "us_sp500_eps_growth": "美股盈利周期、信用风险、经济周期",
    "us_30y_mortgage_rate": "美国地产、REIT、消费、银行信用",
    "us_case_shiller_hpi": "美国地产、居民财富效应、REIT、通胀黏性",
    "cn_tsf_stock_yoy": "中国信用周期、A股、商品、地产、人民币",
    "cn_tsf_flow": "A股、地产链、商品、银行、地方融资",
    "cn_m1_yoy": "企业活跃度、A股、商品、经济复苏预期",
    "cn_m2_yoy": "中国流动性、债券、A股、房地产",
    "cn_new_rmb_loans": "信用扩张、银行、地产链、基建链",
    "cn_corporate_medium_long_loans": "制造业投资、基建、A股周期板块",
    "cn_household_medium_long_loans": "房地产、银行、居民消费、家电建材",
    "cn_official_manufacturing_pmi": "中国制造业、商品、A股周期、全球贸易",
    "cn_caixin_manufacturing_pmi": "民企、出口链、人民币、工业品",
    "cn_industrial_production_yoy": "工业利润、商品、A股周期、出口链",
    "cn_fixed_asset_investment_yoy": "基建、制造业、地产链、商品需求",
    "cn_real_estate_development_investment_yoy": "地产链、地方财政、银行、黑色商品",
    "cn_commercial_housing_sales_area_yoy": "地产需求、居民信心、银行和建材",
    "cn_70_city_home_price": "居民资产负债表、地产政策、银行资产质量",
    "cn_cpi_yoy": "消费需求、货币政策、人民币债券",
    "cn_ppi_yoy": "工业利润、上游商品、制造业库存周期",
    "cn_retail_sales_yoy": "消费股、经济复苏、A股盈利",
    "cn_exports_yoy": "出口链、人民币、全球需求、制造业",
    "cn_usdcny": "人民币资产、A股外资、商品、美元流动性",
    "cn_10y_gov_bond_yield": "中国债券、人民币、地产估值、股债相对吸引力",
    "eu_ecb_policy_rate": "欧元、欧洲债券、欧洲股票、美元指数",
    "eu_core_hicp": "欧洲央行政策、欧元、欧洲债券、黄金",
    "eu_eurusd": "美元指数、欧洲股票、黄金、全球风险偏好",
    "eu_composite_pmi": "欧洲增长、欧元、欧洲股市、全球制造链",
    "de_manufacturing_pmi": "欧洲制造业、欧元、工业金属、出口链",
    "jp_10y_jgb_yield": "全球债券、日元、套息交易、美元流动性",
    "jp_usdjpy": "套息交易、全球风险偏好、日本资产、黄金",
    "global_manufacturing_pmi": "全球增长、商品、周期股、信用风险",
    "global_brent_oil": "全球通胀、能源股、商品货币、央行政策",
    "global_copper_price": "全球工业需求、中国周期、商品股、新兴市场",
    "xasset_gold_price": "实际利率、美元、避险需求、央行储备",
    "xasset_vix": "美股风险、避险资产、信用利差、加密风险偏好",
    "xasset_move_index": "债券波动、风险平价、美元流动性、黄金",
    "xasset_sp500": "全球风险资产、美股盈利、财富效应",
    "xasset_nasdaq100": "成长股、AI/科技风险偏好、利率敏感资产",
    "xasset_msci_acwi": "全球权益、跨区域风险偏好、美元周期",
    "xasset_btc_price_trend": "加密风险偏好、美元流动性、科技股联动",
    "xasset_btc_dominance": "加密内部风格、山寨币风险偏好、资金防守程度",
    "xasset_eth_btc": "加密内部风险扩散、链上生态、山寨行情",
    "xasset_stablecoin_supply": "加密场内流动性、交易需求、链上风险偏好",
    "xasset_crypto_funding_rate": "合约拥挤度、短期杠杆风险、加密波动",
    "xasset_crypto_open_interest": "杠杆规模、强平风险、加密波动",
    "xasset_defi_tvl": "链上活跃度、DeFi风险偏好、加密流动性",
    "xasset_hyg": "信用风险、美股风险偏好、衰退交易",
    "xasset_reit_index": "利率、地产、REIT、收入型资产",
}


def load_rows(indicator_id: str, limit: int = 20000) -> list[dict[str, object]]:
    path = HISTORY_DIR / f"{indicator_id}.json"
    if not path.exists():
        return []
    rows = json.loads(path.read_text())
    return rows[-limit:]


def compact_indicator(item: dict[str, object]) -> dict[str, object]:
    meta = item.get("adapter_meta") or {}
    indicator_id = str(item["id"])
    return {
        "id": indicator_id,
        "priority": item["priority"],
        "label": item["label"],
        "zhLabel": ZH_LABEL_BY_ID.get(indicator_id, item["label"]),
        "region": item["region"],
        "theme": item["theme"],
        "themeLabel": THEME_LABELS.get(str(item["theme"]), item["theme"]),
        "source": item.get("configured_source"),
        "sourceUrl": item.get("configured_source_url"),
        "displayFrequency": item.get("display_frequency"),
        "frequencyLabel": FREQUENCY_LABELS.get(str(item.get("display_frequency")), item.get("display_frequency")),
        "availability": item.get("availability"),
        "status": item.get("status"),
        "points": item.get("points"),
        "firstDate": item.get("first_date"),
        "latestDate": item.get("latest_date"),
        "latestValue": item.get("latest_value"),
        "unit": UNIT_BY_ID.get(indicator_id, "数值"),
        "description": SIMPLE_EXPLANATION_BY_ID.get(indicator_id)
        or DESCRIPTION_BY_ID.get(indicator_id)
        or item.get("note")
        or meta.get("gap")
        or "用于观察长期宏观背景和跨资产环境。",
        "beginnerGuide": BEGINNER_GUIDE_BY_ID.get(indicator_id, "先看它现在处在历史高位还是低位，再看近几期方向，最后和同一组合里的指标互相验证。单个指标只提供线索，不直接等于结论。"),
        "impactScope": IMPACT_SCOPE_BY_ID.get(indicator_id, "宏观环境、风险偏好和相关资产定价"),
        "note": item.get("note"),
        "adapter": meta.get("adapter"),
        "caveat": item.get("gap") or meta.get("gap") or item.get("note"),
        "history": load_rows(str(item["id"])),
    }


def _indicator_map(indicators: list[dict[str, object]]) -> dict[str, dict[str, object]]:
    return {str(item["id"]): item for item in indicators}


def _latest(indicators: dict[str, dict[str, object]], indicator_id: str) -> float | None:
    value = indicators.get(indicator_id, {}).get("latestValue")
    try:
        return float(value)  # type: ignore[arg-type]
    except (TypeError, ValueError):
        return None


def _change(indicators: dict[str, dict[str, object]], indicator_id: str, periods: int) -> float | None:
    history = indicators.get(indicator_id, {}).get("history") or []
    if not isinstance(history, list) or len(history) < 2:
        return None
    try:
        latest = float(history[-1]["value"])  # type: ignore[index]
        previous = float(history[max(0, len(history) - 1 - periods)]["value"])  # type: ignore[index]
    except (TypeError, ValueError, KeyError):
        return None
    return latest - previous


def _history_values(indicators: dict[str, dict[str, object]], indicator_id: str) -> list[float]:
    history = indicators.get(indicator_id, {}).get("history") or []
    if not isinstance(history, list):
        return []
    values: list[float] = []
    for row in history:
        try:
            values.append(float(row["value"]))  # type: ignore[index]
        except (TypeError, ValueError, KeyError):
            continue
    return values


def _percentile(indicators: dict[str, dict[str, object]], indicator_id: str) -> float | None:
    values = sorted(_history_values(indicators, indicator_id))
    latest = _latest(indicators, indicator_id)
    if latest is None or len(values) < 5:
        return None
    rank = len([value for value in values if value <= latest])
    return rank / len(values) * 100


def _level_phrase(indicators: dict[str, dict[str, object]], indicator_id: str) -> str:
    pct = _percentile(indicators, indicator_id)
    if pct is None:
        return "历史位置不足"
    if pct >= 85:
        return f"处在历史高位区间，分位约{pct:.0f}%"
    if pct >= 65:
        return f"高于历史中枢，分位约{pct:.0f}%"
    if pct <= 15:
        return f"处在历史低位区间，分位约{pct:.0f}%"
    if pct <= 35:
        return f"低于历史中枢，分位约{pct:.0f}%"
    return f"接近历史中枢，分位约{pct:.0f}%"


def _trend_phrase(
    indicators: dict[str, dict[str, object]], indicator_id: str, periods: int = 12, label: str = "近12期"
) -> str:
    change = _change(indicators, indicator_id, periods)
    item = indicators.get(indicator_id, {})
    if change is None:
        return f"{label}趋势不足"
    unit = str(item.get("unit") or "")
    if abs(change) < 1e-9:
        text = "基本持平"
    else:
        change_unit = "百分点" if unit == "%" else unit
        text = f"{'上行' if change > 0 else '下行'} {_fmt_number(abs(change), change_unit)}"
    return f"{label}{text}"


def _fmt_number(value: float, unit: str = "") -> str:
    if abs(value) >= 1_000_000_000_000:
        text = f"{value / 1_000_000_000_000:.2f}T"
    elif abs(value) >= 1_000_000_000:
        text = f"{value / 1_000_000_000:.2f}B"
    elif abs(value) >= 1_000_000:
        text = f"{value / 1_000_000:.2f}M"
    elif abs(value) >= 100:
        text = f"{value:.1f}"
    elif abs(value) >= 10:
        text = f"{value:.2f}"
    elif abs(value) >= 1:
        text = f"{value:.2f}"
    else:
        text = f"{value:.4f}"
    if unit == "%":
        return f"{text}%"
    if unit and unit != "数值":
        return f"{text} {unit}"
    return text


def _fmt_metric(indicators: dict[str, dict[str, object]], indicator_id: str) -> str:
    item = indicators.get(indicator_id, {})
    value = _latest(indicators, indicator_id)
    if value is None:
        return "—"
    unit = str(item.get("unit") or "")
    return _fmt_number(value, unit)


def _row_on_or_before(rows: list[dict[str, object]], date: str) -> dict[str, object] | None:
    candidate = None
    for row in rows:
        row_date = str(row.get("date") or "")
        if row_date <= date:
            candidate = row
        else:
            break
    return candidate


def _series_change_by_days(
    indicators: dict[str, dict[str, object]], indicator_id: str, days: int
) -> tuple[float | None, str | None, str | None]:
    history = indicators.get(indicator_id, {}).get("history") or []
    if not isinstance(history, list) or len(history) < 2:
        return None, None, None
    latest = history[-1]
    latest_date = str(latest.get("date") or "")
    if not latest_date:
        return None, None, None
    try:
        latest_dt = datetime.fromisoformat(latest_date)
    except ValueError:
        return None, None, None
    target_date = (latest_dt.replace(tzinfo=None) - timedelta(days=days)).date().isoformat()
    previous = _row_on_or_before(history, target_date)
    if previous is None:
        previous = history[0]
    try:
        change = float(latest["value"]) - float(previous["value"])  # type: ignore[index]
    except (TypeError, ValueError, KeyError):
        return None, None, None
    return change, str(previous.get("date") or ""), latest_date


def _last_crossing(rows: list[dict[str, object]], from_negative: bool = True) -> str | None:
    crossing = None
    for previous, current in zip(rows, rows[1:]):
        try:
            prev_value = float(previous["value"])
            curr_value = float(current["value"])
        except (TypeError, ValueError, KeyError):
            continue
        if from_negative and prev_value < 0 <= curr_value:
            crossing = str(current.get("date") or "")
        elif not from_negative and prev_value > 0 >= curr_value:
            crossing = str(current.get("date") or "")
    return crossing


def _extreme_row(rows: list[dict[str, object]], kind: str, lookback: int = 750) -> dict[str, object] | None:
    valid = []
    for row in rows[-lookback:]:
        try:
            valid.append({"date": row["date"], "value": float(row["value"])})
        except (TypeError, ValueError, KeyError):
            continue
    if not valid:
        return None
    return min(valid, key=lambda row: row["value"]) if kind == "min" else max(valid, key=lambda row: row["value"])


def _derived_2y_change(indicators: dict[str, dict[str, object]], days: int) -> tuple[float | None, str | None, str | None, float | None]:
    ten_history = indicators.get("us_10y_treasury_yield", {}).get("history") or []
    spread_history = indicators.get("us_2y10y_spread", {}).get("history") or []
    if not isinstance(ten_history, list) or not isinstance(spread_history, list):
        return None, None, None, None
    spread_by_date = {str(row.get("date")): row.get("value") for row in spread_history}
    derived = []
    for row in ten_history:
        date = str(row.get("date") or "")
        if date not in spread_by_date:
            continue
        try:
            derived.append({"date": date, "value": float(row["value"]) - float(spread_by_date[date])})
        except (TypeError, ValueError, KeyError):
            continue
    if len(derived) < 2:
        return None, None, None, None
    latest = derived[-1]
    latest_dt = datetime.fromisoformat(str(latest["date"]))
    target_date = (latest_dt - timedelta(days=days)).date().isoformat()
    previous = _row_on_or_before(derived, target_date) or derived[0]
    return float(latest["value"]) - float(previous["value"]), str(previous["date"]), str(latest["date"]), float(latest["value"])


def build_us_rate_diagnosis(indicators: dict[str, dict[str, object]]) -> dict[str, object]:
    ten_q, ten_start, ten_end = _series_change_by_days(indicators, "us_10y_treasury_yield", 90)
    spread_q, _, _ = _series_change_by_days(indicators, "us_2y10y_spread", 90)
    real_q, _, _ = _series_change_by_days(indicators, "us_10y_real_yield", 90)
    policy_gap_q, _, _ = _series_change_by_days(indicators, "us_policy_rate_expectations", 90)
    two_q, two_start, two_end, two_latest = _derived_2y_change(indicators, 90)
    ten_latest = _latest(indicators, "us_10y_treasury_yield")
    spread_latest = _latest(indicators, "us_2y10y_spread")
    real_latest = _latest(indicators, "us_10y_real_yield")
    policy_gap_latest = _latest(indicators, "us_policy_rate_expectations")
    spread_rows = indicators.get("us_2y10y_spread", {}).get("history") or []
    ten_rows = indicators.get("us_10y_treasury_yield", {}).get("history") or []
    spread_trough = _extreme_row(spread_rows if isinstance(spread_rows, list) else [], "min")
    ten_peak = _extreme_row(ten_rows if isinstance(ten_rows, list) else [], "max")
    uninversion = _last_crossing(spread_rows if isinstance(spread_rows, list) else [], from_negative=True)

    if ten_q is not None and spread_q is not None:
        if ten_q > 0 and spread_q > 0:
            regime = "熊陡：长端上行且曲线变陡，通常是增长/通胀/期限溢价重新抬升。"
        elif ten_q < 0 and spread_q > 0:
            regime = "牛陡：长端下行且曲线变陡，通常是市场在交易未来降息或增长走弱。"
        elif ten_q > 0 and spread_q < 0:
            regime = "熊平：10年期上行但曲线变平，说明2年期上行更快，政策预期重新偏鹰。"
        elif ten_q < 0 and spread_q < 0:
            regime = "牛平：10年期下行但曲线变平，说明长端回落更快，增长/避险担忧更重。"
        else:
            regime = "曲线形态暂时偏横盘，方向信号不强。"
    else:
        regime = "曲线形态数据不足。"

    drivers = []
    if two_q is not None and ten_q is not None:
        if two_q > ten_q + 0.1:
            drivers.append("过去约3个月，2年期上行幅度大于10年期，利差收窄的主因更偏短端/政策预期，而不是长端独自走弱。")
        elif ten_q > two_q + 0.1:
            drivers.append("过去约3个月，10年期上行幅度大于2年期，曲线变化更偏长期增长、通胀或期限溢价。")
        else:
            drivers.append("过去约3个月，2年期和10年期变化接近，曲线变化不是单一端点驱动。")
    if real_q is not None and real_q > 0.1:
        drivers.append("实际利率同步上行，说明长端压力更多来自真实折现率，而不只是通胀补偿。")
    elif real_q is not None and real_q < -0.1:
        drivers.append("实际利率回落，黄金、成长股和BTC的折现率压力边际减轻。")
    if policy_gap_q is not None and policy_gap_q > 0.1:
        drivers.append("2年期相对联邦基金利率的溢价扩大，市场不再激进押注快速降息。")
    elif policy_gap_q is not None and policy_gap_q < -0.1:
        drivers.append("2年期相对政策利率下行，市场更愿意定价未来宽松。")
    if not drivers:
        drivers.append("当前驱动不够单一，需要结合就业、通胀和信用利差继续验证。")

    turning_points = []
    if spread_trough:
        turning_points.append(f"10Y-2Y 最近一轮深度倒挂低点在 {spread_trough['date']}，约 {spread_trough['value']:.2f} 个百分点。")
    if uninversion:
        turning_points.append(f"利差由倒挂转正的关键点在 {uninversion} 附近，这通常意味着市场开始从“加息压制”切换到“降息/周期下行后段”的讨论。")
    if ten_peak:
        turning_points.append(f"10年期近几年高点在 {ten_peak['date']}，约 {ten_peak['value']:.2f}%。")

    market_state = (
        f"当前10年期约{_fmt_number(ten_latest or 0, '%')}、2年期约{_fmt_number(two_latest or 0, '%')}、"
        f"10Y-2Y约{_fmt_number(spread_latest or 0, '百分点')}、实际利率约{_fmt_number(real_latest or 0, '%')}。"
    )
    if spread_latest is not None and spread_latest > 0 and (real_latest or 0) > 1.8 and (policy_gap_latest or 0) > 0:
        market_state += " 这更像“软着陆/高利率更久”市场：风险资产可以涨，但估值受真实利率压制，黄金和BTC需要美元或实际利率下行来获得更顺的宏观风。"
    elif spread_latest is not None and spread_latest < 0:
        market_state += " 这仍是倒挂阶段：短端政策压力压过长端增长预期，衰退和未来降息预期较重。"
    else:
        market_state += " 市场处在去倒挂后的观察期，重点不是利差是否为正，而是转正后信用和就业是否恶化。"

    watch = [
        "若10年期继续上行、利差继续收窄：偏熊平，风险资产估值压力加大。",
        "若10年期下行、利差重新走阔：偏牛陡，更像增长担忧或降息交易。",
        "若利差转正后高收益债利差和失业数据同步恶化：衰退交易权重上升。",
    ]

    move_text = "—"
    if ten_q is not None and two_q is not None and spread_q is not None:
        move_text = (
            f"{ten_start} 至 {ten_end}：10年期 {ten_q:+.2f}pct，"
            f"倒推2年期 {two_q:+.2f}pct，10Y-2Y {spread_q:+.2f}pct。"
        )

    return {
        "conclusion": regime,
        "drivers": drivers,
        "turningPoints": turning_points,
        "marketState": market_state,
        "watch": watch,
        "moveText": move_text,
    }


def build_china_credit_diagnosis(indicators: dict[str, dict[str, object]]) -> dict[str, object]:
    tsf_12 = _change(indicators, "cn_tsf_stock_yoy", 12)
    m1_12 = _change(indicators, "cn_m1_yoy", 12)
    pmi_6 = _change(indicators, "cn_official_manufacturing_pmi", 6)
    property_12 = _change(indicators, "cn_real_estate_development_investment_yoy", 12)
    sales_12 = _change(indicators, "cn_commercial_housing_sales_area_yoy", 12)
    tsf = _latest(indicators, "cn_tsf_stock_yoy")
    m1 = _latest(indicators, "cn_m1_yoy")
    pmi = _latest(indicators, "cn_official_manufacturing_pmi")
    property_inv = _latest(indicators, "cn_real_estate_development_investment_yoy")
    sales = _latest(indicators, "cn_commercial_housing_sales_area_yoy")

    if pmi is not None and pmi >= 50 and property_inv is not None and property_inv < 0 and tsf is not None and tsf < 9:
        conclusion = "弱修复：制造业在荣枯线附近企稳，但信用扩张不强，地产仍拖累资产负债表。"
    elif pmi is not None and pmi < 50 and property_inv is not None and property_inv < 0:
        conclusion = "需求偏弱：PMI低于荣枯线且地产仍负，复苏还没有形成内生加速。"
    elif tsf_12 is not None and tsf_12 > 0 and m1_12 is not None and m1_12 > 0:
        conclusion = "信用改善观察期：社融和M1边际改善，但还要看地产销售和企业中长期贷款能否跟上。"
    else:
        conclusion = "中国周期信号偏混合，需要同时看信用、PMI和地产销售确认。"

    drivers = []
    if tsf_12 is not None:
        drivers.append(f"近12期社融存量同比变化 {tsf_12:+.2f}pct，决定了实体经济融资背景是扩张还是收缩。")
    if m1_12 is not None:
        drivers.append(f"近12期M1变化 {m1_12:+.2f}pct，反映企业活期资金和交易意愿是否修复。")
    if property_12 is not None:
        drivers.append(f"地产投资近12期变化 {property_12:+.2f}pct，地产仍是判断居民和地方资产负债表的核心拖累项。")
    if sales_12 is not None:
        drivers.append(f"商品房销售面积近12期变化 {sales_12:+.2f}pct，销售先于投资，是地产链能否止血的关键。")
    if not drivers:
        drivers.append("中国组合的驱动需要等待更多月度历史点确认。")

    turning_points = []
    for indicator_id, label, kind in [
        ("cn_tsf_stock_yoy", "社融增速", "min"),
        ("cn_m1_yoy", "M1", "min"),
        ("cn_real_estate_development_investment_yoy", "地产投资", "min"),
    ]:
        rows = indicators.get(indicator_id, {}).get("history") or []
        extreme = _extreme_row(rows if isinstance(rows, list) else [], kind, 60)
        if extreme:
            unit = UNIT_BY_ID.get(indicator_id, "")
            turning_points.append(f"{label}近年低点在 {extreme['date']}，约 {_fmt_number(extreme['value'], unit)}。")

    market_state = (
        f"当前社融{_fmt_number(tsf or 0, '%')}、M1{_fmt_number(m1 or 0, '%')}、PMI{_fmt_number(pmi or 0, '指数点')}、"
        f"地产投资{_fmt_number(property_inv or 0, '%')}、商品房销售{_fmt_number(sales or 0, '%')}。"
    )
    if pmi is not None and pmi >= 50 and property_inv is not None and property_inv < 0:
        market_state += " 这更像政策托底后的结构性修复，而不是地产带动的强复苏；对商品和港股/中概更有利的条件是信用和地产销售同步改善。"
    else:
        market_state += " 当前更适合用作背景温度计，确认复苏需要看到信用、企业融资、地产销售同时向上。"

    move_text = (
        f"近12期：社融 {tsf_12:+.2f}pct，M1 {m1_12:+.2f}pct，PMI {pmi_6:+.2f}点，地产投资 {property_12:+.2f}pct。"
        if all(value is not None for value in [tsf_12, m1_12, pmi_6, property_12])
        else "部分中国月度序列历史点不足，先降低转折判断权重。"
    )
    return {
        "conclusion": conclusion,
        "drivers": drivers,
        "turningPoints": turning_points,
        "marketState": market_state,
        "watch": [
            "若社融和M1上行、PMI站稳50、地产销售跌幅收窄：复苏交易可信度提高。",
            "若只有PMI改善但地产和居民中长期贷款继续弱：更像库存或政策扰动，不是居民资产负债表修复。",
            "若PPI和地产一起改善：商品、周期股和人民币资产弹性会更大。",
        ],
        "moveText": move_text,
    }


def build_inflation_commodities_diagnosis(indicators: dict[str, dict[str, object]]) -> dict[str, object]:
    oil_90, oil_start, oil_end = _series_change_by_days(indicators, "global_brent_oil", 90)
    copper_90, _, _ = _series_change_by_days(indicators, "global_copper_price", 90)
    real_90, _, _ = _series_change_by_days(indicators, "us_10y_real_yield", 90)
    core_pce_12 = _change(indicators, "us_core_pce", 12)
    ppi_12 = _change(indicators, "cn_ppi_yoy", 12)
    oil = _latest(indicators, "global_brent_oil")
    copper = _latest(indicators, "global_copper_price")
    core_pce = _latest(indicators, "us_core_pce")
    eu_core = _latest(indicators, "eu_core_hicp")
    ppi = _latest(indicators, "cn_ppi_yoy")

    if oil_90 is not None and copper_90 is not None and oil_90 > 0 and copper_90 > 0:
        conclusion = "再通胀压力观察：油铜同步上行，市场在给增长/供给约束/通胀风险重新定价。"
    elif copper_90 is not None and copper_90 > 0 and ppi is not None and ppi < 0:
        conclusion = "外强内弱：铜价强但中国PPI弱，商品金融定价强于中国工业传导。"
    elif oil_90 is not None and oil_90 < 0 and copper_90 is not None and copper_90 < 0:
        conclusion = "通胀压力缓和：油铜同步回落，央行宽松约束边际下降。"
    else:
        conclusion = "通胀和商品信号分化，需要拆开看能源、工业需求和核心通胀粘性。"

    drivers = []
    if oil_90 is not None:
        drivers.append(f"{oil_start} 至 {oil_end}，布油变化 {oil_90:+.2f}美元/桶，主要影响能源通胀和通胀预期。")
    if copper_90 is not None:
        drivers.append(f"近3个月铜价变化 {copper_90:+.2f}美元/吨，更偏全球工业需求和金融风险偏好。")
    if core_pce_12 is not None:
        drivers.append(f"美国核心PCE近12期变化 {core_pce_12:+.2f}点，决定美联储宽松空间是否顺畅。")
    if ppi_12 is not None:
        drivers.append(f"中国PPI近12期变化 {ppi_12:+.2f}pct，观察中国工业品价格是否开始向利润修复传导。")
    if real_90 is not None and real_90 > 0:
        drivers.append("实际利率同期上行，会抵消一部分商品和黄金的金融属性支撑。")

    turning_points = []
    for indicator_id, label, kind in [
        ("global_brent_oil", "布油", "max"),
        ("global_copper_price", "铜价", "max"),
        ("cn_ppi_yoy", "中国PPI", "min"),
    ]:
        rows = indicators.get(indicator_id, {}).get("history") or []
        extreme = _extreme_row(rows if isinstance(rows, list) else [], kind, 260)
        if extreme:
            turning_points.append(f"{label}近年{'高点' if kind == 'max' else '低点'}在 {extreme['date']}，约 {_fmt_number(extreme['value'], UNIT_BY_ID.get(indicator_id, ''))}。")

    market_state = (
        f"当前核心PCE{_fmt_number(core_pce or 0, '指数点')}、欧元区核心HICP{_fmt_number(eu_core or 0, '%')}、"
        f"布油{_fmt_number(oil or 0, '美元/桶')}、铜{_fmt_number(copper or 0, '美元/吨')}、中国PPI{_fmt_number(ppi or 0, '%')}。"
    )
    market_state += " 若商品继续强而核心通胀不降，债券和成长估值会承压；若商品回落且核心通胀松动，黄金、BTC和成长股的宏观风会更顺。"

    return {
        "conclusion": conclusion,
        "drivers": drivers,
        "turningPoints": turning_points,
        "marketState": market_state,
        "watch": [
            "油铜一起上、核心通胀不降：偏再通胀，降息空间受限。",
            "铜强、油弱、PPI改善：偏真实需求修复，对工业周期更友好。",
            "油铜一起下、信用利差扩大：增长担忧权重上升。",
        ],
        "moveText": f"近3个月：布油 {oil_90:+.2f}美元/桶，铜 {copper_90:+.2f}美元/吨。" if oil_90 is not None and copper_90 is not None else "商品近3个月变化数据不足。",
    }


def build_risk_credit_diagnosis(indicators: dict[str, dict[str, object]]) -> dict[str, object]:
    spx_90, spx_start, spx_end = _series_change_by_days(indicators, "xasset_sp500", 90)
    vix_90, _, _ = _series_change_by_days(indicators, "xasset_vix", 90)
    hy_90, _, _ = _series_change_by_days(indicators, "us_high_yield_spread", 90)
    move_90, _, _ = _series_change_by_days(indicators, "xasset_move_index", 90)
    spx = _latest(indicators, "xasset_sp500")
    vix = _latest(indicators, "xasset_vix")
    hy = _latest(indicators, "us_high_yield_spread")
    move = _latest(indicators, "xasset_move_index")

    if spx_90 is not None and spx_90 > 0 and hy_90 is not None and hy_90 < 0 and vix is not None and vix < 20:
        conclusion = "风险偏好健康：股票上涨同时信用利差收窄、波动不高，上涨质量较好。"
    elif spx_90 is not None and spx_90 > 0 and hy_90 is not None and hy_90 > 0:
        conclusion = "上涨质量转弱：股票涨但信用利差扩大，市场内部开始分化。"
    elif vix is not None and vix > 25 or hy is not None and hy > 5:
        conclusion = "避险压力上升：波动或信用利差进入压力区，需要降低风险资产结论置信度。"
    else:
        conclusion = "风险环境中性偏稳，暂未看到系统性压力。"

    drivers = []
    if spx_90 is not None:
        drivers.append(f"{spx_start} 至 {spx_end}，标普500变化 {spx_90:+.2f}点，代表风险资产主线。")
    if hy_90 is not None:
        drivers.append(f"高收益债利差近3个月变化 {hy_90:+.2f}pct，信用市场是否背离股票要看它。")
    if vix_90 is not None:
        drivers.append(f"VIX近3个月变化 {vix_90:+.2f}点，衡量权益市场对下跌尾部风险的定价。")
    if move_90 is not None:
        drivers.append(f"美债波动代理近3个月变化 {move_90:+.2f}，利率波动上升会压制跨资产杠杆。")

    turning_points = []
    for indicator_id, label, kind in [
        ("xasset_vix", "VIX", "max"),
        ("us_high_yield_spread", "高收益债利差", "max"),
        ("xasset_sp500", "标普500", "max"),
    ]:
        rows = indicators.get(indicator_id, {}).get("history") or []
        extreme = _extreme_row(rows if isinstance(rows, list) else [], kind, 260)
        if extreme:
            turning_points.append(f"{label}近年高点在 {extreme['date']}，约 {_fmt_number(extreme['value'], UNIT_BY_ID.get(indicator_id, ''))}。")

    market_state = (
        f"当前标普500{_fmt_number(spx or 0, '指数点')}、VIX{_fmt_number(vix or 0, '指数点')}、"
        f"高收益债利差{_fmt_number(hy or 0, '百分点')}、美债波动代理{_fmt_number(move or 0, '年化百分点')}。"
        " 这组用于判断上涨是否有信用和波动配合，而不是只看指数新高。"
    )
    return {
        "conclusion": conclusion,
        "drivers": drivers,
        "turningPoints": turning_points,
        "marketState": market_state,
        "watch": [
            "股票涨、信用利差收窄、VIX低：风险偏好健康。",
            "股票涨、信用利差扩大、VIX抬升：上涨质量变差。",
            "美债波动上升但VIX低：警惕利率波动向权益估值传导。",
        ],
        "moveText": f"近3个月：标普500 {spx_90:+.2f}点，VIX {vix_90:+.2f}点，高收益债利差 {hy_90:+.2f}pct。" if all(value is not None for value in [spx_90, vix_90, hy_90]) else "风险组合近3个月变化数据不足。",
    }


def build_crypto_liquidity_diagnosis(indicators: dict[str, dict[str, object]]) -> dict[str, object]:
    btc_90, btc_start, btc_end = _series_change_by_days(indicators, "xasset_btc_price_trend", 90)
    stable_90, _, _ = _series_change_by_days(indicators, "xasset_stablecoin_supply", 90)
    oi_90, _, _ = _series_change_by_days(indicators, "xasset_crypto_open_interest", 90)
    ethbtc_90, _, _ = _series_change_by_days(indicators, "xasset_eth_btc", 90)
    btc = _latest(indicators, "xasset_btc_price_trend")
    stable = _latest(indicators, "xasset_stablecoin_supply")
    funding = _latest(indicators, "xasset_crypto_funding_rate")
    oi = _latest(indicators, "xasset_crypto_open_interest")
    ethbtc = _latest(indicators, "xasset_eth_btc")

    if btc_90 is not None and btc_90 > 0 and stable_90 is not None and stable_90 > 0 and funding is not None and abs(funding) < 0.0002:
        conclusion = "流动性支撑型上涨：BTC上涨伴随稳定币扩张，合约拥挤度暂不极端。"
    elif btc_90 is not None and btc_90 > 0 and oi_90 is not None and oi_90 > 0 and funding is not None and funding > 0.0002:
        conclusion = "杠杆驱动上涨：价格、OI和资金费率同向上行，后续波动风险更高。"
    elif btc_90 is not None and btc_90 < 0 and stable_90 is not None and stable_90 < 0:
        conclusion = "场内流动性收缩：BTC和稳定币供应同步走弱，加密风险偏好偏弱。"
    else:
        conclusion = "加密信号偏混合，稳定币、OI和资金费率历史点不足时要降低结论权重。"

    drivers = []
    if btc_90 is not None:
        drivers.append(f"{btc_start} 至 {btc_end}，BTC变化 {btc_90:+.2f}美元，代表加密主风险资产方向。")
    if stable_90 is not None:
        drivers.append(f"稳定币供应近3个月变化 {stable_90:+.2f}美元，代表场内美元弹药是否扩张。")
    if oi_90 is not None:
        drivers.append(f"OI代理近3个月变化 {oi_90:+.2f}美元，用来识别上涨是否由杠杆堆出来。")
    if ethbtc_90 is not None:
        drivers.append(f"ETH/BTC近3个月变化 {ethbtc_90:+.4f}，观察风险偏好是否从BTC扩散到更高beta资产。")

    turning_points = []
    for indicator_id, label, kind in [
        ("xasset_btc_price_trend", "BTC", "max"),
        ("xasset_eth_btc", "ETH/BTC", "min"),
    ]:
        rows = indicators.get(indicator_id, {}).get("history") or []
        extreme = _extreme_row(rows if isinstance(rows, list) else [], kind, 260)
        if extreme:
            turning_points.append(f"{label}近年{'高点' if kind == 'max' else '低点'}在 {extreme['date']}，约 {_fmt_number(extreme['value'], UNIT_BY_ID.get(indicator_id, ''))}。")
    if stable_90 is None or oi_90 is None:
        turning_points.append("稳定币/OI/资金费率部分序列历史不足，暂不把单点读数当成趋势拐点。")

    market_state = (
        f"当前BTC{_fmt_number(btc or 0, '美元')}、稳定币供应{_fmt_number(stable or 0, '美元')}、"
        f"资金费率{_fmt_number(funding or 0, '费率')}、OI代理{_fmt_number(oi or 0, '美元')}、ETH/BTC{_fmt_number(ethbtc or 0, 'ETH/BTC')}。"
        " 这组只判断长期背景和拥挤度，不输出具体交易标的。"
    )
    return {
        "conclusion": conclusion,
        "drivers": drivers,
        "turningPoints": turning_points,
        "marketState": market_state,
        "watch": [
            "BTC涨、稳定币涨、资金费率温和：更健康。",
            "BTC涨、OI涨、资金费率高：更拥挤，回撤风险上升。",
            "ETH/BTC止跌回升：风险偏好可能从BTC向山寨/高beta扩散。",
        ],
        "moveText": f"近3个月：BTC {btc_90:+.2f}美元，稳定币 {stable_90:+.2f}美元，ETH/BTC {ethbtc_90:+.4f}。" if all(value is not None for value in [btc_90, stable_90, ethbtc_90]) else "加密部分序列历史点不足，趋势判断降权。",
    }


def build_usd_pressure_diagnosis(indicators: dict[str, dict[str, object]]) -> dict[str, object]:
    dxy_90, dxy_start, dxy_end = _series_change_by_days(indicators, "us_dxy", 90)
    cny_90, _, _ = _series_change_by_days(indicators, "cn_usdcny", 90)
    eur_90, _, _ = _series_change_by_days(indicators, "eu_eurusd", 90)
    jpy_90, _, _ = _series_change_by_days(indicators, "jp_usdjpy", 90)
    dxy = _latest(indicators, "us_dxy")
    cny = _latest(indicators, "cn_usdcny")
    eur = _latest(indicators, "eu_eurusd")
    jpy = _latest(indicators, "jp_usdjpy")

    if dxy_90 is not None and dxy_90 > 0 and cny_90 is not None and cny_90 > 0:
        conclusion = "美元压力上升：美元走强同时人民币贬值，全球美元流动性背景偏紧。"
    elif dxy_90 is not None and dxy_90 < 0 and cny_90 is not None and cny_90 <= 0:
        conclusion = "美元压力缓和：美元回落且人民币稳定，非美资产和加密的宏观背景更友好。"
    elif dxy is not None and dxy > 110:
        conclusion = "美元仍偏强，但需要看人民币、欧元和日元是否同步承压来判断是否系统性紧张。"
    else:
        conclusion = "外汇压力中性，美元不是当前唯一主线。"

    drivers = []
    if dxy_90 is not None:
        drivers.append(f"{dxy_start} 至 {dxy_end}，美元指数代理变化 {dxy_90:+.2f}点，是全球美元流动性的总开关。")
    if cny_90 is not None:
        drivers.append(f"美元兑人民币近3个月变化 {cny_90:+.4f}，观察中国外部压力和人民币资产风险偏好。")
    if eur_90 is not None:
        drivers.append(f"欧元兑美元近3个月变化 {eur_90:+.4f}，帮助判断美元强弱是否来自欧美利差/增长差。")
    if jpy_90 is not None:
        drivers.append(f"美元兑日元近3个月变化 {jpy_90:+.2f}，日元弱常提示全球套息和利差交易仍强。")

    turning_points = []
    for indicator_id, label, kind in [
        ("us_dxy", "美元指数代理", "max"),
        ("cn_usdcny", "美元兑人民币", "max"),
        ("jp_usdjpy", "美元兑日元", "max"),
    ]:
        rows = indicators.get(indicator_id, {}).get("history") or []
        extreme = _extreme_row(rows if isinstance(rows, list) else [], kind, 260)
        if extreme:
            turning_points.append(f"{label}近年高点在 {extreme['date']}，约 {_fmt_number(extreme['value'], UNIT_BY_ID.get(indicator_id, ''))}。")

    market_state = (
        f"当前美元指数代理{_fmt_number(dxy or 0, '指数点')}、美元兑人民币{_fmt_number(cny or 0, '人民币/美元')}、"
        f"欧元兑美元{_fmt_number(eur or 0, '美元/欧元')}、美元兑日元{_fmt_number(jpy or 0, '日元/美元')}。"
        " 强美元会抬高全球融资压力，通常压制黄金、新兴市场和加密的估值弹性。"
    )
    return {
        "conclusion": conclusion,
        "drivers": drivers,
        "turningPoints": turning_points,
        "marketState": market_state,
        "watch": [
            "美元上、人民币和日元同步弱：全球美元压力偏紧。",
            "美元下、人民币稳定、铜价强：非美风险资产背景改善。",
            "美元强但信用利差不扩：更像利差/增长差，不一定是危机模式。",
        ],
        "moveText": f"近3个月：美元指数 {dxy_90:+.2f}点，USDCNY {cny_90:+.4f}，EURUSD {eur_90:+.4f}，USDJPY {jpy_90:+.2f}。" if all(value is not None for value in [dxy_90, cny_90, eur_90, jpy_90]) else "外汇组合近3个月变化数据不足。",
    }


def build_combo_insights(indicators: list[dict[str, object]]) -> list[dict[str, object]]:
    by_id = _indicator_map(indicators)
    rate_diagnosis = build_us_rate_diagnosis(by_id)
    china_diagnosis = build_china_credit_diagnosis(by_id)
    inflation_diagnosis = build_inflation_commodities_diagnosis(by_id)
    risk_diagnosis = build_risk_credit_diagnosis(by_id)
    crypto_diagnosis = build_crypto_liquidity_diagnosis(by_id)
    fx_diagnosis = build_usd_pressure_diagnosis(by_id)

    fed_change = _change(by_id, "us_fed_funds_rate", 12)
    ten_year_change = _change(by_id, "us_10y_treasury_yield", 12)
    real_yield = _latest(by_id, "us_10y_real_yield")
    curve = _latest(by_id, "us_2y10y_spread")
    policy_gap = _latest(by_id, "us_policy_rate_expectations")
    rate_result = (
        f"联邦基金利率 {_fmt_metric(by_id, 'us_fed_funds_rate')}，"
        f"10年美债 {_fmt_metric(by_id, 'us_10y_treasury_yield')}，"
        f"10Y-2Y {_fmt_metric(by_id, 'us_2y10y_spread')}，"
        f"实际利率 {_fmt_metric(by_id, 'us_10y_real_yield')}。"
        f" 历史趋势：政策利率{_level_phrase(by_id, 'us_fed_funds_rate')}，"
        f"{_trend_phrase(by_id, 'us_fed_funds_rate', 12)}；"
        f"10年期{_level_phrase(by_id, 'us_10y_treasury_yield')}，"
        f"{_trend_phrase(by_id, 'us_10y_treasury_yield', 52, '近52期')}；"
        f"实际利率{_level_phrase(by_id, 'us_10y_real_yield')}。"
    )
    if fed_change is not None and fed_change < -0.2 and real_yield is not None and real_yield > 1.5:
        rate_result += " 推测：政策已从最紧阶段松动，但长端和实际利率仍偏高，市场还没有完全进入低利率叙事。"
    elif curve is not None and curve < 0:
        rate_result += " 推测：短端政策压力仍压过长端增长预期，衰退/降息预期更重。"
    elif policy_gap is not None and policy_gap > 0:
        rate_result += " 推测：2年期仍高于当前政策利率，市场对未来利率路径并不单纯押注快速宽松。"
    else:
        rate_result += " 推测：利率组合偏中性，后续要看10年期和实际利率是否一起下行。"
    if ten_year_change is not None:
        rate_result += f" 短期看，近12期10年期变化 {ten_year_change:+.2f} 个百分点。"

    cn_pmi = _latest(by_id, "cn_official_manufacturing_pmi")
    cn_property = _latest(by_id, "cn_real_estate_development_investment_yoy")
    china_result = (
        f"社融存量同比 {_fmt_metric(by_id, 'cn_tsf_stock_yoy')}，"
        f"M1 {_fmt_metric(by_id, 'cn_m1_yoy')}，"
        f"官方制造业PMI {_fmt_metric(by_id, 'cn_official_manufacturing_pmi')}，"
        f"地产投资 {_fmt_metric(by_id, 'cn_real_estate_development_investment_yoy')}。"
        f" 历史趋势：社融增速{_level_phrase(by_id, 'cn_tsf_stock_yoy')}，"
        f"{_trend_phrase(by_id, 'cn_tsf_stock_yoy', 12)}；"
        f"M1{_level_phrase(by_id, 'cn_m1_yoy')}，"
        f"{_trend_phrase(by_id, 'cn_m1_yoy', 12)}；"
        f"地产投资{_level_phrase(by_id, 'cn_real_estate_development_investment_yoy')}。"
    )
    if cn_pmi is not None and cn_pmi >= 50 and cn_property is not None and cn_property < 0:
        china_result += " 推测：制造业有企稳线索，但地产仍是主要拖累，更像弱修复，不是全面强复苏。"
    elif cn_pmi is not None and cn_pmi < 50:
        china_result += " 推测：需求和生产仍偏弱，需要社融、M1和地产销售一起改善来确认复苏。"
    else:
        china_result += " 推测：中国组合需要同时看信用扩张和地产销售，单个PMI不够。"

    copper_change = _change(by_id, "global_copper_price", 12)
    ppi = _latest(by_id, "cn_ppi_yoy")
    inflation_result = (
        f"美国核心PCE指数 {_fmt_metric(by_id, 'us_core_pce')}，"
        f"欧元区核心HICP {_fmt_metric(by_id, 'eu_core_hicp')}，"
        f"布油 {_fmt_metric(by_id, 'global_brent_oil')}，"
        f"铜价 {_fmt_metric(by_id, 'global_copper_price')}，"
        f"中国PPI {_fmt_metric(by_id, 'cn_ppi_yoy')}。"
        f" 历史趋势：布油{_level_phrase(by_id, 'global_brent_oil')}，"
        f"{_trend_phrase(by_id, 'global_brent_oil', 52, '近52期')}；"
        f"铜价{_level_phrase(by_id, 'global_copper_price')}，"
        f"{_trend_phrase(by_id, 'global_copper_price', 12)}；"
        f"中国PPI{_level_phrase(by_id, 'cn_ppi_yoy')}。"
    )
    if copper_change is not None and copper_change > 0 and ppi is not None and ppi < 0:
        inflation_result += " 推测：全球商品价格强于中国出厂价格，可能是海外、供给或金融定价更强；中国工业利润传导仍需验证。"
    elif ppi is not None and ppi < 0:
        inflation_result += " 推测：中国工业品仍偏通缩，全球再通胀需要油铜和PPI共同确认。"
    else:
        inflation_result += " 推测：若油铜上行且核心通胀不降，央行宽松空间会受约束。"

    vix = _latest(by_id, "xasset_vix")
    hy_spread = _latest(by_id, "us_high_yield_spread")
    risk_result = (
        f"VIX {_fmt_metric(by_id, 'xasset_vix')}，"
        f"美债波动代理 {_fmt_metric(by_id, 'xasset_move_index')}，"
        f"高收益债利差 {_fmt_metric(by_id, 'us_high_yield_spread')}，"
        f"HYG {_fmt_metric(by_id, 'xasset_hyg')}，"
        f"标普500 {_fmt_metric(by_id, 'xasset_sp500')}。"
        f" 历史趋势：VIX{_level_phrase(by_id, 'xasset_vix')}，"
        f"{_trend_phrase(by_id, 'xasset_vix', 52, '近52期')}；"
        f"高收益债利差{_level_phrase(by_id, 'us_high_yield_spread')}，"
        f"{_trend_phrase(by_id, 'us_high_yield_spread', 52, '近52期')}；"
        f"标普500{_level_phrase(by_id, 'xasset_sp500')}。"
    )
    if vix is not None and vix < 20 and hy_spread is not None and hy_spread < 4:
        risk_result += " 推测：信用和波动暂未显示系统性恐慌，风险资产上涨的质量相对更健康。"
    else:
        risk_result += " 推测：如果股票上涨但VIX、债券波动或信用利差同步抬升，需要警惕风险偏好质量变差。"

    funding = _latest(by_id, "xasset_crypto_funding_rate")
    crypto_result = (
        f"BTC {_fmt_metric(by_id, 'xasset_btc_price_trend')}，"
        f"稳定币供应 {_fmt_metric(by_id, 'xasset_stablecoin_supply')}，"
        f"资金费率 {_fmt_metric(by_id, 'xasset_crypto_funding_rate')}，"
        f"OI代理 {_fmt_metric(by_id, 'xasset_crypto_open_interest')}，"
        f"ETH/BTC {_fmt_metric(by_id, 'xasset_eth_btc')}。"
        f" 历史趋势：BTC{_level_phrase(by_id, 'xasset_btc_price_trend')}，"
        f"{_trend_phrase(by_id, 'xasset_btc_price_trend', 52, '近52期')}；"
        f"ETH/BTC{_level_phrase(by_id, 'xasset_eth_btc')}，"
        f"{_trend_phrase(by_id, 'xasset_eth_btc', 52, '近52期')}；"
        f"稳定币/OI/资金费率部分历史点不足，要降低结论权重。"
    )
    if funding is not None and abs(funding) < 0.0001:
        crypto_result += " 推测：当前合约拥挤度读数不极端，但稳定币、资金费率和OI部分为单点或代理数据，只能做背景，不做交易信号。"
    else:
        crypto_result += " 推测：需要重点看稳定币扩张是否伴随资金费率/OI过热；过热时上涨质量会变差。"

    dxy = _latest(by_id, "us_dxy")
    usdcny = _latest(by_id, "cn_usdcny")
    fx_result = (
        f"美元指数代理 {_fmt_metric(by_id, 'us_dxy')}，"
        f"美元兑人民币 {_fmt_metric(by_id, 'cn_usdcny')}，"
        f"欧元兑美元 {_fmt_metric(by_id, 'eu_eurusd')}，"
        f"美元兑日元 {_fmt_metric(by_id, 'jp_usdjpy')}。"
        f" 历史趋势：美元指数代理{_level_phrase(by_id, 'us_dxy')}，"
        f"{_trend_phrase(by_id, 'us_dxy', 52, '近52期')}；"
        f"美元兑人民币{_level_phrase(by_id, 'cn_usdcny')}，"
        f"{_trend_phrase(by_id, 'cn_usdcny', 52, '近52期')}；"
        f"美元兑日元{_level_phrase(by_id, 'jp_usdjpy')}。"
    )
    if dxy is not None and dxy > 110 and usdcny is not None and usdcny < 7:
        fx_result += " 推测：美元整体仍偏强，但人民币没有明显失控贬值，外部压力存在但不是单边危机叙事。"
    elif dxy is not None and dxy > 110:
        fx_result += " 推测：强美元通常压制黄金、新兴市场和加密的估值弹性。"
    else:
        fx_result += " 推测：美元若走弱，会给非美资产、商品和加密流动性带来更友好的背景。"

    return [
        {
            "id": "us_rate_regime",
            "title": "美国利率曲线",
            "theme": "利率、美元和风险资产折现率",
            "thesis": "2年期更像政策预期，10年期由长期增长、通胀预期和期限溢价共同决定；10Y-2Y的形态变化要先判断是哪一端在驱动。",
            "result": rate_result,
            "conclusion": rate_diagnosis["conclusion"],
            "drivers": rate_diagnosis["drivers"],
            "turningPoints": rate_diagnosis["turningPoints"],
            "marketState": rate_diagnosis["marketState"],
            "watch": rate_diagnosis["watch"],
            "moveText": rate_diagnosis["moveText"],
            "tone": "watch",
            "indicatorIds": [
                "us_fed_funds_rate",
                "us_policy_rate_expectations",
                "us_10y_treasury_yield",
                "us_10y_real_yield",
                "us_2y10y_spread",
            ],
        },
        {
            "id": "china_credit_property",
            "title": "中国信用与地产",
            "theme": "信用扩张、制造业和地产拖累",
            "thesis": "社融和M1看钱有没有进入实体，PMI看生产景气，地产投资和销售看资产负债表压力。",
            "result": china_result,
            "conclusion": china_diagnosis["conclusion"],
            "drivers": china_diagnosis["drivers"],
            "turningPoints": china_diagnosis["turningPoints"],
            "marketState": china_diagnosis["marketState"],
            "watch": china_diagnosis["watch"],
            "moveText": china_diagnosis["moveText"],
            "tone": "watch",
            "indicatorIds": [
                "cn_tsf_stock_yoy",
                "cn_tsf_flow",
                "cn_m1_yoy",
                "cn_official_manufacturing_pmi",
                "cn_real_estate_development_investment_yoy",
                "cn_commercial_housing_sales_area_yoy",
            ],
        },
        {
            "id": "inflation_commodities",
            "title": "通胀与商品",
            "theme": "核心通胀、油铜和工业品价格",
            "thesis": "油和铜代表通胀/工业需求的边际变化，核心通胀决定央行宽松空间，PPI看中国周期传导。",
            "result": inflation_result,
            "conclusion": inflation_diagnosis["conclusion"],
            "drivers": inflation_diagnosis["drivers"],
            "turningPoints": inflation_diagnosis["turningPoints"],
            "marketState": inflation_diagnosis["marketState"],
            "watch": inflation_diagnosis["watch"],
            "moveText": inflation_diagnosis["moveText"],
            "tone": "watch",
            "indicatorIds": [
                "us_core_pce",
                "eu_core_hicp",
                "global_brent_oil",
                "global_copper_price",
                "cn_ppi_yoy",
            ],
        },
        {
            "id": "risk_credit_vol",
            "title": "风险与信用",
            "theme": "股票上涨质量、信用风险和波动压力",
            "thesis": "风险资产是否健康，不只看股指上涨，也要看VIX、债券波动和高收益债利差有没有同步恶化。",
            "result": risk_result,
            "conclusion": risk_diagnosis["conclusion"],
            "drivers": risk_diagnosis["drivers"],
            "turningPoints": risk_diagnosis["turningPoints"],
            "marketState": risk_diagnosis["marketState"],
            "watch": risk_diagnosis["watch"],
            "moveText": risk_diagnosis["moveText"],
            "tone": "support",
            "indicatorIds": [
                "xasset_vix",
                "xasset_move_index",
                "us_high_yield_spread",
                "xasset_hyg",
                "xasset_sp500",
                "xasset_nasdaq100",
            ],
        },
        {
            "id": "crypto_liquidity_crowding",
            "title": "加密流动性与拥挤度",
            "theme": "稳定币、BTC、ETH/BTC、资金费率和OI",
            "thesis": "长期背景看场内美元流动性和风险偏好扩散，短期拥挤看资金费率和未平仓合约。",
            "result": crypto_result,
            "conclusion": crypto_diagnosis["conclusion"],
            "drivers": crypto_diagnosis["drivers"],
            "turningPoints": crypto_diagnosis["turningPoints"],
            "marketState": crypto_diagnosis["marketState"],
            "watch": crypto_diagnosis["watch"],
            "moveText": crypto_diagnosis["moveText"],
            "tone": "caution",
            "indicatorIds": [
                "xasset_btc_price_trend",
                "xasset_stablecoin_supply",
                "xasset_crypto_funding_rate",
                "xasset_crypto_open_interest",
                "xasset_eth_btc",
                "xasset_btc_dominance",
            ],
        },
        {
            "id": "usd_external_pressure",
            "title": "美元与外部压力",
            "theme": "强美元、人民币、欧元和日元",
            "thesis": "美元越强，全球美元流动性越紧；人民币、欧元和日元帮助判断压力是局部还是全球性的。",
            "result": fx_result,
            "conclusion": fx_diagnosis["conclusion"],
            "drivers": fx_diagnosis["drivers"],
            "turningPoints": fx_diagnosis["turningPoints"],
            "marketState": fx_diagnosis["marketState"],
            "watch": fx_diagnosis["watch"],
            "moveText": fx_diagnosis["moveText"],
            "tone": "watch",
            "indicatorIds": [
                "us_dxy",
                "cn_usdcny",
                "eu_eurusd",
                "jp_usdjpy",
                "global_copper_price",
            ],
        },
    ]


def build_html(payload: dict[str, object]) -> str:
    payload_json = json.dumps(payload, ensure_ascii=False, separators=(",", ":"))
    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>宏观机会雷达 Dashboard</title>
  <style>
    :root {{
      --ink: #17202a;
      --muted: #667085;
      --line: #d8dee8;
      --paper: #fbfcfe;
      --panel: #ffffff;
      --navy: #17324d;
      --teal: #1d7f73;
      --red: #b54747;
      --amber: #a86913;
      --blue: #3265a8;
      --green: #27714f;
      --purple: #7056a7;
      --shadow: 0 1px 2px rgba(23, 32, 42, 0.08);
    }}

    * {{ box-sizing: border-box; }}

    body {{
      margin: 0;
      background: var(--paper);
      color: var(--ink);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.45;
    }}

    header {{
      border-bottom: 1px solid var(--line);
      background: #ffffff;
    }}

    .page {{
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 28px;
    }}

    .topbar {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      min-height: 72px;
    }}

    h1 {{
      margin: 0;
      font-size: 26px;
      letter-spacing: 0;
      color: var(--navy);
    }}

    .subtitle {{
      margin: 4px 0 0;
      color: var(--muted);
      font-size: 13px;
    }}

    .status-line {{
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-end;
      color: var(--muted);
      font-size: 12px;
    }}

    .pill {{
      border: 1px solid var(--line);
      background: #fff;
      border-radius: 999px;
      padding: 5px 9px;
      white-space: nowrap;
    }}

    .pill.ok {{ color: var(--green); border-color: rgba(39, 113, 79, 0.35); }}
    .pill.proxy {{ color: var(--amber); border-color: rgba(168, 105, 19, 0.35); }}

    .toolbar {{
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      border-top: 1px solid #eef1f5;
    }}

    .tabs, .segmented {{
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }}

    button {{
      font: inherit;
      border: 1px solid var(--line);
      background: #fff;
      color: var(--ink);
      min-height: 32px;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
    }}

    button.active {{
      background: var(--navy);
      border-color: var(--navy);
      color: #fff;
    }}

    button:hover {{ border-color: var(--navy); }}

    input {{
      width: min(360px, 100%);
      min-height: 34px;
      border: 1px solid var(--line);
      border-radius: 6px;
      padding: 7px 10px;
      background: #fff;
      color: var(--ink);
    }}

    main {{ padding: 22px 0 48px; }}

    .report-grid {{
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 18px;
      align-items: start;
    }}

    .report-grid > * {{
      min-width: 0;
    }}

    .section {{
      background: #fff;
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
      margin-bottom: 18px;
      min-width: 0;
    }}

    .section-head {{
      padding: 16px 18px 12px;
      border-bottom: 1px solid #eef1f5;
      display: flex;
      justify-content: space-between;
      gap: 18px;
      align-items: flex-start;
    }}

    h2 {{
      margin: 0;
      color: var(--navy);
      font-size: 18px;
      letter-spacing: 0;
    }}

    .section-note {{
      margin: 3px 0 0;
      color: var(--muted);
      font-size: 12px;
    }}

    .kpi-strip {{
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      border-bottom: 1px solid var(--line);
    }}

    .kpi {{
      padding: 14px 16px;
      border-right: 1px solid #eef1f5;
      min-width: 0;
    }}

    .kpi:last-child {{ border-right: 0; }}

    .kpi-label {{
      color: var(--muted);
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    .kpi-value {{
      margin-top: 6px;
      font-size: 24px;
      color: var(--navy);
      font-weight: 700;
    }}

    .kpi-foot {{
      margin-top: 4px;
      color: var(--muted);
      font-size: 12px;
    }}

    .combo-grid {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      padding: 14px;
    }}

    .combo-card {{
      border: 1px solid #e4e8ef;
      border-radius: 8px;
      padding: 13px 14px;
      background: #fff;
      min-width: 0;
    }}

    .combo-card.support {{ border-left: 4px solid var(--green); }}
    .combo-card.watch {{ border-left: 4px solid var(--blue); }}
    .combo-card.caution {{ border-left: 4px solid var(--amber); }}

    .combo-title {{
      color: var(--navy);
      font-weight: 800;
      font-size: 15px;
    }}

    .combo-theme {{
      color: var(--muted);
      font-size: 12px;
      margin-top: 2px;
    }}

    .combo-text {{
      margin-top: 8px;
      color: #2f3b4a;
      font-size: 13px;
    }}

    .combo-conclusion {{
      margin-top: 9px;
      color: #17202a;
      font-weight: 800;
      font-size: 14px;
      line-height: 1.45;
    }}

    .combo-brief {{
      margin-top: 7px;
      color: #2f3b4a;
      font-size: 13px;
      line-height: 1.55;
    }}

    .combo-block {{
      margin-top: 9px;
      padding-top: 8px;
      border-top: 1px solid #edf0f4;
    }}

    .combo-block-title {{
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0;
      margin-bottom: 4px;
    }}

    .combo-list {{
      margin: 0;
      padding-left: 18px;
      color: #344054;
      font-size: 12px;
      line-height: 1.55;
    }}

    .combo-list li {{ margin: 2px 0; }}

    .combo-thesis {{
      margin-top: 8px;
      color: var(--muted);
      font-size: 12px;
    }}

    .combo-chips {{
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 8px;
    }}

    .combo-chip {{
      border: 1px solid #d8dee8;
      background: #f8fafc;
      color: #405066;
      border-radius: 999px;
      padding: 2px 7px;
      font-size: 11px;
      white-space: nowrap;
    }}

    .table-wrap {{ overflow-x: auto; }}

    table {{
      width: 100%;
      border-collapse: collapse;
      min-width: 880px;
    }}

    th, td {{
      padding: 9px 10px;
      border-bottom: 1px solid #edf0f4;
      text-align: left;
      vertical-align: middle;
      white-space: nowrap;
    }}

    th {{
      color: var(--muted);
      font-size: 12px;
      font-weight: 700;
      background: #f8fafc;
    }}

    td.name {{
      min-width: 230px;
      white-space: normal;
    }}

    .metric-name {{
      display: flex;
      gap: 8px;
      align-items: baseline;
    }}

    .priority {{
      color: var(--muted);
      font-size: 12px;
      min-width: 22px;
    }}

    .value {{
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      color: var(--navy);
    }}

    .change.pos {{ color: var(--green); }}
    .change.neg {{ color: var(--red); }}
    .change.flat {{ color: var(--muted); }}

    .tag {{
      display: inline-flex;
      align-items: center;
      min-height: 22px;
      padding: 2px 7px;
      border-radius: 999px;
      font-size: 11px;
      border: 1px solid var(--line);
      color: var(--muted);
      background: #fff;
    }}

    .tag.proxy {{
      color: var(--amber);
      border-color: rgba(168, 105, 19, 0.35);
      background: #fffaf0;
    }}

    .spark {{
      width: 150px;
      height: 38px;
      display: block;
    }}

    .cards {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      padding: 14px;
      min-width: 0;
    }}

    .metric-card {{
      border: 1px solid #e4e8ef;
      border-radius: 8px;
      background: #fff;
      padding: 12px;
      min-height: 184px;
      width: 100%;
      min-width: 0;
      white-space: normal;
      text-align: left;
      display: grid;
      grid-template-rows: auto auto 1fr auto;
      gap: 8px;
    }}

    .card-top {{
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: flex-start;
    }}

    .card-title {{
      font-weight: 700;
      color: var(--navy);
      overflow-wrap: anywhere;
    }}

    .english-name {{
      display: block;
      color: var(--muted);
      font-size: 12px;
      margin-top: 2px;
      overflow-wrap: anywhere;
    }}

    .card-meta {{
      color: var(--muted);
      font-size: 12px;
      overflow-wrap: anywhere;
    }}

    .big-chart {{
      width: 100%;
      height: 78px;
      display: block;
    }}

    .region-block {{
      border-top: 1px solid var(--line);
    }}

    .region-block:first-child {{ border-top: 0; }}

    .region-title {{
      padding: 13px 18px;
      background: #f8fafc;
      color: var(--navy);
      font-weight: 700;
      display: flex;
      justify-content: space-between;
    }}

    .footnote {{
      color: var(--muted);
      padding: 12px 18px 16px;
      font-size: 12px;
    }}

    .detail-panel {{
      position: sticky;
      top: 12px;
      max-height: calc(100vh - 24px);
      display: flex;
      flex-direction: column;
    }}

    .detail-body {{
      padding: 16px 18px 18px;
      overflow-y: auto;
      min-height: 0;
    }}

    .detail-panel .section-head {{
      flex: 0 0 auto;
    }}

    .detail-title {{
      margin: 0 0 4px;
      color: var(--navy);
      font-size: 18px;
    }}

    .detail-chart-wrap {{
      position: relative;
      margin: 14px 0;
    }}

    .detail-chart {{
      width: 100%;
      height: 180px;
      border: 1px solid #edf0f4;
      background: #fbfcfe;
      display: block;
    }}

    .axis-label {{
      fill: #667085;
      font-size: 11px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    }}

    .grid-line {{
      stroke: #e4e8ef;
      stroke-width: 1;
    }}

    .zero-line {{
      stroke: #9aa7b8;
      stroke-width: 1.6;
      stroke-dasharray: 4 3;
    }}

    .axis-stroke {{
      stroke: #cfd6e2;
      stroke-width: 1;
    }}

    .chart-tooltip {{
      position: absolute;
      display: none;
      min-width: 150px;
      pointer-events: none;
      border: 1px solid #d8dee8;
      background: #ffffff;
      box-shadow: 0 8px 20px rgba(23, 32, 42, 0.12);
      border-radius: 6px;
      padding: 8px 10px;
      font-size: 12px;
      color: var(--ink);
      z-index: 3;
    }}

    .chart-tooltip strong {{
      display: block;
      color: var(--navy);
      font-size: 13px;
      margin-bottom: 2px;
    }}

    .facts {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }}

    .fact {{
      border-top: 1px solid #edf0f4;
      padding-top: 9px;
    }}

    .fact-label {{
      color: var(--muted);
      font-size: 12px;
    }}

    .fact-value {{
      margin-top: 2px;
      font-weight: 700;
      color: var(--navy);
      word-break: break-word;
    }}

    .description {{
      margin: 10px 0 0;
      color: var(--muted);
      font-size: 13px;
    }}

    .impact {{
      margin: 10px 0 0;
      border-left: 3px solid var(--teal);
      background: #f2fbf8;
      padding: 9px 12px;
      color: #195a50;
      font-size: 12px;
    }}

    .beginner-guide {{
      margin: 10px 0 0;
      border-left: 3px solid var(--blue);
      background: #f5f8ff;
      padding: 10px 12px;
      color: #263f66;
      font-size: 13px;
      line-height: 1.65;
    }}

    .beginner-guide strong {{
      display: block;
      color: var(--navy);
      margin-bottom: 3px;
    }}

    .nearby-combos {{
      margin-top: 12px;
      border: 1px solid #e4e8ef;
      background: #fbfcfe;
      padding: 10px 12px;
      font-size: 12px;
    }}

    .nearby-combos-title {{
      color: var(--navy);
      font-weight: 800;
      margin-bottom: 6px;
    }}

    .nearby-combo {{
      padding-top: 8px;
      margin-top: 8px;
      border-top: 1px solid #edf0f4;
    }}

    .nearby-combo:first-of-type {{
      padding-top: 0;
      margin-top: 0;
      border-top: 0;
    }}

    .nearby-combo strong {{
      color: var(--navy);
    }}

    .caveat {{
      margin-top: 14px;
      border-left: 3px solid var(--amber);
      background: #fffaf0;
      padding: 10px 12px;
      color: #6f4b12;
      font-size: 12px;
    }}

    .empty {{
      padding: 24px;
      color: var(--muted);
    }}

    @media (max-width: 1080px) {{
      .report-grid {{ grid-template-columns: 1fr; }}
      .detail-panel {{ position: static; max-height: none; display: block; }}
      .detail-body {{ overflow-y: visible; }}
      .kpi-strip {{ grid-template-columns: repeat(2, minmax(0, 1fr)); }}
    }}

    @media (max-width: 720px) {{
      .page {{ padding: 0 14px; }}
      .topbar {{ align-items: flex-start; flex-direction: column; padding: 16px 0; }}
      .toolbar {{ align-items: flex-start; flex-direction: column; }}
      .cards {{ grid-template-columns: 1fr; }}
      .combo-grid {{ grid-template-columns: 1fr; }}
      .kpi-strip {{ grid-template-columns: 1fr; }}
      h1 {{ font-size: 22px; }}
      table {{ min-width: 760px; }}
    }}
  </style>
</head>
<body>
  <header>
    <div class="page">
      <div class="topbar">
        <div>
          <h1>宏观机会雷达 Dashboard</h1>
          <p class="subtitle">学习型宏观背景面板，按重要性、地区和频率观察长期机会，不输出交易信号。</p>
        </div>
        <div class="status-line" id="statusLine"></div>
      </div>
      <div class="toolbar">
        <div class="tabs" id="regionTabs"></div>
        <div class="segmented" id="frequencyTabs"></div>
        <input id="searchInput" type="search" placeholder="搜索指标、主题、地区或数据源" />
      </div>
    </div>
  </header>

  <main class="page">
    <section class="section">
      <div class="section-head">
        <div>
          <h2>执行摘要</h2>
          <p class="section-note">优先展示利率、美元、中国信用、全球增长、风险波动和加密流动性。</p>
        </div>
      </div>
      <div class="kpi-strip" id="kpiStrip"></div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <h2>组合推测</h2>
          <p class="section-note">把几类指标放在一起读：先看结论，再看驱动、转折点和“为什么”；用于学习宏观叙事，不构成具体标的买卖建议。</p>
        </div>
      </div>
      <div class="combo-grid" id="comboGrid"></div>
    </section>

    <div class="report-grid">
      <div>
        <section class="section">
          <div class="section-head">
            <div>
              <h2>核心观察清单</h2>
              <p class="section-note">按优先级排序；周频看价格和利率，月频看宏观趋势，季频看增长和盈利。</p>
            </div>
          </div>
          <div class="cards" id="coreCards"></div>
        </section>

        <section class="section">
          <div class="section-head">
            <div>
              <h2>指标矩阵</h2>
              <p class="section-note">投行报告式矩阵：最新值、趋势变化、历史分位、频率和代理口径。</p>
            </div>
          </div>
          <div id="matrix"></div>
        </section>
      </div>

      <aside class="section detail-panel">
        <div class="section-head">
          <div>
            <h2>指标详情</h2>
            <p class="section-note">点击任一指标查看趋势、口径和数据源。</p>
          </div>
        </div>
        <div class="detail-body" id="detailPanel"></div>
      </aside>
    </div>
  </main>

  <script id="macro-data" type="application/json">{payload_json}</script>
  <script>
    const data = JSON.parse(document.getElementById('macro-data').textContent);
    const indicators = data.indicators;
    const combos = data.combos || [];
    const coreIds = data.coreIds;
    const regionOrder = data.regionOrder;
    const state = {{ region: 'All', frequency: 'recommended', query: '', selected: coreIds[0] }};

    const regionLabels = {{ All: '全部', US: '美国', China: '中国', Europe: '欧洲', Japan: '日本', Global: '全球', CrossAsset: '跨资产' }};
    const frequencyLabels = {{ recommended: '推荐频率', week: '周', month: '月', quarter: '季', year: '年' }};

    function fmt(value) {{
      if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
      const n = Number(value);
      const abs = Math.abs(n);
      if (abs >= 1e12) return (n / 1e12).toFixed(2) + 'T';
      if (abs >= 1e9) return (n / 1e9).toFixed(2) + 'B';
      if (abs >= 1e6) return (n / 1e6).toFixed(2) + 'M';
      if (abs >= 100) return n.toFixed(1);
      if (abs >= 10) return n.toFixed(2);
      if (abs >= 1) return n.toFixed(2);
      return n.toFixed(4);
    }}

    function fmtWithUnit(value, unit) {{
      const text = fmt(value);
      if (text === '—') return text;
      if (!unit || unit === '数值') return text;
      if (unit === '%') return text + '%';
      return text + ' ' + unit;
    }}

    function esc(value) {{
      return String(value ?? '').replace(/[&<>"']/g, ch => ({{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}}[ch]));
    }}

    function parseDate(d) {{ return new Date(d + 'T00:00:00Z'); }}

    function periodKey(date, freq) {{
      const d = parseDate(date);
      const y = d.getUTCFullYear();
      const m = d.getUTCMonth() + 1;
      if (freq === 'year') return String(y);
      if (freq === 'quarter') return `${{y}}-Q${{Math.floor((m - 1) / 3) + 1}}`;
      if (freq === 'month') return `${{y}}-${{String(m).padStart(2, '0')}}`;
      if (freq === 'week') {{
        const copy = new Date(Date.UTC(y, d.getUTCMonth(), d.getUTCDate()));
        const day = copy.getUTCDay() || 7;
        copy.setUTCDate(copy.getUTCDate() + 4 - day);
        const yearStart = new Date(Date.UTC(copy.getUTCFullYear(), 0, 1));
        const week = Math.ceil((((copy - yearStart) / 86400000) + 1) / 7);
        return `${{copy.getUTCFullYear()}}-W${{String(week).padStart(2, '0')}}`;
      }}
      return date;
    }}

    function aggregate(history, freq) {{
      if (!history || !history.length) return [];
      if (!freq || freq === 'recommended') return history;
      const map = new Map();
      history.forEach(row => map.set(periodKey(row.date, freq), row));
      return Array.from(map.values());
    }}

    function seriesFor(item) {{
      const freq = state.frequency === 'recommended' ? item.displayFrequency : state.frequency;
      return aggregate(item.history || [], freq);
    }}

    function changeSince(rows, periods) {{
      if (!rows || rows.length < 2) return null;
      const latest = rows[rows.length - 1].value;
      const prev = rows[Math.max(0, rows.length - 1 - periods)].value;
      if (latest === undefined || prev === undefined) return null;
      return latest - prev;
    }}

    function percentile(rows) {{
      if (!rows || rows.length < 5) return null;
      const latest = Number(rows[rows.length - 1].value);
      const vals = rows.map(r => Number(r.value)).filter(Number.isFinite).sort((a, b) => a - b);
      const rank = vals.filter(v => v <= latest).length;
      return rank / vals.length * 100;
    }}

    function changeClass(v) {{
      if (v === null || Math.abs(v) < 1e-9) return 'flat';
      return v > 0 ? 'pos' : 'neg';
    }}

    function sparkline(rows, width = 150, height = 38, color = '#3265a8', showAxes = false) {{
      const vals = rows.map(r => Number(r.value)).filter(Number.isFinite);
      if (vals.length < 2) return `<svg class="spark" viewBox="0 0 ${{width}} ${{height}}"></svg>`;
      const rawMin = Math.min(...vals);
      const rawMax = Math.max(...vals);
      const rawSpan = rawMax - rawMin || 1;
      const min = rawMin - rawSpan * 0.06;
      const max = rawMax + rawSpan * 0.06;
      const span = max - min || 1;
      const plot = showAxes
        ? {{ left: 38, right: 10, top: 10, bottom: 20 }}
        : {{ left: 2, right: 2, top: 4, bottom: 4 }};
      plot.width = width - plot.left - plot.right;
      plot.height = height - plot.top - plot.bottom;
      const xFor = i => plot.left + (vals.length === 1 ? 0 : i / (vals.length - 1) * plot.width);
      const yFor = v => plot.top + plot.height - ((v - min) / span) * plot.height;
      const points = vals.map((v, i) => `${{xFor(i).toFixed(2)}},${{yFor(v).toFixed(2)}}`).join(' ');
      const lastY = yFor(vals[vals.length - 1]);
      const crossesZero = rawMin < 0 && rawMax > 0;
      const zeroLine = crossesZero ? `<line x1="${{plot.left}}" y1="${{yFor(0).toFixed(2)}}" x2="${{plot.left + plot.width}}" y2="${{yFor(0).toFixed(2)}}" class="zero-line"/>` : '';
      const axes = showAxes ? `
        <line x1="${{plot.left}}" y1="${{plot.top}}" x2="${{plot.left}}" y2="${{plot.top + plot.height}}" class="axis-stroke"/>
        <line x1="${{plot.left}}" y1="${{plot.top + plot.height}}" x2="${{plot.left + plot.width}}" y2="${{plot.top + plot.height}}" class="axis-stroke"/>
        <text x="${{plot.left - 5}}" y="${{plot.top + 4}}" text-anchor="end" class="axis-label">${{esc(fmt(rawMax))}}</text>
        <text x="${{plot.left - 5}}" y="${{plot.top + plot.height}}" text-anchor="end" class="axis-label">${{esc(fmt(rawMin))}}</text>
        <text x="${{plot.left}}" y="${{height - 5}}" text-anchor="start" class="axis-label">${{esc(dateTickLabel(rows[0]?.date))}}</text>
        <text x="${{plot.left + plot.width}}" y="${{height - 5}}" text-anchor="end" class="axis-label">${{esc(dateTickLabel(rows[rows.length - 1]?.date))}}</text>
      ` : '';
      return `<svg class="spark" viewBox="0 0 ${{width}} ${{height}}" preserveAspectRatio="none">${{axes}}${{zeroLine}}<polyline fill="none" stroke="${{color}}" stroke-width="2" points="${{points}}"/><circle cx="${{(plot.left + plot.width).toFixed(2)}}" cy="${{lastY.toFixed(2)}}" r="2.4" fill="${{color}}"/></svg>`;
    }}

    function dateTickLabel(date) {{
      if (!date) return '—';
      return date.length >= 7 ? date.slice(0, 7) : date;
    }}

    function detailChartShell() {{
      return `<div class="detail-chart-wrap">
        <svg id="detailChart" class="detail-chart" viewBox="0 0 720 240" preserveAspectRatio="none"></svg>
        <div id="chartTooltip" class="chart-tooltip"></div>
      </div>`;
    }}

    function chartPoint(row, index, rows, min, span, plot) {{
      const x = plot.left + (rows.length === 1 ? 0 : index / (rows.length - 1) * plot.width);
      const y = plot.top + plot.height - ((Number(row.value) - min) / span * plot.height);
      return {{ x, y }};
    }}

    function mountInteractiveChart(item, rows) {{
      const svg = document.getElementById('detailChart');
      const tooltip = document.getElementById('chartTooltip');
      if (!svg || !tooltip) return;
      const validRows = (rows || []).filter(row => Number.isFinite(Number(row.value)));
      const w = 720;
      const h = 240;
      const plot = {{ left: 58, right: 18, top: 22, bottom: 38 }};
      plot.width = w - plot.left - plot.right;
      plot.height = h - plot.top - plot.bottom;
      if (validRows.length < 2) {{
        svg.innerHTML = `<text x="58" y="120" class="axis-label">历史数据不足</text>`;
        return;
      }}
      const vals = validRows.map(r => Number(r.value));
      const minValue = Math.min(...vals);
      const maxValue = Math.max(...vals);
      const pad = (maxValue - minValue || 1) * 0.08;
      const min = minValue - pad;
      const max = maxValue + pad;
      const span = max - min || 1;
      const points = validRows.map((row, i) => {{
        const p = chartPoint(row, i, validRows, min, span, plot);
        return `${{p.x.toFixed(2)}},${{p.y.toFixed(2)}}`;
      }}).join(' ');
      const first = validRows[0];
      const mid = validRows[Math.floor(validRows.length / 2)];
      const last = validRows[validRows.length - 1];
      const yTicks = [max, min + span / 2, min];
      const yLines = yTicks.map((value, i) => {{
        const y = plot.top + (i / 2) * plot.height;
        return `<line x1="${{plot.left}}" y1="${{y}}" x2="${{plot.left + plot.width}}" y2="${{y}}" class="grid-line"/>
          <text x="${{plot.left - 8}}" y="${{y + 4}}" text-anchor="end" class="axis-label">${{esc(fmt(value))}}</text>`;
      }}).join('');
      const crossesZero = minValue < 0 && maxValue > 0;
      const zeroY = plot.top + plot.height - ((0 - min) / span * plot.height);
      const zeroLine = crossesZero ? `<line x1="${{plot.left}}" y1="${{zeroY.toFixed(2)}}" x2="${{plot.left + plot.width}}" y2="${{zeroY.toFixed(2)}}" class="zero-line"/>
        <text x="${{plot.left - 8}}" y="${{zeroY + 4}}" text-anchor="end" class="axis-label">0</text>` : '';
      const xTicks = [first, mid, last].map((row, i) => {{
        const x = plot.left + (i / 2) * plot.width;
        return `<text x="${{x}}" y="${{h - 12}}" text-anchor="${{i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}}" class="axis-label">${{esc(dateTickLabel(row.date))}}</text>`;
      }}).join('');
      svg.innerHTML = `
        <rect x="0" y="0" width="${{w}}" height="${{h}}" fill="#fbfcfe"/>
        ${{yLines}}
        ${{zeroLine}}
        <line x1="${{plot.left}}" y1="${{plot.top}}" x2="${{plot.left}}" y2="${{plot.top + plot.height}}" class="axis-stroke"/>
        <line x1="${{plot.left}}" y1="${{plot.top + plot.height}}" x2="${{plot.left + plot.width}}" y2="${{plot.top + plot.height}}" class="axis-stroke"/>
        <text x="${{plot.left}}" y="14" class="axis-label">单位：${{esc(item.unit || '数值')}}</text>
        <polyline fill="none" stroke="${{item.availability === 'proxy' ? '#a86913' : '#1d7f73'}}" stroke-width="3" points="${{points}}"/>
        <line id="hoverLine" x1="${{plot.left}}" y1="${{plot.top}}" x2="${{plot.left}}" y2="${{plot.top + plot.height}}" stroke="#17324d" stroke-width="1" opacity="0"/>
        <circle id="hoverDot" cx="${{plot.left}}" cy="${{plot.top}}" r="4" fill="#17324d" opacity="0"/>
        <rect id="chartOverlay" x="${{plot.left}}" y="${{plot.top}}" width="${{plot.width}}" height="${{plot.height}}" fill="transparent"/>
        ${{xTicks}}
      `;
      const overlay = svg.querySelector('#chartOverlay');
      const hoverLine = svg.querySelector('#hoverLine');
      const hoverDot = svg.querySelector('#hoverDot');
      function showAt(clientX) {{
        const rect = svg.getBoundingClientRect();
        const scaleX = w / rect.width;
        const svgX = (clientX - rect.left) * scaleX;
        const ratio = Math.max(0, Math.min(1, (svgX - plot.left) / plot.width));
        const index = Math.round(ratio * (validRows.length - 1));
        const row = validRows[index];
        const p = chartPoint(row, index, validRows, min, span, plot);
        hoverLine.setAttribute('x1', p.x);
        hoverLine.setAttribute('x2', p.x);
        hoverLine.setAttribute('opacity', '0.45');
        hoverDot.setAttribute('cx', p.x);
        hoverDot.setAttribute('cy', p.y);
        hoverDot.setAttribute('opacity', '1');
        tooltip.innerHTML = `<strong>${{esc(row.date)}}</strong><span>${{esc(fmtWithUnit(row.value, item.unit))}}</span>`;
        const tooltipX = Math.min(Math.max((p.x / w) * rect.width + 10, 8), rect.width - 160);
        const tooltipY = Math.max((p.y / h) * rect.height - 42, 8);
        tooltip.style.left = tooltipX + 'px';
        tooltip.style.top = tooltipY + 'px';
        tooltip.style.display = 'block';
      }}
      overlay.addEventListener('mousemove', event => showAt(event.clientX));
      overlay.addEventListener('mouseleave', () => {{
        hoverLine.setAttribute('opacity', '0');
        hoverDot.setAttribute('opacity', '0');
        tooltip.style.display = 'none';
      }});
    }}

    function filteredIndicators() {{
      const query = state.query.trim().toLowerCase();
      return indicators.filter(item => {{
        if (state.region !== 'All' && item.region !== state.region) return false;
        if (state.frequency !== 'recommended' && item.displayFrequency !== state.frequency) return false;
        if (!query) return true;
        const hay = [item.id, item.label, item.zhLabel, item.region, item.themeLabel, item.source, item.note, item.description, item.impactScope].join(' ').toLowerCase();
        return hay.includes(query);
      }}).sort((a, b) => a.priority - b.priority);
    }}

    function renderStatus() {{
      const proxyCount = indicators.filter(i => i.availability === 'proxy').length;
      document.getElementById('statusLine').innerHTML = `
        <span class="pill ok">${{data.statusCounts.ok || 0}} / ${{data.count}} 已接入</span>
        <span class="pill proxy">${{proxyCount}} 个代理口径</span>
        <span class="pill">生成 ${{new Date(data.generatedAt).toLocaleString('zh-CN')}}</span>
        <a class="pill" href="../../index.html">返回首页</a>
      `;
    }}

    function renderControls() {{
      const regionTabs = document.getElementById('regionTabs');
      const regions = ['All', ...regionOrder];
      regionTabs.innerHTML = regions.map(r => `<button data-region="${{r}}" class="${{state.region === r ? 'active' : ''}}">${{regionLabels[r] || r}}</button>`).join('');
      regionTabs.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {{
        state.region = btn.dataset.region;
        render();
      }}));

      const frequencyTabs = document.getElementById('frequencyTabs');
      frequencyTabs.innerHTML = ['recommended', 'week', 'month', 'quarter', 'year']
        .map(f => `<button data-frequency="${{f}}" class="${{state.frequency === f ? 'active' : ''}}">${{frequencyLabels[f]}}</button>`).join('');
      frequencyTabs.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {{
        state.frequency = btn.dataset.frequency;
        render();
      }}));

      const input = document.getElementById('searchInput');
      input.value = state.query;
      input.oninput = () => {{
        state.query = input.value;
        render();
      }};
    }}

    function renderKpis() {{
      const keys = ['us_10y_real_yield', 'us_dxy', 'cn_tsf_stock_yoy', 'xasset_btc_price_trend'];
      document.getElementById('kpiStrip').innerHTML = keys.map(id => {{
        const item = indicators.find(i => i.id === id);
        const rows = seriesFor(item);
        const chg = changeSince(rows, 4);
        return `<div class="kpi">
          <div class="kpi-label">${{item.zhLabel}}</div>
          <div class="kpi-value">${{fmtWithUnit(item.latestValue, item.unit)}}</div>
          <div class="kpi-foot">${{item.latestDate}} · <span class="change ${{changeClass(chg)}}">${{chg === null ? '—' : (chg > 0 ? '+' : '') + fmtWithUnit(chg, item.unit)}}</span></div>
        </div>`;
      }}).join('');
    }}

    function relatedCombos(item) {{
      return combos.filter(combo => (combo.indicatorIds || []).includes(item.id));
    }}

    function comboChips(item, limit = 2) {{
      const related = relatedCombos(item).slice(0, limit);
      if (!related.length) return '';
      return `<div class="combo-chips">${{related.map(combo => `<span class="combo-chip">${{esc(combo.title)}}</span>`).join('')}}</div>`;
    }}

    function comboStructuredHtml(combo, compact = false) {{
      const drivers = Array.isArray(combo.drivers) ? combo.drivers : [];
      const turns = Array.isArray(combo.turningPoints) ? combo.turningPoints : [];
      const watch = Array.isArray(combo.watch) ? combo.watch : [];
      if (!combo.conclusion && !drivers.length && !turns.length && !combo.marketState) {{
        return `<div class="combo-text">${{esc(combo.result || '')}}</div>`;
      }}
      const maxDrivers = compact ? 2 : 4;
      const maxTurns = compact ? 2 : 4;
      const maxWatch = compact ? 2 : 4;
      return `
        ${{combo.conclusion ? `<div class="combo-conclusion">结论：${{esc(combo.conclusion)}}</div>` : ''}}
        ${{combo.moveText ? `<div class="combo-brief">${{esc(combo.moveText)}}</div>` : ''}}
        ${{combo.marketState ? `<div class="combo-brief">现在像什么市场：${{esc(combo.marketState)}}</div>` : ''}}
        ${{drivers.length ? `<div class="combo-block"><div class="combo-block-title">关键驱动</div><ul class="combo-list">${{drivers.slice(0, maxDrivers).map(text => `<li>${{esc(text)}}</li>`).join('')}}</ul></div>` : ''}}
        ${{turns.length ? `<div class="combo-block"><div class="combo-block-title">转折点</div><ul class="combo-list">${{turns.slice(0, maxTurns).map(text => `<li>${{esc(text)}}</li>`).join('')}}</ul></div>` : ''}}
        ${{watch.length && !compact ? `<div class="combo-block"><div class="combo-block-title">接下来观察</div><ul class="combo-list">${{watch.slice(0, maxWatch).map(text => `<li>${{esc(text)}}</li>`).join('')}}</ul></div>` : ''}}
      `;
    }}

    function renderCombos() {{
      const query = state.query.trim().toLowerCase();
      const visible = !query ? combos : combos.filter(combo => {{
        const names = (combo.indicatorIds || []).map(id => {{
          const item = indicators.find(i => i.id === id);
          return item ? `${{item.zhLabel}} ${{item.label}}` : id;
        }}).join(' ');
        return [combo.title, combo.theme, combo.thesis, combo.result, names].join(' ').toLowerCase().includes(query);
      }});
      const el = document.getElementById('comboGrid');
      if (!visible.length) {{
        el.innerHTML = '<div class="empty">没有匹配的组合推测。</div>';
        return;
      }}
      el.innerHTML = visible.map(combo => {{
        const names = (combo.indicatorIds || []).slice(0, 5).map(id => {{
          const item = indicators.find(i => i.id === id);
          return item ? item.zhLabel : id;
        }});
        return `<button class="combo-card ${{combo.tone || 'watch'}}" data-combo="${{combo.id}}" data-id="${{(combo.indicatorIds || [])[0] || ''}}">
          <div class="combo-title">${{esc(combo.title)}}</div>
          <div class="combo-theme">${{esc(combo.theme)}}</div>
          ${{comboStructuredHtml(combo, true)}}
          <div class="combo-thesis">读法：${{esc(combo.thesis)}}</div>
          <div class="combo-chips">${{names.map(name => `<span class="combo-chip">${{esc(name)}}</span>`).join('')}}</div>
        </button>`;
      }}).join('');
      document.querySelectorAll('.combo-card').forEach(btn => btn.addEventListener('click', () => {{
        if (btn.dataset.id) state.selected = btn.dataset.id;
        renderDetail();
      }}));
    }}

    function renderCoreCards() {{
      const rows = coreIds.map(id => indicators.find(i => i.id === id)).filter(Boolean);
      document.getElementById('coreCards').innerHTML = rows.map(item => {{
        const history = seriesFor(item);
        const chg = changeSince(history, 4);
        const pct = percentile(history);
        return `<button class="metric-card" data-id="${{item.id}}">
          <div class="card-top">
            <div>
              <div class="card-title">${{item.zhLabel}}</div>
              <div class="english-name">${{item.label}}</div>
              <div class="card-meta">#${{item.priority}} · ${{regionLabels[item.region] || item.region}} · ${{item.themeLabel}} · ${{item.frequencyLabel}}</div>
            </div>
            <span class="tag ${{item.availability === 'proxy' ? 'proxy' : ''}}">${{item.availability}}</span>
          </div>
          <div><span class="value">${{fmtWithUnit(item.latestValue, item.unit)}}</span> <span class="card-meta">${{item.latestDate}}</span></div>
          ${{sparkline(history, 360, 78, item.availability === 'proxy' ? '#a86913' : '#3265a8', true).replace('class="spark"', 'class="big-chart"')}}
          <div class="card-meta">单位 ${{item.unit}} · 近 4 期 <span class="change ${{changeClass(chg)}}">${{chg === null ? '—' : (chg > 0 ? '+' : '') + fmtWithUnit(chg, item.unit)}}</span> · 分位 ${{pct === null ? '—' : pct.toFixed(0) + '%'}}</div>
          ${{comboChips(item)}}
        </button>`;
      }}).join('');
      document.querySelectorAll('.metric-card').forEach(btn => btn.addEventListener('click', () => {{
        state.selected = btn.dataset.id;
        renderDetail();
      }}));
    }}

    function rowHtml(item) {{
      const history = seriesFor(item);
      const chg4 = changeSince(history, 4);
      const chg12 = changeSince(history, 12);
      const pct = percentile(history);
      const color = item.availability === 'proxy' ? '#a86913' : '#3265a8';
      return `<tr data-id="${{item.id}}">
        <td class="name"><div class="metric-name"><span class="priority">#${{item.priority}}</span><span><strong>${{item.zhLabel}}</strong><span class="english-name">${{item.label}}</span></span></div></td>
        <td>${{regionLabels[item.region] || item.region}}</td>
        <td>${{item.themeLabel}}</td>
        <td class="value">${{fmtWithUnit(item.latestValue, item.unit)}}</td>
        <td>${{item.latestDate || '—'}}</td>
        <td><span class="change ${{changeClass(chg4)}}">${{chg4 === null ? '—' : (chg4 > 0 ? '+' : '') + fmtWithUnit(chg4, item.unit)}}</span></td>
        <td><span class="change ${{changeClass(chg12)}}">${{chg12 === null ? '—' : (chg12 > 0 ? '+' : '') + fmtWithUnit(chg12, item.unit)}}</span></td>
        <td>${{pct === null ? '—' : pct.toFixed(0) + '%'}}</td>
        <td>${{sparkline(history, 150, 38, color)}}</td>
        <td><span class="tag ${{item.availability === 'proxy' ? 'proxy' : ''}}">${{item.availability}}</span></td>
        <td>${{item.frequencyLabel}}</td>
      </tr>`;
    }}

    function renderMatrix() {{
      const list = filteredIndicators();
      if (!list.length) {{
        document.getElementById('matrix').innerHTML = '<div class="empty">没有匹配的指标。</div>';
        return;
      }}
      const grouped = new Map();
      list.forEach(item => {{
        if (!grouped.has(item.region)) grouped.set(item.region, []);
        grouped.get(item.region).push(item);
      }});
      const regions = [...grouped.keys()].sort((a, b) => regionOrder.indexOf(a) - regionOrder.indexOf(b));
      document.getElementById('matrix').innerHTML = regions.map(region => `
        <div class="region-block">
          <div class="region-title"><span>${{regionLabels[region] || region}}</span><span>${{grouped.get(region).length}} 项</span></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>指标</th><th>地区</th><th>主题</th><th>最新</th><th>日期</th><th>近4期</th><th>近12期</th><th>分位</th><th>趋势</th><th>口径</th><th>频率</th></tr></thead>
              <tbody>${{grouped.get(region).map(rowHtml).join('')}}</tbody>
            </table>
          </div>
        </div>`).join('') + '<div class="footnote">分位基于当前页面嵌入的历史窗口计算；代理口径用于学习背景，不等同授权原始指标。</div>';
      document.querySelectorAll('tbody tr').forEach(row => row.addEventListener('click', () => {{
        state.selected = row.dataset.id;
        renderDetail();
      }}));
    }}

    function renderDetail() {{
      const item = indicators.find(i => i.id === state.selected) || indicators[0];
      const history = seriesFor(item);
      const chg4 = changeSince(history, 4);
      const chg12 = changeSince(history, 12);
      const pct = percentile(history);
      const nearby = relatedCombos(item);
      const nearbyHtml = nearby.length ? `<div class="nearby-combos">
        <div class="nearby-combos-title">相关组合推测</div>
        ${{nearby.map(combo => `<div class="nearby-combo"><strong>${{esc(combo.title)}}：</strong>${{comboStructuredHtml(combo, false)}}<div class="combo-thesis">读法：${{esc(combo.thesis)}}</div></div>`).join('')}}
      </div>` : '';
      document.getElementById('detailPanel').innerHTML = `
        <h3 class="detail-title">${{item.zhLabel}}</h3>
        <div class="english-name">${{item.label}}</div>
        <div class="card-meta">#${{item.priority}} · ${{regionLabels[item.region] || item.region}} · ${{item.themeLabel}} · ${{item.frequencyLabel}}</div>
        <p class="description">${{esc(item.description)}} <strong>单位：${{esc(item.unit || '数值')}}</strong></p>
        <div class="impact"><strong>影响范围：</strong>${{esc(item.impactScope)}}</div>
        <div class="beginner-guide"><strong>小白读法</strong>${{esc(item.beginnerGuide)}}</div>
        ${{nearbyHtml}}
        ${{detailChartShell()}}
        <div class="facts">
          <div class="fact"><div class="fact-label">最新值</div><div class="fact-value">${{fmtWithUnit(item.latestValue, item.unit)}}</div></div>
          <div class="fact"><div class="fact-label">单位</div><div class="fact-value">${{item.unit || '数值'}}</div></div>
          <div class="fact"><div class="fact-label">最新日期</div><div class="fact-value">${{item.latestDate || '—'}}</div></div>
          <div class="fact"><div class="fact-label">近4期变化</div><div class="fact-value change ${{changeClass(chg4)}}">${{chg4 === null ? '—' : (chg4 > 0 ? '+' : '') + fmtWithUnit(chg4, item.unit)}}</div></div>
          <div class="fact"><div class="fact-label">近12期变化</div><div class="fact-value change ${{changeClass(chg12)}}">${{chg12 === null ? '—' : (chg12 > 0 ? '+' : '') + fmtWithUnit(chg12, item.unit)}}</div></div>
          <div class="fact"><div class="fact-label">历史分位</div><div class="fact-value">${{pct === null ? '—' : pct.toFixed(0) + '%'}}</div></div>
          <div class="fact"><div class="fact-label">历史范围</div><div class="fact-value">${{item.firstDate}} 至 ${{item.latestDate}}</div></div>
          <div class="fact"><div class="fact-label">数据点</div><div class="fact-value">${{item.points}}</div></div>
          <div class="fact"><div class="fact-label">适配器</div><div class="fact-value">${{item.adapter || '—'}}</div></div>
          <div class="fact"><div class="fact-label">数据源</div><div class="fact-value">${{item.source || '—'}}</div></div>
          <div class="fact"><div class="fact-label">影响范围</div><div class="fact-value">${{item.impactScope || '—'}}</div></div>
        </div>
        <div class="caveat">${{item.caveat || item.note || '稳定公开数据源。'}}</div>
      `;
      mountInteractiveChart(item, history);
    }}

    function render() {{
      renderControls();
      renderKpis();
      renderCombos();
      renderCoreCards();
      renderMatrix();
      renderDetail();
    }}

    renderStatus();
    render();
  </script>
</body>
</html>
"""


def main() -> int:
    latest = json.loads(LATEST_PATH.read_text())
    indicators = [compact_indicator(item) for item in latest["indicators"]]
    combos = build_combo_insights(indicators)
    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "sourceGeneratedAt": latest.get("generated_at"),
        "count": latest.get("count"),
        "statusCounts": latest.get("status_counts"),
        "coreIds": CORE_IDS,
        "regionOrder": REGION_ORDER,
        "combos": combos,
        "indicators": indicators,
    }
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(build_html(payload), encoding="utf-8")
    print(f"Wrote {OUT_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
