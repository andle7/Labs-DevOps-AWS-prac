- (참고) MSA 구현 방식에 따른  AWS 서비스들
    
    (면접관) 이력서에 MSA 프로젝트를 Container와 Serverless의 2개 방식으로 수행한 portfolio가 보이는데 이때 어떤 aws 서비스들을 사용했나요 ?
    
    | **분류 기준** | **AWS 서비스** |
    | --- | --- |
    | **1. VM 기반** | • EC2 (가상 서버 인스턴스) |
    | **2. Container 기반** | • ECS (컨테이너 오케스트레이션)
    • EKS (관리형 쿠버네티스)
    • Fargate (서버리스 컨테이너) ECS / EKS
    • ECR (컨테이너 레지스트리) |
    | **3. Serverless** | • Lambda (서버리스 함수)
    • API Gateway (API 관리) |
    | **4. 공통** | • EventBridge (이벤트 기반 서비스 연동/스케줄링 서비스)
    • SNS (Simple Notification Service, 푸시 기반 메시징 서비스)
    • SQS (Simple Queue Service, 풀링 기반 메시지 큐 서비스)
    • CloudWatch (모니터링 및 관찰 가능성 서비스)
    • Step Functions (서버리스 워크플로우)
    • Cognito (인증 서비스) |
    
