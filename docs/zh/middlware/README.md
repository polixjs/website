# middlware

`polix`的中间件与koa 2.x 的中间件保持兼容  
框架默认加载`koa-body`中间件，如需另外添加中间件则新建`middware`文件夹（与`controller`文件夹平级）  
添加跨域中间件 ，新建`cors.js`:  

```javascript
# cors.js

const cors = require('koa2-cors');
module.exports = function(){
  return cors({
    origin: function(ctx) {
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  });
}
```

> 该文件夹下必须存在`index.js`文件作为总输出中间件文件,加载时根据导出对象的顺序进行绑定中间件