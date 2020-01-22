const Mock = require('mockjs')
const data = Mock.mock({
    'empList|3': [
        {
            'id|+1':1,
            'name': '@cname',
            'price': '@float',
            'status': '@boolean',
            'birthday': '@date',
            'createData': '@date(yyyy/MM/dd HH:mm:ss)',
            'pic':'@image',
            'title': '@ctitle(3, 6)',
            'content': '@csentence(10, 50)',
            'url': '@url("http","maomao.com")',
            'domain': '@domain',
            'ip': '@ip',
            'area': '@region',
            'address': '@county(true)',
            'zipCode': '@zip',
            'phone|11': '@integer(0,9)'
        }
    ]
})
console.log(JSON.stringify(data, null, 2))
