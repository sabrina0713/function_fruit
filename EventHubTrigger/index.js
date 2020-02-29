
module.exports = async function (context, eventHubMessages) {
    context.log(`batch process for eventhub ${eventHubMessages}`);
    
    eventHubMessages.forEach((message, index) => {
        //context.log(`Processed message ${message}`);
        //context.bindings.inputDocumentOut = message
       // context.log(`Processed message receiptUrl ${message.header.receiptUrl}`);
        if(message.header.receiptUrl!=null)
        {
            context.log(`Sending messages to allmessages topic receiptUrl ${message.header.receiptUrl}`);
            context.bindings.outputSbQueue = message
        }

    });

    
};