# Finish the Ice Cream Ratings API

## Progress Diagram

![Ratings API progress diagram](https://serverlessoh.azureedge.net/public/ratings-api-progress-diagram.jpg)

## Happy Path

* Put code in GitHub or Azure DevOps or other Git Sources
* Create and Continuously deploy to an Azure Function App
* Use Azure Functions with Cosmos DB, use the functions input and output bindings
* Can use CosmosDB client SDKs too, not tied to bindings
* For Node especially, CosmosDB Mongo API + Mongoose works well

## Coaches Notes

* By the end of this challenge ensure your team has a setup conducive for collaborating and a plan for working together. I.e., ‘how are we going to collab, where are we going to put all the code’
* Good one to try enabling Visual Studio Live Share
* Get the team to discuss how they can split up and then reconverge to share
* Make sure to test their CreateRating function using the sample website provided in the challenge, this will ensure they are accepting the correct JSON format as that’ll be used in later challenges
* Get them to use Consumption plan (real serverless)
* When trying to install extensions and getting an error on "cannot find dotnet-add", this is due to old version of .NET Core, installing latest version of .NET should correct this.
* For GetRatings putting userId into route and using it in the SQLQuery parameter (instead of query string which doesn't work)
* Cosmos DB requires a partition key to be set when creating the container. As a coach, have a conversation with the team about the [choice of a partition key](https://docs.microsoft.com/azure/cosmos-db/partitioning-overview#choose-partitionkey), and how the partition key may impact querying. For example, potential partition keys for this challenge may be ```userId``` or ```productId```.
* Users to use for sending reviews:

User Id​ | User Name​ | Full Name​
--------| --------- | ---------
cc5581ff-6be1-4418-a8d8-55a29c24b995​ | garry.thornburg​ | Garry Thornburg​
6dd3bb49-a5be-41ca-9dac-3b995450f2db​ | kayla.cobb​ | Kayla Cobb​
ed414804-ed3d-4ec3-a283-f94ee86f3e23​ | edna.waters​ | Edna Waters​
d1f80b77-040f-4ec8-a833-90b18da70337​ | chester.furlong​ | Chester Furlong​
cc20a6fb-a91f-4192-874d-132493685376​ | doreen.riddle​ | Doreen Riddle​

### Storage Notes

* CosmosDb
    * Ensure the team discusses the partition key requirement of the collection.
    * Using the id property of the binding will not work without the use of the partition key property as well. The GetRating function will require using the sql query

### Node notes

* Keep check of the WEBSITE_NODE_DEFAULT_VERSION app setting. Depending on the version of function apps being used the Node version in the portal may need to be updated. Refer to the [Language chart](https://docs.microsoft.com/azure/azure-functions/functions-versions#languages) for supported language runtimes.
* To enable debugging in Visual Studio you have to add "NODE_OPTIONS": "--inspect=5858" to the local settings file

### DevOps Notes

* The team can create an AzDo account using the credentials provided by the Opgility portal
* If using Azure DevOps for source code but you still want to connect to it from the Functions deployment options, you need to configure from an Organization that your login is the owner of. The deployment configuration will reference [these instructions](https://docs.microsoft.com/azure/devops/organizations/accounts/create-organization?view=azure-devops) for doing so.
    * Linux app service plans do not have Kudu service available so therefore cannot use this option for deployment configuration
* See [Deployment technology availability](https://docs.microsoft.com/azure/azure-functions/functions-deployment-technologies#deployment-technology-availability) for available deployment options based on App Service plan selections.
* Mac and Linux users will want to either create a storage account in Azure to connect their local dev environment to, or install Azurite v2. [Azurite v3 will not work](https://github.com/mydiemho/blob-trigger-sample), while Windows users can use Storage Emulator.
