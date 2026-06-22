/**
 * 微信云开发静态托管部署脚本
 * 
 * 使用方法：
 *   1. 确保已安装 @cloudbase/cli: npm i -g @cloudbase/cli
 *   2. 登录: cloudbase login
 *   3. 运行: node deploy-cloudbase.js
 * 
 * 或者直接在开发者工具云开发控制台手动上传
 */

const { execSync } = require('child_process')
const path = require('path')

const files = [
  'player.html',
  'replay.html'
]

const webviewDir = path.resolve(__dirname)

// 部署到云开发静态托管
files.forEach(file => {
  const filePath = path.join(webviewDir, file)
  console.log(`上传 ${file}...`)
  try {
    execSync(`cloudbase hosting deploy ${filePath} --dir /`, {
      cwd: webviewDir,
      stdio: 'inherit'
    })
    console.log(`  ✅ ${file} 上传成功`)
  } catch (e) {
    console.error(`  ❌ ${file} 上传失败:`, e.message)
  }
})

console.log('\n部署完成！')
console.log('访问地址类似：https://<env-id>.tcb.qcloud.la/player.html')
