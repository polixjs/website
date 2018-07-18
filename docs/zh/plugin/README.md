# plugin

```shell
$ npm i --save polix-request
```

> 在项目根目录下的`config`文件夹下的`plugin.default.js`中添加以下代码

```js
// `curl`最终会挂载到`this.app`下
exports.curl = {
  // 表示是否启用该插件
  enable: true,
  // 插件`npm`包名
  package: 'polix-request'
};
```

> 在`controller`里用`polix-request`

```js
  @GET
  async getWebInfo(param, ctx){
    let result = await this.app.curl.get('https://www.baidu.com');
    ctx.body = {
      data: result
    }
  }
```

> `polix`已经内置`polix-request`插件了，这里只是个演示