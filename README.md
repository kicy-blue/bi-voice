# 一、项目环境安装
# 1 根路径下安装依赖

npm install

# 2 下载项目依赖

npm run bootstrap

# 3 打包项目依赖包

npm run build


# 4 启动项目

# 4-1 editor
切换到项目路径： cd ./packages/editor
运行项目: npm start



# 二 lerna 命令相关

# 添加项目
# lerna add [@version] [--dev] [--exact]
添加项目依赖包。增加本地或者远程package做为当前项目packages里面的依赖

--dev devDependencies 替代 dependencies
--exact 安装准确版本，就是安装的包版本前面不带^, Eg: "^2.20.0" ➜ "2.20.0"


# lerna create < name > [loc]
创建一个包（name包名，loc 位置可选）
# lerna create gpnote 
创建一个包gpnote默认放在 workspaces[0]所指位置
# lerna create gpnote packages/@gp0320
创建一个包gpnote指定放在 packages/@gp0320文件夹下，注意必须在workspaces先写入packages/@gp0320，看上面

# lerna list
列出所有的包，如果与你文夹里面的不符，进入那个包运行yarn init -y解决

# lerna import
导入本地已经存在的包

# lerna link
项目包建立软链，类似npm link

# lerna clean
删除所有包的node_modules目录

# lerna changed
列出下次发版lerna publish 要更新的包

# lerna publish
会打tag，上传git,上传npm。 如果你的包名是带scope的例如："name": "@gp0320/gpwebpack", 那需要在packages.json添加


# 三 ract脚手架 create-react-app  
# 1、cra快速创建一个项目
npx create-react-app editor