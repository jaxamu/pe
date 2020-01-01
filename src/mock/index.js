import Mock from 'mockjs'
import login from './login'
import dashboard from './dashboard'
import dash from './common.js'

// configure the Ajax request latency
Mock.setup({
  timeout: 300
})

// login
Mock.mock(/\/login\/login/, 'post', login.login)
Mock.mock(/\/login\/logout/, 'post', login.logout)
Mock.mock(/\/login\/info\.*/, 'get', login.getUserInfo)

// dashboard
Mock.mock(/\/sys\/log\/count/, 'get', dashboard.sysLogCount)

// getUserListApi user/select/search
Mock.mock(/\/select\/search/, 'get', dash.dash)

export default Mock
