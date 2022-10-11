const pdf = require("html-pdf")

class PdfWriter{
    static WritePdf(fileName, html){
        pdf.create(html,{}).toFile(fileName, err => {console.log(err)});
    }
}

module.exports = PdfWriter;