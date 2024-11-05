**(참조) Database 서비스 개발에 활용되는 AWS 서비스들**

(면접관) Database에 어떤 유형들이 있는지 설명해줄 수 있나요? 이력서에 기술된 프로젝트 진행 시 경험했던 AWS Database 서비스들에 대해서도 아는 바가 있다면 설명을 부탁해요!

| **DB 유형** | **특징** | **사용 사례** | **AWS 서비스** | **On-Demand** | **관리형 서비스** |
| --- | --- | --- | --- | --- | --- |
| **관계형 DB** | - 테이블 형태 저장 <br> - SQL 사용 <br> - ACID 준수 <br> - 정규화된 스키마 | - 트랜잭션 처리 <br> - 금융 시스템 <br> - ERP | - RDS (MySQL, Oracle, MS SQL, PostgreSQL, MariaDB) <br> - Aurora | Aurora Serverless | O |
| **문서 DB** | - JSON/BSON 형태 <br> - 유연한 스키마 <br> - 계층적 데이터 | - 콘텐츠 관리 <br> - 게임 데이터 <br> - 실시간 분석 | - DocumentDB <br> - DynamoDB | DynamoDB | O |
| **Column DB** | - 열 기반 저장 <br> - 높은 압축률 <br> - 분석 최적화 | - 빅데이터 분석 <br> - 데이터 웨어하우스 <br> - 로그 분석 | - Keyspaces <br> - Redshift |  | O |
| **Key-Value DB** | - 단순 키-값 구조 <br> - 빠른 읽기/쓰기 <br> - 간단한 구조 | - 세션 관리 <br> - 캐싱 <br> - 실시간 순위표 | - DynamoDB | DynamoDB | O |
| **Memory DB** | - 인메모리 저장 <br> - 초고속 처리 <br> - 휘발성 | - 캐싱 <br> - 세션 관리 <br> - 실시간 분석 | - ElastiCache <br> - MemoryDB |  | O |
| **Vector DB** | - 벡터 데이터 저장 <br> - 유사도 검색 <br> - AI/ML 최적화 | - AI 검색 <br> - 추천 시스템 <br> - 이미지 검색 | - OpenSearch (벡터 엔진) |  | O |
| **Graph DB** | - 노드와 관계 저장 <br> - 관계 기반 쿼리 <br> - 복잡한 연결 분석 | - 소셜 네트워크 <br> - 사기 탐지 <br> - 지식 그래프 | - Neptune |  | O |
| **Time Series DB** | - 시계열 데이터 최적화 <br> - 시간 기반 쿼리 <br> - 데이터 압축 | - IoT 데이터 <br> - 모니터링 <br> - 금융 데이터 | - Timestream | Timestream | O |

### 참고사항:

1. **On-Demand**: AWS의 모든 데이터베이스 서비스는 사용한 만큼만 지불하는 온디맨드 방식을 지원
   - 과금 방식: 실제 사용량 기반
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

   **DynamoDB는 단순한 Key-Value DB가 아닌, Key-Value와 문서형 DB의 특성을 모두 가진 하이브리드 데이터베이스**

    
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
