import supertest from "supertest";
import { expect } from "chai";
const requester = supertest ("http://localhost:8080");

describe ("testing de la App Web Adoptame", () => {
    describe ("testing de adopciones", () =>{
        it("Endpoint GET /api/adoptions debe traer todas las mascotas", async () =>{
            
            const {status, _body} = await requester.get("/api/adoptions")

        expect (status).to.equal.apply(200)
        expect(_body.payload.to.be.an("array"));
        })
    
        it("traemos una adopcion por id", async () =>{
            let idAdoption = "12345";

            const {status, _body} = await requester.get(`/api/adoptions/${idAdoption}`);

            expect (status).to.equal(200);
            expect(_body.payload).to.have.property("_id").that.equals(idAdoption)
        })

        it ("debe retornar 404 si la ruta no existe", async () =>{
            const {status} = await requester.get("/api/adoption/noexiste")

            expect(status).to.equal(404);
        })

        it("creamos una adopcion", async () => {
            let uid = "idusuario";
            let pid = "idperro";

            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);

            expect(status).to.equal(200);
        })
    })
})