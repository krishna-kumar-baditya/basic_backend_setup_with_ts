import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    age: number;
}

const UserSchema: Schema<IUser> = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("user", UserSchema);

export default User;
