const path = require("path");
const Koa = require("koa");
const staticServe = require("koa-static");
const httpProxyMiddleware = require("http-proxy-middleware");
const koaConnect = require("koa2-connect");
const os = require("os");
const fs = require("fs");

const app = new Koa();
// 静态资源目录
const staticPath = "./dist";
// 静态调试端口
const port = 9876;
// 请求代理配置
const proxyTable = {
  "/api": {
    target: process.env.PROXY_API_URL || "https://testapi.rental-cloud.com",
    changeOrigin: true,
  },
  "/foo": {
    target: process.env.PROXY_API_URL || "www.bing.com",
    changeOrigin: true,
  },
};

// 处理404, 兼容 BrowserRouter
app.use(async (ctx, next) => {
  try {
    await next();
    const status = ctx.status || 404;
    if (status === 404) {
      return404content();
    }
  } catch (err) {
    ctx.status = err.status || 500;
    if (ctx.status === 500) {
      return404content();
    }
  }
  function return404content() {
    let indexContent = "404";
    try {
      indexContent = fs.readFileSync(
        path.join(__dirname, `${staticPath}/index.html`),
        "utf-8",
      );
    } catch {
      indexContent = "404 not found";
    }
    ctx.body = indexContent;
  }
});

// 引入静态文件
app.use(staticServe(path.join(__dirname, staticPath)));

// 代理兼容封装
const proxy = function(context, options) {
  let optionsParam = options;
  if (typeof options === "string") {
    optionsParam = {
      target: options,
    };
  }
  return async function(ctx, next) {
    await koaConnect(httpProxyMiddleware(context, optionsParam))(ctx, next);
  };
};

Object.keys(proxyTable).map((context) => {
  const options = proxyTable[context];
  // 使用代理
  app.use(proxy(context, options));
});

app.listen(port, "0.0.0.0", () => {
  const networkInterfaces = os.networkInterfaces();
  const ipAddress = networkInterfaces.en0[1].address;
  console.info("服务已经启动：");
  console.info(`http://localhost:${port}`);
  console.info(`http://${ipAddress}:${port}`);
});
