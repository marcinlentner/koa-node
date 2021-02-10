const Koa = require("koa");
const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();

// create new route
router.get("/about", (ctx) => (ctx.body = "About Page"));

// Router Middleware
app.use(router.routes());

app.listen(3005, () => console.log("Started Koa..."));
