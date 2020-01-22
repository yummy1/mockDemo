const Mock = require('mockjs')
const data = Mock.mock({
    //定义数据生成规则
    'memberList|2-6': [
        {
            'id|+1': 0,
            'name': '小毛',
            'phone|11': '8',
            'age|1-120': 1,
            'salary|6000-8000.1-3': 6000.2,
            'status|1': true,
            'open|2-4': true, //true的概率4/6，false的概率2/6
            'order|2-3': {'id': 1, 'price': 20, 'name': '订单1'},
            'idCard': /\d{15}|\d{18}/
        }
    ]
})
console.log( JSON.stringify(data, null, 2) )