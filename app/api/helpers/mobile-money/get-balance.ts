import { mobileMoney } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { mobileMoneyInstance } from "@/utils/helpers";

interface GetBalanceResponse {}

export async function getBalance() {
  try {
    const response = await mobileMoneyInstance.post<GetBalanceResponse>(
      "/get_balance",
      {
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
