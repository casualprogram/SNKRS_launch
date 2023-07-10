const puppeteer = require('puppeteer');
const fs = require("fs").promises;
const delay = require ("./functions/delayfunc");

const common_first_names = [
    "Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas",
    "Henry", "Alexander", "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan",
    "Jackson", "Sebastian", "Jack", "Aiden", "Owen", "Samuel", "Matthew", "Joseph",
    "Levi", "Mateo", "David", "John", "Wyatt", "Carter", "Julian", "Luke", "Grayson",
    "Isaac", "Jayden", "Theodore", "Gabriel", "Anthony", "Dylan", "Leo", "Lincoln",
    "Jaxon", "Asher", "Christopher", "Josiah", "Andrew", "Thomas", "Joshua", "Ezra",
    "Hudson", "Charles", "Caleb", "Isaiah", "Ryan", "Nathan", "Adrian", "Christian",
    "Maverick", "Colton", "Elias", "Aaron", "Eli", "Landon", "Jonathan", "Nolan",
    "Hunter", "Cameron", "Connor", "Santiago", "Jeremiah", "Ezekiel", "Angel"
]


const common_last_names = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson",
    "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin",
    "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis",
    "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright",
    "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson",
    "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell",
    "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris",
    "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera",
    "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray",
    "Ramirez", "James", "Watson", "Brooks", "Kelly", "SanderQs", "Price", "Bennett",
    "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell"
]


async function Register(page) {
    // generating random info
    var finalFirstName = common_first_names[Math.floor( Math.random() * common_first_names.length )];
    var finalLastName = common_last_names[Math.floor( Math.random() * common_last_names.length )];
    var randomNumber = Math.floor( Math.random() * 100000 )
    var emailAddress = finalFirstName + finalLastName + randomNumber + "@casualfnf.com"
    var newAccount = finalFirstName + ":" + finalLastName + ":" + emailAddress

    // Register users
    await page.goto("https://thepremierstore.com/account/register")
    await delay(10000)
    await page.type("#RegisterForm-FirstName", finalFirstName)
    await delay(2000)
    await page.type("#RegisterForm-LastName", finalLastName)
    await delay(2000)
    await page.type("#RegisterForm-email", emailAddress)
    await delay(2000)
    await page.type("#RegisterForm-password", "HaoChuong123")
    await delay(2000)


    // check if ads exist
    const button = await page.$('.klaviyo-close-form');
    if (button) {
        // Button exists, click button
        await page.click('.klaviyo-close-form');
        await delay(3000)
    } else {
        // Button does not exist, perform alternative actions
        console.log('Button not found');
    }

    // click create button and export account info to txt file
    await Promise.all([ page.click("#create_customer button"),  page.waitForNavigation()]);
    await fs.appendFile(__dirname + '/resources/accountGen.txt', "\n" + newAccount);
    await delay(10000);
    await page.close();
}

module.exports = Register;

