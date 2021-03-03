import Vue from 'vue'
import { Button } from 'element-ui'
import { Card } from 'element-ui'
import { FormItem } from 'element-ui'
import { Form } from 'element-ui'
import { Input } from 'element-ui'
import { Message } from 'element-ui'
// home页面布局
import { Container } from 'element-ui'
import { Header } from 'element-ui'
import { Aside } from 'element-ui'
import { Main } from 'element-ui'
// 侧边导航栏
import { Menu } from 'element-ui'
import { Submenu } from 'element-ui'
import { MenuItemGroup } from 'element-ui'
import { MenuItem } from 'element-ui'

import { Breadcrumb } from 'element-ui'
import { BreadcrumbItem } from 'element-ui'
// 表格
import { Table } from 'element-ui'
import { TableColumn } from 'element-ui'
import { Switch } from 'element-ui'
import { Tooltip } from 'element-ui'


Vue.use(Button)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.prototype.$message = Message
