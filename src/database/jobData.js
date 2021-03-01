const jobData = [
  {
    id: 1,
    companyName: '知网',
    companyCity: '北京',
    companyAddress: '海淀区小营西小口路66号东升科技园A2楼',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '六险二金、周末双休、宿舍班车、免费早午餐',
    recruitJob: '图像算法工程师',
    recruitCount: '10+',
    requiredDegree: '硕士及以上',
    requiredExp: '在校/应届',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1.图像处理、版面理解及OCR识别基础技术研究，算法编写；\n' +
        '2.数字化加工相关的流程、工具软件开发',
    requiredSkillDesc: '1.国家重点大学硕士以上学历，模式识别、图像处理、计算机、应用数学等相关专业，解决北京户口；\n' +
        '2.精通C/C++,VC,精通数据结构与算法，数学功底扎实，逻辑性良好；\n' +
        '3.对面向对象的分析、设计有深刻理解；\n' +
        '4.优秀的英语应用能力，可以检索英文文献；\n' +
        '5.有良好的工作责任心以及团队合作精神；\n' +
        '6.要求有版面理解、OCR、图像/人脸识别开发经验。',
    salary: '12k-18k·14薪',
    publishTime: '2021/02/25',
    label: ['企业服务', '深度学习', '图片识别', '数据挖掘', '文字识别'],
    introduce: '信息检索,工具类产品,内容社区',
    companyAvatar: require('./companyAvatar/zhiweb.png'),
    companyPropaPic: require('./companyAvatar/zhiweb-propa.png'),
    companyHomePage: 'https://www.tianyancha.com/company/21369866',
    abstract: '中国知网（www.cnki.net）是由《中国学术期刊（光盘版）》电子杂志社有限公司和同方知网（北京）技术有限公司联合打造的数字出版平台。' +
        '中国知网整合了我国90%以上的学术文献和海外重要文献数据库资源，是集知识资源大规模整合出版、原创性学术文献出版、专业化及个性化数字图书馆为一体的数字出版平台。\n'
  },
  {
    id: 2,
    companyName: '探探',
    companyCity: '北京',
    companyAddress: '朝阳区朝外东大桥路光华路SOHO二期C座1601',
    companyScale: '150-500人',
    companyType: '上市公司',
    companyWelfare: '专业团队',
    recruitJob: 'iOS开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '在校/应届',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、提供iOS应用程序解决方案，设计架构，组建及核心实施技术；\n' +
        '2、iOS 应用的架构搭建,技术设计与开发;iOS 组件设计与开发;iOS 代码质量控制, 优化；\n' +
        '3、参与软件需求分析，进行模块概要设计，模块详细设计，代码编写，测试等工作，对软件质量负责；\n' +
        '4、负责项目的功能拆解和任务分配及移动开发团队的技术培训和工作管理；\n' +
        '5、对移动和互联网技术有强烈兴趣，富于钻研和探索精神；\n' +
        '6、较强的逻辑思维能力和沟通能力。',
    requiredSkillDesc: '1、**本科及以上，计算机相关专业\n' +
        '2、具备扎实的计算机基础知识和良好的编程习惯；\n' +
        '3、积极主动，学习能⼒强，良好的团队合作意识。\n',
    salary: '13k-25k·15薪',
    publishTime: '2020-12-10',
    label: ['移动端', 'iOS', 'Swift', 'OC'],
    introduce: '社交平台',
    companyAvatar: require('./companyAvatar/tantan.png'),
    companyPropaPic: require('./companyAvatar/tantan-propa.png'),
    companyHomePage: 'http://p1.com/',
    abstract: '探探是一款受90后喜欢的社交平台，其用户以90后和95后为主，学生和白领居多，是一个为广大年轻人提供多样选择的活跃的社交平台。' +
        '由于产品设计符合年轻人对个性和轻松自由感的追求，并尊重女性用户使用体验，探探获得了稳定的良好用户留存，受到了大批年轻人的青睐。'
  },
  {
    id: 3,
    companyName: '作业帮',
    companyCity: '北京',
    companyAddress: '海淀区开拓路1号汇苑开拓大厦A座4层',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '免费三餐、测试开发',
    recruitJob: '高级测试开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '在校/应届',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1.担任作业帮测试开发工程师，负责大部分产品的功能/接口/自动化/性能/可靠性/安全等专项测试工作。\n' +
        '2.根据产品设计和应用场景进行测试需求分析、测试设计、测试开发、测试执行，跟踪定位产品软件中的缺陷或问题，推动问题解决，完成测试总结和测试报告。\n' +
        '3.借鉴业界先进的测试理论与测试工具，结合公司情况予以落实，参与软件测试工具的设计与开发工作。',
    requiredSkillDesc: '1.计算机相关专业本科或以上。\n' +
        '2.熟悉测试开发流程，能够熟练进行测试对象分析、测试设计、用例设计、自动化等测试相关工作。\n' +
        '3.精通C/C++、Java、PHP、Shell、Python、Objective-c、GO中至少一门编程语言。\n' +
        '4.熟悉常用的互联网开源工具或者框架，如 redis、memcache、消息队列、jenkins等。 ',
    salary: '18k-30k·14薪',
    publishTime: '2021/02/25',
    label: ['测试开发', 'Server端测试'],
    introduce: '在线教育/D轮及以上',
    companyAvatar: require('./companyAvatar/zuoyebang.png'),
    companyPropaPic: require('./companyAvatar/zuoyebang-propa.png'),
    companyHomePage: 'http://www.zybang.com/',
    abstract: '作业帮利用强大的图片识别技术，可以为用户精准匹配学生搜索的问题。当学生们拍照上传了需解答题目后，' +
        '系统会立即针对题目在作业帮题库中进行搜索匹配，第一时间将详细的解题过程反馈给用户，基本可以达到“秒回”的程度。' +
        '作业帮目前拥有2.5亿题库，均已经过名师的校验和修改，确保每个答案都是解题的‘最佳答案’'
  },
  {
    id: 4,
    companyName: '天眼查',
    companyCity: '北京',
    companyAddress: '北京海淀区北京市海淀区知春路65号中国卫星通信大厦B座23层',
    companyScale: '500-2000人',
    companyType: '国有投资',
    companyWelfare: '岗位空间大',
    recruitJob: '资深搜索算法工程师',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '经验不限/学历不限',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1. 负责搜索效果的持续优化，不断提升天眼查搜索的用户体验\n' +
        '2. 负责搜索召回策略的迭代，不断优化基础相关性算法\n' +
        '3. 负责搜素排序模型的迭代',
    requiredSkillDesc: '1.计算机相关专业本科及以上学历\n' +
        '2.具有较强的算法功底，有一定的机器学习基础，对于深度学习有一定的了解\n' +
        '3.对相关性优化、query改写和排序模型等搜索相关算法策略有一定了解者优先\n' +
        '4.掌握自然语言处理（热词/关键词提取，意图识别、文本分类）等相关技术者优先\n' +
        '5.对搜索结果排序、query理解有实战经验者优先\n' +
        '6.思路清晰，具备良好的沟通能力，积极主动，能根据需求进行系统方案设计和开发计划',
    salary: '30k-50k·15薪',
    publishTime: '2021/02/25',
    label: ['搜索算法', '搜索召回', '搜索排序', 'query'],
    introduce: '数据服务｜咨询/不需要融资',
    companyAvatar: require('./companyAvatar/tianyancha.png'),
    companyPropaPic: require('./companyAvatar/tianyancha-propa.png'),
    companyHomePage: 'https://www.tianyancha.com/',
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 5,
    companyName: '猿辅导',
    companyCity: '北京',
    companyAddress: '朝阳区广顺南大街8号院利星行中心A座F区5层',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '假期多、空间大、nice领导、六险一金、周末双休',
    recruitJob: '消息中间件研发工程师',
    recruitCount: '10+',
    requiredDegree: '本科',
    requiredExp: '经验5-10年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '打造易用、高效的私有云容器平台，构建完整的容器云平台功能，包括 CI/CD、弹性伸缩、日志收集、多云、多可用区等。\n' +
        '在公司范围内推动云原生架构的实施，构建自动化流程及工具，解决研发遇到的各种效率问题。',
    requiredSkillDesc: '2 年以上相关工作经验，扎实的计算机专业基础。\n' +
        '熟练掌握 Java 、Go、Python 等一种或多种编程语言。\n' +
        '对 Kubernetes、CI/CD、微服务、高可用系统架构中的某一领域有较深入的理解，了解其设计思想、实现原理及最佳实战。\n' +
        '有大规模微服务系统开发、维护、故障处理经验优先。\n' +
        '优秀的技术调研、方案设计、技术决策能力。\n' +
        '优秀的跨团队沟通、项目推进能力',
    salary: '30k-60k·14薪',
    publishTime: '2021/02/25',
    label: ['在线教育', 'Java', 'Python'],
    introduce: '在线教育/D轮及以上',
    companyAvatar: require('./companyAvatar/yuanfudao.png'),
    companyPropaPic: require('./companyAvatar/yuanfudao-propa.png'),
    companyHomePage: 'https://www.yuantiku.com/',
    abstract: '猿辅导公司，2012年创立，总部在北京，武汉、西安、郑州、南京、成都分别设有分公司。\n' +
        '公司估值超过30亿美元，是K-12在线教育首个“独角兽”公司。旗下拥有猿辅导、小猿搜题、猿题库、小猿口算、斑马英语等多款在线学习产品。' +
        '正在为超过2亿的中国中小学生和家长提供多元化的智能教育服务。\n' +
        '-    猿辅导——200万学生使用的中小学全科在线辅导\n' +
        '-    小猿搜题——中小学搜题答疑TOP应用\n' +
        '-    猿题库——中国唯一的初高中自适应题库\n' +
        '-    斑马英语——App Store精选推荐的少儿英语AI课程平台\n' +
        '-    小猿口算——小学口算作业智能批改“黑科技”工具'
  },
  {
    id: 6,
    companyName: '字节跳动',
    companyCity: '北京',
    companyAddress: '北京海淀区北三环中路43号中航广场',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '免费三餐,六险一金,下午茶,租房补贴',
    recruitJob: '架构开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、参与ToB各业务方向的架构改进；\n' +
        '2、为大规模推荐、广告、搜索系统设计和实现合理的在线和离线架构；\n' +
        '3、设计和实现灵活可扩展、稳定、高性能的存储系统和计算模型；\n' +
        '4、生产系统的trouble-shooting，设计和实现必要的机制和工具保障生产系统整体运行的稳定性。',
    requiredSkillDesc: '1、熟悉Linux开发环境，良好的系统编程、数据结构、算法基础、系统设计能力；\n' +
        '2、乐于挑战没有明显答案的问题，快速理解业务场景，从具体问题中抽象出通用的解决方案；\n' +
        '3、有实际的大规模分布式系统相关工作经历优先；\n' +
        '4、对推荐、搜索、广告系统有理解、认识或经验者优先。',
    salary: '25k-30k·14薪',
    publishTime: '2021/02/25',
    label: ['后端开发', '服务端'],
    introduce: '内容资讯,短视频/D轮及以上',
    companyAvatar: require('./companyAvatar/bytedance.png'),
    companyPropaPic: require('./companyAvatar/bytedance-propa.png'),
    companyHomePage: 'https://www.toutiao.com/',
    abstract: '字节跳动成立于2012年3月，公司使命为“Inspire Creativity, Enrich Life（激发创造，丰富生活）”。' +
        '公司业务覆盖150个国家和地区、75个语种，拥有超过6万名员工。\n' +
        '字节跳动在全球推出了多款有影响力的产品，包括今日头条、抖音、西瓜视频、飞书、TikTok、Lark、Helo等。' +
        '截至2020年1月，字节跳动旗下产品全球月活跃用户数超过15亿。'
  },
  {
    id: 7,
    companyName: '美团',
    companyCity: '北京',
    companyAddress: '北京朝阳区望京东路4号恒电大厦C座',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '福利齐全，成长空间大',
    recruitJob: 'Android开发工程师',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '在校/应届',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责Android客户端产品开发； \n' +
        '2、负责移动平台软件框架的研究、设计和实现、关键技术选型等工作； \n' +
        '3、对客户端质量和体验负责。 ',
    requiredSkillDesc: '1、本科及以上学历，计算机或相关专业； \n' +
        '2、2年以上Android开发经验； \n' +
        '3、能独立完成android应用开发； \n' +
        '4、至少主导过一个完整的商业级手机应用； \n' +
        '5、熟悉各种主流手机特性和开发迭代流程；',
    salary: '18k-25k·13薪',
    publishTime: '2021/02/25',
    label: ['电商平台', '营销服务', '文化传媒', 'Android'],
    introduce: '消费生活/上市公司',
    companyAvatar: require('./companyAvatar/meituan.png'),
    companyPropaPic: require('./companyAvatar/meituan-propa.png'),
    companyHomePage: 'https://bj.meituan.com/',
    abstract: '美团外卖是美团旗下网络订餐平台，自2013年11月正式上线以来，秉承“帮大家吃得更好，生活更好”的使命，始终聚焦于消费者“吃”的需求。' +
        '通过科技连接消费者和商家，依托庞大的骑手团队，以“线上+线下”的业务模式，为消费者提供品质化、精细化、多样化的餐饮外卖服务。' +
        '截至目前，美团外卖已经成为全球领先的餐饮外卖服务提供商，单日完成订单量突破4000万单。' +
        '美团外卖在加强平台自身建设的同时，致力于运用数字化技术推动餐饮行业的供给侧结构性改革，协同商家、' +
        '用户和骑手等产业链上下游共同打造互惠共赢的合作生态，让餐饮行业在数字化时代焕发新的生机，让消费者拥有更加轻松、便捷、高效的用餐体验。'
  },
  {
    id: 8,
    companyName: '新浪网',
    companyCity: '北京',
    companyAddress: '海淀区北京市海淀区西北旺东路10号院西区8号楼新浪总部大厦',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '五险一金，公司食堂，团队氛围好，成长空间',
    recruitJob: '运维开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责用户访问数据采集、日志接收传输等服务稳定高效；\n' +
        '2、参与运维自动化、监控平台和工具的设计与部分开发工作；\n' +
        '3、负责相关故障、疑难问题排查处理，编制汇总故障、问题，定期提交汇总报告；\n' +
        '4、负责日常运维、故障处理等工作，保障业务稳定性（需24小时oncall排班）。',
    requiredSkillDesc: '1、熟练使用Linux/unix操作系统，精通Shell编程，熟练掌握Python编程；\n' +
        '2、熟悉TCP/IP、HTTP等协议，有良好的网络、存储、安全、计算机体系结构方面的知识；\n' +
        '3、熟悉Nginx、ES、redis、opentsdb等中间件的安装、应用管理；\n' +
        '4、熟悉kvm、docker、ceph、mfs等虚拟化及共享存储运维能力者优先；\n' +
        '5、中型规模系统运维经验，思维敏捷、故障诊断及独立处理能力强；\n' +
        '6、对新技术敏感度较高，喜欢研究和尝试。',
    salary: '15k-25k·14薪',
    publishTime: '2021/02/25',
    label: ['Linux', 'Shell', '运维自动化'],
    introduce: '内容资讯,社交媒体/上市公司',
    companyAvatar: require('./companyAvatar/xinlang.png'),
    companyPropaPic: require('./companyAvatar/xinlang-propa.png'),
    companyHomePage: 'https://finance.sina.com.cn/',
    abstract: '新浪财经已经覆盖中国1亿股民，日浏览量逾3亿人次，以报道快速、全面、客观、' +
        '专业一直引领中国互联网财经媒体行业，覆盖国内外主要资本市场，多端多平台呈现。新浪财经不断实践金融业务创新，' +
        '通过打造首家财经大数据创新平台，高端私密的龙门精英投资平台，专业信赖的理财师投资咨询平台，投资者教育的模拟交易平台，' +
        '建立服务多层次投资者的健康生态体系，跟国内外金融机构、企业合作，实现全球投资顾问、交易的一体化。'
  },
  {
    id: 9,
    companyName: '商汤科技',
    companyCity: '北京',
    companyAddress: '海淀区理想国际大厦',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '发展前景；团队实力；大平台',
    recruitJob: '计算机视觉工程师',
    recruitCount: '10+',
    requiredDegree: '本科',
    requiredExp: '经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1.开发增量学习系统，包括算法的设计,验证和调优;\n' +
        '2. 开发新的聚类算法, 包括新算法的开发, 优化；\n' +
        '3. 编写整理相关的开发文档及参与部门其他技术项目；\n' +
        '4.提出和实现最前沿的算法，保持算法在工业界和学术界的领先。',
    requiredSkillDesc: '1.具有良好的研究基础，包括具有深厚的数理基础。表现为参加过数学物理竞赛的训练和竞赛；\n' +
        '2.具有计算机视觉和机器学习的基础，表现为在知名会议上发表过文章；\n' +
        '3.具有扎实的算法实现能力；表现为参加过ACM 竞赛等。 以上三者占其二者优先。',
    salary: '18k-22k·15薪',
    publishTime: '2021/02/24',
    label: ['深度学习', '机器学习'],
    introduce: '人工智能服务,IT技术服务｜咨询/C轮',
    companyAvatar: require('./companyAvatar/shangtang.png'),
    companyPropaPic: require('./companyAvatar/shangtang-propa.png'),
    companyHomePage: 'https://www.sensetime.com/cn',
    abstract: '商汤作为人工智能行业的领跑者，在给客户提供人工智能相关产品或服务的同时，保护客户和商汤的数据资产不被泄露，' +
        '成为商汤信息安全领域的重要课题。商汤专门设立数据安全及个人信息保护委员会，严格执行数据安全的控制措施并落实推广，' +
        '不仅可为客户打造人工智能解决方案的行业标杆，也可打造产品隐私安全最值得信任的行业标杆！'
  },
  {
    id: 10,
    companyName: '当当网',
    companyCity: '北京',
    companyAddress: '朝阳区北三环东路8号静安中心8层',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '知名电商 发展空间大 福利丰厚 弹性制',
    recruitJob: '数据开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '经验不限',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责搜索引擎数据平台的研发工作；\n' +
        '2、根据产品需求设计技术实现并完成相应的编码工作。',
    requiredSkillDesc: '1、国家公办**本科及以上学历，3年以上研发经验\n' +
        '2、精通算法设计、数据结构、操作系统等基础知识；\n' +
        '3、熟悉Scala/Java/Python/C/C++/等其中的一种，熟悉Shell脚本；\n' +
        '4、熟悉Hbase/MongoDB/Redis等其中的一种，熟悉Kafka。\n' +
        '5、具有搜索系统、推荐系统开发经验优先考虑。',
    salary: '20k-25k·13薪',
    publishTime: '2021/02/25',
    label: ['数据开发', 'Python', 'Hbase'],
    introduce: '电商平台/上市公司',
    companyAvatar: require('./companyAvatar/dangdang.png'),
    companyPropaPic: require('./companyAvatar/dangdang-propa.png'),
    companyHomePage: 'http://www.dangdang.com/',
    abstract: '当当是知名的综合性网上购物商城，从1999年11月正式开通至今，当当已从早期的网上卖书拓展到网上卖各品类百货，' +
        '包括图书音像、美妆、家居、母婴、服装和3C数码等几十个大类，数百万种商品。物流方面，当当在全国600个城市实现“111全天达”，' +
        '在1200多个区县实现了次日达，货到付款(COD)方面覆盖全国2700个区县'
  },
  {
    id: 11,
    companyName: '滴滴',
    companyCity: '北京',
    companyAddress: '海淀区尚东数字山谷B区1号楼',
    companyScale: '2000人以上',
    companyType: '国有企业',
    companyWelfare: '出行巨头，专业的设计团队，颜值爆表',
    recruitJob: 'UI设计师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '经验不限',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责滴滴金融产品的界面设计工作。包括Web 、安卓、iOS、Win OS、Mac OS，从设计策略到设计执行的全流程工作；\n' +
        '2、与产品经理一起构思创意视觉方案及问题解决方案，最终产出高质量设计稿；\n' +
        '3、关注设计前沿趋势，对UI设计流行趋势有敏锐的洞察力，研究目标用户的需求，体验诉求与审美喜好；\n' +
        '4、关注数据及用户反馈，为最终的用户体验质量负责，有系统化的设计思维方式。\n',
    requiredSkillDesc: '1、本科及以上学历，设计类相关专业；3年以上的互联网或移动互联网设计经验；\n' +
        '2、有中大型上线产品设计经验；3,有特殊技能者优先（动效、C4D、插画等等）\n',
    salary: '20k-25k·13薪',
    publishTime: '2021/02/25',
    label: ['界面设计', 'UI', 'C4D'],
    introduce: '旅游｜出行',
    companyAvatar: require('./companyAvatar/didi.png'),
    companyPropaPic: require('./companyAvatar/didi-propa.png'),
    companyHomePage: 'http://www.dangdang.com/',
    abstract: '当当是知名的综合性网上购物商城，从1999年11月正式开通至今，当当已从早期的网上卖书拓展到网上卖各品类百货，' +
        '包括图书音像、美妆、家居、母婴、服装和3C数码等几十个大类，数百万种商品。物流方面，当当在全国600个城市实现“111全天达”，' +
        '在1200多个区县实现了次日达，货到付款(COD)方面覆盖全国2700个区县'
  },
  {
    id: 12,
    companyName: '百度',
    companyCity: '北京',
    companyAddress: '北京海淀区百度大厦',
    companyScale: '2000人以上',
    companyType: '国有企业',
    companyWelfare: '百度核心技术部门',
    recruitJob: 'C++开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '经验不限',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '-负责百度广告业务创新和检索系统核心技术创新与优化\n' +
        '-参与大型分布式广告检索引擎的架构设计和优化，支撑数十亿请求压力的高可靠系统的研发，支持秒级别实时索引系统的研发\n' +
        '-构建海量广告数据存储、计算和传输平台，构建用户行为中心，挖掘上亿网民的行为数据\n' +
        '-研发世界最先进的流式计算系统，实时处理亿万网民的海量日志数据\n' +
        '-对现有系统的不足进行分析，找到目前系统的瓶颈,改进商务搜索引擎的算法，提高系统性能',
    requiredSkillDesc: '-计算机或相关专业硕士及以上学历\n' +
        '-熟悉C/C++语言编程，对数据结构和算法设计有较为深刻的理解\n' +
        '-熟悉网络编程、多线程编程技术，有大规模系统开发和设计经验\n' +
        '-熟悉大规模数据挖掘、机器学习、分布式计算等相关技术，有研究或应用实际工作经验者优先\n' +
        '-优秀的分析和解决问题的能力，对挑战性问题充满激情\n' +
        '-良好的团队合作精神，较强的沟通能力',
    salary: '18k-23k·13薪',
    publishTime: '2021/02/25',
    label: ['C++', '分布式', '数据挖掘'],
    introduce: '人工智能服务,信息检索,科技金融',
    companyAvatar: require('./companyAvatar/baidu.png'),
    companyPropaPic: require('./companyAvatar/baidu-propa.png'),
    companyHomePage: 'http://www.dangdang.com/',
    abstract: '当当是知名的综合性网上购物商城，从1999年11月正式开通至今，当当已从早期的网上卖书拓展到网上卖各品类百货，' +
        '包括图书音像、美妆、家居、母婴、服装和3C数码等几十个大类，数百万种商品。物流方面，当当在全国600个城市实现“111全天达”，' +
        '在1200多个区县实现了次日达，货到付款(COD)方面覆盖全国2700个区县'
  },
  {
    id: 13,
    companyName: '拼多多',
    companyCity: '上海',
    companyAddress: '长宁区娄山关路533号金虹桥国际中心',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '核心业务团队',
    recruitJob: 'Java开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责新媒体业务平台系统设计，核心代码开发，系统优化等工作；\n' +
        '2、负责系统高可用，扩展性等系统方案设计及系统改造工作；\n' +
        '3、解决高并发、大流量、大数据量、业务模型复杂等带来的各种技术难点；',
    requiredSkillDesc: '1、三年以上java web开发的经验，精通常用的技术框架，熟悉Linux下的常用命令，熟悉MySQL；\n' +
        '2、技术功底深厚，精通io、多线程、网络等基础技术，精通分布式、缓存、消息、搜索等机制；\n' +
        '3、熟悉高并发、高性能的分布式系统的设计及应用、调优，有相关的实践经验；\n' +
        '4、善于发现架构设计中存在的问题，并给出有效的解决措施和方法；\n' +
        '5、具有较强的抽象设计能力，思路清晰，善于思考;\n' +
        '6、能承受一定的工作压力，有责任心，有担当，执行力强，乐于分享；',
    salary: '22k-30k·13薪',
    publishTime: '2021/02/25',
    label: ['Java', '后端', '服务器端'],
    introduce: '电商平台/上市公司',
    companyAvatar: require('./companyAvatar/pinduoduo.png'),
    companyPropaPic: require('./companyAvatar/pinduoduo-propa.png'),
    companyHomePage: 'https://www.pinduoduo.com/',
    abstract: '  拼多多是隶属于上海寻梦信息技术有限公司的一家商家入驻模式的第三方移动电商平台，也是以人为先的新电商开创者。' +
        '在以人为先的理念下，拼多多将娱乐与分享的理念融入电商运营中：用户发起邀请，在与朋友、家人、邻居等拼单成功后，' +
        '能以更低的价格买到优质商品；同时拼多多也通过拼单了解消费者，通过机器算法进行精准推荐和匹配。'
  },
  {
    id: 14,
    companyName: '蔚蓝云创',
    companyCity: '上海',
    companyAddress: '徐汇区徐汇区漕宝路36号幸福里谊园G-F楼',
    companyScale: '150-500人',
    companyType: '上市公司',
    companyWelfare: '团队年轻、待遇优厚、年度旅游、带薪年假',
    recruitJob: 'PHP后端开发工程师 ',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '参与公司自主研发的saas产品\n' +
        '参与小程序、webapp、网站等相关业务的开发以及维护',
    requiredSkillDesc: '3年以上php研发相关经验\n' +
        '熟悉PHP语言的开发工作，熟悉php主流框架\n' +
        '丰富的web应用系统设计经验',
    salary: '15k-22k·13薪',
    publishTime: '2021/02/25',
    label: ['PHP', 'webapp', 'saas'],
    introduce: '营销服务｜咨询',
    companyAvatar: require('./companyAvatar/weilan.png'),
    companyPropaPic: require('./companyAvatar/weilan-propa.png'),
    companyHomePage: 'http://www.vlanddigital.com/',
    abstract: '蔚蓝云创（上海）数字科技有限公司是中国4A成员、中国商务广告协会数字营销委员会(CAAC)成员、' +
        '中国商务广告协会数字营销委员会东南秘书处秘书长单位，在广告行业拥有较高的品牌知名度及市场地位。' +
        '蔚蓝云创凭借专业的整合营销服务能力，为客户提供广告代理、品牌策划及全媒体整合营销、自媒体平台运营、互联网数字精准营销、' +
        '全流程创意综合营销等服务，服务2000家多家客户，得到了国民经济重要领域众多大型知名企业客户的长期认可，' +
        '客户涵盖房产、家居、交通、金融、百货、快消等全行业。'
  },
  {
    id: 15,
    companyName: '链家',
    companyCity: '上海',
    companyAddress: '上海徐汇区宛平南路261号链家',
    companyScale: '2000人以上',
    companyType: 'C轮',
    companyWelfare: '每月团建 带薪探亲假 现金奖励 出国游',
    recruitJob: '销售顾问 ',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '①负责客户接待、咨询工作，为客户提供专业的房地产置业咨询服务；\n' +
        '②负责公司房客源开发与积累，并与客户建立良好的业务合作关系；\n' +
        '③负责线上渠道的房产信息维护，打造公司及个人的专业品牌；\n' +
        '④了解客户需求，促成房产（一手、二手、新房、豪宅、海外、商铺...）买卖或租赁业务，为客户提供优质的购房/租房体验；',
    requiredSkillDesc: '①**本科及以上学历\n' +
        '②善于沟通，有较强的语言表达能力；\n' +
        '③亲和力强，有良好的判断力和职业操守；\n' +
        '④有较强的进取心、学习能力，勇于挑战自我，不甘平庸；\n' +
        '⑤有较强的服务意识，做事认真踏实，为人正直诚恳。',
    salary: '8k-16k·13薪',
    publishTime: '2021/02/25',
    label: ['销售', '客户代表', '电话销售', '销售顾问'],
    introduce: '消费生活',
    companyAvatar: require('./companyAvatar/lianjia.png'),
    companyPropaPic: require('./companyAvatar/lianjia-propa.png'),
    companyHomePage: 'http://sh.lianjia.com/',
    abstract: '链家目前已覆盖北京、上海、广州、深圳、天津、成都、青岛、重庆、大连、合肥等28个地区，全国门店数量约8000家，' +
        '旗下经纪人超过13万名。为不断提高购房服务体验，链家积极布局线上平台。目前线上已覆盖PC端、链家APP、链家网手机版等终端，' +
        '是具备集房源信息搜索、产品研发、大数据处理、服务标准建立为一体的综合型房产服务平台。'
  },
  {
    id: 16,
    companyName: '即刻',
    companyCity: '上海',
    companyAddress: '杨浦区淞沪路303号6层',
    companyScale: '50-150人',
    companyType: 'C轮',
    companyWelfare: '出国outing 办公环境优秀 同事优秀',
    recruitJob: '后端工程师 Node.js',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '·为移动 App 设计和实现后端 API 接口；\n' +
        '·参与后端架构设计和产品的研发，开发高性能、高可靠性的服务；\n' +
        '·持续提升服务性能和改进业务架构。',
    requiredSkillDesc: '·熟悉常用数据结构和算法；\n' +
        '·熟悉 Javascript 语言；\n' +
        '·熟悉至少一种关系型或非关系型数据库；\n' +
        '·熟悉服务端缓存技术如 Redis；\n' +
        '·良好的编码和测试习惯；',
    salary: '18k-26k·13薪',
    publishTime: '2021/02/25',
    label: ['Node.js', '后端', '高性能', 'Javascript'],
    introduce: '社交平台',
    companyAvatar: require('./companyAvatar/jike.png'),
    companyPropaPic: require('./companyAvatar/jike-propa.png'),
    companyHomePage: 'http://sh.lianjia.com/',
    abstract: '链家目前已覆盖北京、上海、广州、深圳、天津、成都、青岛、重庆、大连、合肥等28个地区，全国门店数量约8000家，' +
        '旗下经纪人超过13万名。为不断提高购房服务体验，链家积极布局线上平台。目前线上已覆盖PC端、链家APP、链家网手机版等终端，' +
        '是具备集房源信息搜索、产品研发、大数据处理、服务标准建立为一体的综合型房产服务平台。'
  },
  {
    id: 17,
    companyName: '掌门教育',
    companyCity: '上海',
    companyAddress: '虹口区海伦路金融街 D座6楼',
    companyScale: '2000人以上',
    companyType: 'D轮及以上',
    companyWelfare: '在线教育独角兽核心研发团队',
    recruitJob: '大数据开发工程师',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1.负责部门数据团队建设、业务领域核心数据体系的规划设计，在数据化运营和数据能力产品化等方向上，制定数据技术和服务的策略；\n' +
        '2.规划数据服务工具提升数据研发的工作效率，搭建数据服务的工具和产品，赋能业务、产品和技术团队，灵活支撑业务的创新和探索，提升数据价值；\n' +
        '3.负责数据质量、稳定性等数据治理，推动数据标准规范落地执行；',
    requiredSkillDesc: '1. 5年以上数据开发岗位的经验，对数据仓库、数据平台、数据分析、数据挖掘、深度学习、NLP等领域有深刻的理解，精通数据建模及ETL设计开发；\n' +
        '2. 能够对公司业务有较好的理解能力，对数据业务场景非常敏感，能结合业务和技术创新，全局地规划或完善数据服务体系以解决业务的问题；\n' +
        '3. 熟悉大数据技术体系，对 Flink、Hadoop、Hdfs、MapReduce、Yarn、Hive、Tez、Spark、Kafka、Flume、Fluentd 等组件/技术中的一个或者多个有深入理解。',
    salary: '18k-26k·15薪',
    publishTime: '2021/02/25',
    label: ['在线教育', '教育｜培训', '移动互联网', '算法'],
    introduce: '在线教育/D轮及以上',
    companyAvatar: require('./companyAvatar/zhangmen.png'),
    companyPropaPic: require('./companyAvatar/zhangmen-propa.png'),
    companyHomePage: 'http://sh.lianjia.com/',
    abstract: '链家目前已覆盖北京、上海、广州、深圳、天津、成都、青岛、重庆、大连、合肥等28个地区，全国门店数量约8000家，' +
        '旗下经纪人超过13万名。为不断提高购房服务体验，链家积极布局线上平台。目前线上已覆盖PC端、链家APP、链家网手机版等终端，' +
        '是具备集房源信息搜索、产品研发、大数据处理、服务标准建立为一体的综合型房产服务平台。'
  },
  {
    id: 18,
    companyName: 'UCloud',
    companyCity: '上海',
    companyAddress: '杨浦区隆昌路619号10号楼B座 D座6楼',
    companyScale: '500-2000人',
    companyType: 'D轮及以上',
    companyWelfare: '福利完善、弹性工作制、上市公司',
    recruitJob: 'SRE工程师',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1. 解决UCloud后台大型分布式系统在运行时出现的问题，并通过自动化的处理来防止问题的重现，进而能更广泛而智能地应对系统中异常情况；\n' +
        '2. 提升UCloud大型公有云平台现网服务的可用性/可扩展性\n' +
        '3. 参与业务运维，解决现网问题、发布软件变更、设计容量规划、评估系统性能等，并通过软件工程方法建立相应系统解决运维问题\n' +
        '4. 参与自动化运营系统和工具的开发，熟悉性能分析和优化工具，参与UCloud公共组件和平台的研发和维护，并能对产品的架构和性能优化提出指导意见。',
    requiredSkillDesc: '1. 本科及以上学历，相关工作经验三年以上；\n' +
        '2. 对业务运维有一定的了解，对互联网开发运营的理念有相关经验；\n' +
        '3. 具备复杂问题的分析和排障能力；\n' +
        '4. 对大型分布式系统的开发与设计有兴趣；\n' +
        '5. 熟练掌握以下至少一种语言：C, C++, Go, Nodejs,Python, Java,Ruby等。',
    salary: '20k-30k·15薪',
    publishTime: '2021/02/25',
    label: ['云计算', '移动互联网', 'K8s/Docker', '运维开发'],
    introduce: '在线教育/D轮及以上',
    companyAvatar: require('./companyAvatar/ucloud.png'),
    companyPropaPic: require('./companyAvatar/ucloud-propa.png'),
    companyHomePage: 'http://www.ucloud.cn/',
    abstract: '链家目前已覆盖北京、上海、广州、深圳、天津、成都、青岛、重庆、大连、合肥等28个地区，全国门店数量约8000家，' +
        '旗下经纪人超过13万名。为不断提高购房服务体验，链家积极布局线上平台。目前线上已覆盖PC端、链家APP、链家网手机版等终端，' +
        '是具备集房源信息搜索、产品研发、大数据处理、服务标准建立为一体的综合型房产服务平台。'
  },
  {
    id: 19,
    companyName: '中国激光',
    companyCity: '上海',
    companyAddress: '嘉定区上海光学精密机械研究所 D座6楼',
    companyScale: '50-150人',
    companyType: '国有企业',
    companyWelfare: '高效工作氛围，清晰工作划分，独立发挥空间',
    recruitJob: '软件工程师',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、期刊集群全流程数字出版系统技术升级与实现；\n' +
        '2、专业资源数据库开发与维护优化；\n' +
        '3、期刊生产管理系统开发与维护；\n' +
        '4、网站开发和维护；',
    requiredSkillDesc: '1、计算机相关专业毕业，本科以上学历，不限经验。\n' +
        '2、精通C# 编程，喜欢尝试各种新特性，了解异步编程和并发处理优先。\n' +
        '3、 熟练运用ASP.Net/C#开发语言工具；熟练.Net相关框架技术；熟悉MVC，Webapi，WebService；对.Net Core有一定了解优先。\n' +
        '4、有网站设计经验，熟悉html，Javascript，CSS，XML编程，了解html5+css3等。\n' +
        '5、熟练掌握SQL Server数据库操作。',
    salary: '12k-15k·15薪',
    publishTime: '2021/02/25',
    label: ['.NET', 'C#', '学术服务', '国家试点平台'],
    introduce: '文化传媒/不需要融资',
    companyAvatar: require('./companyAvatar/jiguang.png'),
    companyPropaPic: require('./companyAvatar/jiguang-propa.png'),
    companyHomePage: 'http://www.opticsjournal.net/',
    abstract: '中国激光杂志社隶属于中国科学院上海光机所，是一个拥有七刊两网，以出版发行光电类学术期刊和行业期刊为特色，' +
        '以集群化和多元化媒体产品为发展方向的出版单位。自1964年起，中国激光杂志社已经连续出版光学期刊超过50年。' +
        '中国激光杂志社是新闻出版总署第一批数字出版转型示范单位，是上海市新闻出版文明单位'
  },
  {
    id: 20,
    companyName: '韩创科技',
    companyCity: '上海',
    companyAddress: '上海浦东新区尚博创意园东方路3539号',
    companyScale: '500-2000人',
    companyType: '上市公司',
    companyWelfare: '季度调薪，高成长，领导nice，交通方便',
    recruitJob: 'golang开发工程师 ',
    recruitCount: '10+',
    requiredDegree: '学历不限',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、采用Go语言(Golang)搭建开发稳健可扩展的后端程序；\n' +
        '2、通过单元测试、自动化以及代码审查等提升优化代码质量；\n' +
        '3、积极参与各种头脑风暴会议并对用到的技术、算法和产品功能提出意见和建议；\n' +
        '4、同产品和设计团队协作，理解用户需求，归纳功能用例，并转化为高效的技术解决方案；\n' +
        '5、重点及难点技术攻坚，并按时交付研究成果。',
    requiredSkillDesc: '1、计算机相关专业，两年以上后端开发经验；\n' +
        '2、熟悉Golang语言，有2年及以上Go实际项目经验；熟悉至少一个Golang web框架（例如Gin、beego等）；\n' +
        '3、扎实的算法、数据结构基础；\n' +
        '4、对设计模式有了解，熟悉网络编程、并发编程；\n' +
        '5、熟悉linix系统，具备发现和解决系统瓶颈的能力；\n' +
        '6、熟悉Nginx、Memcached、Redis、MQ 等组件，了解其原理及优缺点；\n' +
        '7、熟悉常见数据库(MySQL、MongoDB等）的设计使用和性能优化；',
    salary: '15k-22k·15薪',
    publishTime: '2021/02/25',
    label: ['Golang', 'gin', 'beego'],
    introduce: '内容社区/不需要融资',
    companyAvatar: require('./companyAvatar/hanchuang.png'),
    companyPropaPic: require('./companyAvatar/hanchuang-propa.png'),
    companyHomePage: 'http://www.opticsjournal.net/',
    abstract: '韩创科技（www.hanmaker.com）成立于2007年4月，一直聚焦在互联网设计领域，崇尚学习与创新的新一代互联网公司，' +
        '坚持以“阅读改变人生，知识成就梦想”的口号，同时也是国内真正实行“你的疯狂创业梦，韩创帮你来实现”的合伙人创业制度的公司。'
  },
  {
    id: 21,
    companyName: '微盟',
    companyCity: '上海',
    companyAddress: '宝山区长江路258号中成智谷创意园区B1栋微盟大厦',
    companyScale: '500-2000人',
    companyType: '上市公司',
    companyWelfare: '带薪病假、带薪年假、年度体检、周末双休',
    recruitJob: '项目经理',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、制定项目工作规划。制定详细的项目工作计划，包括需求调研及分析、系统设计、进度管理、质量管理、制定和项目技术方案的全过程；\n' +
        '2、组织项目开展。明确项目组内各成员的分工职责，指导并督促各端能按计划有序进行，定期召开项目会议，做好项目阶段总结，跟进项目进度和质量；\n' +
        '3、负责项目风险评估、预警。负责组织新项目风险评估，规划，正确识别干系人，预估项目风险，预研处理方案并协调处理。针对项目执行过程中突发的问题及时解决和调整；',
    requiredSkillDesc: '1、本科以上学历，计算机或理工科专业优先；\n' +
        '2、3年以上项目经理经验，具备PMI认证；具备SAAS软件行业或者新零售行业的相关经验优先；\n' +
        '3、具有良好的文档编写能力和交流能力；\n' +
        '4、具备强烈的责任心、敬业精神和抗压能力；',
    salary: '10k-20k·13薪',
    publishTime: '2021/02/25',
    label: ['营销服务', '软件服务', 'PMI'],
    introduce: '营销服务｜咨询/上市公司',
    companyAvatar: require('./companyAvatar/weimeng.png'),
    companyPropaPic: require('./companyAvatar/weimeng-propa.png'),
    companyHomePage: 'https://www.weimob.com/',
    abstract: '微盟，国内领先的微信开发服务商。凭借着丰富的产品功能、全新的产品设计、快速的产品创新、超出用户期待的产品价值，' +
        '基于微信为企业提供开发、运营、培训、推广一体化解决方案。 微盟软件——提供SAAS互联网解决方案：商业云，营销云，销售云 ' +
        '微盟盟聚——基于移动社交的精准营销解决方案 还有更多的业务孵化ing....'
  },
  {
    id: 22,
    companyName: '海万科技',
    companyCity: '上海',
    companyAddress: '静安区共和新路1481号',
    companyScale: '500-2000人',
    companyType: '上市公司',
    companyWelfare: '带薪病假、带薪年假、年度体检、周末双休',
    recruitJob: '前端开发工程师',
    recruitCount: '10+',
    requiredDegree: '大专及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责线下业务H5模块和其他产品前端的架构设计和开发工作；\n' +
        '2、负责插件开发，模块化框架设计与开发；\n' +
        '3、负责Web App及混合App的前沿技术研究和新技术调研。',
    requiredSkillDesc: '1、熟练运用JavaScript语言与HTML5、CSS3等技术；\n' +
        '2、熟悉模块化、前端编译和构建工具，熟练运用主流的移动端JS库和开发框架，并深入理解其设计原理；\n' +
        '3、能提供完善的WebApp和混合App（JS方向）技术方案，了解服务端（node/java或其他语言）或native移动应用开发；\n' +
        '4、对技术有强烈的进取心，具有良好的沟通能力和团队合作精神、优秀的分析问题和解决问题的能力；\n' +
        '5、开源项目开发经验者优先。',
    salary: '15k-25k·16薪',
    publishTime: '2021/02/25',
    label: ['软件服务', '前端开发', '移动端', 'Web前端'],
    introduce: '软件服务｜咨询,IT技术服务/D轮及以上',
    companyAvatar: require('./companyAvatar/haiwan.png'),
    companyPropaPic: require('./companyAvatar/haiwan-propa.png'),
    companyHomePage: 'https://www.tianyancha.com/company/2965251213',
    abstract: '公司科技立足于上海，在北京、南京、成都深圳等地设立有分公司，目前在职人员规模超过1000人。公司业务范围是证券、' +
        '银行、保险、基金、期货、电力等行业的核心软件的开发、服务。公司的软件产品包括注册过户系统、销售系统、电子商务平台、' +
        '基金数据中心、客户关系管理系统等，也为我们的客户提供专业的业务流程外包服务。'
  },
  {
    id: 23,
    companyName: '医相随',
    companyCity: '上海',
    companyAddress: '闵行区宜山路2016号1号楼',
    companyScale: '15-50人',
    companyType: 'A轮',
    companyWelfare: '药品电商,投资机构投资,领导扁平',
    recruitJob: '前端开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、负责移动端（公众号及小程序开发）、PC端的开发、维护和优化工作；\n' +
        '2、负责搭建高性能、高可用和安全的前端开发框架，持续提升前端开发的效率和质量；\n' +
        '3、深入理解业务需求，UI设计和用户体验, 主导开发整个项目的前端框架。',
    requiredSkillDesc: '1、本科以上学历，精通Web前端开发，实践经验丰富，2年以上web前端开发经验；\n' +
        '2、熟练掌握HTML5/CSS3/ES6 语法和常用技术；\n' +
        '3、深刻理解web标准，熟练掌握不同端及浏览器之间的兼容性；\n' +
        '4、精通vue，react、bootstrap、webpack等框架及工具；\n' +
        '5、对跨平台开发如flutter等有一定的了解；\n' +
        '6、对HTTP和相关的其他底层网络协议有比较全面的了解；',
    salary: '15k-18k·16薪',
    publishTime: '2021/02/25',
    label: ['在线医疗', '前端开发', '移动端', 'Vue'],
    introduce: '在线医疗/A轮',
    companyAvatar: require('./companyAvatar/yixiangsui.png'),
    companyPropaPic: require('./companyAvatar/yixiangsui-propa.png'),
    companyHomePage: 'https://www.tianyancha.com/company/2329171890',
    abstract: '作为致力于移动端医疗服务，基于移动互联网技术整合下的医疗服务平台，通过互联网连接医院、医生、患者，' +
        '促进三者间信息的高效共享，并提供最领先、最受信任的移动医疗服务，构建新型的中国医患关系和全新的移动互联网医疗服务模式，' +
        '打造公众就医及健康生活平台和良性互动的医疗服务与健康产业生态圈。'
  },
  {
    id: 24,
    companyName: '天地宽视',
    companyCity: '上海',
    companyAddress: '浦东新区金豫路251号2F',
    companyScale: '500-2000人',
    companyType: 'A轮',
    companyWelfare: '物联网 技术大牛多',
    recruitJob: '单片机开发工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、 负责物联网/智能家居终端设备的软件开发工作；\n' +
        '2、负责相关平台中的RTOS，以及相关单片机开发工作；\n' +
        '3、 进行软件设计和编码等工作；\n' +
        '4、 进行软件代码维护、优化等工作；\n' +
        '5、 参与相关质量活动、确保设计和实现按时保质完成；',
    requiredSkillDesc: '1、计算机、电子信息等专业，本科及以上学历；\n' +
        '2、1年及以上单片机开发经验，精通C语言；\n' +
        '3、熟悉单片机外围接口，精通iic/spi/uart等通信协议，具备协议设计能力；\n' +
        '4、有音视频产品及GUI产品开发经验更佳；\n' +
        '5、思路清晰，肯专研、吃苦耐劳、性格乐观、积极向上、能够承受一定的工作压力。',
    salary: '8k-10k·14薪',
    publishTime: '2021/02/25',
    label: ['C', '智能硬件', '单片机'],
    introduce: '硬件/A轮',
    companyAvatar: require('./companyAvatar/tiandi.png'),
    companyPropaPic: require('./companyAvatar/tiandi-propa.png'),
    companyHomePage: 'https://www.qualvision.cn/',
    abstract: '公司于2009年在上海成立，由多位原世界500强企业管理层人员投资创建，当前上海研发中心有研发员工200人，销售人员近50人。有大量华为，中兴等高素质人才加入。\n' +
        '公司聚焦于安防领域（视频监控/智能楼宇/智能家居），通过第一个三年发展，已成为细分领域的隐形冠军，销售额过亿。当前处于第三个三年发展中，并积极筹备融资/上市。'
  },
  {
    id: 25,
    companyName: '富力地产',
    companyCity: '广州',
    companyAddress: '天河区广州市天河区富力中心',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '团队靠谱，平台靠谱，新业务大有可为',
    recruitJob: 'NLP算法工程师',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、组织开展对地产垂直领域存量数据以及爬取的互联网数据进行数据预处理的工作；\n' +
        '2、应用自然语言处理技术，对具有业务含义的文本进行关键信息提取，负责相应算法的实现与优化，提高其准确度与适用率；\n' +
        '3、按照指定业务场景和业务需求进行数据建模并落地；\n' +
        '4、负责文本分析、挖掘等技术领域的研究和知识的积累，并尝试与实际业务场景相结合。',
    requiredSkillDesc: '1. 统计学、数学或计算机相关专业，本科以上学历；\n' +
        '2. 掌握主流NLP模型（BERT/Transformer）和框架（TensorFlow、Pytorch等），具备3年以上相关经验（包括但不限于文本分类，文本聚类、文本归纳等NLP应用场景）；\n' +
        '3. 熟悉NLP开发处理流程，熟练掌握至少一种编程语言（C++、Java、Python等），有扎实的算法基础；',
    salary: '20k-35k·14薪',
    publishTime: '2021/02/25',
    label: ['文字识别', '自然语言处理', 'TensoFlow'],
    introduce: '房地产｜建筑｜物业/上市公司',
    companyAvatar: require('./companyAvatar/fuli.png'),
    companyPropaPic: require('./companyAvatar/fuli-propa.png'),
    companyHomePage: 'http://www.rfchina.com/',
    abstract: '广州富力地产股份有限公司（以下简称“富力”）（香港联合交易所上市编号：2777）成立于1994年，注册资金8.06亿人民币，' +
        '集房地产设计、开发、工程监理、销售、物业管理、房地产中介等业务为一体，拥有国家建设部颁发的一级开发资质、甲级设计资质、甲级工程监理资质、' +
        '一级物业管理资质及一级房地产中介资质,是中国综合实力最强的房地产企业之一。'
  },
  {
    id: 26,
    companyName: '凡科',
    companyCity: '广州',
    companyAddress: '海珠区工业大道北67号凤凰创意园',
    companyScale: '500-2000人',
    companyType: '上市公司',
    companyWelfare: '福利待遇好,工作氛围好,各种团建,专业培训',
    recruitJob: '测试工程师（营销业务）',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、依据需求文档及设计文档，编写测试用例；\n' +
        '2、依据测试用例执行手工测试，反馈跟踪产品BUG及用例缺陷，协助开发人员定位及修复bug，并做好回归测试，并提交测试报告；\n' +
        '3、对测试中发现的问题进行详细分析和准确定位，与开发人员讨论缺陷解决方案；\n' +
        '4、协助开发人员定位及修复bug，并做好回归测试；\n' +
        '5、对测试结果进行总结与统计分析，对测试进行跟踪，并提出反馈意见。',
    requiredSkillDesc: '1、计算机及相关专业毕业，有扎实的计算机基础知识；\n' +
        '2、熟悉常用软件测试工具，熟悉测试分析技术，有较强的逻辑分析能力和总结能力；\n' +
        '3、规范编写项目测试计划、测试用例、测试报告，熟悉常用缺陷管理工具；\n' +
        '4、掌握基本的测试理论，熟悉软件测试的基本方法、流程和规范；\n' +
        '5、热爱软件测试工作，工作耐心、细致、认真。',
    salary: '10k-12k·14薪',
    publishTime: '2021/02/25',
    label: ['功能测试', 'Web测试', '小程序测试', '软件测试'],
    introduce: '人工智能服务',
    companyAvatar: require('./companyAvatar/fanke.png'),
    companyPropaPic: require('./companyAvatar/fanke-propa.png'),
    companyHomePage: 'https://www.fkw.com/',
    abstract: '凡科建站一直专注用户体验，升级产品功能，已累计服务上千万个网站，发展成为自助建站第一品牌。免费注册即可拥有电脑网站、' +
        '手机网站、微信网站，涵盖所有行业，满足企业官网、推广产品、在线商城等全方位需求，凡科凭借对自助建站行业的深耕以及对互联网技术的深入研发'
  },
  {
    id: 27,
    companyName: '广州南天',
    companyCity: '广州',
    companyAddress: '天河区中山大道天河软件园建工路1号南天大厦五层',
    companyScale: '500-2000人',
    companyType: '上市公司',
    companyWelfare: '五险一金,年终奖金,带薪年假,节日福利',
    recruitJob: '系统工程师（应届）',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、参与集成项目实施；\n' +
        '2、协助项目经理达成项目目标管理工作；\n' +
        '3、完成公司安排的其它任务。',
    requiredSkillDesc: '1、计算机相关专业；\n' +
        '2、了解TCP/IP协议体系，熟悉静态、动态等路由协议；\n' +
        '3、熟悉Office办公软件；\n' +
        '4、有CCNP或者同类认证证书者优先考虑。',
    salary: '8k-12k·14薪',
    publishTime: '2021/02/25',
    label: ['Linux', 'CCNP'],
    introduce: 'IT技术服务',
    companyAvatar: require('./companyAvatar/nantian.png'),
    companyPropaPic: require('./companyAvatar/nantian-propa.png'),
    companyHomePage: 'https://www.tianyancha.com/company/12066459',
    abstract: '作为南天在华南的区域平台，广州南天围绕行业客户进行战略布局和发展，为客户提供专业信息化建设的服务，' +
        '包括：行业应用软件开发（研发）、软硬件系统集成、测试、专业IT服务等。公司具备较强的行业应用软件研发、服务、系统集成与大客户管理、大型项目实施管理等能力。'
  },
  {
    id: 28,
    companyName: '佳都科技',
    companyCity: '广州',
    companyAddress: '天河区新岑四路2号佳都智慧大厦',
    companyScale: '2000人以上',
    companyType: '上市公司',
    companyWelfare: '上市公司+专业团队+有竞争力的薪酬福利',
    recruitJob: '产品售前工程师校招',
    recruitCount: '10+',
    requiredDegree: '本科及以上',
    requiredExp: '应届/在校/经验1-3年',
    requiredMajor: '计算机/软件/通信工程',
    jobDutyDetails: '1、支撑智慧城市相关领域（包括但不限于公安、交通、应急、政务、住建）技术交流、需求分析、方案落地与实施工作；\n' +
        '2、根据售前项目需求，进行需求调研、方案设计，编制项目技术方案；\n' +
        '3、依据客户需求，结合公司智慧城市产品，完成解决方案与售前的交流、进行产品演示与讲解培训，呈现方案价值，引导客户需求；\n' +
        '4、负责投标工作，分析采购招标文件，组织编写标书、完成项目招标；\n' +
        '5、结合市场情况，完成市场活动中的产品宣讲、与合作伙伴厂商的技术交流、日常工作的文件整理归档等。',
    requiredSkillDesc: '1、本科及以上学历，计算机、自动化、信息工程等相关专业，2021年应届毕业生；\n' +
        '2、熟悉CAD、Visio、office、Photoshop等办公软件操作；有良好的方案编制能力与文案功底；\n' +
        '3、性格大方，沟通表达能力强，有较好的责任心和抗压能力；',
    salary: '7k-10k·13薪',
    publishTime: '2021/02/25',
    label: ['售前', '技术支持', '企业软件'],
    introduce: '数据服务｜咨询,人工智能服务',
    companyAvatar: require('./companyAvatar/jiadu.png'),
    companyPropaPic: require('./companyAvatar/jiadu-propa.png'),
    companyHomePage: 'http://www.pci-suntektech.com/',
    abstract: '佳都新太科技股份有限公司是一家让刷脸无处不在，让地铁追上高铁，让创业触手可及的高速发展的沪市A股上市的高科技公司。' +
        'OFFICE 交通便利且宽敞舒适，每天您将享有公司的营养丰富的工作餐、多姿多彩的各类俱乐部活动;你将在这里锻炼各方面的能力，' +
        'follow最资深的导师，成长为专业领域大牛；您也将有机会接受三大管理人才蓄水池的培养项目，成为卓越的管理者或领导者；'
  }
]

export default jobData
