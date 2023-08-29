import { Model, Schema, model, models } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
  user_uuid4: string;
  country?: string;
}

type UserModel = Model<IUser>

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  user_uuid4: { type: String, required: true },
  country: String,
});

// 3. Create a Model.
const User = models.User || model<IUser, UserModel>("User", userSchema);

export default User;
