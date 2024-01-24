const puppeteer = require("puppeteer");
const submitEntry = require("./submitEntry");
const Register = require("./register");
const setProxy = require( "./functions/setProxy");
const prompt = require('prompt-sync');
const readUserPw = require("./functions/readUserPw");
const readProxy = require("./functions/readProxy");
const { log } = require('console');
const readline = require("readline")
const loginIn = require("./functions/loginIn")


//readline function
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  async function start() {
    const userInfo = await readUserPw("account");
    console.log(userInfo);
    const proxyList = await readProxy("proxylist")
    console.log(proxyList)

    let index = 0;
    for (const user of userInfo) {
      const { page, browser } = await setProxy(
          proxyList[index].proxyHost,
          proxyList[index].proxyPort,
          proxyList[index].proxyUsername,
          proxyList[index].proxyPassword);

      await loginIn(page, user.username, user.password);
      index++;
    }
}
  
start();
