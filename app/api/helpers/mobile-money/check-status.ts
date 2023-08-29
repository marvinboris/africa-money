import { mobileMoney } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { mobileMoneyInstance } from "@/utils/helpers";

interface CheckStatusRequest {
  partner_transaction_id: string;
}

interface CheckStatusResponse {}

export async function checkStatus(request: CheckStatusRequest) {
  try {
    const response = await mobileMoneyInstance.post<CheckStatusResponse>(
      "/check_status",
      {
        ...request,
        partner_id: mobileMoney.partnerId,
        login_api: mobileMoney.loginApi,
        password_api: mobileMoney.passwordApi,
      }
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
