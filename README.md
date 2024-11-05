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
