"use server";

import bcrypt from "bcryptjs";

import { postB2bUserSignUp } from "@/app/api/helpers/crypto/b2b/user/sign-up";
import connectDB from "@/lib/connect-db";
import UserModel from "@/models/User";
import { signToken } from "@/utils/helpers";
import { postB2bUserSetPhone } from "@/app/api/helpers/crypto/b2b/user/set-phone";

export const handleSubmit = async (data: FormData) => {
  const body = {
    name: data.get("name")?.toString()!,
    email: data.get("email")?.toString()!,
    phone: data.get("phone")?.toString()!,
    password: data.get("password")?.toString()!,
    password_confirmation: data.get("password_confirmation")?.toString()!,
    country: data.get("country")?.toString()!,
  };

  try {
    await connectDB();

    const existingUser = await UserModel.findOne({ email: body.email });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    if (body.password !== body.password_confirmation) {
      throw new Error("Passwords do not match");
    }

    const b2bSignUpRes = await postB2bUserSignUp({
      accept: true,
      email: body.email,
    });
    if (!b2bSignUpRes) throw new Error("No B2B sign up response");
    else if (b2bSignUpRes.status !== 200 && "code" in b2bSignUpRes)
      throw new Error(`${b2bSignUpRes.code}: ${b2bSignUpRes.message}`);
    else if (b2bSignUpRes.status === 200 && !("code" in b2bSignUpRes)) {
      const { bearer_token, user_uuid4 } = b2bSignUpRes.data;

      const b2bSetPhoneRes = await postB2bUserSetPhone(
        {
          phone: body.phone,
        },
        bearer_token
      );
      if (!b2bSetPhoneRes) throw new Error("No B2B set phone response");

      const password = await bcrypt.hash(body.password, 10);
      const user = await UserModel.create({
        ...body,
        password,
        user_uuid4,
      });

      // Create a JWT
      const { token, expiresAt } = signToken(user.id);

      const data = user.toObject();
      (<any>data).password = undefined;
      (<any>data)._id = undefined;

      const res = { token, expiresAt, bearer_token, data };
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};
