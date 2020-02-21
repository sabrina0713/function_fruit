module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.productId || (req.body && req.body.productId)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "The product name for your product id " + (req.query.productId || req.body.productId) + "is Startfruit Explosion and the description is This starfruit ice cream is out of this world!"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};