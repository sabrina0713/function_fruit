module.exports = async function(context, mySbMsg) {
    context.log('send to storage', mySbMsg);
    context.bindings.myOutputBlob = JSON.parse(mySbMsg);
};