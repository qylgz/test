import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
// import { ElButton } from 'element-plus'
// import { ElForm } from 'element-plus'
// import { ElFormItem } from 'element-plus'
// import { ElInput } from 'element-plus'
// import { ElMessage } from 'element-plus'
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus'


export default (app) => {
  locale.use(lang)
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
  app.config.globalProperties.$message = ElMessage
}
