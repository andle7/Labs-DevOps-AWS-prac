- (Lab) Serverless Basic - Lambda, API Gateway, DynamoDB
    
    
    - node.js version 20.x  esm 방식으로 lambda code 적용했음 !
    - 실습 진행 중 오류가 있으면 강사님이나 mentor에게 알려주세요 !
    
    ![image](https://github.com/user-attachments/assets/f1e2186c-a5be-4c7c-9834-1612bc1e1c43)
    
    Everyone needs to start somewhere! Data storage and retrieval is a cornerstone of all development.
    
    You will create a DynamoDB table to store data. You will add and retrieve data with Lambda functions. Lastly, you will create a REST API in API Gateway so a client can request the data.
    
    You will use the [AWS Management Console](https://aws.amazon.com/console/)  to create and manage the services and resources needed to create the solutions in this workshop.
    
    ## What you will you build?
    
    You will build an example microservice with *services* and *resources*:
    
    - **services** - provide ways to create, manage, and operate one or more types of resources.
    
    > Example services: Lambda, DynamoDB, API Gateway, and over 200 more!
    > 
    - **resources** - small building blocks that are part of, or related to, a service.
    
    > Example resources: Lambda functions, DynamoDB tables, API Gateway REST APIs, and many many many more!
    > 
    
    In the following architecture diagram, the services are API Gateway, Lambda, and DynamoDB. The resources are a REST API, a function, and a table. Take note that service icons are **solid filled colors**, and resources are outline-style icons.
    
    Dotted line boxes help connect services and their related resources. Technically, the *Permissions Policy* shown with the Lambda service is actually related to the AWS Identity and Access Management (IAM) service. This policy will securely enable access for the Lambda function.
    
    Most of the diagrams in the workshop steps will only show **resources** that you create and configure.
    
    ## Event-driven architecture
    
    Serverless architectures are based on **event-driven architecture** or EDA. At a high level, this means components will send and receive *events*, messages or status updates, between services.
    
    Don't worry if event-driven architecture is a new concept. This workshop will introduce you to building event-driven solutions with services and resources that communicate through events.
    
    ## Services in this module
    
    - [AWS Management Console](https://aws.amazon.com/console/)  - web-based management of the AWS cloud
    - [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)  - a fully managed NoSQL key/value data store
    - [Amazon API Gateway](https://aws.amazon.com/api-gateway/)  - the *front door* for applications; REST, HTTP, and WebSocket APIs
    - [AWS Lambda](https://aws.amazon.com/lambda/)  - compute service; functions in serverless runtimes
    
    ## What you will accomplish
    
    - Learn to navigate around the AWS Management Console
    - Create a DynamoDB table to store User data
    - Create and test Lambda Functions in Python
    - Create and retrieve data via an API Gateway REST service
    - Be able to explain serverless development and event-driven architecture.
    
    # 1 - Start with Data
    
    Nearly all application start with data. That's where you will start too. You will create a DynamoDB table, and store data using the console and a Lambda function
    
    ## Create a table
    
    Before you can create database items, you need to create a **table** to store data:
    
    ![image](https://github.com/user-attachments/assets/72ddbb5e-1be8-457e-b119-3f48d3325404)
    
    [**To create a DynamoDB table**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/data#to-create-a-dynamodb-table)
    
    1. Login to the AWS Management Console
    2. From Services, find and navigate to the [**DynamoDB** console](https://console.aws.amazon.com/dynamodb/home)
    3. From the DynamoDB page, choose **Create table**.
    4. For **Table name**, enter `serverless_workshop_intro`.
    5. For **Partition key name**, enter `_id`.
    6. For **Partition key type**, choose `String`.
    7. Accept default settings, then choose **Create table**.
    
    The leading underscore for **_id** has no special meaning to DynamoDB, but it hints of internal use in Python.
    
    After 15-30 seconds, your first DynamoDB table will be available.
    
    Confirm by choosing **Tables** from the left navigation panel. You should see `serverless_workshop_intro` in the list.
    
    ## Add data to the table
    
    Records in the database table are called **items**. Because DynamoDB is schemaless, the only required *attribute* is a primary key. An attribute is a data element, such as a name or identification code.
    
    In this example, the primary key is called **_id**.
    
    **DynamoDB concepts**
    
    - *item* - a group of attributes that is uniquely identifiable among all other items
    - *attribute* - a fundamental data element which does not need to be broken down further. Example: Name, Userid, HireDate, OrderQuantity
    - *partition key* - a primary key, composed of one attribute
    
    [**To add items in the console**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/data#to-add-items-in-the-console)
    
    1. From the navigation pane, choose **Explore items**.
    2. Select the `serverless_workshop_intro` table.
    3. Choose **Create item**.
    4. If not already selected, choose the **Form** view for easier data entry.
    5. For _id, enter `1`.
    6. Choose **Add new attribute**, select **String**.
    7. For **Attribute Name**, enter `Name`, and for **value**, enter *your name*.
    8. Choose **Create item**.
    
    You should see yourself in the item list!
    
    Congratulations! You created a serverless NoSQL data store and added data!
    
    [**To add data in bulk with a Lambda function**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/data#to-add-data-in-bulk-with-a-lambda-function)
    
    The console was quick, but to add a lot of data, you'll want to use a program.
    
    To automate adding data, we need to introduce the Lambda service and functions.
    
    [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)  is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources. All you need to do is supply your function code.
    
    [**Create a Lambda function**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/data#create-a-lambda-function)
    
    Start by creating a simple serverless Lambda function. Spoiler alert: this function will not add data to the table, but it will help you understand the essentials to create, invoke, and update a Lambda function.
    
    1. Open the [Lambda console](https://console.aws.amazon.com/lambda/home) .
    2. From the navigation pane, choose **Functions**.
    3. Choose **Create function**.
    4. Select **Author from Scratch**
    5. For **Function name** enter `first-function`
    6. For **Runtime**, select Node.js 20.x
    7. Choose **Create function**.
    
    At this point, you should see a short Python function in the IDE embedded in the Lambda console.
    
    Even if you are new to Python, we can explain it quickly because it contains only one function definition.
    
    ```jsx
    export const handler = async (event, context) => {
        // Mock line item for an Order
        const lineItem = {
            sku: 1234242,
            color: 'blue',
            quantity: 42,
            in_stock: true
        };
        
        return {
            statusCode: 200,
            body: JSON.stringify(lineItem)
        };
    };
    ```
    
    Line by line explanation of code...
    
    | `Line#` | Description |
    | --- | --- |
    | 1 | Import a built-in JSON library to make working with JSON easier. |
    | 3 | Define a function to handle events sent to it. |
    |  | The default handler method name is "lambda_handler", and the default file name is "lambda_function.py". |
    |  | When called, this handler method will receive two arguments: *event* and *context*. |
    |  | Both arguments provide input, similar to request objects in other framework. Neither are used in this default function. |
    | 5-8 | The method returns a response event with a body of encoded JSON -> 'Hello from Lambda!' |
    
    [**Test the function**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/data#test-the-function)
    
    Before you go further, test the function from the console. Before you can test the function, you need to create a **test event** to send to the function. All function handlers require an event parameter.
    
    There are several ways to create new test event. From the **Test** tab, you can create a new event. From the Test drop-down, you can choose **Configure a test event**. Lastly, if you choose **Test** before any test events are defined, the console will prompt you to create a test event. Try that last approach:
    
    1. Choose the **Test** button. (The console should bring up a dialogue box to **Configure test event**.)
    2. For **Event name**, enter **TestEvent**.
    3. For template, keep the default **hello-world**.
    4. Choose **Save**.
    5. Choose **Test** again to run the test.
    
    After the test starts, a new tab named **Execution Results** opens automatically in the **Code Source** panel within the Lambda Console. The test's output is displayed in this tab. Successful test output will be similar to the following, but your RequestId will be different.
    
    ```jsx
    Test Event Name
    TestEvent
    
    Response
    {
      "statusCode": 200,
      "body": "\"Hello from Lambda!\""
    }
    
    Function Logs
    START RequestId: 4c392f7c-ab0c-4069-b3aa-f40e2d356d8b Version: $LATEST
    END RequestId: 4c392f7c-ab0c-4069-b3aa-f40e2d356d8b
    REPORT RequestId: 4c392f7c-ab0c-4069-b3aa-f40e2d356d8b	Duration: 0.87 ms	Billed Duration: 1 ms	Memory Size: 128 MB	Max Memory Used: 36 MB	Init Duration: 90.51 ms
    
    Request ID
    4c392f7c-ab0c-4069-b3aa-f40e2d356d8b
    ```
    
    Before we move on, let us break down the result output.
    
    The result starts with the name of the test event, then the JSON returned in the response.
    
    **Function Logs** has three parts: START, END, and REPORT.
    
    - START - reports the version of the function. In this case, the special label $LATEST indicates the most recent published version of the function. In later modules, you'll learn how to create specific version labels for advanced configuration and deployments.
    - END - indicates your function code has terminated, either with a response or error.
    - REPORT - inlcudes metadata about the function. Duration the function took to run, billed duration, memory used, and an *Init Duration*. That last data point indicates that the execution environment had to start up before running your code. An execution environment runs your function code in a secure, isolated space. On subsequent requests, this environment will be reused.
    - Request ID - a globally unique identifier, used in all of the function log output. This unique ID provides a way to trace the activity of the request.
    
    [**Iterate, redeploy, test**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/data#iterate-redeploy-test)
    
    The majority of the development lifecycle involves making changes to code. The **Code** tab in the console contains an embedded AWS Cloud9 editor. This makes it possible to quickly iterate for interpreted languages like Python.
    
    The JSON in that example was not super interesting, right?
    
    Imagine the function does some work and instead returns a line item for an order.
    
    From the **Code** tab, replace the code with the following snippet that defines a mock line item that might come from an order:
    
    ```jsx
    export const handler = async (event, context) => {
        // Mock line item for an Order
        const lineItem = {
            sku: 1234242,
            color: 'blue',
            quantity: 42,
            in_stock: true
        };
        
        return {
            statusCode: 200,
            body: JSON.stringify(lineItem)
        };
    };
    ```
    
    In this code, `line_item` is a Dictionary data type in Python. The resulting event will encode that into JSON.
    
    Choose **Deploy** to update the live Lambda function. Then, choose **Test**.
    
    Did the results surprise you? Do they look familiar? Choose the **Test** tab and review the **TestEvent**.
    
    **You may be wondering what is in the event and context arguments???**
    
    Try adding 'json.dumps(event)' to dump the **event** as a string, to find out what's inside! Remember to deploy.
    
    Question: Did you also try dumping the context?
    
    Question: Did you see the same results even though you changed the code?
    
    ## Additional resources
    
    - [Amazon DynamoDB](https://aws.amazon.com/dynamodb/)  - a fully managed, serverless, key-value NoSQL database designed to run high-performance applications. DynamoDB offers built-in security, continuous backups, automated multi-region replication, in-memory caching, and data export tools.
    - [Amazon DynamoDB Labs](https://amazon-dynamodb-labs.com/)  - DynamoDB specific workshops
    - [AWS Management Console](https://aws.amazon.com/console/)  - a simple web interface for Amazon Web Services
    
    ## Summary
    
    With the console, you created a dynamic database table and added a record. Then, with a few lines of code, you created a function that can process an event and return a response. Both of these things are happening without setting up a server!
    
    Data. Function. No Servers! Serverless is **exciting**, right!?!
    
    Okay, so maybe seeing 'Hello from Lambda!' is not the most amazing thing, but it's just the start!
    
    ---
    
    In the next section, you will create a function that can add items to the database table...
    
    # 2 - Connect to DynamoDB
    
    In this section, you will connect from a Lambda function to the DynamoDB table to add data programmatically.
    
   ![image](https://github.com/user-attachments/assets/a134a8f4-2054-457b-b91a-786258499202)
    
    **Practice what you've learned!**
    
    1. Create a new Python 3.9 function called: *m1-add-sample-data*.
    2. Paste the following code into your new **m1-add-sample-data** function :Python function to insert data into DynamoDB
    
    ```jsx
    import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
    import { DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
    import { randomUUID } from 'crypto';
    
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);
    
    export const handler = async (event, context) => {
        const tableName = 'serverless_workshop_intro';
        let result = null;
        
        const people = [
            { userid: 'marivera', name: 'Martha Rivera' },
            { userid: 'nikkwolf', name: 'Nikki Wolf' },
            { userid: 'pasantos', name: 'Paulo Santos' }
        ];
    
        try {
            const writeRequests = people.map(person => ({
                PutRequest: {
                    Item: {
                        '_id': randomUUID().replace(/-/g, ''),
                        'Userid': person.userid,
                        'FullName': person.name
                    }
                }
            }));
    
            const command = new BatchWriteCommand({
                RequestItems: {
                    [tableName]: writeRequests
                }
            });
    
            await docClient.send(command);
            
            for (const person of people) {
                console.log(`> batch writing: ${person.userid}`);
            }
    
            result = `Success. Added ${people.length} people to ${tableName}.`;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    
        return { message: result };
    };
    ```
    
    1. Verify the table_name is the same as the DynamoDB table you created earlier
    2. Choose **Deploy**.... wait a few seconds...
    
    ```jsx
    import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
    import { DynamoDBDocumentClient, BatchWriteCommand } from "@aws-sdk/lib-dynamodb";
    import { randomUUID } from 'crypto';
    
    const client = new DynamoDBClient({});
    const docClient = DynamoDBDocumentClient.from(client);
    
    export const handler = async (event, context) => {
        const tableName = 'serverless_workshop_intro';
        let result = null;
        
        const people = [
            { userid: 'marivera', name: 'Martha Rivera' },
            { userid: 'nikkwolf', name: 'Nikki Wolf' },
            { userid: 'pasantos', name: 'Paulo Santos' }
        ];
    
        try {
            const writeRequests = people.map(person => ({
                PutRequest: {
                    Item: {
                        '_id': randomUUID().replace(/-/g, ''),
                        'Userid': person.userid,
                        'FullName': person.name
                    }
                }
            }));
    
            const command = new BatchWriteCommand({
                RequestItems: {
                    [tableName]: writeRequests
                }
            });
    
            await docClient.send(command);
            
            for (const person of people) {
                console.log(`> batch writing: ${person.userid}`);
            }
    
            result = `Success. Added ${people.length} people to ${tableName}.`;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    
        return { message: result };
    };
    ```
    
    1. Verify the table_name is the same as the DynamoDB table you created earlier
    2. Choose **Deploy**.... wait a few seconds...
    
    Create a test event and test this function...
    
    Seriously, go run the test, we'll wait...
    
    [**Did the test succeed? Yes? No?!?**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/lambda-to-db#did-the-test-succeed-yes-no!)
    
    Expand this section to see the answer and explanation...
    
    [**Grant the Lambda function permission to the data store**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/lambda-to-db#grant-the-lambda-function-permission-to-the-data-store)
    
    You need to grant the Lambda function permissions to read and write data to your DynamoDB Table.
    
    ![image](https://github.com/user-attachments/assets/fff4af20-52b7-4712-a068-36d8b4b683a5)
    
    You need to update the ***execution role*** the Lambda function assumes when it runs. AWS Identity and Access Management (IAM) is used to control access to AWS resources. You will use IAM to add the necessary DynamoDB access policies to your function.
    
    [**To edit the execution role**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/lambda-to-db#to-edit-the-execution-role)
    
    You will need to use the IAM console to add permissions to the function. There are a lot of options, but you can safely ignore most for now. You will add a policy, managed by AWS, that grants full access to read/write items in DynamoDB.
    
    1. Choose **Configuration**, and then **Permissions** from the navigation pane.
    2. In the Execution role section, click the **Role name** link to view that role in the IAM console.
    3. In **Permissions policies**, choose **Add permissions** and then **Attach policies**.
    4. For the filter, enter **dynamodb**.
    5. Select the check box next to the Policy name for **AmazonDynamoDBFullAccess**.
    6. Choose **Add permissions**.
    
    ![image](https://github.com/user-attachments/assets/0c3eb0ab-b02c-47d0-a243-0d783c75ca84)
    
    **You just granted FULL ACCESS to the function!**
    
    Don't Panic! It's okay in this workshop, but in a production app, you would choose more granular permissions.
    
    Amazon Web Services provides many ways to grant pinpoint permissions. You can learn about them later.
    
    Return to the Lambda console and test the function again... Now that the function has permission, you should see a success message:
    
    ```json
    {
      "message": "Success. Added 3 people to serverless_workshop_intro."
    }
    ```
    
    ![image](https://github.com/user-attachments/assets/4fbb2577-2f53-455e-b70a-a6632e9db4c4)
    
    Reminder: the [**DynamoDB** console](https://console.aws.amazon.com/dynamodb/home)  has an option to explore and view Items in the database table. Go verify that new items were actually created in the table. Seriously, go see for yourself...
    
    **Congratulations!**
    
    You've created a table in a serverless database and a serverless function to add data to it. No servers required!
    
    ---
    
    In the next section, you will create another Lambda function to get the data when requested through a URL...
    
    # 3 - Build an API
    
    To build a useful web API, it must be accessible from a URL. You will use API Gateway to create an entry point, sometimes called the "front door", to a Lambda function that will return user data.
    
    ## Create a function to retrieve data
    
    You need a function to read data for your API. You want it to be secure, so it will only be permitted to **read** values from the table, not create, update, nor delete items.
    
    ![image](https://github.com/user-attachments/assets/798d59e1-97e2-41c7-b361-d81da562cafc)
    
    [**To create the Lambda function**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/build-api#to-create-the-lambda-function)
    
    1. Create a new Lambda function from scratch running with Python 3.9 called: `get-users`
    2. Paste in the following code:
        
        ```jsx
        import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
        import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";
        
        const client = new DynamoDBClient({});
        const docClient = DynamoDBDocumentClient.from(client);
        
        export const handler = async (event, context) => {
            try {
                const command = new ScanCommand({
                    TableName: 'serverless_workshop_intro'
                });
                
                const response = await docClient.send(command);
                return response.Items;
                
            } catch (error) {
                console.error('Error:', error);
                throw error;
            }
        };
        ```
        
    3. Update the **execution role** to add the policy *AmazonDynamoDBReadOnlyAccess* to grant the function read-only access.
    4. **Deploy** and **Test** the function.
    
    You should receive a response similar to the following:
    
    ```jsx
    [
      {
        "_id": "9f1f2ebaaf59421993e0aa85ba60795f",
        "Userid": "marivera",
        "FullName": "Martha Rivera"
      },
      {
        "_id": "36dfb2decc79405aadb2921d3424e6e8",
        "Userid": "pasantos",
        "FullName": "Paulo Santos"
      },
      {
        "_id": "6217f35fd6374a0984f0148c2c23643a",
        "Userid": "nikkwolf",
        "FullName": "Nikki Wolf"
      }
    ]
    ```
    
    ## Connect a URL with API Gateway
    
    Next, you will create the entry point for your Users microservice by connecting web requests to your Lambda function.
    
    ![image](https://github.com/user-attachments/assets/5c4e3216-58c4-4784-b1a2-4995d2a7d4a1)
    
    [**1 - Create an API**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/build-api#1-create-an-api)
    
    API Gateway provides three main types of API: HTTP, REST, and WebSockets. The REST API workflow has more steps to set up than an HTTP API. Later modules will use the advanced testing and mocking features in the REST API.
    
    For this module, you will create a **REST API** for the sample User data.
    
    Look for a blue box (like this one) and choose to **"Try out the new console"**.
    
    1. In the console, go to the **API Gateway** service
    2. Make sure you have chosen the **new console experience**.
    3. Choose the **REST API** API type, then **Build**.
    4. For API name, enter `ServerlessREST`; keep the default endpoint type of **Regional**.
    5. Choose **Create API** to continue.
    
    **Look closely:** If the form asks for **VPC endpoint IDs**, cancel, go back, and choose **REST API** without "Private".
    
    [**2 - Create a Resource in the REST API**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/build-api#2-create-a-resource-in-the-rest-api)
    
    You now have an API with an empty root element. You need to define a **Users** resource and path.
    
    1. Choose **Create Resource**.
    2. For the Resource name, enter `users`.
    3. Choose **Create Resource**.
    
    [**3 - Create a Method for the REST Resource**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/build-api#3-create-a-method-for-the-rest-resource)
    
    Lastly, you will create a **method** under the Users resource that corresponds to an HTTP method. You will bind that method to the get-users Lambda function.
    
    1. Select `/users`, then choose the **Create method** button.
    2. For **Method type**, Select `GET`
    3. For Integration type, choose **Lambda Function**.
    4. Select the region where your *get-users* Lambda function was created (it should be selected by default)
    5. To find the Lambda Function, start entering the function name: `get-users` then choose it it.
    6. Choose `Create method`
    
    Did you see a pop up to **Add Permission to Lambda Function**?
    
    API Gateway needs to be granted permission to invoke your Lambda function. This is an example of security in the cloud. Go ahead and **approve** it!
    
    You have successfully created a REST API endpoint!
    
    ## Pre-deploy API test
    
    Before you deploy your new API, test it with the built-in API Gateway REST Test feature. This ensures the API responds as expected with fewer ways it can fail.
    
    1. Choose **Resources** from the left panel.
    2. Choose the **GET** method under the `/users` resource
    3. Choose the **Test** tab.
    4. Leave Query Strings and Headers empty; choose **Test**.
    
    You should see the API response of **200**, and a **Response body** with **Items** from the DynamoDB table.
    
    Yay! You know the REST API endpoint works!
    
    ## Deploy the API
    
    Before you can connect to your API from an external URL, you must **deploy** it.
    
    And, before you can deploy the API, you need to create a *stage*. A stage can be used to denote environments like dev/qa/prod, versioned URLs like v1/v2, or really any string you'd like.
    
    We recommend **v1** for the stage, because we typically suggest setting up separate dev/qa/production **accounts** with their own infrastructure stacks. (You'll see how to automate this in the next module!)
    
    1. Choose the **Deploy API** button.
    2. For **Deployment stage**, choose **New stage**.
    3. For stage name, enter `v1`.
    4. For deployment description, enter `Initial rollout of the API!`.
    5. Choose **Deploy**
    
    The API Invoke URL will be in this format:
    
    > https://<UNIQUE-ID>.execute-api.<REGION>.amazonaws.com/<STAGE>/<RESOURCE>
    > 
    
    ## Test the deployed API
    
    Now that the API is deployed, you can try it out!
    
    1. Copy the Invoke URL to a browser window and try it...
    
    **Oops! You got an error, right???**
    
    You should have gotten an error message: "{"message":"Missing Authentication Token"}"
    
    That is because you are asking for the root resource at '/' which does not have an associated methods.
    
    1. Append **users** to the URL to invoke the `/users` resource and try again!
    
    ![image](https://github.com/user-attachments/assets/9a742676-61ea-485d-b887-d75f2aad1964)
    
    **Congratulations, you deployed an API!**
    
    You've been exposed to a lot of new ideas in this section.
    
    In the next section, we'll review and explain some serverless concepts before you move on...
    
    # 4 - Transition to Serverless
    
    **Read more about serverless concepts...**
    
    Want to learn more about serverless development? Read the [**Serverless Developer Guide**](https://docs.aws.amazon.com/serverless/latest/devguide/) . The SDG compliments this workshop with learning paths, serverless development concepts, and chapters to get started quickly with **serverless** Amazon Web Services.
    
    *Excerpt from the [Serverless Developer Guide](https://docs.aws.amazon.com/serverless/latest/devguide/)  ...*
    
    We assume that you already know how to build traditional web applications, but you are new to serverless architecture. In this module, you gained experience with three serverless services:
    
    1. **DynamoDB** for data storage
    2. **Lambda** for compute functions
    3. **API Gateway** to route inbound URL requests to Lambda
    
    Let's compare traditional web application development with this common serverless combination.
    
    In traditional development, dozens of potential frameworks are available in as many languages. These frameworks help you process requests and return responses.
    
    Components exist to parse URL parameters, retrieve headers and cookies, verify authentication, and route requests to a method to process and return a response. The method or function usually connects to a data source, queries and retrieves records, then returns some message directly to the client. Applications built with traditional frameworks do offer a lot of ready-built functionality. You could run your existing architectures in the cloud, but you would still need to manage servers.
    
    ![image](https://github.com/user-attachments/assets/fc739bb5-29f1-4f04-90df-38a6e9ccbada)
    
    ## Event Driven Architecture
    
    Serverless architecture brings development flexibility, scalability, and the capability to expand quickly into new geographical regions. The key to these benefits is a loosely coupled architecture.
    
    Serverless solutions, even the basic one you built in this module, are based on ***event-driven architecture*** or EDA. In event-driven architectures, services send and receive *events* which represent changes in state or an update.
    
    In this module, you built a synchronous pattern to respond to a request for users, but it still used an event-driven workflow. Events contain the data in a chunk of JSON text. Services expect specific *shapes* of JSON. This format represents data structures with consistent *shape* but flexible *contents*, that aren't row or column based.
    
    API Gateway served as the entry point for the Users microservice. Similar to traditional web application URL-routers, API Gateway takes the inbound request to the `/users` endpoint and converts it into an event. That event was routed to a Lambda function.
    
    The Lambda service manages the function. After initializing an execution environment, the Lambda service invokes the function to handle the inbound event, and possibly many more events during the function lifecycle.
    
    The function connects to a serverless database table, retrieves data, and bundles that data into a JSON response event.
    
    Instead of sending the response directly to the client, the response *event* is sent back to API Gateway. API Gateway then forwards the body of the event to the calling client to complete the request/response cycle.
    
    ![image](https://github.com/user-attachments/assets/af57fb05-0d3b-413f-81ed-e39d9ac6cd52)
    
    In event-driven architecture, services do not know how events will be processed further. This creates flexibility to extend the system, independent of other components. This is a big difference from traditional frameworks, providing immense opportunity to add features to your solution without disrupting an existing, operating solution!
    
    ## Summary
    
    - Event-driven architecture is foundational for serverless.
    - Scalable and extendable solutions are built from loosely coupled components which communicate changes of state or updates through *events*, which consist of JSON data.
    
    Congratulations! You have started your serverless journey!
    
    ![image](https://github.com/user-attachments/assets/58d8c2d8-f813-440f-96d4-be5dac169efd)
    
    Continue your journey by building a *Users Service* with authentication, authorization, and automated deploy with AWS SAM. You will add unit-tests, observability, alarms, and a dashboard to monitor the application!
    
    Before moving on, it's always a good idea to learn how to **cleanup** resources to prevent unexpected use...
    
    # Clean up
    
    Even if you are **continuing the workshop**, you should clean up your resources before moving on.
    
    ## To delete resources
    
    From the AWS Management Console, navigate to the consoles for each of the services and **delete** the resources you created:
    
    - In Lambda - delete your function
    - In API Gateway - delete your Rest API
    - In DynamoDB - delete your table
    - In IAM - delete the automatically created roles and permissions
    
    ---
    
    Cleanup is a best practice!
    
    Removing unused resources and permission policies increases security and prevents unexpected charges on your account.
