import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { postB2bUserSignIn } from "@/app/api/helpers/crypto/b2b/user/sign-in";
import connectDB from "@/lib/connect-db";
import UserModel from "@/models/User";
import { signToken } from "@/utils/helpers";

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json(handleSubmit(data));
}

const handleSubmit = async (body: { email: string; password: string }) => {
  try {
    await connectDB();

    const user = await UserModel.findOne({ email: body.email });
    if (!user) throw new Error("User doesn't exist");

    const check = await bcrypt.compare(body.password, user.password);
    if (!check) throw new Error("Incorrect password");

    const b2bRes = await postB2bUserSignIn({ email: user.email });
    if (!b2bRes) throw new Error("No B2B response");
    else if (b2bRes.status !== 200 && "code" in b2bRes)
      throw new Error(`${b2bRes.code}: ${b2bRes.message}`);
    else if (b2bRes.status === 200 && !("code" in b2bRes)) {
      const { bearer_token } = b2bRes.data;

      // Create a JWT
      const { token, expiresAt } = signToken(user.id);

      return {
        token,
        expiresAt,
        bearer_token,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
