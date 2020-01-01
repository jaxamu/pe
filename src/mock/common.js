import Mock from 'mockjs'
import { getParams } from '@/utils'

const data = Mock.mock({
  'userList|10': [
    {
      index: '@index',
      "id": '@ID',
      zip: '@zip',
      username: '@cname',
      'money|3000-8000.2':0,
      name: '@cname',
      department: '@region',
      starttime: '@datetime',
      state: '@integer(0, 1)',
      sex: '@integer(1, 2)',
      age: '@integer(16, 80)',
      email: '@email',
      areaname: '@province@city',
      areacode: ['hangzhou'],
      areaname: '杭州'
    }
  ],
  count: 40
})

var status = {
  success: true,
  code: 20000,
  data: {},
  message: '请求成功'
}

const dash = req => {
  var parm = getParams(req.url)
  // console.log('parm', parm)
  if (parm.pageIndex) {
    return { ...status, data: data }
  } else {
    return { ...status, success: false, message: '请求失败' }
  }
}
export default {
  dash
}
