const readline = require("readline");
const puppeteer = require("puppeteer");
const delay = require ("./functions/delayfunc");
const setProxy = require( "./functions/setProxy");
const prompt = require('prompt-sync')();
const readUserPw = require('./functions/readUserPw');
const { log } = require("console");
const fetchCheckOut = require("./functions/fetchCheckOut");




async function submitEntry(page, user,password){

    //User input account info
    // let threadId = prompt('Please enter t-ID : ');
    // let productId = prompt('Please enter p-ID : ');
    // let size = prompt('Please enter size : ');

    let threadId = "166c8569-76d7-4b16-98c8-91eb12219a01"
    let productId = "53d9db35-38f5-52ab-a095-771861ad6c78"
    let size = "10"

    var checkOutLink = fetchCheckOut(productId, size, threadId)
    log("link - " + checkOutLink)

    await delay(3000);
    //go to main page 
    await page.goto(checkOutLink);
    // await delay(8000);

    const buttons = await page.$$("div.section-title.ncss-col-sm-5.va-sm-m.pl0-sm.pr0-sm")
    for (let btn of buttons) {
       await btn.click()
    }
    log('done')
    await delay(4000);


    // //close ads for that website
    // await page.click('.needsclick.klaviyo-close-form.kl-private-reset-css-Xuajs1');

    // await page.type("#CustomerEmail", user);
    // await page.type("#CustomerPassword", password);


    // await delay(5000);
    // await Promise.all([
    //     page.click("#customer_login button"),
    //     page.waitForNavigation()
    // ]);

    // await page.close();

}

module.exports = submitEntry;