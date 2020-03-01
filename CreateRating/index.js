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
                      
                        
                        var sentiment=JSON.stringify({
                          "documents": [
                            {
                                "language": "en",
                                "id": "1",
                                "text": ((req.query.userNotes || req.body.userNotes)),
                            }]
                          
                        })
                        var optionsSentiment = {
                          'method': 'POST',
                          'url': 'https://openhacksentiment.cognitiveservices.azure.com/text/analytics/v2.1/sentiment',
                          'headers': {
                            'Ocp-Apim-Subscription-Key': '9f086f9275ae44d285c64ae158284834',
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                          },
                          body: sentiment
                        };
                        request(optionsSentiment, function (error, response) { 
                          if (error) throw new Error(error);
                          console.log("sentiment result"+response.body);
                         
                          
                          var createRating= JSON.stringify({
                            userId:(req.query.userId || req.body.userId),
                            productId:(req.query.productId || req.body.productId),
                            userNotes:((req.query.userNotes || req.body.userNotes)),
                            timestamp: new Date().toLocaleString(),
                            sentimentscore: JSON.parse(response.body).documents[0].score
                          })
                          context.res = {
                             status: 200, /* Defaults to 200 */
                            body: JSON.parse(createRating)
  
                        };
  
                        context.bindings.inputDocumentOut = createRating
                        //context.done();
                        });
                        
                  
                   
                     
                      }

    }
                  
           
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
