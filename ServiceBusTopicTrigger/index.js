const { ServiceBusClient } = require("@azure/service-bus"); 
const connectionString = "Endpoint=sb://openhack.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=8AsKRUhZ/5iNNxCOofeKT0RRGwY1qSMlp7Hq6pAOuyY=";
const topicName = "largerthan100"; 
module.exports = async function(context, mySbMsg) {
    context.log('JavaScript ServiceBus topic trigger function processed message', mySbMsg);
    async function main(){

    const sbClient = ServiceBusClient.createFromConnectionString(connectionString); 
    const topicClient = sbClient.createTopicClient(topicName);
    const sender = topicClient.createSender();
    try {
    const message= {
        body: `${context.bindingData.header}`,
        label: `add totalcost`,
        userProperties: {
            TotalCost: `${mySbMsg.header.totalCost}`
        }
      };
      context.log(`Sending message to largerthan100: ${message.body}`);
       await sender.send(message);
    }  finally {
       await topicClient.close();
      } 
    }
      main().catch((err) => {
        context.log("sending to largerthan100Error occurred: ", err);
      });
    }
  