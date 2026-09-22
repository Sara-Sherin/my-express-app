const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  test("should return welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Welcome to My DevOps Project");
  });
});