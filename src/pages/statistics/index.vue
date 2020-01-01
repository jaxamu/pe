<template>
  <i-card class="query-list" shadow>
    <div class="xzuo">
      <span class="wrap ">
        <span class="icon">
          <Icon type="md-analytics" />
        </span>
        <span class="content"> 数据统计 </span>
        <span class="width"></span>
      </span>
      <span class="sjx"></span><span class="sjx sxia"></span>
    </div>
    <i-spin size="large" fix v-if="spinShow" />
    <i-form class="query-list__search" ref="searchForm" label-position="right" :model="searchValue" :rules="searchRule" @keydown.enter.native="handleSearch" inline>
      <i-form-item class="search-btn" :label-width="20">
        <i-button @click="handleSearch">本月</i-button>
      </i-form-item>
      <i-form-item class="search-btn" :label-width="20">
        <i-button @click="handleSearch">本周</i-button>
      </i-form-item>
      <i-form-item class="search-btn" :label-width="20">
        <i-button @click="handleSearch">今日</i-button>
      </i-form-item>

      <i-form-item label="" :label-width="40" prop="userName">
        <i-input type="text" v-model="searchValue.userName" placeholder="会员ID" />
      </i-form-item>
      <i-form-item label="" prop="department">
        <i-input type="text" v-model="searchValue.department" placeholder="用户名" />
      </i-form-item>
      <i-form-item label="代理用户" class="lanse" :label-width="80" prop="department">
      </i-form-item>

      <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期段" style="width: 200px"></DatePicker>

      <i-form-item class="search-btn" :label-width="20">
        <i-button @click="handleSearch" class="backlan colorfff">查询</i-button>
      </i-form-item>
      <i-form-item class="search-btn " :label-width="10">
        <i-button @click="handleReset" class="backhuang colorfff">重置</i-button>
      </i-form-item>
    </i-form>

    <i-table ref="table" class="query-list__table" show-summary :summary-method="handleSummary" :loading="tableLoading" :columns="columns" :data="tableData" @on-selection-change="onTableSelectionChange" />

    <i-page class="query-list__page" show-total :total="totalCount" :page-size="pageSize" @on-change="onPageChange" />

  </i-card>
</template>

<script>
import Mock from 'mockjs'
import tableMixin from './tableMixin'
import UserEdit from './UserEdit'
import UserPassword from './UserPassword'
import {
  getUserListApi,
  addUserApi,
  updateUserApi,
  deleteUserApi,
  disbleUserApi
} from '@/api/list-page/queryList'

export default {
  name: 'statistics',

  mixins: [tableMixin],

  components: {
    UserEdit,
    UserPassword
  },

  filters: {},

  props: {},

  data() {
    return {
      columns: [
        // {
        //   type: 'selection',
        //   width: 60,
        //   align: 'center'
        // },
        {
          title: '序号',
          key: '_rowKey',
          align: 'center',
          render: (h, params) => {
            return h('strong', params.row._rowKey)
          }
        },
        {
          title: '会员ID',
          key: 'id',
          align: 'center',
          render: (h, params) => {
            return h('strong', params.row.zip)
          }
        },
        {
          title: '用户名',
          key: 'username',
          align: 'center',
          render: (h, params) => {
            return h('strong', params.row.username)
          }
        },
        {
          title: '直推代理',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '团队代理',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '直推用户充值',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '直推用户提现',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '直推用户起始金额',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '直推用户截止余额',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '直推用户盈利',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '团队用户充值',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '团队用户提现',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        {
          title: '团队用户盈利',
          key: 'money',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.money)
          }
        },
        // { title: '部门', key: 'department',align: 'center', },
        // { title: '注册时间', key: 'starttime', sortable: true, align: 'center' },
        // {
        //   title: '用户状态',
        //   key: 'state',
        //   align: 'center',
        //   render: (h, params) => {
        //     let isUseState = params.row.state
        //     if (isUseState) {
        //       return h('span', { style: { color: 'green' } }, '可用')
        //     } else {
        //       return h('span', { style: { clolr: 'red' } }, '不可用')
        //     }
        //   }
        // },
        // { title: '地址', key: 'areaname' ,align: 'center',},
      ],
      options2: {
        shortcuts: [
          {
            text: '本周',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: '本月',
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: '今日',
            value() {
              const end = new Date();
              const start = new Date();
              // start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          }
        ]
      },
      spinShow: true,
      searchValue: { userName: '', department: '', areaname: '' },
      searchRule: {
        userName: [{ type: 'string', message: '请输入关键字', trigger: 'blur' }],
        department: [{ type: 'string', message: '请输入关键字', trigger: 'blur' }],
        areaname: [{ type: 'string', message: '请输入关键字', trigger: 'blur' }]
      },
      canBatch: false,
      tableLoading: false,
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0,
      tableData: [],
      tableSelection: [],
      addPaneVisible: false,
      addSubmitLoading: false,
      editPaneVisible: false,
      editSubmitLoading: false,
      editorUserData: {},
      passwordPaneVisible: false,
      passwordSubmitLoading: false,
      passwordUsernameData: ''
    }
  },

  computed: {},

  watch: {},

  created() {
    this.upTableData().then(() => {
      this.spinShow = false
    })
  },

  mounted() {

  },

  updated() { },

  activated() { },

  deactivated() { },

  destroyed() { },

  methods: {
    handleSummary({ columns, data }) {
      const sums = {};
      columns.forEach((column, index) => {
        const key = column.key;
        if (index === 0) {
          sums[key] = {
            key,
            value: '合计'
          };
          return;
        }
        if (index === 1) {
          sums[key] = {
            key,
            value: ''
          };
          return;
        }
        const values = data.map(item => Number(item[key]));
        if (!values.every(value => isNaN(value))) {
          const v = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseInt(prev + curr);
            } else {
              return parseInt(prev);
            }
          }, 0);
          sums[key] = {
            key,
            value: v + ' 元'
          };
        } else {
          sums[key] = {
            key,
            value: 'N/A'
          };
        }
      });

      return sums;
    },
    handleSearch() {
      this.$refs.searchForm.validate(valid => {
        if (valid) {
          this.pageIndex = 1
          this.upTableData()
        }
      })
    },

    handleReset() {
      this.$refs.searchForm.resetFields()
    },

    onPageChange(page) {
      this.pageIndex = page
      this.upTableData()
    },

    onTableSelectionChange(selection) {
      this.canBatch = Boolean(selection.length)
      this.tableSelection = selection
    },

    onBatch(type) {
      let usernames = this.tableSelection.map(item => item.username)
      type === 'remove'
        ? this.removeUser(usernames)
        : type === 'disble'
          ? this.disbleUser(usernames)
          : false
    },

    exportExcel() {
      if (this.tableLoading) return false
      this.$refs.table.exportCsv({
        filename: `用户信息.csv`,
        original: false
      })
    },


    editUser(row) {
      this.editorUserData = row
      this.editPaneVisible = true
    },

    onEditSubmit(newUserInfo) {
      this.editSubmitLoading = true
      updateUserApi(newUserInfo).then(res => {
        if (res.data) {
          this.editPaneVisible = false
          this.$Message.success('修改用户信息成功~')
          this.upTableData()
        } else {
          this.$Message.error(res.message)
        }
        this.editSubmitLoading = false
      })
    },

    changeUserPassword(row) {
      this.passwordUsernameData = row.username
      this.passwordPaneVisible = true
    },

    onPasswordSubmit({ username, oldPassword, newPassword }) {
      this.passwordSubmitLoading = true
      updateUserApi({
        username,
        passwordold: oldPassword,
        password: newPassword
      }).then(res => {
        if (res.data) {
          this.$Message.success('修改密码成功~')
          this.passwordPaneVisible = false
        } else {
          this.$Message.error(res.message)
        }
        this.passwordSubmitLoading = false
      })
    },

    disbleUser(usernames) {
      this.$Modal.confirm({
        title: `确定禁用用户${usernames}`,
        onOk: () => {
          disbleUserApi({ usernames: [...usernames] }).then(res => {
            if (res.data) {
              this.canBatch = false
              this.$Message.success('禁用用户成功~')
              this.upTableData()
            } else {
              this.$Message.error(res.message)
            }
          })
        }
      })
    },

    removeUser(usernames) {
      this.$Modal.confirm({
        title: `确定删除用户${usernames}`,
        onOk: () => {
          deleteUserApi({ usernames: [...usernames] }).then(res => {
            if (res.data) {
              this.canBatch = false
              this.$Message.success('删除用户成功~')
              this.upTableData()
            } else {
              this.$Message.error(res.message)
            }
          })
        }
      })
    },

    upTableData() {
      // console.log('45564')
      this.tableLoading = !this.spinShow
      return this.getUserList(this.userListParams()).then(({ userList, count }) => {
        this.tableData = userList
        this.totalCount = count
        this.tableLoading = false
        return { userList, count }
      })
    },

    userListParams() {
      return {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        username: this.searchValue.userName,
        department: this.searchValue.department,
        areaname: this.searchValue.areaname
      }
    },

    async getUserList(params) {
      try {
        let response = await getUserListApi(params)
        // console.log(response)
        let { userList, count } = response.data
        return { userList, count }
      } catch (err) {
        // console.log('ccccc',err) // eslint-disable-line
        return err
      }
    }
  }
}
</script>

<style lang="less" scoped>
.xzuo {
  width: 100%;
  float: left;
}
.wrap {
  float: left;
  background: linear-gradient(0deg, #45379a, #6859ce, #7a6aef);
  height: 43 * 1.2px;
  padding: 13 * 1.2px 0 13 * 1.2px 20 * 1.2px;
  border-radius: 5 * 1.2px 2 * 1.2px 2 * 1.2px 0;
  font-size: 15 * 1.2px;
  .icon {
    font-size: 20 * 1.2px;
    display: inline-block;
    margin-top: -10 * 1.2px;
    color: #fff;
  }
  .content {
    font-size: 12 * 1.2px;
    vertical-align: top;
    color: #fff;
    padding: 0 5 * 1.2px;
  }
}
.width {
  display: inline-block;
  width: 25px;
}
.sjx {
  float: left;
  display: block;
  width: 0;
  height: 0;
  // border: 22px solid transparent;
  // border-left-color: #5446b1;
  position: relative;
  top: 0;
  right: 25px;
  border-top: 25px solid #fff;
  border-left: 25px solid transparent;
}
.sxia {
  top: 26px;
  left: -51px;
  border-top: none;
  border-left: none;
  border-bottom: 26px solid #fff;
  border-left: 26px solid transparent;
}
.ivu-icon-ios-calendar-outline:before {
  content: '\F368' !important;
  color: #d51b66;
}

.lanse.ivu-form-item .ivu-form-item-label {
  color: #d51b66;
}
.query-list {
  &__search {
    padding-top: 20px;
    margin-top: 53px;
  }

  &__table {
    border: none;

    .ivu-table:after {
      display: none;
    }
  }

  &__batch {
    padding: 10px 0 25px;

    .batch-btn {
      margin-right: 10px;
    }

    .export-btn {
      float: right;
    }
  }

  &__page {
    text-align: right;
    margin: 20px 0 10px;
  }
}
</style>
