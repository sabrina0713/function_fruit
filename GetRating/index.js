module.exports = async function (context, req, ratingItems) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.ratingId || (req.body && req.body.ratingId)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Found " + context.bindings.inputDocumentOut
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};