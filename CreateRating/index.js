module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var productExists=false
    var userExists=false
    if (req.query.userId || (req.body && req.body.userId)) {
        //get User
        var dataUser = "{\"userId\": "+userId+"}";
        xhrUser.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              console.log("user"+this.responseText);
              var userExists=true
              if (req.query.productId || (req.body && req.body.productId)) {
                //get product
                var dataProduct = "{\"productId\": "+productId+"}";
                xhrProduct.addEventListener("readystatechange", function() {
                    if(this.readyState === 4) {
                      console.log("product"+this.responseText);

                      var productExists=true
                      var createRating= "{\"Id\": " + create_UUID 
                      + "{\"userId\": " + (req.query.userId || req.body.userId)
                      + "{\"rating\": " + ((req.query.rating || req.body.rating))
                      + "{\"userNotes\": " + ((req.query.userNotes || req.body.userNotes))
                      //add timestamp
                      //locationName
                      context.res = {
                          // status: 200, /* Defaults to 200 */
                          body: createRating

                      };
                      if(req.query.rating || (req.body && req.body.rating)){
                        console.log("rating"+this.responseText);
                      }

                    }
                  });
                  
                  xhrProduct.open("GET", "https://serverlessohproduct.trafficmanager.net/api/GetProduct");
                  xhrProduct.setRequestHeader("Content-Type", "text/plain");
                  
                  xhrProduct.send(dataProduct);
               
            }    //productId
       
           }
        });
          xhrUser.open("GET", "https://serverlessohuser.trafficmanager.net/api/GetUser");
          xhrUser.setRequestHeader("Content-Type", "text/plain");
          
          xhrUser.send(dataUser);
        
    }   //1 if

    
    
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}