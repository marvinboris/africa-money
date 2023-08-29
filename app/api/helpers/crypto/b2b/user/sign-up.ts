import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { axiosToCurl, cryptoInstance } from "@/utils/helpers";
import { AxiosRequestConfig } from "axios";

export interface PostB2bUserSignUpRequest {
  accept: boolean;
  email: string;
}

type PostB2bUserSignUpResponse =
  | {
      data: {
        bearer_token: string;
        user_uuid4: string;
      };
      status: number;
    }
  | {
      code: number;
      message: string;
      data?: {
        email: string;
      };
      status: number;
    };

export async function postB2bUserSignUp(request: PostB2bUserSignUpRequest) {
  try {
    const response = await cryptoInstance.post<PostB2bUserSignUpResponse>(
      "/b2b/user/sign-up",
      request,
      {
        headers: {
          "Sdk-Partner-Token": crypto.sdkPartnerToken,
        },
      }
    );

    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
