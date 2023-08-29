import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

export interface GetB2bUserCardsResponse {
  data: {
    card_id: string;
    card_number: string;
  }[];
  status: string;
}

export async function getB2bUserCards() {
  try {
    const response = await cryptoInstance.get<GetB2bUserCardsResponse>(
      "/b2b/user/cards"
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
