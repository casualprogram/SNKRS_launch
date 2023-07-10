// const puppeteer = require("puppeteer");
// const submitEntry = require("./submitEntry");
// const Register = require("./register");
// const setProxy = require( "./functions/setProxy");
// const prompt = require('prompt-sync');
// const readUserPw = require("./functions/readUserPw");
// const readProxy = require("./functions/readProxy");
// const { log } = require('console');
// const readline = require("readline")


// //readline function
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  

// var index = 0;



// async function start(){
//     rl.question('What would you like to do? \n1-Register \n2-submitEntry\n', (option) => {
//         // switch statement for tasks
//         switch (option) {
//           case '1':
//             console.log('Register function');
//             // Register function --> number of tasks = number of proxy
//             (async () => {
//               const proxyList = await readProxy("proxylist")
//               console.log(proxyList)
    
//               for (const proxy of proxyList) {
//                 const { page, browser } = await setProxy(
//                     proxy.proxyHost,
//                     proxy.proxyPort,
//                     proxy.proxyUsername,
//                     proxy.proxyPassword);

//                 await Register(page);
//                 await browser.close()
//               }
            
//             })();
//             break;
     

//             case '2': 
//                 console.log('Log in function');
//                 // submitEntry function --> number of tasks = number of accounts
//                 (async () => {
//                   const userInfo = await readUserPw("account");
//                   console.log(userInfo);
//                   const proxyList = await readProxy("proxylist")
//                   console.log(proxyList)
                  
//                   // rotate proxy
//                   let index = 0;
//                   for (const user of userInfo) {
//                     const { page, browser } = await setProxy(
//                         proxyList[index].proxyHost,
//                         proxyList[index].proxyPort,
//                         proxyList[index].proxyUsername,
//                         proxyList[index].proxyPassword);

//                     await submitEntry(page, user.username, user.password);
//                     await browser.close()
//                     index++;
//                   }
//                 })();
            
//             break;
              
//               default:
//                 console.log('Invalid option');
//                 break;
//             }


//             rl.close();
//           });
//         }
        

// start();


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