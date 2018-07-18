# service

> 在`service`文件夹下添加`user.js`

``` javascript
const { Service } = require('polix');

class UserService extends Service {
  constructor(){
    super();
    this._name = {};
  }

  async addUser(userId,name){
    this._name[userId] = name;
    return this;
  }

  async getUser(userId){
    return this._name[userId];
  }
}

module.exports = UserService;
```