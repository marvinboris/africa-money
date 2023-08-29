import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

export interface PostB2bUserSetPhoneRequest {
  phone: string;
}

export interface PostB2bUserSetPhoneResponse {
  data: {
    code_length: string;
    key: string;
    timeout: string;
  }[];
  status: string;
}

export async function postB2bUserSetPhone(
  request: PostB2bUserSetPhoneRequest,
  bearer_token: string
) {
  try {
    const response = await cryptoInstance.post<PostB2bUserSetPhoneResponse>(
      "/b2b/user/sign-in",
      request,
      {
        headers: {
          "B2B-Bearer-Token": bearer_token,
        },
      }
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
