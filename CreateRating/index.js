module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var productexists=false
    var userexists=false
    if (req.query.userId || (req.body && req.body.userId)) {
        //get User
        var data = "{\"userId\": "+userId+"}";
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
              console.log("user"+this.responseText);
              var userexists=true
              if (req.query.productId || (req.body && req.body.productId)) {
                //get product
                var data = "{\"productId\": "+productId+"}";
                xhr.addEventListener("readystatechange", function() {
                    if(this.readyState === 4) {
                      console.log("product"+this.responseText);

                      var productexists=true
                      var rating= "{\"Id\": " + create_UUID 
                      + "{\"userId\": " + (req.query.userId || req.body.userId)
                      + "{\"rating\": " + ((req.query.rating || req.body.rating))
                      + "{\"userNotes\": " + ((req.query.userNotes || req.body.userNotes))
                      context.res = {
                          // status: 200, /* Defaults to 200 */
                          body: rating

                      };
                      if(req.query.rating || (req.body && req.body.rating)){
                        console.log("rating"+this.responseText);
                      }

                    }
                  });
                  
                  xhr.open("GET", "https://serverlessohproduct.trafficmanager.net/api/GetProduct");
                  xhr.setRequestHeader("Content-Type", "text/plain");
                  
                  xhr.send(data);
               
            }    //productId
       
           }
          xhr.open("GET", "https://serverlessohuser.trafficmanager.net/api/GetUser");
          xhr.setRequestHeader("Content-Type", "text/plain");
          
          xhr.send(data);
        
    }
    
    
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