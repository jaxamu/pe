// 校验群人数
export const astrictNumValid = (rule, v, cb) => {
  const value = v == null ? '' : v + ''
  if (value.trim().length === 0) {
    return cb(new Error('最大群成员数不能为空'))
  } else if (!(/^\d{1,3}$/.test(value) && value > 1 && value < 1001)) {
    return cb(new Error('最大群成员人数只能为2~1000间的正整数'))
  }
  cb()
}

// 0~99999正整数
export const isPosNum = (rule, v, cb) => {
  const value = v == null ? '' : v + ''
  console.log(isPosNum)
  if (value == null || value.trim().length === 0) {
    return cb(new Error('请输入0~9999999间的整数'))
  } else if (!(/^\d{1,7}$/.test(value) && value > -1 && value < 1000000)) {
    return cb(new Error('只能输入0~9999999间的正整数'))
  }
  cb()
}
// 0~99999数
export const numValid = (rule, v, cb) => {
  const value = v == null ? '' : v + ''
  if (value == null || value.trim().length === 0) {
    return cb(new Error('请输入0~9999999间的整数'))
  } else if (!(value > -1 && value < 1000000)) {
    return cb(new Error('只能输入0~9999999间的正整数'))
  }
  cb()
}
