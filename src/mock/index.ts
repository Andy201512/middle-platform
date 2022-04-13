//引入mockjs
import Mock, { Random } from "mockjs";

//拓展
Mock.Random.extend({
  phone: function() {
    let phonePrefixs = ['132', '186', '158']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/);
  },
  avatar: function() {
    let color = Mock.mock('@hex');
    let text = Mock.mock('@string("lower", 2)');
    return Random.image('32x32', color, text)
  }
})

//使用mockjs模拟数据
Mock.mock("http://localhost:3000/api/test",
  {
    time: "@datetime", //随机生成日期时间
    "score|1-800": 800, //随机生成1-800的数字
    "rank|1-100": 100, //随机生成1-100的数字
    "stars|1-5": 5, //随机生成1-5的数字
    nickname: "@cname", //随机生成中文名字
  }
);

Mock.mock("http://localhost:3000/api/user",
  {
    avatar: "@avatar",
    firstName: "@cfirst",
    lastName: "@clast",
    email: "@email",
    phone: "@phone"
  }
);