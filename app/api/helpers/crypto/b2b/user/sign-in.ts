import { crypto } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { axiosToCurl, cryptoInstance } from "@/utils/helpers";

type PostB2bUserSignInRequest =
  | {
      email: string;
    }
  | {
      phone: string;
    }
  | {
      user_uuid4: string;
    };

type PostB2bUserSignInResponse =
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

export async function postB2bUserSignIn(request: PostB2bUserSignInRequest) {
  try {
    const response = await cryptoInstance.post<PostB2bUserSignInResponse>(
      "/b2b/user/sign-in",
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
