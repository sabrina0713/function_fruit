var request = require('request');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    if (req.query.userId || (req.body && req.body.userId)) {
        
        var options = {
          'method': 'GET',
          'url': 'https://serverlessohuser.trafficmanager.net/api/GetUser?userId='+(req.query.userId || req.body.userId),
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          form: {
        
          }
        };
        request(options, function (error, response) { 
            if (error) throw new Error(error);
            context.res = {
              // status: 200, /* Defaults to 200 */
              body: error

            };
            console.log("the result from getting a userId"+ response.body);
        });
        
              if (req.query.productId || (req.body && req.body.productId)) {
                //get product
                  console.log("productid"+req.body.productId)
                      
                        var createRating= 
                       
                      /* "{\"userId\": " + (req.query.userId || req.body.userId)
                      + "{\"proudctId\": " + (req.query.productId || req.body.productId)
                      + "{\"rating\": " + ((req.query.rating || req.body.rating))
                      + "{\"userNotes\": " + ((req.query.userNotes || req.body.userNotes))
                      + "{\"timestamp\": " +  new Date().toLocaleString()
                      */
                   
                      context.res = {
                          // status: 200, /* Defaults to 200 */
                          body: createRating

                      };

                      context.bindings.inputDocumentOut = req.query
                      //context.done();
                      }

    }
                  
           
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
