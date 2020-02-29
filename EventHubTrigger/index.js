module.exports = async function (context, eventHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array ${eventHubMessages}`);
    
    eventHubMessages.forEach((message, index) => {
        context.log(`Processed message ${message}`);
        //context.bindings.inputDocumentOut = message
        context.log(`Processed message receiptUrl ${message.header.receiptUrl}`);
        if(message.header.receiptUrl!=null)
        context.bindings.outputSbQueue = message
    });

    
};