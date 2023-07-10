const readline = require("readline");
const puppeteer = require("puppeteer");
const delay = require ("./delayfunc");
const setProxy = require( "./setProxy");
const prompt = require('prompt-sync')();
const readUserPw = require('./readUserPw');
const { log } = require("console");
const fetchCheckOut = require("./fetchCheckOut");
const fs = require("fs").promises;


async function loginIn (page, user, password){
    await page.goto("https://www.nike.com/login");
    await delay(5000);
    await page.type("#username ", user);
    await delay(10000);
    await page.click(".nds-btn.css-ew3ocj.btn-primary-dark.btn-md")
    await delay(5000);
    await page.type("#password",password)
    await delay(5000);
    await page.click(".nds-btn.css-ew3ocj.btn-primary-dark.btn-md")
}

module.exports = loginIn;