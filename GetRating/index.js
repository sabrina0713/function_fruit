module.exports = async function (context, req, inputDocumentOut) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
        context.log("Found ToDo item, Description=" + inputDocumentOut);
    

   
    context.done();
};