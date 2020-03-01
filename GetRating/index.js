module.exports = async function (context, req, inputDocumentOut) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
        context.log("found the rating " + inputDocumentOut[0].rating);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "the rating of the item " + inputDocumentOut[0].rating

        };

   
    context.done();
};