const studentData = [
  {
    id: 0,
    name: '管理员',
    studentNo: 'admin',
    password: 'admin',
    permission: 'admin'
  },
  {
    id: 1,
    name: '张钰鹏',
    gender: '男',
    grade: '2017',
    studentNo: '1871123',
    password: '1871123',
    permission: 'student',
    major: '软件工程',
    address: '江苏省无锡市',
    signCompany: '北京字节跳动',
    signJob: 'Java开发工程师',
    jobCity: '北京',
    phone: '18604920086',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 2,
    name: '艾德耀',
    gender: '男',
    grade: '2017',
    studentNo: '20171124',
    password: '20171124',
    permission: 'student',
    major: '软件工程',
    address: '山东省烟台市',
    signCompany: '车好多集团',
    signJob: '前端开发',
    jobCity: '南京',
    phone: '18563597865',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 3,
    name: '曹文浩',
    gender: '男',
    grade: '2017',
    studentNo: '20171125',
    password: '20171125',
    permission: 'student',
    major: '软件工程',
    address: '河北省衡水市',
    signCompany: '腾讯',
    signJob: '产品经理',
    jobCity: '深圳',
    phone: '13798656208',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 4,
    name: '宋清宇',
    gender: '男',
    grade: '2017',
    studentNo: '20171126',
    password: '20171126',
    permission: 'student',
    major: '软件工程',
    address: '河南省郑州市',
    signCompany: '美团',
    signJob: 'IOS开发',
    jobCity: '北京',
    phone: '18865972516',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 5,
    name: '特蕾莎',
    gender: '女',
    grade: '2017',
    studentNo: '20171127',
    password: '20171127',
    permission: 'student',
    major: '软件工程',
    address: '山东省济南市',
    signCompany: '美团',
    signJob: 'Android开发',
    jobCity: '北京',
    phone: '16851257841',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 6,
    name: '田卓',
    gender: '女',
    grade: '2017',
    studentNo: '20171128',
    password: '20171128',
    permission: 'student',
    major: '软件工程',
    address: '辽宁省沈阳市',
    signCompany: '网易',
    signJob: 'Android开发',
    jobCity: '武汉',
    phone: '17865238956',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 7,
    name: '王成宇',
    gender: '男',
    grade: '2017',
    studentNo: '20171129',
    password: '20171129',
    permission: 'student',
    major: '软件工程',
    address: '辽宁省大连市',
    signCompany: '小米',
    signJob: 'Android开发',
    jobCity: '广州',
    phone: '13792562066',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 8,
    name: '余欣然',
    gender: '女',
    grade: '2017',
    studentNo: '20171130',
    password: '20171130',
    permission: 'student',
    major: '软件工程',
    address: '北京市',
    signCompany: '百度',
    signJob: '推荐算法',
    jobCity: '北京',
    phone: '13962508868',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 9,
    name: '翟家林',
    gender: '女',
    grade: '2017',
    studentNo: '20171131',
    password: '20171131',
    permission: 'student',
    major: '软件工程',
    address: '天津市',
    signCompany: '滴滴',
    signJob: 'C++开发',
    jobCity: '北京',
    phone: '15862049989',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 10,
    name: '朱峻宁',
    gender: '男',
    grade: '2017',
    studentNo: '20171132',
    password: '20171132',
    permission: 'student',
    major: '软件工程',
    address: '四川省成都市',
    signCompany: '搜狐',
    signJob: '前端开发',
    jobCity: '成都',
    phone: '17852891238',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 11,
    name: '彭凯',
    gender: '男',
    grade: '2017',
    studentNo: '20171133',
    password: '20171133',
    permission: 'student',
    major: '软件工程',
    address: '浙江省杭州市',
    signCompany: '阿里巴巴',
    signJob: 'Go开发',
    jobCity: '杭州',
    phone: '13798589072',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  },
  {
    id: 12,
    name: '王晓芳',
    gender: '女',
    grade: '2017',
    studentNo: '20171134',
    password: '20171134',
    permission: 'student',
    major: '软件工程',
    address: '吉林省吉林市',
    signCompany: '爱奇艺',
    signJob: '测试开发',
    jobCity: '北京',
    phone: '15806483706',
    scores: {
      '软件工程专业概论': '88',
      '面向对象程序设计': '94',
      '程序设计基础': '94',
      '基础编程实训': '98',
      '离散数学': '99',
      '物理概论': '98',
      '高等数学①（一）': '90',
      '高等数学①（二）': '99',
      '线性代数': '88',
      '大学英语（1）': '81',
      '大学英语（2）': '96',
      '初级日语（1）': '99'
    }
  }
]

export default studentData
