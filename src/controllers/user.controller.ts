import { Request, Response } from "express";
import userModel from "../models/user.model.js";

class UserController {
    async createUser(req: Request, res: Response):Promise<void> {
        try {
            const { name, email, age } = req.body;

            // Validation (good practice)
            if (!name || !email || !age) {
                res.status(400).json({
                    status: 400,
                    message: "All fields (name, email, age) are required",
                });
                return; // Optional: stops further execution
            }

            const user = await userModel.create({ name, email, age });

            // ✅ Send success response
            res.status(201).json({
                status: 201,
                message: "User created successfully",
                data: user,
            });
        } catch (error: any) {
            // ✅ Handle errors
            res.status(500).json({
                status: 500,
                message: `Error creating user: ${error.message}`,
            });
        }
    }
}

export default new UserController();
