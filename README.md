**(참조) CORS 보안 적용 AWS 서비스들**

(면접관) AWS를 사용해 웹 서비스 개발 시 적용했던 CORS 구성에 대해 설명해줄 수 있나요?

### AWS에서의 CORS (Cross-Origin Resource Sharing) 보안 설정 개요

CORS는 다른 출처(Origin)의 리소스를 공유하기 위한 보안 메커니즘입니다.

**출처(Origin)의 구성 요소**:
- **프로토콜**: http, https
- **도메인**: example.com
- **포트**: 80, 443, 3000

예시: `https://example.com:443`

### AWS 서비스별 CORS 설정

| AWS 서비스 | CORS 필요 상황 | 설정 방법 | 설정 예시 |
| --- | --- | --- | --- |
| **API Gateway** | - 브라우저에서 API 직접 호출 <br> - 다른 도메인에서 API 호출 | - 콘솔에서 CORS 활성화 <br> - API 메서드별 설정 <br> - OpenAPI/Swagger 정의 | `json{ "AllowOrigins": ["*"], "AllowMethods": ["GET", "POST"], "AllowHeaders": ["Content-Type"], "MaxAge": 3600}` |
| **S3** | - 정적 웹사이트 호스팅 <br> - 브라우저에서 직접 접근 | - 버킷 CORS 설정 <br> - XML/JSON 형식 | `json{ "CORSRules": [{ "AllowedOrigins": ["*"], "AllowedMethods": ["GET"], "AllowedHeaders": ["*"], "MaxAgeSeconds": 3000 }]}` |
| **CloudFront** | - S3/API Gateway 프록시 <br> - 사용자 정의 헤더 필요 | - 응답 헤더 정책 설정 <br> - 오리진 설정 수정 | `json{ "Headers": { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET", "Access-Control-Allow-Headers": "*" }}` |
| **Lambda@Edge** | - CloudFront와 통합 <br> - 동적 CORS 처리 | - Viewer Response 이벤트 <br> - 응답 헤더 수정 | `javascript exports.handler = async (event) => { const response = event.Records[0].cf.response; response.headers['access-control-allow-origin'] = [{ key: 'Access-Control-Allow-Origin', value: '*' }]; return response;};` |

### 주요 CORS 헤더

| 헤더 | 설명 | 예시 값 |
| --- | --- | --- |
| **Access-Control-Allow-Origin** | 허용된 출처 | * 또는 https://example.com |
| **Access-Control-Allow-Methods** | 허용된 HTTP 메서드 | GET, POST, PUT, DELETE |
| **Access-Control-Allow-Headers** | 허용된 헤더 | Content-Type, Authorization |
| **Access-Control-Max-Age** | preflight 캐시 시간 | 3600 |
| **Access-Control-Allow-Credentials** | 인증 정보 허용 | true |

### CORS 설정 시 고려사항

#### 보안
- '*' 대신 특정 도메인만 허용
- 필요한 메서드만 허용
- 필요한 헤더만 허용

#### 성능
- MaxAge 설정으로 preflight 요청 최소화
- CloudFront 캐싱 활용

#### 개발 환경
- 개발/운영 환경별 다른 CORS 설정
- 테스트 도구 활용 (Postman, curl)

#### 문제 해결
- 브라우저 개발자 도구로 CORS 오류 확인
- OPTIONS 메서드 처리 확인
- 헤더 값 정확성 검증
