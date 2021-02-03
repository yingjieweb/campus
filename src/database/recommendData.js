const recommendData = [
  {
    id: 1,
    jobs: 'web前端开发工程师',
    salary: '7k-13k·13薪',
    experience: '3-5年/本科',
    label: ['前端开发', 'HTML5', '移动端'],
    company: '扇贝',
    introduce: '移动互联网/教育/B轮/南京·玄武区',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 2,
    jobs: 'JAVA开发工程师',
    salary: '8k-15k',
    experience: '经验不限/本科',
    label: ['后端开发', '服务端'],
    company: '明略科技集团',
    introduce: '数据服务,广告营销/D轮及以上/2000人以上',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 3,
    jobs: '数据挖掘工程师',
    salary: '8k-16k',
    experience: '经验在校/应届 / 硕士',
    label: ['Oracle', '数据挖掘'],
    company: '大方电子',
    introduce: '企业服务,信息安全/未融资/150-500人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 4,
    jobs: '搜索算法工程师',
    salary: '20k-40k',
    experience: '经验不限/本科',
    label: ['模式识别', '搜索算法', '数据挖掘'],
    company: '锐仕方达',
    introduce: '企业服务,数据服务/不需要融资/2000人以上',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 5,
    jobs: '推荐流计算工程师',
    salary: '30k-60k',
    experience: '经验不限/本科',
    label: ['Spark Streamin', '机器学习', '推荐算法'],
    company: '众云网',
    introduce: '企业服务,信息安全/不需要融资/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 6,
    jobs: '图像识别工程师',
    salary: '15k-30k',
    experience: '1-3年/硕士',
    label: ['深度学习', '图片试别', 'Python'],
    company: '宝洲人工智能',
    introduce: '人工智能,软件开发/A轮/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 7,
    jobs: '自然语言处理',
    salary: '8k-13k',
    experience: '经验在校/应届/硕士',
    label: ['Python', 'CNN', 'RNN', 'TensoFlow'],
    company: '康信知识产权',
    introduce: '文娱丨内容/D轮及以上/2000人以上',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 8,
    jobs: '大数据工程师',
    salary: '8k-16k',
    experience: '经验在校/应届/硕士',
    label: ['大数据', '架构', 'Scala'],
    company: '惠科物业',
    introduce: '文娱丨内容/未融资/500-2000人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 9,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 10,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 11,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 12,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  },
  {
    id: 13,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png'),
    companyPropaPic: require('./companyAvatar/shanbei-propa.png'),
    abstract: '阿里健康信息技术有限公司，是阿里巴巴集团投资控股的公司之一。凭借阿里巴巴集团在电子商务、大数据和云计算领域的优势，' +
        '阿里健康以用户为核心，为医药健康行业提供全面的互联网解决方案。作为在线医药服务和医药O2O的先行者，' +
        '阿里健康正在打造完整的线上线下一体的医药健康服务网络。'
  }
]

export default recommendData
