// const request = require('supertest');

// const server = require("./auth-router.js")
// const db = require('../database/dbConfig.js');


// describe("auth-router", function () {
//     describe("POST /register", function (){
//         beforeEach(async () => {
//             await db('users').truncate();
//         })

//         it("return 201 on success", function () {
//             return request(server)
//             .post("/register")
//             .send({ username: "callahan"})
//             .send({ password: "test"}) 
//             .then(res => {
//                 expect(res.status).toBe(201)
//             })
//         })

        // it("adds a user to the db", async function (){

        //     const existing = await db("users").where({ username: "callahan"});

        //     expect(existing).toHaveLength(0)

        //     await request(server)
        //       .post("/register")
        //       .send({ username: "callahan", password: "test" })
        //       .then(res => {
        //           expect(res.body.message).toBe("User Created")
        //       })
        // })

        // const inserted = db("users")
        // expect(inserted).toHaveLength(1);
//     })
// })