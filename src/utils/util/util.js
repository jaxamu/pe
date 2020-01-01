/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */
import { validatenull } from './validate'
// import { baseUrl } from '@/config/env'

export const initMenu = (router, aMenu,this_) => {
  if (aMenu.length === 0) {
    return
  }
  var menus=formatRoutes(aMenu);
  this_.$router.options.routes = menus;
  // console.log(this_.$router.options.routes,99999999999)
  // console.log(menus)
  router.addRoutes(menus);
}

export const formatRoutes = aMenu => {
  const aRouter = []
  // console.log(aMenu)
  aMenu.forEach(oMenu => {
    const { path, component, name,icon,children } = oMenu;
    // console.log( '---------',oMenu, '---------')
    if (!validatenull(component)) {
      const oRouter = {
        path: path,
        component(resolve) {
          if (component === 'Layout') {
            require(['@/pages/dataShow'], resolve)
            return
          } else {
            require([`@/${component}.vue`], resolve)
          }
        },
        name: name,
        title: name,
        icon: icon,
        meta: oMenu.meta,
        children: validatenull(children) ? [] : formatRoutes(children)
      }

      aRouter.push(oRouter)
    }
  });
  // console.log(aRouter)
  return aRouter
}

/**
 * 加密处理
 */
export const encryption = params => {
  let { data, type, param, key } = params
  let result = JSON.parse(JSON.stringify(data))
  if (type === 'Base64') {
    param.forEach(ele => {
      result[ele] = btoa(result[ele])
    })
  } else {
    param.forEach(ele => {
      var data = result[ele]
      key = CryptoJS.enc.Latin1.parse(key)
      var iv = key
      //加密
      var encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })
      result[ele] = encrypted.toString()
    })
  }
  return result
}
//解密
export const Decrypt = word => {
  let key1 = CryptoJS.enc.Utf8.parse('1234567887654321')
  let decrypted = CryptoJS.AES.decrypt(word, key1, {
    iv: key1,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
}

/**
 * 设置浏览器头部标题
 */
export const setTitle = function(title) {
  title = title ? `${title}——后台管理系统` : '后台管理系统'
  window.document.title = title
}
/**
 * 浏览器判断是否全屏
 */
export const fullscreenToggel = () => {
  if (fullscreenEnable()) {
    exitFullScreen()
  } else {
    reqFullScreen()
  }
}
/**
 * esc监听全屏
 */
export const listenfullscreen = callback => {
  function listen() {
    callback()
  }
  document.addEventListener('fullscreenchange', function(e) {
    listen()
  })
  document.addEventListener('mozfullscreenchange', function(e) {
    listen()
  })
  document.addEventListener('webkitfullscreenchange', function(e) {
    listen()
  })
  document.addEventListener('msfullscreenchange', function(e) {
    listen()
  })
}

/**
 * 浏览器判断是否全屏
 */
// export const fullscreenEnable = () => {
//   var isFullscreen = document.fullscreenEnabled ||
//     window.fullScreen ||
//     document.mozFullscreenEnabled ||
//     document.webkitIsFullScreen
//   return isFullscreen
// }

/**
 * 浏览器全屏
 */
export const fullscreenEnable = () => {
  if (document.documentElement.requestFullScreen) {
    document.documentElement.requestFullScreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen()
  }
}

/**
 * 浏览器退出全屏
 */
export const reqFullScreen = () => {
  if (document.documentElement.requestFullScreen) {
    document.exitFullScreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.webkitCancelFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.mozCancelFullScreen()
  }
}

/**
 * 递归寻找子类的父类
 */
export const findParent = (menu, id) => {
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].children.length !== 0) {
      for (let j = 0; j < menu[i].children.length; j++) {
        if (menu[i].children[j].id === id) {
          return menu[i]
        } else {
          if (menu[i].children[j].children.length !== 0) {
            return findParent(menu[i].children[j].children, id)
          }
        }
      }
    }
  }
}

/**
 * 总体路由处理器
 */
// export const resolveUrlPath = (url, name) => {
//   let reqUrl = url
//   if (url.indexOf('#') !== -1 && url.indexOf('http') === -1) {
//     const port = reqUrl.substr(reqUrl.indexOf(':'))
//     reqUrl = `/myiframe/urlPath?src=${baseUrl}${port}${reqUrl
//       .replace('#', '')
//       .replace(port, '')}}&name=${name}`
//   } else if (url.indexOf('http') !== -1) {
//     reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`
//   } else {
//     reqUrl = `${reqUrl}`
//   }
//   return reqUrl
// }

/**
 * 总体路由设置器
 */
export const setUrlPath = $route => {
  let value = ''
  if ($route.query.src) {
    value = $route.query.src
  } else {
    value = $route.path
  }
  return value
}

/**
 * 动态插入css
 */
export const loadStyle = url => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

/**
 * 根据字典的value显示label
 */
export const findByvalue = (dic, value) => {
  let result = ''
  if (validatenull(dic)) return value
  if (typeof value === 'string' || typeof value === 'number') {
    let index = 0
    index = findArray(dic, value)
    if (index !== -1) {
      result = dic[index].label
    } else {
      result = value
    }
  } else if (value instanceof Array) {
    result = []
    let index = 0
    value.forEach(ele => {
      index = findArray(dic, ele)
      if (index !== -1) {
        result.push(dic[index].label)
      } else {
        result.push(value)
      }
    })
    result = result.toString()
  }
  return result
}

/**
 * 根据字典的value查找对应的index
 */
export const findArray = (dic, value) => {
  for (let i = 0; i < dic.length; i++) {
    if (dic[i].value === value) {
      return i
    }
  }
  return -1
}

/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000)
    .toString()
    .substr(0, typeof len === 'number' ? len : 4)
  if (date) random = random + Date.now()
  return random
}

//导出Excel 函数
// export const exportExcel = ({ data, header, key, name }) => {
//   function formatJson(key, data) {
//     return data.map(v => key.map(j => v[j]))
//   }
//   const { export_json_to_excel } = require('@static/util/Export2Excel')
//   const maindata = formatJson(key, data)
//   export_json_to_excel(header, maindata, name)
// }

// 合计百分比
export const percentage = () => {
  const footers = document.getElementsByClassName('el-table__footer-wrapper')
  const len = footers.length
  for (let i = 0; i < len; i++) {
    const tds = footers[i].getElementsByTagName('td')
    const num_1 = tds[1].textContent
    const num_2 = tds[2].textContent
    if (num_1 === '0') {
      tds[3].textContent = '0%'
    } else {
      tds[3].textContent = parseFloat(((num_2 / num_1) * 100).toFixed(1)) + '%'
    }
  }
}
