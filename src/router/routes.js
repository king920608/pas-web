import Layout from '../layout'

/**
 * hidden: true                  如果设置为 true，该项菜单将不会显示在菜单栏中(默认为 false)
 * meta : {
    title: 'title'               菜单名
    icon: 'icon-name'            图标名
    fixed: true                  如果设置为 true，该项 tag 将一直存在 tag 栏中(默认为 false)
  }
 * */

export const asyncRoutes = [
  {
    path: '/form-table',
    name: 'FormTable',
    component: Layout,
    redirect: '/form-table/table-classic',
    hidden: true,
    meta: {
      title: '表格&表单',
      icon: 'vue-dsn-icon-biaoge'
    },
    children: [
      {
        path: 'table-classic',
        name: 'TableClassic',
        component: () => import('../views/form-table/TableClassic'),
        meta: {
          title: '综合表格'
        }
      },
      {
        path: 'form-list',
        name: 'FormList',
        component: () => import('../views/form-table/FormList'),
        meta: {
          title: '表单列表'
        }
      },
      {
        path: 'table-inline-edit',
        name: 'TableInlineEdit',
        component: () => import('../views/form-table/TableInlineEdit'),
        meta: {
          title: '行内编辑表格'
        }
      }
    ]
  },
  {
    path: '/excel',
    name: 'Excel',
    component: Layout,
    redirect: '/excel/export-excel',
    hidden: true,
    meta: {
      title: 'Excel',
      icon: 'vue-dsn-icon-excel'
    },
    children: [
      {
        path: 'export-excel',
        name: 'ExportExcel',
        component: () => import('../views/excel/ExportExcel'),
        meta: {
          title: '导出Excel'
        }
      },
      {
        path: 'import-excel',
        name: 'ImportExcel',
        component: () => import('../views/excel/ImportExcel'),
        meta: {
          title: '导入Excel'
        }
      }
    ]
  },
  {
    path: '/error-page',
    name: 'ErrorPage',
    component: Layout,
    redirect: '/error-page/page-401',
    meta: {
      title: '错误页面',
      icon: 'vue-dsn-icon-bug'
    },
    children: [
      {
        path: 'page-401',
        name: 'Page401',
        component: () => import('../views/error-page/401'),
        meta: {
          title: '401页面'
        }
      },
      {
        path: 'page-404',
        name: 'Page404',
        component: () => import('../views/error-page/404'),
        meta: {
          title: '404页面'
        }
      }
    ]
   }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
