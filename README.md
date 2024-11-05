- (참고) Backend 서비스에 활용되는 AWS 서비스들
    
    (면접관) 제출한 개인 프로젝트 Portfolio를 보니 웹 서비스 개발 시 Backend 구성을 AWS를 사용하여 구현하였네요 ! 본인이 구성했던 Backend 서비스에 사용한 AWS 서비스 내용을 설명해줄 수 있나요 ?
    
    | 카테고리 | AWS 서비스 | 적용 유형 | 주요 기능 | 사용 사례 |
    | --- | --- | --- | --- | --- |
    | **컴퓨팅** |  |  |  |  |
    |  | **ECS** (Elastic Container Service) | Container | - 컨테이너 오케스트레이션 
     - Docker 컨테이너 관리 | - MSA 기반 백엔드 서비스 운영 
    - 컨테이너화된 애플리케이션 배포 |
    |  | **EKS** (Elastic Kubernetes Service) | Container | - 관리형 쿠버네티스 서비스 
     - 컨테이너 오케스트레이션 | - 대규모 컨테이너 워크로드 관리 
     - 멀티 클라우드 환경 구성 |
    |  | **EC2** (Elastic Compute Cloud) | VM | - 가상 서버 인스턴스 
     - 다양한 인스턴스 타입 제공 | - 웹 서버 호스팅 
    - 애플리케이션 서버 구성 |
    |  | **Lambda** | Serverless | - 서버리스 컴퓨팅 
     - 이벤트 기반 실행 | - API 엔드포인트 구현 
    - 이미지 처리 등 백엔드 작업 |
    | **데이터베이스** |  |  |  |  |
    |  | **RDS** (Relational Database Service) | VM, Container | - 관리형 관계형 DB 
     - 자동 백업 및 복구 | - 트랜잭션 처리 
    - 구조화된 데이터 저장 |
    |  | Aurora DB | VM, Container | - MySQL/PostgreSQL 호환 
     - 고가용성 및 자동 복구 
     - 분산 스토리지 | - 고성능 OLTP 
     - 대규모 트랜잭션 처리 
    - 글로벌 데이터베이스 |
    |  | Aurora Serverless | Serverless | - 자동 스케일링 
     - 사용량 기반 과금 
     - 자동 용량 관리 | - 가변적 워크로드 
    - 개발/테스트 환경 
    - 간헐적 사용 애플리케이션 |
    |  | DocumentDB | VM, Container | - MongoDB 호환 
     - 문서형 데이터베이스 
     - 자동 스케일링 | - 콘텐츠 관리 
    - 카탈로그 데이터 
    - 사용자 프로필 저장 |
    |  | DynamoDB | Serverless | - NoSQL 데이터베이스 
     - 자동 스케일링 | - 세션 관리 
    - 실시간 데이터 처리 |
    |  | ElastiCache | 공통 | - 인메모리 캐싱 
     - Redis/Memcached 지원 | - 세션 저장 
    - 데이터베이스 부하 감소 |
    | **네트워킹** |  |  |  |  |
    |  | VPC (Virtual Private Cloud) | VM, Container | - 격리된 네트워크 환경 
     - 보안 그룹 관리 | - 네트워크 분리 
    - 보안 정책 적용 |
    |  | ALB (Application Load Balancer) | VM, Container | - 로드 밸런싱 
     - SSL/TLS 종단점 | - 트래픽 분산 
    - HTTPS 처리 |
    |  | API Gateway | Serverless | - API 관리 및 모니터링 
     - 인증/인가 처리 | - RESTful API 제공 
    - 마이크로서비스 연동 |
    | **보안** |  |  |  |  |
    |  | IAM (Identity Access Management) | 공통 | - 접근 권한 관리 
    - 역할 기반 접근 제어 | - 서비스 간 권한 관리 
    - 사용자 인증 |
    |  | KMS (Key Management Service) | 공통 | - 암호화 키 관리 
    - 데이터 암호화 | - 중요 데이터 암호화 
    - 보안 키 관리 |
    |  | Secrets Manager | 공통 | - 비밀 정보 관리 
    - 자동 교체 기능 | - DB 접속 정보 관리 
    - API 키 관리 |
    | **모니터링/로깅** |  |  |  |  |
    |  | CloudWatch | 공통 | - 리소스 모니터링 
    - 로그 수집 및 분석 | - 성능 모니터링 
    - 로그 분석 |
    |  | X-Ray | 공통 | - 분산 추적 
    - 성능 분석 | - 마이크로서비스 모니터링 
    - 병목 구간 분석 |
    | **메시징** |  |  |  |  |
    |  | SQS (Simple Queue Service) | Serverless | - 메시지 큐잉 
    - 비동기 처리 | - 작업 큐 구현 
    - 서비스 간 통신 |
    |  | SNS (Simple Notification Service) | Serverless | - pub/sub 메시징 
    - 알림 전송 | - 이벤트 알림 
    - 푸시 알림 발송 |
    | **인증/권한** |  |  |  |  |
    |  | Cognito | Serverless | - 사용자 인증 관리 
    - OAuth/OIDC 지원 
    - 소셜 로그인 통합 | - 사용자 인증/인가 
    - 소셜 로그인 구현 
    - 토큰 기반 인증 |
    | **실시간 데이터** |  |  |  |  |
    |  | Kinesis Data Streams | Serverless | - 실시간 데이터 수집 
    - 대용량 스트리밍 처리 
    - 데이터 보존 | - 로그 수집 
    - 실시간 분석 
    - IoT 데이터 처리 |
    |  | Kinesis Data Firehose | Serverless | - 실시간 데이터 전송 
    - 데이터 변환 
    - 목적지 전송 자동화 | - 데이터 레이크 구축 
    - 로그 아카이빙 
    - 스트리밍 ETL |
    |  | Kinesis Data Analytics | Serverless | - 실시간 분석 
    - SQL/Flink 기반 처리 
    - 실시간 집계 | - 실시간 매트릭 분석 
    - 이상 탐지
    - 실시간 대시보드 |
    | **이벤트 처리** |  |  |  |  |
    |  | EventBridge | Serverless | - 이벤트 라우팅 
    - 이벤트 필터링 
    - 스케줄링 | - 이벤트 기반 통합 
    - 크론 작업 실행 
    - 서비스 간 연동 |
