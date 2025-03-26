import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

class MockingService {
    static async generateMockingUsers(num){
        const users = [];
        for(let i = 0; i< num; i++){
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets:[]
            })
        }
        return users;
    }
}

export default MockingService;