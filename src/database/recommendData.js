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
    details: {
      welfare: '1. 我们会有各种分享会，产品、设计、技术、运营、英语大家一起交流；\n' +
          '2. 我们有一个专门的活动室，工作之余可以与小伙伴一起健身、运动；\n' +
          '3. 我们每天提供下午茶；\n' +
          '4. 我们提供人体工程学座椅， 办公电脑是Mac。',
      jobDescription: '1. 技术栈： nodejs + react + webpack；\n' +
          '2. 全面 docker 化：production，development，test 环境都是基于 docker；\n' +
          '3. 扇贝有完善的 API 文档；\n' +
          '4. 扇贝有非常严格的代码规范和代码 review 机制，不符合要求的代码全部要重写。 变量名，函数名，module 名都是 review 的对象；\n' +
          '5. 我们每个月至少有两次团队分享，我们也会积极参与到技术社区的分享中。',
      jobRequirement: '1. 熟练掌握 HTML，Javascript，CSS- 使用过 React、Vue 等框架中的至少一种；\n' +
          '2. 熟悉 Git 等工具；\n' +
          '3. 能够科学上网，独立通过 google，stackoverflow 等解决问题；\n' +
          '4. 遵守规范，有团队合作精神；\n' +
          '5. 热爱前端技术。',
      workAddress: '南京-玄武区-徐庄软件园',
      homePage: 'http://www.shanbay.com',
      otherInfo: ''
    }
  },
  {
    id: 2,
    jobs: 'JAVA开发工程师',
    salary: '8k-15k',
    experience: '经验不限/本科',
    label: ['后端开发', '服务端'],
    company: '明略科技集团',
    introduce: '数据服务,广告营销/D轮及以上/2000人以上',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 3,
    jobs: '数据挖掘工程师',
    salary: '8k-16k',
    experience: '经验在校/应届 / 硕士',
    label: ['Oracle', '数据挖掘'],
    company: '大方电子',
    introduce: '企业服务,信息安全/未融资/150-500人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 4,
    jobs: '搜索算法工程师',
    salary: '20k-40k',
    experience: '经验不限/本科',
    label: ['模式识别', '搜索算法', '数据挖掘'],
    company: '锐仕方达',
    introduce: '企业服务,数据服务/不需要融资/2000人以上',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 5,
    jobs: '推荐流计算工程师',
    salary: '30k-60k',
    experience: '经验不限/本科',
    label: ['Spark Streamin', '机器学习', '推荐算法'],
    company: '众云网',
    introduce: '企业服务,信息安全/不需要融资/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 6,
    jobs: '图像识别工程师',
    salary: '15k-30k',
    experience: '1-3年/硕士',
    label: ['深度学习', '图片试别', 'Python'],
    company: '宝洲人工智能',
    introduce: '人工智能,软件开发/A轮/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 7,
    jobs: '自然语言处理',
    salary: '8k-13k',
    experience: '经验在校/应届/硕士',
    label: ['Python', 'CNN', 'RNN', 'TensoFlow'],
    company: '康信知识产权',
    introduce: '文娱丨内容/D轮及以上/2000人以上',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 8,
    jobs: '大数据工程师',
    salary: '8k-16k',
    experience: '经验在校/应届/硕士',
    label: ['大数据', '架构', 'Scala'],
    company: '惠科物业',
    introduce: '文娱丨内容/未融资/500-2000人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 9,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 10,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 11,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 12,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  },
  {
    id: 13,
    jobs: 'Android开发工程师',
    salary: '8k-12k',
    experience: '经验不限/大专',
    label: ['移动端', 'Android', '移动端'],
    company: '博克软件',
    introduce: '企业服务,软件开发/上市公司/50-150人',
    companyAvatar: require('./companyAvatar/shanbei.png')
  }
]

export default recommendData
