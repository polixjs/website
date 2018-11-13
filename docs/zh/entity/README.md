# entity

数据库模型实体，以[typeorm](https://github.com/typeorm/typeorm)为例。
在根目录下创建`entity`文件夹，在文件夹下面创建`user.js`文件：

``` js
import {
  Entity, Column, BaseEntity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id = undefined;

    @Column('varchar')
    name = '';
  
}

module.exports = User;
```

`common/orm.js`配置连接：
``` js
'use strict';

const typeorm = require('typeorm');

(async () => {
  console.log('create connection');
  await typeorm.createConnection();
})();
```

在启动入口文件引入：
``` js
require('./common/orm');
```

使用：
``` js
// server/user.js

async users() {
  const {user} = this.app.entity;
  return user.find();
}
``` 