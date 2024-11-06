- (Lab) DynamoDB
    - Lambda (node.js 20.x)
        
        [lambda.zip](https://github.com/andle7/Labs-DevOps-AWS-prac/raw/refs/heads/DynamoDB/Lambda%20(node.js%2020.x)/lambda.zip)
        
    - Sample Data Jsons
        
        [userstable.json](https://github.com/andle7/Labs-DevOps-AWS-prac/blob/DynamoDB/Sample%20Data%20Jsons/userstable.json)
        
        [users.json](https://github.com/andle7/Labs-DevOps-AWS-prac/blob/DynamoDB/Sample%20Data%20Jsons/users.json)
        
        [users-50ea.json](https://github.com/andle7/Labs-DevOps-AWS-prac/blob/DynamoDB/Sample%20Data%20Jsons/users-50ea.json)
        
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
