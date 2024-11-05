
Labs - 웹 서비스 개발/DevOps에 AWS 서비스 활용

- [ ] 1. IT 서비스 유형에 따른  AWS 서비스들
- [ ] 2. MSA 구현 방식에 따른  AWS 서비스들
- [ ] 3. Managed 기준에 따른 AWS 서비스들
- [ ] 4. On Demand 기준에 따른 AWS 서비스들
- [ ] 5. Frontend 서비스에 활용되는 AWS 서비스들
- [ ] 6. Backend 서비스에 활용되는 AWS 서비스들
- [ ] 7. Storage 서비스 개발에 활용되는  AWS  서비스들
- [ ] 8. Database 서비스 개발에 활용되는 AWS  서비스들
- [ ] 9. CI/CD  AWS 서비스들
- [ ] 10. CORS 보안 적용 AWS 서비스들
- [ ] 11. Serverless 방식의 AWS 서비스들
- [ ] 12. 프로그래밍 언어별 Lambda 구현 예시
- [ ] 13. Infra as a Code (IaC)
- [ ] 14. Container Basic - ECS, ECR
- [ ] 15. Serverless Basic - Lambda, API Gateway, DynamoDB
- [ ] 16. DynamoDB
- [x] 17. ~~Serverless To Do Service 구현 - Lambda, API Gateway~~
- [x] 18. ~~Serverless To Do Service에 IaC 적용 - Serverless Framework~~




**Labs - 웹 서비스 개발/DevOps에 AWS 서비스 활용**

---

취업 시 단순 프로그래머 지원이 아닌 DevOps로 지원을 염두해 둔다면 아래 AWS 핵심 서비스들에 대한 숙지가 매우 중요합니다 !  취업 경쟁력을 높이기 위해서는 본인 역량과 정체성을 DevOps로 목표를 설정해두고 옵션으로 프로그래머로서도 역량을 끌어올리는 것이 취업에 매우 좋은 전략이라고 생각됩니다 !  참고로 시장에서 DevOps 경력자들은 단순 프로그래머 경력자들 보다 같은 경력 기간 시 더 높은 연봉과 처우를 받고 있습니다. 

- (참고) IT 서비스 유형에 따른  AWS 서비스들
    
    (면접관) DevOps 업무로 신입 지원을 하였는데 지원자가 경험하고 사용했던 AWS 서비스들을  IT 서비스 유형별로 설명해보세요 !   
    
    | 서비스 유형 | 서비스 |
    | --- | --- |
    | **컴퓨팅** | • EC2 (가상 서버)  • Lambda (서버리스 컴퓨팅)  • ECS (컨테이너 서비스)  • EKS (쿠버네티스 서비스)  • Elastic Beanstalk (PaaS) |
    | **스토리지** | • S3 (객체 스토리지)  • EBS (블록 스토리지)  • EFS (파일 시스템)  • Glacier (장기 보관 스토리지) |
    | **데이터베이스** | • RDS (관계형 DB)  • DynamoDB (NoSQL)  • ElastiCache (인메모리 캐시)  • Redshift (데이터 웨어하우스)  • Aurora (관리형 DB)  • DocumentDB (문서 DB) |
    | **네트워킹** | • VPC (가상 사설 네트워크)  • Route 53 (DNS 서비스)  • CloudFront (CDN)  • ELB (로드 밸런서) |
    | **보안 및 인증** | • IAM (접근 관리)  • WAF (웹 방화벽)  • Shield (DDoS 보호)  • KMS (키 관리)  • Cognito (사용자 인증) |
    | **모니터링** | • CloudWatch (모니터링)  • CloudTrail (API 로깅)  • X-Ray (애플리케이션 추적) |
    | **분석** | • EMR (빅데이터 처리)  • Athena (S3 데이터 쿼리)  • Kinesis (실시간 데이터 분석)  • QuickSight (BI 도구) |
    | **AI/ML** | • SageMaker (머신러닝)  • Rekognition (이미지/비디오 분석)  • Comprehend (자연어 처리)  • Lex (챗봇)  • Bedrock (생성형 AI) |
    | **개발자 도구** | • CodeCommit (소스 제어)  • CodeBuild (빌드)  • CodeDeploy (배포)  • CodePipeline (CI/CD) |
    | **관리 도구** | • CloudFormation (인프라 자동화)  • Systems Manager (리소스 관리)  • Organizations (계정 관리)  • Config (리소스 감사) |
    
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
    
- (참조) Managed 기준에 따른 AWS 서비스들
    
    (면접관) 이력서에 AWS 관리형 서비스들을 사용했다고 기술했는데 관리형 서비스가 어떤 개념인지 설명해줄 수 있나요 ?
    
    **주요 특징**
    
    - **부분 관리형**:
        - 기본 인프라는 AWS가 관리
        - 패치, 확장성, 가용성 일부는 고객이 관리
        - 더 많은 제어와 유연성 제공
    - **완전 관리형**:
        - 모든 인프라를 AWS가 관리
        - 패치, 백업, 확장성 자동 관리
        - 운영 부담 최소화
        - 서버리스 운영 모델
    
    | **구분** | **서비스** |  |
    | --- | --- | --- |
    | **부분 관리형 서비스**
    (고객이 인프라 일부 관리) | • EC2 (OS 패치, 확장성 관리 필요)
    • EKS (쿠버네티스 워커노드 관리)
    • OpenSearch Service (검색엔진 클러스터 관리)
    • ECS (EC2 launch type 사용 시) |  |
    | **완전 관리형 서비스**
    (AWS가 모든 인프라 관리) | • Lambda (서버리스 컴퓨팅)
    • RDS (관계형 데이터베이스)
    • DynamoDB (NoSQL 데이터베이스)
    • Elasticache (In Memory 캐싱 데이터베이스)
    
    • S3 (객체 스토리지)
    • Fargate (서버리스 컨테이너) ECS/EKS
    • Aurora Serverless (서버리스 DB)
    • API Gateway (API 관리)
    • SQS (메시지 큐)
    • SNS (알림 서비스)
    • ECS (Fargate launch type 사용 시) |  |
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
- (참고) Frontend 서비스에 활용되는 AWS 서비스들
    
    (면접관) 제출한 개인 프로젝트 Portfolio를 보니 Frontend 구성을 AWS를 사용하여 구현하였네요 ! 본인이 Frontend 서비스 구성에 사용한 AWS 서비스 내용을 설명해줄 수 있나요 ?
    
    | AWS 서비스 | 설명 | 주요 사용 사례 | 예시 구성 |
    | --- | --- | --- | --- |
    | **S3** (Static Website Hosting) | - 정적 웹사이트 호스팅 서비스 
     - 높은 가용성과 내구성 제공 
     - 저렴한 비용 | - React/Vue/Angular 등 SPA 호스팅 
     - 정적 웹사이트 호스팅 | - index.html을 기본 문서로 설정 
     - error.html을 에러 페이지로 설정 
     - 퍼블릭 액세스 허용 설정 |
    | **Route 53** | - DNS 웹 서비스 
     - 도메인 등록 및 라우팅 관리 
     - 상태 확인 기능 제공 | - 커스텀 도메인 연결 
     - 트래픽 라우팅 
     - 장애 조치 구성 | - [example.com](http://example.com/) → CloudFront 배포 연결 
     - [www.example.com](http://www.example.com/) CNAME 레코드 설정 
     - 가중치 기반 라우팅으로 A/B 테스트 |
    | **ACM** (AWS Certificate Manager) | - SSL/TLS 인증서 관리 
     - 무료 인증서 발급 및 자동 갱신 | - HTTPS 보안 연결 구성 
     - CloudFront 배포용 인증서 | - *.example.com 와일드카드 인증서 발급 
     - CloudFront 배포에 인증서 연결 |
    | **CloudFront** | - CDN 서비스 
     - 전세계 엣지 로케이션 활용 
     - 캐싱 및 보안 기능 | - 정적/동적 콘텐츠 전송 가속화 
     - S3 콘텐츠 전송 최적화 | - S3 버킷을 오리진으로 설정 
     - HTTPS 리다이렉트 설정 
     - 캐시 TTL 최적화 |
    | **WAF** (Web Application Firewall) | - 웹 애플리케이션 보안 
     - 악성 트래픽 필터링 
     - 커스텀 규칙 설정 | - SQL 인젝션 방지 
     - XSS 공격 차단 
     - 지역 기반 접근 제어 | - CloudFront에 WAF 규칙 연결 
     - IP 기반 차단 규칙 설정 
     - 요청 속도 제한 설정 |
    
    일반적인 Frontend 서비스 구성 절차:
    
    1. S3에 프론트엔드 애플리케이션 배포
    2. ACM에서 SSL 인증서 발급
    3. CloudFront를 통한 콘텐츠 전송 구성
    4. Route 53에서 도메인 설정
    5. WAF를 통한 보안 규칙 적용
    
    추가적인 Frontend 서비스 구성 서비스들:
    
    - Cognito: 사용자 인증 관리
    - API Gateway: API 요청 관리
    - CloudWatch: 모니터링 및 로깅
    
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
- (참조) Storage 서비스 개발에 활용되는  AWS  서비스들
    
    (면접관) 스토리지에 어떤 유형들이 있는지 설명해줄 수 있나요 ?  이력서에 기술된 프로젝트 진행 시 경험했던 AWS 스토리지 서비스들에 대해서도 아는바가 있다면 설명을 부탁해요 !
    
    | **접근 방식** | **서비스 이름** | **주요 특징** | **일반적 사용 사례** |
    | --- | --- | --- | --- |
    | **Block Storage** | EBS (Elastic Block Store) | • EC2 인스턴스에 직접 연결
    • 고성능, 낮은 지연시간
    • 단일 AZ에서만 사용 가능 | • 데이터베이스
    • 부팅 볼륨
    • Raw 디바이스 접근 필요 시 |
    |  | Instance Store | • EC2에 물리적으로 연결된 임시 스토리지
    • 인스턴스 중지/종료 시 데이터 삭제
    • 매우 높은 I/O 성능 | • 임시 데이터
    • 캐시
    • 스크래치 데이터 |
    | **Object Storage** | S3 (Simple Storage Service) | • 무제한 확장성
    • 높은 내구성
    • 버전 관리 지원
    • 정적 웹 호스팅 가능 | • 정적 웹 콘텐츠
    • 백업/아카이브
    • 데이터 레이크 |
    | **File System** | EFS (Elastic File System) | • 완전 관리형 NFS
    • 다중 AZ 지원
    • 자동 확장/축소 | • 웹 서빙
    • 콘텐츠 관리
    • 데이터 공유 |
    |  | FSx for Windows | • Windows 파일 서버
    • SMB 프로토콜 지원
    • Active Directory 통합 | • Windows 워크로드
    • 홈 디렉토리
    • 비즈니스 애플리케이션 |
    |  | FSx for Lustre | • 고성능 병렬 파일 시스템
    • S3와 통합
    • 높은 처리량 | • HPC
    • 기계 학습
    • 빅데이터 처리 |
    | **Backup** | AWS Backup | • 중앙 집중식 백업 관리
    • 다중 서비스 지원
    • 자동화된 백업 정책 | • 규정 준수 백업
    • 재해 복구
    • 중앙화된 백업 관리 |
    |  | S3 Cross-Region Replication | • 자동 복제
    • 지역 간 데이터 복제
    • 지연 시간 최소화 | • 재해 복구
    • 규정 준수
    • 지역 간 데이터 접근 |
    |  | EBS Snapshots | • 증분 백업
    • S3에 저장
    • 지역 간 복사 가능 | • 볼륨 백업
    • 데이터 복구
    • 볼륨 마이그레이션 |
    |  | S3 Glacier | • 장기 보관용 저비용 스토리지
    • 다양한 검색 옵션
    • 높은 내구성 | • 장기 데이터 보관
    • 규정 준수 아카이브
    • 백업 데이터 |
    
    ### 추가 고려사항:
    
    1. **비용 관점**
        - S3: 접근 빈도에 따른 다양한 스토리지 클래스
        - EBS: 프로비저닝된 용량에 대한 지불
        - EFS: 사용한 만큼만 지불
    2. **성능 관점**
        - Block: 가장 높은 I/O 성능
        - Object: 높은 처리량, 높은 지연시간
        - File: 중간 수준의 성능
    3. **확장성 관점**
        - S3: 무제한 확장
        - EBS: 볼륨 단위로 제한
        - EFS: 자동 확장/축소
    4. **가용성 관점**
        - S3: 99.99% 가용성
        - EBS: 단일 AZ
        - EFS: 다중 AZ
- (참조) Database 서비스 개발에 활용되는 AWS  서비스들
    
    (면접관) Database에 어떤 유형들이 있는지 설명해줄 수 있나요 ?  이력서에 기술된 프로젝트 진행 시 경험했던 AWS Database 서비스들에 대해서도 아는바가 있다면 설명을 부탁해요 !
    
    | **DB 유형** | **특징** | **사용 사례** | **AWS 서비스** | **On-Demand** | **관리형 서비스** |
    | --- | --- | --- | --- | --- | --- |
    | **관계형 DB** | - 테이블 형태 저장
    - SQL 사용
    - ACID 준수
    - 정규화된 스키마 | - 트랜잭션 처리
    - 금융 시스템
    - ERP | - RDS (Mysql, Oracle, MS SQL, PostgreSQL, MariaDB)
    - Aurora | Aurora Serverless | O |
    | 문서 DB | - JSON/BSON 형태
    - 유연한 스키마
    - 계층적 데이터 | - 콘텐츠 관리
    - 게임 데이터
    - 실시간 분석 | - DocumentDB
    - DynamoDB
     | DynamoDB | O |
    | Column DB | - 열 기반 저장
    - 높은 압축률
    - 분석 최적화 | - 빅데이터 분석
    - 데이터 웨어하우스
    - 로그 분석 | - Keyspaces
    - Redshift |  | O |
    | Key-Value DB | - 단순 키-값 구조
    - 빠른 읽기/쓰기
    - 간단한 구조 | - 세션 관리
    - 캐싱
    - 실시간 순위표 | - DynamoDB | DynamoDB | O |
    | Memory DB | - 인메모리 저장
    - 초고속 처리
    - 휘발성 | - 캐싱
    - 세션 관리
    - 실시간 분석 | - ElastiCache
    - MemoryDB |  | O |
    | Vector DB | - 벡터 데이터 저장
    - 유사도 검색
    - AI/ML 최적화 | - AI 검색
    - 추천 시스템<br>- 이미지 검색 | - OpenSearch
    (벡터 엔진) |  | O |
    | Graph DB | - 노드와 관계 저장
    - 관계 기반 쿼리
    - 복잡한 연결 분석 | - 소셜 네트워크
    - 사기 탐지
    - 지식 그래프 | - Neptune |  | O |
    | Time Series DB | - 시계열 데이터 최적화
    - 시간 기반 쿼리
    - 데이터 압축 | - IoT 데이터
    - 모니터링
    - 금융 데이터 | - Timestream | Timestream | O |
    
    ### 참고사항:
    
    1. **On-Demand**: AWS의 모든 데이터베이스 서비스는 사용한 만큼만 지불하는 온디맨드 방식을 지원
        - 과금 방식: 실제 사용량 기반
        - 최소 약정: 없음
        - 자동 확장: 대부분 지원
        - 관리 부담: 최소화
        - 초기 비용: 없음
    2. **관리형 서비스**: AWS에서 제공하는 모든 데이터베이스는 관리형 서비스로, 다음의 기능을 제공
        - 자동 백업
        - 패치 관리
        - 확장성
        - 고가용성
        - 보안 관리
    3. **하이브리드 특성**:
        - DynamoDB는 Key-Value와 문서 DB 특성을 모두 가짐
        - OpenSearch는 전문 검색과 벡터 검색 모두 지원
    4. **비용 최적화**:
        - 대부분의 서비스가 예약 인스턴스를 통한 비용 절감 지원
        - Auto Scaling 기능으로 자원 사용 최적화 가능
    
    DynamoDB는 단순한 Key-Value DB가 아닌, Key-Value와 문서형 DB의 특성을 모두 가진 하이브리드 데이터베이스
    
    - **Key-Value 특성**
        
        ```json
        // 단순 Key-Value 접근
        {
          "user_id": "123",  // 파티션 키
          "data": "값"      // 단순 값
        }
        ```
        
        ```json
        // 단순 Key-Value 접근
        {
          "user_id": "123",  // 파티션 키
          "data": "값"      // 단순 값
        }
        ```
        
    - **문서형 DB 특성**
        
        ```json
        // 문서형 구조
        {
          "user_id": "123",           // 파티션 키
          "timestamp": "20240315",    // 정렬 키 (선택적)
          "name": "김철수",
          "address": {
            "city": "서울",
            "district": "강남구"
          },
          "orders": [
            {
              "order_id": "A123",
              "product": "노트북"
            }
          ]
        }
        ```
        
- (참조) CI/CD  AWS 서비스들
    
    (면접관) 개발 시 사용하는 CI/CD 개념이 뭔지 설명해줄래요 ?   프로젝트 개발 시 어떤 CI/CD 솔루션들을 사용해봤고 사용 시 어떤 기능들이 유익했나요 ?  
    
    ### CI/CD 및 GitHub 기본 개념
    
    | 용어 | 설명 |
    | --- | --- |
    | CI (Continuous Integration) | - 코드 변경사항을 주기적으로 빌드/테스트하여 통합하는 프로세스
    - 버그를 신속하게 발견하고 품질 개선 |
    | CD (Continuous Delivery/Deployment) | - Delivery: 프로덕션 배포 준비가 된 상태 유지
    - Deployment: 프로덕션 환경까지 자동 배포 |
    
    ### ~~AWS CI/CD 서비스 비교~~
    
    | 서비스 | 주요 기능 | 사용 사례 | 특징 |
    | --- | --- | --- | --- |
    | CodeCommit | - 프라이빗 Git 저장소
    - 완전 관리형
    - AWS 서비스 통합 | - 소스 코드 관리
    - 버전 관리
    - 팀 협업 | - IAM 통합
    - 암호화
    - 고가용성 |
    | CodeBuild | - 완전 관리형 빌드 서비스
    - 다양한 빌드 환경 지원
    - 병렬 빌드 | - 코드 컴파일
    - 테스트 실행
    - 패키지 생성 | - 분당 과금
    - 확장 자동화
    - 사용자 정의 가능 |
    | CodeDeploy | - 자동화된 배포
    - 다양한 컴퓨팅 서비스 지원
    - 롤백 기능 | - EC2 배포
    - Lambda 배포
    - ECS 배포 | - 점진적 배포
    - 트래픽 이전
    - 배포 상태 추적 |
    | CodePipeline | - 파이프라인 오케스트레이션
    - 자동화된 릴리스 프로세스
    - 다양한 통합 지원 | - CI/CD 파이프라인
    - 자동 릴리스
    - 워크플로우 관리 | - 시각적 워크플로우
    - 사용자 정의 작업
    - 이벤트 기반 실행 |
    | CodeArtifact | - 아티팩트 관리
    - 패키지 저장소
    - 종속성 관리 | - Maven/npm 저장소
    - 라이브러리 관리
    - 패키지 공유 | - 프라이빗 저장소
    - 버전 관리
    - IAM 통합 |
    | CodeGuru | - 코드 리뷰 자동화
    - 성능 최적화 추천
    - ML 기반 분석 | - 코드 품질 개선
    - 성능 최적화
    - 보안 검사 | - ML 기반 분석
    - 실시간 추천
    - 자동화된 리뷰 |
    
    ### 일반적인 AWS CI/CD 파이프라인 예시
    
    ```mermaid
    graph LR
        A[CodeCommit] --> B[CodeBuild]
        B --> C[CodeArtifact]
        C --> D[CodeDeploy]
        D --> E[Production]
    ```
    
    ### AWS CI/CD 서비스 주요 장점
    
    1. **통합성**
        - AWS 서비스들과 긴밀한 통합
        - IAM을 통한 통합 보안 관리
        - CloudWatch를 통한 모니터링
    2. **확장성**
        - 자동 확장/축소
        - 병렬 처리 지원
        - 글로벌 배포 가능
    3. **관리 용이성**
        - 완전 관리형 서비스
        - 서버리스 운영
        - 자동화된 워크플로우
    4. **비용 효율성**
        - 사용한 만큼만 지불
        - 리소스 자동 최적화
        - 유휴 자원 최소화
    
    ### 주요 CI/CD 솔루션 비교 (GitHub, AWS, Jenkins)
    
    | 항목 | **GitHub** Actions | **AWS CI/CD 서비스** | **Jenkins** |
    | --- | --- | --- | --- |
    | **유형** | SaaS | SaaS | 오픈소스 |
    | **호스팅** | 클라우드 | AWS 클라우드 | Self-hosted |
    | **주요 특징** | - GitHub 통합
    - YAML 기반 설정
    - 마켓플레이스
    - 워크플로우 자동화 | - AWS 서비스 통합
    - 서버리스
    - CodeCommit/Build/Deploy/Pipeline
    - 완전 관리형 | - 풍부한 플러그인
    - 높은 커스터마이징
    - 다양한 통합 지원
    - 파이프라인 스크립트 |
    | **가격 정책** | - Public 레포 무료
    - Private 레포 유료
    - 분당 과금
    - 스토리지 용량별 과금 | - 사용량 기반 과금
    - 서비스별 별도 과금
    - Free Tier 제공 | - 무료
    - 인프라 비용만 발생
    - 플러그인 별도 구매 가능 |
    | **장점** | - GitHub와 완벽한 통합
    - 쉬운 설정
    - 즉시 사용 가능
    - 다양한 액션 템플릿 | - AWS 서비스 통합
    - 높은 확장성
    - 관리 부담 없음
    - 보안성 | - 완전한 커스터마이징
    - 풍부한 플러그인
    - 커뮤니티 지원
    - 벤더 종속성 없음 |
    | **단점** | - GitHub 종속
    - 확장성 제한
    - 복잡한 워크플로우
    - 고급 기능 유료 | - AWS 종속
    - 복잡한 설정
    - 높은 학습 곡선
    - 비용 예측 어려움 | - 관리 부담 큼
    - 초기 설정 복잡
    - 인프라 유지 필요
    - 보안 설정 필요 |
    | **보안** | - GitHub 보안 기능
    - Secrets 관리
    - RBAC | - IAM
    - KMS
    - VPC
    - CloudTrail | - 플러그인 기반 보안
    - 자체 보안 설정
    - 인증/인가 |
    | **확장성** | - 제한된 확장
    - 마켓플레이스 의존 | - 자동 확장
    - 글로벌 리전
    - 무제한 확장 | - 무제한 확장
    - 클러스터 구성
    - 분산 빌드 |
    
    ### 사용 환경별 추천
    
    | 환경 | 추천 솔루션 | 이유 |
    | --- | --- | --- |
    | **스타트업** | GitHub Actions | - 빠른 시작
    - 적은 관리 부담
    - GitHub 통합 |
    | **AWS 기반 서비스** | AWS CI/CD | - AWS 서비스 통합
    - 관리형 서비스
    - 보안성 |
    | **엔터프라이즈** | Jenkins | - 완전한 제어
    - 커스터마이징
    - 보안 정책 준수 |
    | **하이브리드 환경** | Jenkins | - 다양한 환경 지원
    - 유연한 구성
    - 멀티 클라우드 |
    
    ### 비용 비교 예시
    
    (팀 10명, 월간 500회 빌드 기준)
    
    | 솔루션 | 예상 월 비용 | 비고 |
    | --- | --- | --- |
    | GitHub Actions | $40-100 | - Private 레포
    - 빌드 시간에 따라 변동 |
    | AWS CI/CD | $100-300 | - 서비스 조합에 따라 변동
    - 리소스 사용량 기준 |
    | Jenkins | $50-200 | - 인프라 비용만 해당
    - 서버 사양에 따라 변동 |
    
    ### GitHub vs AWS CI/CD 서비스 비교
    
    | 기능 | **GitHub** | **AWS 서비스** |
    | --- | --- | --- |
    | **소스 코드 관리** | GitHub | CodeCommit |
    | 버전 관리 | Git | Git |
    | 프라이빗 레포 | 유료 | 완전 관리형 |
    | 저장소 크기 | 무제한 | 무제한 |
    | 파일 크기 제한 | 100MB | 2GB |
    | IAM/권한 관리 | 자체 권한 시스템 | AWS IAM 통합 |
    
    | **CI/CD 기능** | GitHub Actions | AWS CI/CD |
    | --- | --- | --- |
    | 빌드 자동화 | O | CodeBuild |
    | 배포 자동화 | O | CodeDeploy |
    | 파이프라인 관리 | O | CodePipeline |
    | 아티팩트 관리 | GitHub Packages | CodeArtifact |
    | 컨테이너 지원 | O | O |
    | 서버리스 지원 | 제한적 | 완전 지원 |
    
    | **통합 기능** | GitHub | AWS 서비스 |
    | --- | --- | --- |
    | 이슈 트래킹 | O | 외부 통합 필요 |
    | 위키 | O | X |
    | 코드 리뷰 | O | CodeGuru |
    | Pull Request | O | O |
    | 웹훅 | O | EventBridge 통합 |
    
    | **보안 기능** | GitHub | AWS 서비스 |
    | --- | --- | --- |
    | 암호화 | O | KMS 통합 |
    | SAML/SSO | Enterprise | AWS SSO |
    | IP 제한 | Enterprise | VPC 엔드포인트 |
    | 취약점 스캔 | Dependabot | Amazon Inspector |
    
    | **모니터링** | GitHub | AWS 서비스 |
    | --- | --- | --- |
    | 로깅 | 제한적 | CloudWatch |
    | 메트릭 | 기본 | CloudWatch |
    | 알림 | O | SNS/EventBridge |
    
    | **가격 정책** | GitHub | AWS 서비스 |
    | --- | --- | --- |
    | 기본 요금 | 사용자당 과금 | 사용량 기반 |
    | 무료 티어 | O | Free Tier |
    | CI/CD 과금 | 분당 | 사용량 기반 |
    
    ### AWS CI/CD 서비스의 주요 장점
    
    1. **AWS 서비스 통합**
        - AWS 리소스와 긴밀한 통합
        - IAM을 통한 중앙화된 접근 제어
        - AWS 서비스 간 원활한 연동
    2. **엔터프라이즈 확장성**
        - 글로벌 리전 지원
        - 대규모 동시 빌드/배포
        - 자동 확장/축소
    3. **보안**
        - KMS 암호화
        - VPC 통합
        - IAM 상세 권한 제어
        - 감사 로그 (CloudTrail)
    4. **비용 최적화**
        - 사용량 기반 과금
        - 자동 스케일링
        - 리소스 최적화
    
    ### AWS CI/CD 서비스의 주요 단점
    
    1. **학습 곡선**
        - AWS 서비스 이해 필요
        - 복잡한 설정 필요
    2. **통합 기능 제한**
        - 이슈 트래킹 부재
        - 위키 기능 부재
        - 외부 도구 통합 필요
    3. **비용 예측**
        - 복잡한 과금 구조
        - 여러 서비스 사용시 비용 증가 가능
- (참조) CORS 보안 적용 AWS 서비스들
    
    (면접관) AWS를 사용해 웹서비스 개발 시 적용했던 CORS 구성에 대해 설명해줄 수 있나요 ?
    
    ### AWS에서의 CORS (Cross-Origin Resource Sharing) 보안 설정 개요
    
    CORS는 다른 출처(Origin)의 리소스를 공유하기 위한 보안 메커니즘
    
    **출처(Origin)의 구성요소**:
    
    - 프로토콜 (http, https)
    - 도메인 ([example.com](http://example.com/))
    - 포트 (80, 443, 3000)
    
    예) `https://example.com:443`
    
    ### AWS 서비스별 CORS 설정
    
    | AWS 서비스 | CORS 필요 상황 | 설정 방법 | 설정 예시 |
    | --- | --- | --- | --- |
    | **API Gateway** | - 브라우저에서 API 직접 호출
    - 다른 도메인에서 API 호출 | - 콘솔에서 CORS 활성화
    - API 메서드별 설정
    - OpenAPI/Swagger 정의 | `json{ "AllowOrigins": ["*"], "AllowMethods": ["GET", "POST"], "AllowHeaders": ["Content-Type"], "MaxAge": 3600}` |
    | **S3** | - 정적 웹사이트 호스팅
    - 브라우저에서 직접 접근 | - 버킷 CORS 설정
    - XML/JSON 형식 | `json{ "CORSRules": [{ "AllowedOrigins": ["*"], "AllowedMethods": ["GET"], "AllowedHeaders": ["*"], "MaxAgeSeconds": 3000 }]}` |
    | **CloudFront** | - S3/API Gateway 프록시
    - 사용자 정의 헤더 필요 | - 응답 헤더 정책 설정
    - 오리진 설정 수정 | `json{ "Headers": { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Headers": "*" }}` |
    | **Lambda@Edge** | - CloudFront와 통합
    - 동적 CORS 처리 | - Viewer Response 이벤트
    - 응답 헤더 수정 | `javascript exports.handler = async (event) => { const response = event.Records[0].cf.response; response.headers['access-control-allow-origin'] = [{ key: 'Access-Control-Allow-Origin', value: '*' }]; return response;};` |
    
    ## 주요 CORS 헤더
    
    | 헤더 | 설명 | 예시 값 |
    | --- | --- | --- |
    | Access-Control-Allow-Origin | 허용된 출처 | * 또는 [https://example.com](https://example.com/) |
    | Access-Control-Allow-Methods | 허용된 HTTP 메서드 | GET, POST, PUT, DELETE |
    | Access-Control-Allow-Headers | 허용된 헤더 | Content-Type, Authorization |
    | Access-Control-Max-Age | preflight 캐시 시간 | 3600 |
    | Access-Control-Allow-Credentials | 인증 정보 허용 | true |
    
    ## CORS 설정 시 고려사항
    
    ### 보안
    
    - '*' 대신 특정 도메인만 허용
    - 필요한 메서드만 허용
    - 필요한 헤더만 허용
    
    ### 성능
    
    - MaxAge 설정으로 preflight 요청 최소화
    - CloudFront 캐싱 활용
    
    ### 개발 환경
    
    - 개발/운영 환경별 다른 CORS 설정
    - 테스트 도구 활용 (Postman, curl)
    
    ### 문제 해결
    
    - 브라우저 개발자 도구로 CORS 오류 확인
    - OPTIONS 메서드 처리 확인
    - 헤더 값 정확성 검증
- (참조) Serverless 방식의 AWS 서비스들
    
    (면접관) 우리 회사에서도 최근 시장 개발 Trend에 부합하게 Serverless 방식으로 MSA 전환을 고려 중이에요.  AWS를 활용해 Serverless 개발을 어떻게 해야할 지 지원자 본인 생각을 들어볼 수 있을까요 ?
    
    - Lambda
        
        
        AWS Lambda 주요 특징
        
        | 구분 | 설명 |
        | --- | --- |
        | **정의** | 서버리스 컴퓨팅 서비스로, 서버 관리 없이 코드를 실행할 수 있는 서비스 |
        | **주요 특징** | - 서버 관리 필요 없음
        - 사용한 만큼만 비용 지불
        - 서버 인프라 자동 확장/축소
        - 15분까지의 실행 시간 제한
        - 다양한 프로그래밍 언어 지원 |
        | **지원 언어** | - Node.js
        - Python
        - Java
        - C#
        - Go
        - Ruby |
        | **트리거 소스** | - API Gateway
        - S3
        - DynamoDB
        - SNS
        - CloudWatch Events
        - SQS |
        | **메모리 할당** | - 128MB에서 10GB까지 설정 가능
        - 메모리 설정에 따라 CPU 능력도 비례하여 할당 |
        | **가격 정책** | - 함수 실행 횟수당 과금
        - 실행 시간과 할당된 메모리에 따라 비용 계산
        - 매월 1백만 건의 무료 요청 제공 |
        | **사용 사례** | - 이미지/파일 처리
        - 데이터 실시간 처리
        - 백엔드 API
        - ETL 작업
        - 예약된 작업 실행 |
        | **장점** | - 인프라 관리 불필요
        - 자동 확장
        - 비용 효율적
        - 다른 AWS 서비스와 쉽게 통합 |
        | **제한 사항** | - 실행 시간 15분 제한
        - 배포 패키지 크기 제한(50MB 압축, 250MB 비압축)
        - 동시 실행 제한(기본 1000개) |
        
        AWS Lambda에서 주요 프로그래밍 언어들별 특징과 활용성 비교
        
        | 비교 항목 | **Node.js** | **Python** | **Java** |
        | --- | --- | --- | --- |
        | **콜드 스타트 시간** | 매우 빠름 (~0.2초) | 빠름 (~0.3초) | 느림 (~1초) |
        | **메모리 사용량** | 낮음 | 중간 | 높음 |
        | **실행 속도** | 빠름 | 중간 | 매우 빠름 |
        | **개발 생산성** | 높음
        - 간단한 코드 작성
        - JSON 처리 우수
        - 비동기 처리 강점 | 매우 높음
        - 간결한 문법
        - 풍부한 라이브러리
        - 빠른 프로토타이핑 | 중간
        - 상대적으로 많은 코드 필요
        - 타입 안정성 우수 |
        | **최적 사용 사례** | - API 엔드포인트
        - 실시간 데이터 처리
        - 웹훅 처리
        - 이벤트 기반 작업 | - 데이터 처리/분석
        - 머신러닝
        - 자동화 스크립트
        - ETL 작업 | - 복잡한 비즈니스 로직
        - 엔터프라이즈 애플리케이션
        - 대규모 시스템 통합 |
        | **라이브러리 생태계** | 매우 풍부함
        (npm) | 매우 풍부함
        (pip) | 풍부함
        (Maven) |
        | **유지보수성** | 중간
        - 동적 타입으로 인한 오류 가능성 | 중간
        - 동적 타입으로 인한 오류 가능성 | 높음
        - 정적 타입으로 안정성 높음 |
        | **디버깅 용이성** | 중간
        - 스택 추적이 복잡할 수 있음 | 높음
        - 명확한 에러 메시지
        - 간단한 디버깅 | 높음
        - 풍부한 디버깅 도구
        - 상세한 로깅 |
        | **AWS 서비스 통합** | 매우 좋음
        (AWS SDK 지원 우수) | 매우 좋음
        (Boto3 라이브러리) | 매우 좋음
        (AWS SDK) |
        | **권장 사용 시나리오** | - 짧은 실행 시간 필요
        - 가벼운 작업
        - I/O 집중 작업 | - 데이터 처리
        - 스크립팅 작업
        - ML/AI 통합 | - 복잡한 비즈니스 로직
        - 엔터프라이즈급 애플리케이션
        - 고성능 필요 작업 |
        
        **종합 권장사항:**
        
        1. **Node.js 선택 기준:**
            - 빠른 응답 시간이 필요한 API
            - 가벼운 비동기 처리 작업
            - JSON 기반 데이터 처리가 많은 경우
        2. **Python 선택 기준:**
            - 데이터 처리/분석 작업
            - 빠른 개발이 필요한 경우
            - ML/AI 관련 작업
        3. **Java 선택 기준:**
            - 엔터프라이즈급 애플리케이션
            - 복잡한 비즈니스 로직
            - 타입 안정성이 중요한 경우
        
    - API Gateway
    
- (참조) 프로그래밍 언어별 Lambda 구현 예시
    
    (면접관) 우리 회사에서는 현재 Java와 Node.js를 사용해 다양한 프로젝트를 개발해왔는데 만약 AWS Lambda를 사용해 Serverless MSA를 구현하고자할 때 어떤 프로그래밍 언어를 사용해야할까요 ?
    
    각 언어별 AWS Lambda에서의 장점을 살린 코드 예시들
    
    1. **Node.js**: Promise.all을 활용한 비동기 처리와 JSON 데이터 핸들링 
    2. **Python**: scikit-learn을 활용한 ML 모델 예측 적용 Code
    3. **Java**: CompletableFuture와 ExecutorService를 활용한 멀티스레로 비즈니스 로직 처리 
    
    **1. Node.js 20.x - Event 기반 JSON 데이터 처리 예시**
    
    ```jsx
    exports.handler = async (event) => {
        try {
            // 이벤트 데이터 파싱
            const records = event.Records;
    
            // Promise.all을 사용한 비동기 데이터 처리
            const processedData = await Promise.all(records.map(async (record) => {
                const payload = JSON.parse(record.body);
    
                // 데이터 변환 및 처리
                const transformed = {
                    id: payload.id,
                    timestamp: new Date().toISOString(),
                    processedValue: payload.value * 2,
                    metadata: {
                        source: payload.source,
                        type: payload.type
                    }
                };
    
                // 결과 반환
                return transformed;
            }));
    
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "데이터 처리 완료",
                    results: processedData
                })
            };
        } catch (error) {
            console.error('Error:', error);
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "처리 중 오류 발생",
                    error: error.message
                })
            };
        }
    };
    
    ```
    
    **2. Python - ML/AI 관련 처리 예시**
    
    ```python
    import json
    import numpy as np
    from sklearn.preprocessing import StandardScaler
    import joblib
    
    def handler(event, context):
        try:
            # ML 모델 로드 (S3에서 다운로드했다고 가정)
            model = joblib.load('/tmp/model.joblib')
            scaler = joblib.load('/tmp/scaler.joblib')
    
            # 입력 데이터 파싱
            input_data = json.loads(event['body'])
            features = input_data['features']
    
            # 데이터 전처리
            features_array = np.array(features).reshape(1, -1)
            scaled_features = scaler.transform(features_array)
    
            # 예측 수행
            prediction = model.predict(scaled_features)
            prediction_proba = model.predict_proba(scaled_features)
    
            # 결과 반환
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'prediction': int(prediction[0]),
                    'probability': float(prediction_proba[0][1]),
                    'features_used': features
                })
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'body': json.dumps({
                    'error': str(e)
                })
            }
    
    ```
    
    **3. Java - Multi-thread 처리 예시**
    
    ```java
    public class LambdaHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
    
        private final ExecutorService executorService = Executors.newFixedThreadPool(5);
    
        @Override
        public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent event, Context context) {
            try {
                // 입력 데이터 파싱
                JSONObject inputData = new JSONObject(event.getBody());
                JSONArray items = inputData.getJSONArray("items");
    
                // 병렬 처리를 위한 작업 리스트 생성
                List<CompletableFuture<JSONObject>> futures = new ArrayList<>();
    
                // 각 아이템에 대한 병렬 처리
                for (int i = 0; i < items.length(); i++) {
                    JSONObject item = items.getJSONObject(i);
                    CompletableFuture<JSONObject> future = CompletableFuture.supplyAsync(() -> {
                        try {
                            // 복잡한 비즈니스 로직 처리
                            return processItem(item);
                        } catch (Exception e) {
                            throw new CompletionException(e);
                        }
                    }, executorService);
    
                    futures.add(future);
                }
    
                // 모든 작업 완료 대기 및 결과 수집
                List<JSONObject> results = futures.stream()
                    .map(CompletableFuture::join)
                    .collect(Collectors.toList());
    
                // 응답 생성
                APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
                response.setStatusCode(200);
                response.setBody(new JSONObject()
                    .put("message", "Processing completed")
                    .put("results", results)
                    .toString());
    
                return response;
    
            } catch (Exception e) {
                APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
                response.setStatusCode(500);
                response.setBody(new JSONObject()
                    .put("error", e.getMessage())
                    .toString());
                return response;
            } finally {
                executorService.shutdown();
            }
        }
    
        private JSONObject processItem(JSONObject item) {
            // 개별 아이템 처리 로직
            return item.put("processed", true)
                      .put("processedAt", new Date().toString());
        }
    }
    
    ```
    
- (참조) Infra as a Code (IaC)
    
    (면접관) 이력서에 Infra as a Code를 사용한 경험이 있네요. 어떤 IaC 도구를 사용해봤는지 설명해줄 수 있나요 ?
    
    **IaC (Infrastructure as Code) 개요:**
    Infrastructure as Code는 인프라를 코드로 관리하는 방식으로, 수동으로 인프라를 구성하는 대신 코드를 통해 인프라를 정의, 배포, 관리하는 방법입니다. 이를 통해 일관성 있는 인프라 구성, 버전 관리, 자동화된 배포가 가능해집니다.
    
    **주요 IaC 도구 비교:**
    
    | 구분 | **AWS CloudFormation** | Azure ARM Templates | Google Cloud Deployment Manager | Terraform | **Serverless Framework** |
    | --- | --- | --- | --- | --- | --- |
    | **제공사** | AWS | Microsoft | Google | HashiCorp | Serverless Inc. |
    | **지원 클라우드** | AWS 전용 | Azure 전용 | GCP 전용 | 멀티 클라우드 지원 | 멀티 클라우드 지원 |
    | **언어/포맷** | YAML/JSON | JSON | YAML | HCL (HashiCorp Configuration Language) | YAML |
    | **학습 곡선** | 중간 | 높음 | 중간 | 중간 | 낮음 |
    | **주요 장점** | - AWS 서비스와 완벽한 통합
    - 강력한 롤백 기능
    - AWS 지원 | - Azure 서비스와 완벽한 통합
    - 종속성 관리 우수
    - Azure 지원 | - GCP 서비스와 완벽한 통합
    - Python 템플릿 지원 | - 멀티 클라우드 지원
    - 풍부한 제공자
    - 강력한 상태 관리
    - 큰 커뮤니티 | - 서버리스 특화
    - 간단한 배포
    - 플러그인 생태계 |
    | **주요 단점** | - AWS 종속성
    - 복잡한 문법 | - Azure 종속성
    - 복잡한 문법 | - GCP 종속성
    - 제한된 커뮤니티 | - 상태 파일 관리 필요
    - 초기 설정 복잡 | - 서버리스에 한정
    - 제한된 유연성 |
    | **상태 관리** | AWS 관리 | Azure 관리 | GCP 관리 | 상태 파일 필요
    (원격 저장 가능) | 클라우드 제공자 관리 |
    | **사용 사례** | - AWS 인프라 구축
    - AWS 기반 애플리케이션 | - Azure 인프라 구축
    - Azure 기반 애플리케이션 | - GCP 인프라 구축
    - GCP 기반 애플리케이션 | - 멀티 클라우드 환경
    - 복잡한 인프라
    - 하이브리드 클라우드 | - 서버리스 애플리케이션<br>- 마이크로서비스 |
    | **버전 관리** | Git 통합 가능 | Git 통합 가능 | Git 통합 가능 | Git 통합 우수 | Git 통합 우수 |
    | **테스트 지원** | 제한적 | 제한적 | 제한적 | 강력함 | 강력함 |
    | **커뮤니티 규모** | 큼 | 중간 | 작음 | 매우 큼 | 큼 |
    | **리소스 검증** | 배포 전 검증 | 배포 전 검증 | 배포 전 검증 | 계획 단계에서 검증 | 배포 전 검증 |
    | **변수 관리** | 파라미터 섹션 | 파라미터 섹션 | YAML 변수 | 변수 파일 지원 | 환경 변수 지원 |
    
    **추가 설명:**
    
    1. **Terraform 특징:**
        - 모듈화가 용이
        - 다양한 프로바이더 지원
        - 강력한 상태 관리 기능
        - 계획(plan)과 적용(apply) 단계 분리
    2. **Serverless Framework 특징:**
        - 서버리스 아키텍처에 최적화
        - 함수 단위의 배포 관리
        - 플러그인을 통한 확장성
        - 로컬 테스트 환경 제공
    3. **클라우드 제공사 도구 특징:**
        - 해당 클라우드 플랫폼에 최적화
        - 플랫폼 특화 기능 제공
        - 통합 모니터링 지원
        - 네이티브 보안 통합
    
    선택 시 고려사항:
    
    1. 사용하는 클라우드 환경
    2. 팀의 기술 스택
    3. 프로젝트 복잡도
    4. 필요한 자동화 수준
    5. 유지보수 용이성
- (Lab) Container Basic - ECS, ECR
    
    고양이 이미지를 보여주는 Cats docker image와 강아지 이미지를 보여주는 Dogs docker image를 간단한 사용예로 container 서비스를 실습
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/06ae64f6-258b-420e-8d66-183d2e64b825/image.png)
    
    - Docker Image 설명
        
        The **Cats and Dogs** application consists of three services: **Web** (landing page), **Cats** (cats page) and **Dogs** (dogs page). In this lab, **Web** and **Cats** use the *Amazon EC2* launch type and **Dogs** uses the *AWS Fargate* launch type on a single cluster which we have called **ECS-Workshop**.
        
        [**Service Overview**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/01-intro#service-overview)
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/00cd471f-3794-4c3d-bba3-6cfb16905ca7/image.png)
        
        1. **Web** is the main web page accessible by our ALB's DNS name. If you click **I♥Cats** or **I♥Dogs**, you will be redirected to the respective ECS service (**cats** or **dogs**)
        2. **Cats**, an EC2 task, randomly shows pictures of cats whenever you refresh the web page
        3. **Dogs**, a Fargate task, randomly shows pictures of dogs whenever you refresh the web page
        
    - Amazon ECR
        
        # Amazon ECR
        
        [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/)  (Amazon ECR) is a fully AWS managed container image registry service that is secure, scalable, and reliable. You can use your preferred CLI to push, pull, and manage Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. Amazon ECR supports public and private container image repositories as well.
        
        ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/eb0887a8-c247-49ae-8a2a-a1581fcf5bf7/image.png)
        
        In this workshop, we will work with the following Amazon ECR components
        
        - Registry: An Amazon ECR private registry is provided to each AWS account; you can create one or more repositories in your registry and store images in them.
        - Authorization Token: Your client must authenticate to Amazon ECR registries as an AWS user before it can push and pull images
        - Repository: This contains your Docker/OCI images, and OCI compatible artifacts
        - Image: Lightweight, standalone, executable package of software that includes everything needed to run an application
        
        In this section, we will create three repositories (*web*, *cats* and *dogs*), build and tag a Docker image for each repository using **VSCode**, authenticate to the Amazon ECR registry, then finally push our newly created Docker images.
        
        # Create Repositories
        
        In this exercise, you will create ECR repositories for web, cats, and dogs. Amazon ECR is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. It integrates with Amazon ECS to streamline your development-to-production workflow.
        
        1. Navigate to the [Amazon ECR.](https://console.aws.amazon.com/ecr)  console. If it is your first time using Amazon ECR, you will see the welcome page. Open the left hand navigation bar and click **Repositories**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/beec0e80-ac50-468d-8ad4-27ce86bf153e/image.png)
            
        2. Click **Create Repository** and enter **cats** as the repository name, leave the rest of the settings as default, then scroll down and click **Create repository**
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/3e4a827c-0ba4-4320-9ed4-fecb00ad2cc3/image.png)
            
        
        The repository name must be **web**, **cats**, **dogs** to proceed to the next step of **Tagging images and pushing to ECR**.
        
        1. Check if the three repositories were created properly.
            
            ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/7cfd9dc1-c686-4024-a859-47145f8255ca/image.png)
            
        
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
            
    
- (Lab) Serverless Basic - Lambda, API Gateway, DynamoDB
    
    
    - node.js version 20.x  esm 방식으로 lambda code 적용했음 !
    - 실습 진행 중 오류가 있으면 강사님이나 mentor에게 알려주세요 !
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/7c906f1f-45b6-4a4f-836a-ce9acb16508c/image.png)
    
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
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/28e8e255-f129-4b56-827d-521eb9a3f350/image.png)
    
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
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/07f1e4f6-40e9-4b32-8839-3039fa604dd8/image.png)
    
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
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/73fdc6d5-a216-4b04-a551-229ff79e1579/image.png)
    
    You need to update the ***execution role*** the Lambda function assumes when it runs. AWS Identity and Access Management (IAM) is used to control access to AWS resources. You will use IAM to add the necessary DynamoDB access policies to your function.
    
    [**To edit the execution role**](https://catalog.us-east-1.prod.workshops.aws/event/dashboard/en-US/workshop/module1/lambda-to-db#to-edit-the-execution-role)
    
    You will need to use the IAM console to add permissions to the function. There are a lot of options, but you can safely ignore most for now. You will add a policy, managed by AWS, that grants full access to read/write items in DynamoDB.
    
    1. Choose **Configuration**, and then **Permissions** from the navigation pane.
    2. In the Execution role section, click the **Role name** link to view that role in the IAM console.
    3. In **Permissions policies**, choose **Add permissions** and then **Attach policies**.
    4. For the filter, enter **dynamodb**.
    5. Select the check box next to the Policy name for **AmazonDynamoDBFullAccess**.
    6. Choose **Add permissions**.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/21d757db-da5d-4c97-a64e-35d006c83504/image.png)
    
    **You just granted FULL ACCESS to the function!**
    
    Don't Panic! It's okay in this workshop, but in a production app, you would choose more granular permissions.
    
    Amazon Web Services provides many ways to grant pinpoint permissions. You can learn about them later.
    
    Return to the Lambda console and test the function again... Now that the function has permission, you should see a success message:
    
    ```json
    {
      "message": "Success. Added 3 people to serverless_workshop_intro."
    }
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/dfc495dc-cfc8-4439-bd44-4e548120ece3/image.png)
    
    Reminder: the [**DynamoDB** console](https://console.aws.amazon.com/dynamodb/home)  has an option to explore and view Items in the database table. Go verify that new items were actually created in the table. Seriously, go see for yourself...
    
    **Congratulations!**
    
    You've created a table in a serverless database and a serverless function to add data to it. No servers required!
    
    ---
    
    In the next section, you will create another Lambda function to get the data when requested through a URL...
    
    # 3 - Build an API
    
    To build a useful web API, it must be accessible from a URL. You will use API Gateway to create an entry point, sometimes called the "front door", to a Lambda function that will return user data.
    
    ## Create a function to retrieve data
    
    You need a function to read data for your API. You want it to be secure, so it will only be permitted to **read** values from the table, not create, update, nor delete items.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/2972593f-77df-4cec-9f02-a8520b816e5e/image.png)
    
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
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/9e61deda-957a-4c02-b3cc-d8a8f7653224/image.png)
    
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
    
    ![api_gateway_test.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/8ef59caa-52ac-43ec-ad6f-f21b3042036f/api_gateway_test.png)
    
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
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/8becd0ec-a71a-4878-b4d8-3397c74bb458/image.png)
    
    ## Event Driven Architecture
    
    Serverless architecture brings development flexibility, scalability, and the capability to expand quickly into new geographical regions. The key to these benefits is a loosely coupled architecture.
    
    Serverless solutions, even the basic one you built in this module, are based on ***event-driven architecture*** or EDA. In event-driven architectures, services send and receive *events* which represent changes in state or an update.
    
    In this module, you built a synchronous pattern to respond to a request for users, but it still used an event-driven workflow. Events contain the data in a chunk of JSON text. Services expect specific *shapes* of JSON. This format represents data structures with consistent *shape* but flexible *contents*, that aren't row or column based.
    
    API Gateway served as the entry point for the Users microservice. Similar to traditional web application URL-routers, API Gateway takes the inbound request to the `/users` endpoint and converts it into an event. That event was routed to a Lambda function.
    
    The Lambda service manages the function. After initializing an execution environment, the Lambda service invokes the function to handle the inbound event, and possibly many more events during the function lifecycle.
    
    The function connects to a serverless database table, retrieves data, and bundles that data into a JSON response event.
    
    Instead of sending the response directly to the client, the response *event* is sent back to API Gateway. API Gateway then forwards the body of the event to the calling client to complete the request/response cycle.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/71d54cd8-6c0b-4ad5-b753-85e7914eabbe/image.png)
    
    In event-driven architecture, services do not know how events will be processed further. This creates flexibility to extend the system, independent of other components. This is a big difference from traditional frameworks, providing immense opportunity to add features to your solution without disrupting an existing, operating solution!
    
    ## Summary
    
    - Event-driven architecture is foundational for serverless.
    - Scalable and extendable solutions are built from loosely coupled components which communicate changes of state or updates through *events*, which consist of JSON data.
    
    Congratulations! You have started your serverless journey!
    
    ![path-serverless-fun.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/a31003b7-d989-4d01-8270-a9011d813b3d/path-serverless-fun.png)
    
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
    
- (Lab) DynamoDB
    - Lambda (node.js 20.x)
        
        [lambda.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/60355d9e-d724-465f-813a-8c56f1b00226/lambda.zip)
        
    - Sample Data Jsons
        
        [userstable.json](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/ae04482e-ceb3-425d-8d7d-d88e7b8acbf6/userstable.json)
        
        [users.json](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/55b09510-e97e-4c7b-9fa3-ed22d61c64b3/users.json)
        
        [users-50ea.json](https://prod-files-secure.s3.us-west-2.amazonaws.com/4867283b-055f-4e0a-8423-1c7cec790276/28ca654e-557c-431d-b5e3-9ebab61efdba/users-50ea.json)
        
    - Test Steps with AWS CLIs
        
        ```
        DynamoDB 개발자 개요: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html
        
        1. 테이블 생성
        aws dynamodb create-table --cli-input-json file://userstable.json --profile iampam-tech
        
        2. 테이블에 json 데이터 넣기 (json 형식은 users-org.json -> users.json 으로 변경)
        aws dynamodb batch-write-item --request-items file://users.json --profile iampam-tech
        단, batch-write-item 명령어는 한 번에 최대 25개의 항목을 적재할 수 있습니다. 25개 이상의 항목이 있는 경우 여러 번에 나누어 적재해야 합니다.
        
        3. 테이블 조회
        aws dynamodb scan --table-name tableUsers --profile iampam-tech
        
        4. 테이블 삭제
        aws dynamodb delete-table --table-name tableUsers --profile iampam-tech
        
        5. 테이블 목록 조회
        aws dynamodb list-tables --profile iampam-tech
        
        6. 테이블 설명 조회
        aws dynamodb describe-table --table-name tableUsers --profile iampam-tech
        
        7. 테이블 항목 조회
        aws dynamodb get-item --table-name tableUsers --key '{"user_email": {"S": "bob.smith@example.com"}}' --profile iampam-tech
        -> 오류
        
        8. 테이블 항목 삭제
        aws dynamodb delete-item --table-name tableUsers --key '{"user_email": {"S": "bob.smith@example.com"}}' --profile iampam-tech
        -> 오류
        
        9. 테이블 항목 업데이트
        aws dynamodb update-item --table-name tableUsers --key '{"user_email": {"S": "bob.smith@example.com"}}' --update-expression 'SET user_name = :newName' --expression-attribute-values '{":newName": {"S": "Bob Smith"}}' --profile iampam-tech
        -> 오류
        
        ```
        
    
- (Lab) Serverless To Do Service 구현 - Lambda, API Gateway
    
    다음의 기존 Backend Code를 Lambda 및 API Gateway로 전환
    
    - 기존 Codes
        - TaskService > index.mjs
            
            npm install express body-parser
            
            ```jsx
            import express from 'express';
            import bodyParser from 'body-parser';
            
            const app = express();
            app.use(bodyParser.json());
            
            let tasks = [];
            
            app.get('/tasks', (req, res) => {
                res.json(tasks);
            });
            
            app.post('/tasks', (req, res) => {
                const task = req.body;
                tasks.push(task);
                res.status(201).json(task);
            });
            
            app.listen(3000, () => {
                console.log('TaskService is running on port 3000');
            });
            ```
            
        - UserService  > index.mjs
            
            npm install express body-parser
            
            ```jsx
            import express from 'express';
            import bodyParser from 'body-parser';
            
            const app = express();
            app.use(bodyParser.json());
            
            let users = [];
            
            app.get('/users', (req, res) => {
                res.json(users);
            });
            
            app.post('/users', (req, res) => {
                const user = req.body;
                users.push(user);
                res.status(201).json(user);
            });
            
            app.listen(3001, () => {
                console.log('UserService is running on port 3001');
            });
            ```
            
    
    ---
    
    → 변환된 Lambda codes
    
    runtime node.js 20.x 적용
    
    - TaskService Lambda
        
        ```jsx
        'use strict';
        
        const tasks = [];
        
        const handler = async (event) => {
            try {
                const httpMethod = event.httpMethod;
                
                switch (httpMethod) {
                    case 'GET':
                        return {
                            statusCode: 200,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(tasks)
                        };
                        
                    case 'POST':
                        const task = JSON.parse(event.body);
                        tasks.push(task);
                        return {
                            statusCode: 201,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(task)
                        };
                        
                    default:
                        return {
                            statusCode: 400,
                            body: JSON.stringify({ message: '지원하지 않는 HTTP 메소드입니다.' })
                        };
                }
            } catch (error) {
                console.error('Error:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ 
                        message: '서버 에러가 발생했습니다.',
                        error: error.message 
                    })
                };
            }
        };
        
        module.exports = { handler };
        ```
        
    - UserService  Lambda
        
        ```jsx
        'use strict';
        
        const users = [];
        
        const handler = async (event) => {
            try {
                const httpMethod = event.httpMethod;
                
                switch (httpMethod) {
                    case 'GET':
                        return {
                            statusCode: 200,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(users)
                        };
                        
                    case 'POST':
                        const user = JSON.parse(event.body);
                        users.push(user);
                        return {
                            statusCode: 201,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(user)
                        };
                        
                    default:
                        return {
                            statusCode: 400,
                            body: JSON.stringify({ message: '지원하지 않는 HTTP 메소드입니다.' })
                        };
                }
            } catch (error) {
                console.error('Error:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ 
                        message: '서버 에러가 발생했습니다.',
                        error: error.message 
                    })
                };
            }
        };
        
        module.exports = { handler };
        ```
        
    
    → API Gateway 설정
    
    - API Gateway 설정 절차
        - Step 1. API 생성
            - AWS Console에서 API Gateway 서비스로 이동
            - "API 생성" 클릭
            - "REST API" 선택 (또는 "HTTP API"도 가능하지만, 여기서는 REST API 기준으로 설명)
            - API 이름 입력 (예: "TaskUserAPI")
        - Step 2. TaskService 리소스 및 메소드 설정
            1. 리소스 생성
                - "리소스 생성" 클릭
                - 리소스 이름: tasks
                - 리소스 경로: /tasks
            2. GET 메소드 추가
                - /tasks 리소스에서 "메소드 생성" 클릭
                - GET 선택
                - 통합 유형: Lambda 함수
                - Lambda 함수: TaskService Lambda 선택
                - "저장" 클릭
            3. POST 메소드 추가
                - /tasks 리소스에서 "메소드 생성" 클릭
                - POST 선택
                - 통합 유형: Lambda 함수
                - Lambda 함수: TaskService Lambda 선택
                - "저장" 클릭
        - Step 3. UserService 리소스 및 메소드 설정
            1. 리소스 생성
                - "리소스 생성" 클릭
                - 리소스 이름: users
                - 리소스 경로: /users
            2. GET 메소드 추가
                - /users 리소스에서 "메소드 생성" 클릭
                - GET 선택
                - 통합 유형: Lambda 함수
                - Lambda 함수: UserService Lambda 선택
                - "저장" 클릭
            3. POST 메소드 추가
                - /users 리소스에서 "메소드 생성" 클릭
                - POST 선택
                - 통합 유형: Lambda 함수
                - Lambda 함수: UserService Lambda 선택
                - "저장" 클릭
        - Step 4. CORS 설정
            1. 각 리소스(/tasks, /users)에서 "CORS 활성화" 클릭
            2. 다음 설정 추가:
                - Access-Control-Allow-Origin: '*' (또는 특정 도메인)
                - Access-Control-Allow-Headers: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key'
                - Access-Control-Allow-Methods: 'GET,POST'
        - Step 5. 설정한 API 배포
            1. "API 배포" 클릭
            2. 배포 스테이지 선택
                - 새 스테이지 생성 (예: 'dev', 'prod')
                - 스테이지 이름과 설명 입력
            3. "배포" 클릭
        - Step 6. 배포 후 API URL 확인
            
            배포 후 생성되는 URL 형식:
            https://{api-id}.execute-api.{region}.amazonaws.com/{stage-name}
            
            예시:
            
            - Tasks GET/POST: https://{api-id}.execute-api.{region}.amazonaws.com/{stage-name}/tasks
            - Users GET/POST: https://{api-id}.execute-api.{region}.amazonaws.com/{stage-name}/users
        - Step 7. (옵션) 모니터링 설정
            1. CloudWatch 로그 활성화
            2. CloudWatch 메트릭 확인
            3. X-Ray 추적 설정 (필요한 경우)
        - Step 8. 테스트
            
            Postman 또는 curl을 사용한 테스트
            예시:
            
            - curl -X GET https://{api-id}.execute-api.{region}.amazonaws.com/{stage-name}/tasks
            - curl -X POST -H "Content-Type: application/json" -d '{"title":"테스트"}' https://{api-id}.execute-api.{region}.amazonaws.com/{stage-name}/tasks
        
        ### 
        
    
- (Lab) Serverless To Do Service에 IaC 적용 - Serverless Framework
    - serverless.yml
        
        ```yaml
        service: task-user-service
        
        frameworkVersion: '4'
        
        # 프로바이더 설정
        provider:
          name: aws
          runtime: nodejs20.x
          region: ap-northeast-2  # 서울 리전
          stage: ${opt:stage, 'dev'}  # 기본 스테이지는 dev
          
          # IAM 역할 권한 설정
          iam:
            role:
              statements:
                - Effect: Allow
                  Action:
                    - logs:CreateLogGroup
                    - logs:CreateLogStream
                    - logs:PutLogEvents
                  Resource: '*'
        
        # 함수 정의
        functions:
          # Task 서비스 함수
          taskService:
            handler: TaskService/index.handler
            events:
              - http:
                  path: /tasks
                  method: get
                  cors: true  # CORS 활성화
              - http:
                  path: /tasks
                  method: post
                  cors: true
            environment:
              STAGE: ${self:provider.stage}
        
          # User 서비스 함수
          userService:
            handler: UserService/index.handler
            events:
              - http:
                  path: /users
                  method: get
                  cors: true
              - http:
                  path: /users
                  method: post
                  cors: true
            environment:
              STAGE: ${self:provider.stage}
        
        # 사용자 정의 리소스
        resources:
          Resources:
            # API Gateway 응답 헤더 설정
            GatewayResponseDefault4XX:
              Type: 'AWS::ApiGateway::GatewayResponse'
              Properties:
                ResponseParameters:
                  gatewayresponse.header.Access-Control-Allow-Origin: "'*'"
                  gatewayresponse.header.Access-Control-Allow-Headers: "'*'"
                ResponseType: DEFAULT_4XX
                RestApiId:
                  Ref: 'ApiGatewayRestApi'
            
            GatewayResponseDefault5XX:
              Type: 'AWS::ApiGateway::GatewayResponse'
              Properties:
                ResponseParameters:
                  gatewayresponse.header.Access-Control-Allow-Origin: "'*'"
                  gatewayresponse.header.Access-Control-Allow-Headers: "'*'"
                ResponseType: DEFAULT_5XX
                RestApiId:
                  Ref: 'ApiGatewayRestApi'
        
        # 커스텀 설정
        custom:
          # 스테이지별 설정
          stages:
            dev:
              logLevel: DEBUG
            prod:
              logLevel: ERROR
        
        # 플러그인 설정
        plugins:
          - serverless-offline  # 로컬 테스트용 플러그인
        
        package:
          patterns:
            - '!node_modules/**'  # node_modules 제외
            - '!.git/**'          # .git 폴더 제외
        ```
        
    - TaskService Lambda (TaskService/index.js)
        
        
        ```jsx
        'use strict';
        
        const tasks = [];
        
        const handler = async (event) => {
            try {
                const httpMethod = event.httpMethod;
                
                switch (httpMethod) {
                    case 'GET':
                        return {
                            statusCode: 200,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(tasks)
                        };
                        
                    case 'POST':
                        const task = JSON.parse(event.body);
                        tasks.push(task);
                        return {
                            statusCode: 201,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(task)
                        };
                        
                    default:
                        return {
                            statusCode: 400,
                            body: JSON.stringify({ message: '지원하지 않는 HTTP 메소드입니다.' })
                        };
                }
            } catch (error) {
                console.error('Error:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ 
                        message: '서버 에러가 발생했습니다.',
                        error: error.message 
                    })
                };
            }
        };
        
        module.exports = { handler };
        ```
        
    - UserService  Lambda (UserService/index.js)
        
        ```jsx
        'use strict';
        
        const users = [];
        
        const handler = async (event) => {
            try {
                const httpMethod = event.httpMethod;
                
                switch (httpMethod) {
                    case 'GET':
                        return {
                            statusCode: 200,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(users)
                        };
                        
                    case 'POST':
                        const user = JSON.parse(event.body);
                        users.push(user);
                        return {
                            statusCode: 201,
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': true
                            },
                            body: JSON.stringify(user)
                        };
                        
                    default:
                        return {
                            statusCode: 400,
                            body: JSON.stringify({ message: '지원하지 않는 HTTP 메소드입니다.' })
                        };
                }
            } catch (error) {
                console.error('Error:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ 
                        message: '서버 에러가 발생했습니다.',
                        error: error.message 
                    })
                };
            }
        };
        
        module.exports = { handler };
        ```
        
    - Test 절차
        1. package 설치
        npm install --save-dev serverless@4 serverless-offline
        2. deploy
        serverless deploy --verbose
        3. deploy 후 엔드포인트 확인
        endpoints:
        GET - https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/tasks
        POST - https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/tasks
        GET - https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/users
        POST - https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/users
        functions:
        taskService: task-user-service-dev-taskService (1.3 kB)
        userService: task-user-service-dev-userService (1.3 kB)
        4. Lambda 함수 수행 로그 확인 (terminal 창 각각 띄워 서 로그 모너터링)
        serverless logs --function taskService --tail
        5. postman 테스트
            
            A-1) TaskService POST
            URL: https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/tasks
            Header에 Content-Type = application/json 추가
            Body에 입력할 json
            
            ```json
            {
            "title": "새로운 태스크1",
            "description": "태스크 설명1",
            "dueDate": "2024-11-02"
            }
            ```
            
            A-2) TaskService GET
            URL: https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/tasks
            
            B-1) UserService POST
            URL: https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/users
            Header에 Content-Type = application/json 추가
            Body에 입력할 json
            
            ```json
            {
            "name": "홍길동",
            "email": "[hong@example.com](mailto:hong@example.com)",
            "age": 30
            }
            ```
            
            B-2) UserService GET
            URL: https://al9likgcld.execute-api.ap-northeast-2.amazonaws.com/dev/users
