const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');
const coMysql = require('co-mysql');
const os = require('os');

const PORT = 8080;

let server = new Koa();
server.listen(PORT);

//手机本身就是localhost
//需要获得自己网卡的相关信息
// console.log(os.networkInterfaces());
var ipD = os.networkInterfaces();
for (let key in ipD) {
  if (key.indexOf('VMware') == -1) {
    ipD[key].forEach((item) => {
      if (item.family == 'IPv4') {
        console.log(`Server is running at ${item.address}:${PORT}`)
      }
    })
  } else {
    continue;
  }
}
//调试本地程序用127.0.0.1:8080，调试远端程序用10.115.167.106:8080

// 连接数据库
let conn = mysql.createPool({ host: 'localhost', user: 'root', password: '14321432', database: 'account_book' });
server.context.db = coMysql(conn);

//全局错误处理
//koa
server.use(async (ctx, next) => {
  try {
    //next代表之后的所有操作
    await next();
  } catch (e) {
    ctx.body = { err: 1, msg: 'server error' };
    console.error(e);
  }
});

//Koa-router用法
let router = new Router();

//获取记账
router.get('/list', async ctx => {
  let data = await ctx.db.query('SELECT * FROM record_table ORDER BY ID DESC');

  ctx.body = { err: 0, data };
});
//添加新的记账
http://xxx/add?catalog=xxx&comment=xxx&income=x&amount=xxx
router.get('/add', async ctx => {
  //Kao中获取get数据的方式
  const { catalog, income, comment, amount } = ctx.query;
  const ID = Math.floor(Date.now() / 1000);
  await ctx.db.query(
    "INSERT INTO record_table (ID,catalog, income, comment, amount) VALUES(?,?,?,?,?)",
    [ID, catalog, income, comment, amount]
  );
  ctx.body = { err: 0 };
});

server.use(router.routes());
