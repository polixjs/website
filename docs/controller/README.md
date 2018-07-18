# Controller

> 在`controller`文件夹下添加`user.js`

```javascript
const { Controller, GET, POST, DEL, PUT  } = require('polix');

class UserController extends Controller {
  
  // POST /user/addUser
  @POST
  async addUser(param, ctx){
    await this.service.user.addUser(param.userId,param.name);
    ctx.body = {
      result: 'ok'
    };
  }

  // GET /user/getUser
  @GET
  async getUser(param, ctx){
    let user = await this.service.user.getUser(param.userId);
    ctx.body = {
      user
    };
  }

  // GET /user/info
  @GET('info')
  async getInfo(param, ctx){
    ctx.body = {
      v: 'v1.0'
    }
  }

  // PUT /user/updateUser
  @PUT
  async updateUser(param, ctx){
    ctx.body = {
      status: true
    }
  }

  // DEL /user/delUser
  @DEL
  async delUser(param, ctx){
    ctx.body = {
      status: true
    };
  }

  // GET /user/status/:userId
  @GET('status/:userId')
  async getStatus(param, ctx){
    ctx.body = {
      status: true,
      userId: param.userId
    };
  }

}

module.exports = UserController;
```