const certTemplate = require('./templates');
const clientCls = require('./client');


let client = new clientCls(certTemplate);


const generate = async (data) => {
    let result = await client.generate(data);
    return result;
}
const data = {
    name: "Nguyen Van A",
    date: "20/10/2020",
    email: "",
    output: __dirname + `/document.pdf`,
}

generate(data);