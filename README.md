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
