const { log } = require('console');
const readProxyList = require('./readProxy.js');


function main() {
  let readList = readProxyList("proxylist");
  readList.then((data) => {
    log(data);
  }).catch((err) => {
    log("callproxy Error at ", err);
  });

}

main();