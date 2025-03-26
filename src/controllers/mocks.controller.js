import MockingService from "../services/mocking.js";

export const getMockingUsers = async (req, res) => {
    const users = await MockingService.generateMockingUsers(50);
    res.send({status: "success", payload:users});
}

