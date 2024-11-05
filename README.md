- (참조) On Demand 기준에 따른 AWS 서비스들
    
    (면접관) 우리 회사에서 AWS를 현재 사용 중인데 사용 요금이 너무 많이 나와서 고민이에요. 우리 회사에 입사한다면 이 문제를 해결해줄 좋은 방안이 있나요 ?
    
    → 미사용 자원 사용 중지
    
    → 자동화 적용하여 비업무시간에 자원 사용 중지
    
    → Auto Scaling 적용
    
    → On Demand 서비스들 사용 유도
    
    | **카테고리** | **On-Demand 서비스** |
    | --- | --- |
    | **컴퓨팅** | • EC2 On-Demand Instances (필요할 때 시작/중지 가능한 가상 서버)
    • AWS Lambda (사용한 실행 시간/메모리만큼 과금)
    • AWS Fargate (컨테이너 실행 시간만큼 과금) |
    | **스토리지** | • Amazon S3 (사용한 저장 용량만큼 과금)
    • Amazon EBS (프로비저닝된 볼륨 용량만큼 과금)
    • Amazon EFS (사용한 저장 용량만큼 과금) |
    | **데이터베이스** | • Amazon DynamoDB On-Demand (읽기/쓰기 요청량만큼 과금)
    • Amazon Aurora Serverless (실제 사용량 기반 과금) |
    | **네트워킹** | • AWS Direct Connect (데이터 전송량만큼 과금)
    • Elastic IP (미사용 IP 주소에 대한 과금)
    • Data Transfer (네트워크 데이터 전송량만큼 과금) |
    | **분석** | • Amazon Redshift (클러스터 실행 시간만큼 과금)
    • Amazon EMR (클러스터 실행 시간만큼 과금)
    • Amazon Athena (쿼리 실행량만큼 과금) |
    | **AI/ML** | • Amazon SageMaker (인스턴스 사용 시간만큼 과금)
    • Amazon Rekognition (API 호출 횟수만큼 과금)
    • Amazon Comprehend (처리된 데이터량만큼 과금) |
    
    주요 특징:
    
    - 선결제 없음
    - 최소 약정 기간 없음
    - 사용한 만큼만 지불
    - 언제든지 시작/중지 가능
    - 필요에 따라 즉시 확장/축소 가능
