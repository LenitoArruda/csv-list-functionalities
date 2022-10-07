const Reader = require("./Reader");
const reader = new Reader();


async function main(){
    var data = await reader.Read("./users.csv");
    console.log(data);

}

main();