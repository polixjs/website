# Controller

> 在`controller`文件夹下添加`user.js`

```javascript
const { Controller, GET, POST, DEL, PUT  } = require('polix');

class UserController extends Controller {
  
  // POST /user/addUser
  @POST
  async addUser(param, ctx){
    const {body} = param;
    await this.service.user.addUser(body.userId, body.name);
    ctx.body = {
      result: 'ok'
    };
  }

  // GET /user/getUser
  @GET
  async getUser(param, ctx){
    const {query} = param;
    let user = await this.service.user.getUser(query.userId);
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
    const {router} = param;
    ctx.body = {
      status: true,
      userId: router.userId
    };
  }

}

module.exports = UserController;
```