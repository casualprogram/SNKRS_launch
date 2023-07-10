const useProxy = require('puppeteer-page-proxy');
const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const readProxy = require("./readProxy.js");
const { log } = require('console');





async function setProxy(Host, Port, Username, Password) {


    try {
      const proxyHost = Host;
      const proxyPort = Port;
      const proxyUsername = Username;
      const proxyPassword = Password;

      const browser = await puppeteer.launch({
        headless: false,
        args: [
          `--proxy-server=${proxyHost}:${proxyPort}`,
          `--proxy-bypass-list=<-loopback>`,
        ],
            });
    
    const page = await browser.newPage()

    
    // Provide authentication credentials
    await page.authenticate({ username: proxyUsername, password: proxyPassword });
    return {page,browser};

    } 
    catch (error) {
    console.error("Proxy error at " + error);
    }
 }

    module.exports = setProxy;