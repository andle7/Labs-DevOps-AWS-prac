"use strict";

const tasks = [];

const taskHandler = async (event) => {
  try {
    const httpMethod = event.httpMethod;

    switch (httpMethod) {
      case "GET":
        return {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(tasks),
        };

      case "POST":
        const task = JSON.parse(event.body);
        tasks.push(task);
        return {
          statusCode: 201,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(task),
        };

      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "지원하지 않는 HTTP 메소드입니다." }),
        };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "서버 에러가 발생했습니다.",
        error: error.message,
      }),
    };
  }
};

module.exports = { taskHandler };
