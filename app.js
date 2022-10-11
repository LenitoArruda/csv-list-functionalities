const Reader = require("./Reader");
const Writer = require("./Writer");
const Procesor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PdfWriter = require("./PdfWriter");

const reader = new Reader();
const writer = new Writer();



async function main(){
    var data = await reader.Read("./users.csv");
    var processedData = Procesor.Process(data);
    var users = new Table(processedData);

    var html = await HtmlParser.Parser(users);
    
    writer.Write("index.html",html);
    PdfWriter.WritePdf("index.pdf", html);
}

main();