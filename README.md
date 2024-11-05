- (Lab) Container Basic - ECS, ECR
    
    고양이 이미지를 보여주는 Cats docker image와 강아지 이미지를 보여주는 Dogs docker image를 간단한 사용예로 container 서비스를 실습
    
    ![image](https://github.com/user-attachments/assets/3a340faa-8c70-4293-b687-e2bee3fb423f)
    
    - Docker Image 설명
        
        The **Cats and Dogs** application consists of three services: **Web** (landing page), **Cats** (cats page) and **Dogs** (dogs page). In this lab, **Web** and **Cats** use the *Amazon EC2* launch type and **Dogs** uses the *AWS Fargate* launch type on a single cluster which we have called **ECS-Workshop**.
        
        [**Service Overview**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/01-intro#service-overview)
        
        ![image](https://github.com/user-attachments/assets/3c9d2aa8-d1e1-4cc6-b3cb-208741c67b9e)
        
        1. **Web** is the main web page accessible by our ALB's DNS name. If you click **I♥Cats** or **I♥Dogs**, you will be redirected to the respective ECS service (**cats** or **dogs**)
        2. **Cats**, an EC2 task, randomly shows pictures of cats whenever you refresh the web page
        3. **Dogs**, a Fargate task, randomly shows pictures of dogs whenever you refresh the web page
        
    - Amazon ECR
        
        # Amazon ECR
        
        [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/)  (Amazon ECR) is a fully AWS managed container image registry service that is secure, scalable, and reliable. You can use your preferred CLI to push, pull, and manage Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. Amazon ECR supports public and private container image repositories as well.
        
        ![image](https://github.com/user-attachments/assets/af04450c-42c0-497d-9a27-fdbeb3ef2813)
        
        In this workshop, we will work with the following Amazon ECR components
        
        - Registry: An Amazon ECR private registry is provided to each AWS account; you can create one or more repositories in your registry and store images in them.
        - Authorization Token: Your client must authenticate to Amazon ECR registries as an AWS user before it can push and pull images
        - Repository: This contains your Docker/OCI images, and OCI compatible artifacts
        - Image: Lightweight, standalone, executable package of software that includes everything needed to run an application
        
        In this section, we will create three repositories (*web*, *cats* and *dogs*), build and tag a Docker image for each repository using **VSCode**, authenticate to the Amazon ECR registry, then finally push our newly created Docker images.
        
        # Create Repositories
        
        In this exercise, you will create ECR repositories for web, cats, and dogs. Amazon ECR is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. It integrates with Amazon ECS to streamline your development-to-production workflow.
        
        1. Navigate to the [Amazon ECR.](https://console.aws.amazon.com/ecr)  console. If it is your first time using Amazon ECR, you will see the welcome page. Open the left hand navigation bar and click **Repositories**
            
            ![image](https://github.com/user-attachments/assets/1ddfa6a4-2d1b-4244-8870-140de51c3cd5)
            
        2. Click **Create Repository** and enter **cats** as the repository name, leave the rest of the settings as default, then scroll down and click **Create repository**
            
           ![image](https://github.com/user-attachments/assets/f913d542-166e-44d1-933a-24678a3dbc4c)
            
        
        The repository name must be **web**, **cats**, **dogs** to proceed to the next step of **Tagging images and pushing to ECR**.
        
        1. Check if the three repositories were created properly.
            
            ![image](https://github.com/user-attachments/assets/59ebab9b-b480-4203-aa9d-cf1d6c697bd2)
            
        
        ## (Alternative) Create ECR Repositories using AWS CLI
        
        The above process can also be performed simply using **AWS CLI** in the VSCode terminal. If you performed the previous step, proceed to the next step.
        
        1. Switch to the VSCode server browser screen.
        2. Paste the following command in the VSCode server terminal to create three ECR repositories.
            
            ```tsx
            aws ecr create-repository \
            --repository-name cats \
            --image-scanning-configuration scanOnPush=true \
            --region ${AWS_REGION}
            
            aws ecr create-repository \
            --repository-name dogs \
            --image-scanning-configuration scanOnPush=true \
            --region ${AWS_REGION}
            
            aws ecr create-repository \
            --repository-name web \
            --image-scanning-configuration scanOnPush=true \
            --region ${AWS_REGION}
            ```
            
        
        # Build Docker Images
        
        In this step, the participant will build **web**, **cats**, and **dogs** Docker images using the Docker CLI in the VSCode server terminal.
        
        1. Switch to the VSCode server browser screen.
        2. Check the Dockerfile and application source code of web, cats, and dogs to be built in the future. Docker reads the Dockerfile and automatically builds the image. The Dockerfile in the cats directory is required to build the **cats** Docker image. Click the Open Folder button on the left panel of VSCode to select the ecs-casts-dogs folder. Then, select the cats directory and click the OK button. On the **Do you trust the authors of the files in this folder?** screen, check the checkbox and click the **Yes, I trust the authors** button.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/fb03e423-6ce0-4771-a9bf-000b73826484/image.png)
            
        
        [Learn more about what **FROM**, **RUN**, etc. mean in a Dockerfile](https://docs.docker.com/engine/reference/builder/#dockerfile-reference) . For example, the **FROM** command initiates a new build stage and sets the base image for subsequent commands.
        
        1. Build **cats** in a terminal window in VSCode. If you don't have a terminal window, open one by selecting Menu > Terminal > New Terminal. Make sure your current directory is cats and type the following command to build the container image.
            
            `source ~/.bash_profile
             docker build -t cats .`
            
            ![vscode_cats_build_image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/dad82ab6-da58-44e8-a77d-c0b6f9ac7644/vscode_cats_build_image.png)
            
        2. In **dogs** and **web**, we also examine the contents of the Dockerfile and build the image. Since we received the nginx image and installed or upgraded several tools while building the cats image, we can see that it is executed much faster than cats with the message **Using cache**.
            
            `docker build -t dogs ~/ecs-cats-dogs/dogs/
            docker build -t web ~/ecs-cats-dogs/web/`
            
        
        # Tag and Push Images to ECR
        
        In this section, we will tag the Docker images we built in the previous section and push the images to their respective repositories
        
        1. Navigate to the [Amazon ECR](https://console.aws.amazon.com/ecr)  console. Select the radio button for **cats** and click **View push commands.**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/3ea3e0a7-2b88-4856-a936-1737c2132478/image.png)
            
        
        ## Set environment variable
        
        The environment variables may have been initialized when the browser screen was refreshed. Set the environment variables by running the following command in the VSCode terminal.
        
        `source ~/.bash_profile`
        
        ## Tag and Push cats container image
        
        You will see a new window with push commands for **cats**. Since we already built the cats Docker image, we can skip Step 2. Change your directory to **cats** and copy and paste the commands into your VSCode terminal to **Retrieve an authentication token**, **tag your image**, and **push the image** in that order
        
        `aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com`
        
        `docker tag cats:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/cats:latest`
        
        `docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/cats:latest`
        
        If the command above is not working, check if your terminal has $AWS_ACCOUNT_ID or $AWS_REGION environment variables correctly.
        
        ## Tag and Push dogs container image
        
        Do the same for **Dogs**.
        
        `docker tag dogs:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/dogs:latest
        docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/dogs:latest`
        
        ## Tag and Push web container image
        
        Do the same for **web**.
        
        `docker tag web:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/web:latest
        docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/web:latest`
        
        ## Confirm ECR repositiries
        
        Confirm that the images were pushed into ECR successfully. You should see the **latest** tagged image in each repository. Copy and paste the latest image URI into a text editor for reference later
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/3fea9095-b8d1-4266-a515-837d8855fcca/image.png)
        
    - Amazon ECS
        
        # Amazon ECS
        
        [Amazon Elastic Container Service](https://aws.amazon.com/ecs/)  (ECS) is a highly scalable and fast container management service. You can use it to run, stop, and manage containers on a cluster. With Amazon ECS, your containers are defined in a task definition that you use to run an individual task or multiple tasks within a service. ECS enables you to launch thousands of containers across the Cloud using your preferred Continuous Integration and Delivery (CI/CD) and automation tools, while also integrating seamlessly with AWS management and governance solutions.
        
        ![aboutecs_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/544702d4-d66a-49a5-9dac-9d511d2e1027/aboutecs_en.png)
        
        - A service is a configuration you can use to run and maintain a specified number of tasks simultaneously in a cluster.
        - A task definition is essentially a blueprint for your application (which are then run as tasks on a given service). Task definitions specify various parameters of your application such as memory, cpu, etc. (see example below).
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/379bc529-d9e0-4c49-9858-4a183ab899ae/image.png)
            
        
        In this workshop, we will create the following:
        
        - An ECS Cluster, which serves as the logical grouping of tasks or services. Your tasks and services are run on infrastructure that is registered to a cluster.
        - ECS Task Definitions for our *web*, *cats*, and *dogs* services.
        - ECS Services which run our *web*, *cats*, and *dogs* tasks.
        - An [Application Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)  (ALB) to handle distribution of traffic across our ECS services.
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/bbf1953a-ca8f-4253-808d-f2151c7adc26/image.png)
        
        # ECS Cluster
        
        In this section, we will deploy the **ECS-Workshop** cluster across multiple Availability Zones (AZs) for High Availability. We will then attach an additional IAM policy which will be used for the upcoming **Monitoring** section.
        
        # Create Security Group
        
        In this chapter we will create Amazon ECS Cluster's Security group and Application Load balancer's security group.
        
        ## Create Application Load Balancer's Security Group
        
        1. Go to [EC2](https://console.aws.amazon.com/ec2)  page.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/2cdbc2ff-77f2-49c2-9222-efb8665eb212/image.png)
            
        2. Click **Create Security Group** on the left.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/aeb427c5-51c7-4130-b55c-7d9bfcc2dd70/image.png)
            
        3. Create a security group for the Application Load Balancer to be created in the future by entering the following:
        - Security Group Name : `ALB-SG`
        - Description: `ALB-SG`
        - VPC : **ECSWorkshopVPC**
        - Inbound Rule
            - Type : **HTTP**
            - Source : Choose **Anywhere-IPv4** (0.0.0.0/0)
        - **Do not change Outbound Rule**
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/c9462165-2d28-45ad-8590-7992f578f7e1/image.png)
        
        1. Click the Create Security Group button to complete the creation of a security group for the Application Load Balancer.
        
        ## Create ECS Cluster's Security Group
        
        1. Now we will create ECS Cluster's Security group. Go to [EC2](https://console.aws.amazon.com/ec2)  page and click **Create Security Group** on the left.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/8fe0dd84-5cc7-4de0-9349-07f65af209cc/image.png)
            
        2. Create a security group for the ECS Cluster to be created in the future by entering the following. Importantly, you must select the source of the inbound rule as the **ALB-SG** you created earlier to allow only traffic from the Application Load Balancer:
        - Security Group Name : `ECS-ASG-SG`
        - Description: `ECS-ASG-SG`
        - VPC : **ECSWorkshopVPC**
        - Inbound Rule
            - Type : **All TCP**
            - Source : Search **ALB-SG** and choose
        - **Do not change Outbound Rule**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/3c263412-88ae-4ab7-b670-f4d3d10d9e57/image.png)
            
        1. Click **Create Security Group** button to complete ECS Cluster's security group creation.
        
        # Create cluster
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console. If it is your first time running ECS, you will see the **Get started** screen with an ECS overview video. Click **Cluster** in the left side navigation bar and then **Create Cluster**.
        
        1. 1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console. If it is your first time running ECS, you will see the **Get started** screen with an ECS overview video. Click **Cluster** in the left side navigation bar and then **Create Cluster**.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/5952ab7f-e20b-4336-a401-a9c023fd07c1/image.png)
            
        2. Name your cluster **ECS-Workshop**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ee0dbac6-508f-4748-b226-61adf0769bf6/image.png)
            
        3. Fill out the **Infrastructure** dropdown with the following settings:
            
            
            | Setting | Value |
            | --- | --- |
            | Infra | **AWS Fargate**, **Amazon EC2** |
            | Operating System | **Amazon Linux 2** |
            | EC2 Instance Type | **m5.large** |
            | Desired capacity | **Minimum: 2 Maximum: 2** |
            | Root EBS volume size | **100GB** |
            | SSH Key Pair | **None** |
            
            ![cluster_12_1.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/e4e6d4b5-0dcf-4a3e-9b4e-d64e29fcf04c/cluster_12_1.png)
            
        4. Fill out the **Network setting for Amazon EC2 instances** dropdown with the following settings:
            
            
            | Setting | Value |
            | --- | --- |
            | VPC | **ECSWorkshopVPC (10.0.0.0/16)** |
            | Subnets | **Private** Subnet1, **Private** Subnet2 |
            | Security Group | **ECS-ASG-SG** |
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/114ef458-4c0a-4d3f-8f6a-a19d0d8714e6/image.png)
            
        5. Finally, to be able to monitor your cluster, enable the **Container Insights** by expanding the **Monitoring** dropdown and turning on **Use Container Insights**. Once you have confirmed the settings for the ECS cluster, click **Create**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/5da4645f-704e-4865-b907-3177e1cfa9bf/image.png)
            
        6. ECS Cluster has been created.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/cb580762-2e05-4a96-8d3d-3f73bd321770/image.png)
            
        
        # ECS Task Definition
        
        To run Docker containers on Amazon ECS, you need a **Task Definition**. Create **webdef**, **catsdef**, and **dogsdef** task definitions that reference the web, cats, and dogs Docker images you created in the Amazon ECR lab.
        
        ## What is a Task Definition?
        
        A **Task Definition** is essentially a blueprint for your application. **Task Definitions** run as **Tasks** in a **Service**. **Task Definitions** specify various parameters for your application, such as memory, CPU, and so on. Some of the parameters that you can specify in a Task Definition are:
        
        - Docker image to use for each container in the task
        - The amount of CPU and memory to use for each task or each container within the task
        - The Launch Type to use, which determines the infrastructure on which the task is hosted
        - The Docker networking mode to use for the containers in the task
        - The logging configuration to use for the task, etc.
        - Learn more about [Task Definition Parameters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) .
        
        ## Hands-on Procedure
        
        1. Create a **webdef** task definition
        2. Create a **catsdef** task definition
        3. Create a **dogsdef** task definition
        4. Add permissions to the `ecsTaskExcutionRole` IAM role created during the task definition creation process In this section, we will configure Task Definitions for our **web**, **cats**, and **dogs** services.
        
        # Web Task Definition
        
        Amazon ECS supports CLI-based settings such as AWS Copilot as well as the AWS console. There are two ways to create a task definition on the AWS console: 1) to create it step by step on the AWS console, and 2) to configure it with JSON templates. Experience both ways while creating web, cats, and dogs.
        
        Choose **EC2** launch type for Web task definition.
        
        ## 1) Create Task Definition via Console GUI
        
        1. In [Amazon ECS](https://console.aws.amazon.com/ecs) , go to **Task definitions** menu on the left and click **Create new Task Definition** button.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ffda2438-a7e0-46f3-b826-809259188bf6/image.png)
            
        2. Task definition family : input `webdef`
        3. Configure Infrastructure with following details:
            
            If you use Amazon ECS for the first time, `ecsTaskExcutionRole` IAM Role will not exist. Therefore in **Task execution role** configuration, choose `Create new role`. Then `ecsTaskExcutionRole` IAM Role will create automatically.
            
        - Launch type : `Amazon EC2 instances`
        - Operation system/Architecture : `Linux/X86_84`
        - Network mode
            - `bridge`
        - Task size
            - CPU : `0.5 vCPU`
            - Memory : `1 GB`
        - Task execution role
            - `Create new role` or `ecsTaskExcutionRole`
                
                ![webdef_2.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/bd8342be-6607-4c2b-b7dc-a7a2903f7647/webdef_2.png)
                
        1. Configure Container with following details:
            
            Copy the web container image URL by clicking on the square beside of the latest tagged image URL in ECR's web repository. Keep the ECR window open as you still need to do the same in later.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/004ce07e-18a3-498b-9422-650273857bc6/image.png)
            
            - Container name: `web`
            - Image URI: `Workshop participant's latest web image URI`
            - Container port : `80`
            - Protocol : `TCP`
            - Port name : `web-80-tcp`
            - App protocol : `HTTP`
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/71941c0f-c01d-4f94-8774-ecb337b2ce5c/image.png)
            
        2. Configure Logging with following details:
            - awslogs-group : `/ecs/webdef`
            - awslogs-region : `ap-northeast-2` **<Workshop paricipant's Region>**
            - awslogs-stream-prefix : `ecs`
            - awslogs-create-group : `true`
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/46d89249-f536-45bf-a9db-c11b6bc4f967/image.png)
            
        3. Click **Create** button to create task definition.
        
        [**(ALTERNATIVE) Create Task Definition via JSON**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/03-console/04-ecs/02-taskdef/web#(alternative)-create-task-definition-via-json)
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console and click **Task definitions** in the left hand navigation and then click **Create new task definition** --> **Create new task definition with JSON**
        2. Copy and paste the JSON file below.
        
        If you are using Amazon ECS for the first time, an error occurs because the **ecsTaskExcutionRole** has not been created. Therefore, it is recommended that you create web task definitions step by step in the console.
        
        Change **<YOUR WEB ECR IMAGE URI>** to your web ECR image url.
        
        Change `awslogs-region` **<YOUR REGION>** to your current region.
        
        Change `executionRoleArn` **<YOUR ACCOUNT ID>** to your 12 digit AWS Account ID.
        
        ```tsx
        
        {
          "requiresCompatibilities": [
            "EC2"
          ],
          "family": "webdef",
          "containerDefinitions": [
            {
              "name": "web",
              "image": "<YOUR WEB ECR IMAGE URI>",
              "portMappings": [
                {
                  "name": "web-80-tcp",
                  "containerPort": 80,
                  "hostPort": 0,
                  "protocol": "tcp",
                  "appProtocol": "http"
                }
              ],
              "essential": true,
              "environment": [],
              "environmentFiles": [],
              "mountPoints": [],
              "volumesFrom": [],
              "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                  "awslogs-create-group": "true",
                  "awslogs-group": "/ecs/webdef",
                  "awslogs-region": "<YOUR REGION>",
                  "awslogs-stream-prefix": "ecs"
                }
              }
            }
          ],
          "volumes": [],
          "networkMode": "bridge",
          "memory": "1024",
          "cpu": "512",
          "runtimePlatform": {
            "cpuArchitecture": "X86_64",
            "operatingSystemFamily": "LINUX"
          },
          "executionRoleArn": "arn:aws:iam::<YOUR ACCOUNT ID>:role/ecsTaskExecutionRole"
        }
        
        ```
        
        3. Click **Create**
        
        # Cats Task Definition
        
        In this section, we will be configuring our **cats** task definition.
        
        ## Create Cats Task Definition
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console and click **Task definitions** in the left hand navigation and then click **Create new task definition** - **Create new task definition**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/42af4ab6-8c1f-4ee7-8abd-6277cfc31b72/image.png)
            
        2. Set the Task definition family name as **catsdef**
        3. Configure **cats** container.
            - Container name: `cats`
            - Image: Use the latest **cats** image URI from [Amazon ECR](https://console.aws.amazon.com/ecr)
        4. In the "Port mappings" section, set Container port to **80**, Protocol to **TCP** Port name to **cats-80-tcp** and set App protocol to **HTTP** (these parameter can be used by [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) ).
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/0c91e3c0-5c70-43fd-b481-233106925891/image.png)
            
        5. Skip the other sections ("Environment variables"; "HealthCheck" and "Docker configuration") and click **Next**.
        6. Select **Amazon EC2 instances** and remove **AWS Fargate (Serverless)** for App environment. Set the Operating system to **Linux/X86_64**, CPU to **0.5 vCPU** and Memory to **1 GB**.
        7. Select "Create new role" for **Task execution role**, choose **bridge** for "Network mode" and leave the other sections ("Container size", "Task roles", "Network mode")
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/b7a95ecf-6899-4491-83c6-a308a02cf581/image.png)
            
        8. Open the "Monitoring and logging" section and select **Use log collection**. Select **Amazon CloudWatch**, leave the default values.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/0863ea9a-707f-41ee-b406-5875ac013d8a/image.png)
            
        9. Leave the other sections ("Container size", "Task roles, network mode" ; "Storage" ; "Tags") with default values and click **Next**.
        10. Review your configuration and click **Create** at the bottom.
        
        ## (ALTERNATIVE) Create Cats Task Definition via JSON
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console and click **Task definitions** in the left hand navigation and then click **Create new task definition** --> **Create new task definition via JSON**
        2. Copy and paste below JSON file.
        
        Change **<YOUR CATS ECR IMAGE URI>** to your web ECR image url.
        
        Change `awslogs-region` **<YOUR REGION>** to your current region.
        
        Change `executionRoleArn` **<YOUR ACCOUNT ID>** to your 12 digit AWS Account ID.
        
        ```tsx
        {
            "requiresCompatibilities": [
                "EC2"
            ],
            "family": "catsdef",
            "containerDefinitions": [
                {
                    "name": "cats",
                    "image": "<YOUR CATS ECR IMAGE URI>",
                    "portMappings": [
                        {
                            "name": "cats-80-tcp",
                            "containerPort": 80,
                            "hostPort": 0,
                            "protocol": "tcp",
                            "appProtocol": "http"
                        }
                    ],
                    "essential": true,
                    "environment": [],
                    "environmentFiles": [],
                    "mountPoints": [],
                    "volumesFrom": [],
                    "logConfiguration": {
                        "logDriver": "awslogs",
                        "options": {
                            "awslogs-create-group": "true",
                            "awslogs-group": "/ecs/catsdef",
                            "awslogs-region": "<YOUR REGION>",
                            "awslogs-stream-prefix": "ecs"
                        }
                    }
                }
            ],
            "volumes": [],
            "networkMode": "bridge",
            "memory": "1024",
            "cpu": "512",
            "runtimePlatform": {
                "cpuArchitecture": "X86_64",
                "operatingSystemFamily": "LINUX"
            },
            "executionRoleArn": "arn:aws:iam::<YOUR ACCOUNT ID>:role/ecsTaskExecutionRole"
        }
        ```
        
        # Dogs Task Definition
        
        In this section, we will be creatingthe **dogs** task definition, which uses the AWS Fargate launch type
        
        [**Create Dogs Task Definition**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/03-console/04-ecs/02-taskdef/dogs#create-dogs-task-definition)
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console and click **Task definitions** in the left hand navigation and then click **Create new task definition** - **Create new task definition**
        2. Set the Task definition family name as **dogsdef**
        3. Configure **dogs** container.
            - Container name: `dogs`
            - Image: Use the latest **dogs** image URI from [Amazon ECR](https://console.aws.amazon.com/ecr)
        4. In the "Port mappings" section, set Container port to **80**, Protocol to **TCP**, delete **Port name** and set App protocol to **None** (these parameter only applies to [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) ).
        5. Skip the "Environment variables" and "HealthCheck" sections and click **Next**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ac700f40-abd1-44e8-96fb-c39989aac192/image.png)
            
        6. Keep **AWS Fargate (Serverless)** selected for App environment. Set the Operating system to **Linux/X86_64**, CPU to **0.5 vCPU** and Memory to **1GB**.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/828b91e5-23e7-47f5-b296-61ec1dd9391f/image.png)
            
        7. Leave other parameters as default and click **Next**. Note that log collection is activated by default when using **Fargate** as App environment.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/0894332f-7f66-4d3f-b07f-f6716794954e/image.png)
            
        8. Review your configuration and click **Create** at the bottom.
        
        ## (Alternative) Create Dogs Task Definition via JSON
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console and click **Task definitions** in the left hand navigation and then click **Create new task definition** --> **Create new task definition via JSON**
        2. Copy and paste below JSON file.
        
        Change **<YOUR DOGS ECR IMAGE URI>** to your web ECR image url.
        
        Change `awslogs-region` **<YOUR REGION>** to your current region.
        
        Change `executionRoleArn` **<YOUR ACCOUNT ID>** to your 12 digit AWS Account ID.
        
        ```tsx
        {
            "requiresCompatibilities": [
                "FARGATE"
            ],
            "family": "dogsdef",
            "containerDefinitions": [
                {
                    "name": "dogs",
                    "image": "<YOUR DOGS ECR IMAGE URI>",
                    "portMappings": [
                        {
                            "name": "dogs-80-tcp",
                            "containerPort": 80,
                            "hostPort": 80,
                            "protocol": "tcp",
                            "appProtocol": "http"
                        }
                    ],
                    "essential": true,
                    "environment": [],
                    "environmentFiles": [],
                    "mountPoints": [],
                    "volumesFrom": [],
                    "logConfiguration": {
                        "logDriver": "awslogs",
                        "options": {
                            "awslogs-create-group": "true",
                            "awslogs-group": "/ecs/dogsdef",
                            "awslogs-region": "<YOUR REGION>",
                            "awslogs-stream-prefix": "ecs"
                        }
                    }
                }
            ],
            "volumes": [],
            "networkMode": "awsvpc",
            "memory": "1024",
            "cpu": "512",
            "runtimePlatform": {
                "cpuArchitecture": "X86_64",
                "operatingSystemFamily": "LINUX"
            },
            "executionRoleArn": "arn:aws:iam::<YOUR ACCOUNT ID>:role/ecsTaskExecutionRole"
        }
        ```
        
        # Modify ECS Task IAM Role
        
        Add CloudWatchLogsFullAccess to the ecsInstanceRole IAM role, which was automatically generated in the previous step for the ECS task.
        
        1. Go to the console [IAM](https://console.aws.amazon.com/iam)  and navigate to the **Roles** menu on the left-hand side. Search for **ecs** and select the **ecsTaskExecutionRole** role from the search results.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/4cc39da1-7206-42dd-b721-a56d89ac10c6/image.png)
            
        2. On the right-hand side of the **Permissions** tab, click on **Add permissions** and then select **Attach policies**.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/bbb4ea86-18e5-43d5-bfdc-97ac341b7671/image.png)
            
        3. In the search bar, type in "cloudwatchfull" and select the **CloudWatchFullAccess** policy. Check the box next to it and click on **Add permissions**.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/c15a5d52-9408-4030-91ff-53826cb93a9f/image.png)
            
        4. Verify that the policy has been successfully added.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ae0472f9-94bf-41c7-84a5-70a72e8b295e/image.png)
            
        
        # ECS Service
        
        Amazon ECS allows you to run and manage a specified number of instances of a task definition concurrently on an Amazon ECS cluster. These are called **services**. If a task fails or stops for any reason, the Amazon ECS service scheduler starts another instance of the task definition to replace it, maintaining the desired number of tasks for the service based on the scheduling strategy used.
        
        In addition to maintaining the desired number of tasks for a service, you can optionally run the service behind a **load balancer**. The load balancer distributes traffic between the tasks associated with the service.
        
        In this step, you create three services, **web**, **cats**, and **dogs**, that reference the task definitions you created in the previous chapter. These services are associated with **target groups by ALB path patterns**.
        
        - **web** target group - path pattern /
        - **cats** target group - path pattern /cats
        - **dogs** target group - path pattern /dogs
        
        # Create ALB
        
        In this section we will create an Application Load Balancer to forward and distribute traffic to our **cats** and **dogs** web application
        
        ## Create the DEMOGO-ALB
        
        1. Navigate to the [EC2 Load Balancers.](https://us-east-1.console.aws.amazon.com/ec2/v2/home?region=us-east-1#LoadBalancers:sort=loadBalancerName)  console
        2. Click **Create Load Balancer** and select **Application Load Balancer.**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/09d2fd83-b87b-437e-a7ec-2237ef4f3d8b/image.png)
            
        3. Configure the Load Balancer with the following settings
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/1f150ccc-159b-4035-9f7f-748feacd6126/image.png)
            
        4. **Network mapping**: Availability zones
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/49039049-0ef5-48c5-8e1a-2c3795755c62/image.png)
            
            | Setting | Value |
            | --- | --- |
            | **VPC* | DemoGoECSVPC |
            | **Mappings** | us-east-1a and us-east-1b |
            | **Subnet** | **Public**Subnet1 and **Public**Subnet2 |
        5. Select **ecs-demogo-ALBSG** or **ecs-cats-and-dogs-ALBSG-XXX** (your security group name will look slightly different) and deselect the **default** security group.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/bf609571-c0fe-420c-b92d-f0308b86a956/image.png)
            
        6. **Listeners and routing**:
            
            ![web_target_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/316b4222-b8ec-4152-8a95-a8d044c8825c/web_target_en.png)
            
            | Setting | Value |
            | --- | --- |
            | **Name** | web |
            | **Target type** | Instance |
            | **Port** | 80 |
        7. Hit **Next** and skip **Register Targets.** Click **Create target group.**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/2907ad4e-1fc9-4893-a83e-11713ef920f4/image.png)
            
        8. **Listeners and routing**: Come back to **Load balancers** browser tab, and select **web** (the target group we just created) as HTTP:80 Listener
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/7ecf4e03-7c6d-4ad7-8fcd-99ccb3b6bddb/image.png)
            
        
        9. **Summary**: Review the configuration and **Create load balancer.**
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/cfee99ff-e787-4ccc-b329-50dc4a36bcda/image.png)
        
        # Create Web Service
        
        **Create the Web Service**
        
        1. Navigate to the [Amazon ECS](https://console.aws.amazon.com/ecs)  console and select **DEMOGO-ECS** cluster. Go to **Services** tab and click **Create**. Leave default to the rest options not mentioned.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/f6c8c1e5-1993-4579-97b1-1a707a5ea487/image.png)
            
        2. Configure service Environment
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/d1563392-b521-4009-8adb-89fb9b612fe8/image.png)
            
            | Setting | Value |
            | --- | --- |
            | **Launch type** | EC2 |
        3. Configure service Deployment Configuration
            
            ![configure_web_service_deployment_configuration.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/43a19b43-0a8b-42eb-b8fd-c50653c523fa/configure_web_service_deployment_configuration.png)
            
            | Setting | Value |
            | --- | --- |
            | **Task Definition Family** | webdef |
            | **Task Definition Revision** | latest |
            | **Service name** | web |
            | **Number of Tasks** | 2 |
        4. Configure Load Balancing
            
            ![configure_web_service_load_balancing.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/5a4e3c0b-d773-425b-ab14-748b2ddaa2a3/configure_web_service_load_balancing.png)
            
        5. Configure Task Placement
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/1131a0ea-67de-4991-9aa4-711b2b0c55f0/image.png)
            
            | Setting | Value |
            | --- | --- |
            | **Placement Templates** | AZ Balanced spread |
        6. Leave the other options unchanged and click **Create**
        7. Check web Services and Tasks.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/30d27d89-e8d7-40ce-97d3-be80ee6b60fe/image.png)
            
        
        # Create Cats Service
        
        [**Create the Cats service**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/03-console/04-ecs/03-service/cats#create-the-cats-service)
        1. Again, Click **Create** in DEMOGO-ECS **Services** tab.
        2. Configure service Envrironment
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/299c8fca-6e8a-4ea6-8f81-564d6fff818c/image.png)
        
        | Setting | Value |
        | --- | --- |
        | **Launch type** | EC2 |
        1. Configure service Deployment Configuration
            
            ![configure_cats_service_deployment_configuration_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/a35d51f9-4a80-4b75-a690-989604390789/configure_cats_service_deployment_configuration_en.png)
            
            | Setting | Value |
            | --- | --- |
            | **Task Definition Family** | catsdef |
            | **Task Definition Revision** | latest |
            | **Service name** | cats |
            | **Number of Tasks** | 2 |
        2. Configure Load Balancing
            
            ![configure_cats_service_load_balancing_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/99a8d19b-0d27-40e7-9fb2-5cf6764bfaa6/configure_cats_service_load_balancing_en.png)
            
            | Setting | Value |
            | --- | --- |
            | **Load balancer type** | Application Load Balancer |
            | **Load balancer name** | demogo-alb |
            | **Container to load balance** | cats 80:80 |
            | **Listner** | Use an existing listener |
            | **Listner port** | 80 HTTP |
            | **Target Group** | Create |
            | **Target Group Name** | cats |
            | **Target Group Path pattern** | /cats* |
            | **Target Group Health Check** | path /cats/ , protocol HTTP |
        3. Leave the other options unchanged and click **Create**
            
            
            | Setting | Value |
            | --- | --- |
            | **Service Connect** | Turn on Service Connect : **unchecked** |
            | **Service auto scaling** | Use service auto scaling : **unchecked** |
            | **Placement Templates** | AZ Balanced spread |
        4. Check cats Services and Tasks.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/92eb1853-2f54-4851-83b8-6a72a486c86e/image.png)
            
        
        # Create Dogs Service
        
        [**Create the Dogs service**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/03-console/04-ecs/03-service/dogs#create-the-dogs-service)
        
        1. Again, Click **Create** in DEMOGO-ECS **Services** tab.
        2. Configure service Envrironment
        
        ![configure_dogs_service_environment_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/0eacbe4e-a613-4040-b850-374e27a9946c/configure_dogs_service_environment_en.png)
        
        1. Configure service Deployment Configuration
            
            ![configure_dogs_service_deployment_configuration_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/74c2919b-7bbe-4d64-84dd-86de6ec22103/configure_dogs_service_deployment_configuration_en.png)
            
            | Setting | Value |
            | --- | --- |
            | **Task Definition Family** | dogsdef |
            | **Task Definition Revision** | latest |
            | **Service name** | dogs |
            | **Number of Tasks** | 2 |
        2. Configure service Networking
        - VPC: `ECSWorkshopVPC`
        - Subnets: `PrivateSubnet1`, `PrivateSubnet2`
        - Security group: `ECS-ASG-SG`
        - Public IP: `Off`
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/b79707d2-f1fe-4d8f-8d37-46e5e8a0c752/image.png)
            
        1. Configure Load Balancing
            
            ![configure_dogs_service_load_balancing_en.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/dd71f5a3-3882-47cc-b937-f8f963996e2c/configure_dogs_service_load_balancing_en.png)
            
        
        | Setting | Value |
        | --- | --- |
        | **Load balancer type** | Application Load Balancer |
        | **Load balancer name** | demogo-alb |
        | **Container to load balance** | dogs 80:80 |
        | **Listner** | Use an existing listener |
        | **Listner port** | 80 HTTP |
        | **Target Group** | Create |
        | **Target Group Name** | dogs |
        | **Target Group Path pattern** | /dogs* |
        | **Target Group Health Check** | path /dogs/ , protocol HTTP |
        1. Leave the other options unchanged and click **Create**
            
            
            | Setting | Value |
            | --- | --- |
            | **Service Connect** | Turn on Service Connect : **unchecked** |
            | **Service auto scaling** | Use service auto scaling : **unchecked** |
        2. Check dogs Services and Tasks.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ef5282b4-4615-48a4-9989-11c802b2a993/image.png)
            
        
        # Service Check
        
        1. Check that the status of each service in the **DEMOGO-ECS** cluster is **ACTIVE** and each service has two `Running tasks` and that each task is in the `RUNNING` state.
        
        1. Check that the status of each service in the **DEMOGO-ECS** cluster is **ACTIVE** and each service has two `Running tasks` and that each task is in the `RUNNING` state.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/f4fe9af9-33ed-4d6f-94c8-aa20cf708426/image.png)
            
        2. Notice that the **dogs** service uses the FARGATE launch type when **cats** and **web** use EC2. Because Fargate launches containers as needed, there is no EC2 instance associated with the **dogs** service
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/e0be2502-1771-4021-b9b4-d1c6ee7a9ce6/image.png)
            
        3. Navigate to the [Amazon EC2 Load Balancers.](https://us-east-1.console.aws.amazon.com/ec2/v2/home?region=us-east-1#LoadBalancers:)  console and copy the DNS name of **demogo-alb**. Paste the **DNS Name** into your web browser, you should be redirected to the **web** service since we set that as our default path
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/e33efae5-e1ee-4320-b03a-904302f0edb9/image.png)
            
        4. Click **I♥Cats** or **I♥Dogs.** to see the pictures of some furry Amazonian friends!
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ee234a7f-531b-43cd-a444-9b35a3f056a1/image.png)
