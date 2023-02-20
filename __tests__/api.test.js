const request= require('supertest');
const baseURL= "http://localhost:5000";
describe("GET /todos",()=>{
    it("should return 200",async ()=>{
        const response= await request(baseURL).get("/todos");
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(null);

    })
    it("should return todos",async ()=>{
        const response =await request(baseURL).get("/todos");
        expect(response.body.data.length>=1).toBe(true);

    })
})