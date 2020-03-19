## 安装步骤

1. `npx create-react-app my-app`
2. 集成`react-app-rewrited`

 - > yarn add react-app-rewrited

- 修改package.json中的script

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```
- 根目录下新建一个`config-overrides.js`用来配置额外的`webpack`工具
- 安装 `customize-cra` 配合使用

> yarn add customize-cra -d

3. 添加sass

> yarn add node-sass

4. 安装react-router

> yarn add react-router react-router-dom

5. 安装react组件按需加载

> yarn add react-loadable

6. 添加typescript

> yarn add typescript @types/node @types/react @types/react-dom @types/jest

7. 添加styleguide

> yarn add react-styleguidist

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
