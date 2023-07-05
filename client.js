const PDFMake = require('pdfmake');
const fs = require('fs');


class client {
    constructor(config) {
        this.config = config;
        this.fonts = this.config.fonts;
        this.document = this.config.document;
    }

    async execute(data) {
        const printer = new PDFMake(this.fonts);
        let document = this.document(data);
        const pdfDoc = printer.createPdfKitDocument(document);
        const output = data.output;
        const stream = fs.createWriteStream(output);
        pdfDoc.pipe(stream);
        let result = await pdfDoc.end();
        //fs.unlinkSync(output);
        return result;

        //pdfDoc.pipe(sendEmail(output, data));
    }

    async generate(data) {
        const printer = new PDFMake(this.fonts);
        let document = this.document(data);
        const pdfDoc = printer.createPdfKitDocument(document);
        const output = data.output;
        const stream = fs.createWriteStream(output);
        pdfDoc.pipe(stream);
        let result = await pdfDoc.end();
        //fs.unlinkSync(output);
        return result;
    }
}

module.exports = client;
