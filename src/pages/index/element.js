/**
 * 按需引入 Element UI，避免打包体积过大
 * Doc:https://element.eleme.cn/#/zh-CN/component/quickstart 
 */

import Vue from 'vue'
import {
  Icon,
  Input,
  Checkbox,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'element-ui';

export default function initElementUI() {
  Vue.use(Icon)
  Vue.use(Input)
  Vue.use(Checkbox)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(DropdownItem)
}