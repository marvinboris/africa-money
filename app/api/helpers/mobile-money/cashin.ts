import { mobileMoney } from "@/utils/config";
import { handleAxiosException } from "@/utils/exceptions";
import { mobileMoneyInstance } from "@/utils/helpers";

export interface CashinRequest {
  service_id: "CASHINMTNCMPART" | "CASHINOMCMPART2" | "CM_CASHIN_YOOMEE_PART";
  recipient_phone_number: string;
  amount: number;
}

interface CashinResponse {}

export async function cashin(request: CashinRequest) {
  try {
    const response = await mobileMoneyInstance.post<CashinResponse>("/cashin", {
      ...request,
      partner_id: mobileMoney.partnerId,
      partner_transaction_id: Date.now().toString(),
      login_api: mobileMoney.loginApi,
      password_api: mobileMoney.passwordApi,
      call_back_url: process.env.NEXT_PUBLIC_SITE_URL + "/api/cashin/callback",
    });
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
