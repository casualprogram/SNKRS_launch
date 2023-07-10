const { log } = require('console');
const fs = require('fs/promises');


//Create a function that read proxy list and split out each of them
async function readUserPw(filename){
    //take 1 arg for filename, then read it as 'utf8' format (basically ABC char format)
    try {
        const data = await fs.readFile( __dirname + '/resources/' + filename + '.txt', 'utf8');
        // first split out each line.
        const lines = data.split('\r\n');

        // array for user object
        const userList = [];

        //run a loop to split out each line and assign them by order
        for (const line of lines){
            const [username, password] = line.split(':');
            // console.log('username: ' + username + " - your password: " + password);
            const userObj = {
                username, 
                password
            }   
            userList.push(userObj)
        }
        return userList;

    } catch(err){
        log("readUserPW Error at ", err);
        return null;
    }
    log(userList);
}

readUserPw("account");
module.exports = readUserPw;