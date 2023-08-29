import { handleAxiosException } from "@/utils/exceptions";
import { cryptoInstance } from "@/utils/helpers";

interface SupportedCountriesResponse {
  status: number;
  data: string[];
}

interface CountryByIpRequest {
  ip: string;
}

interface CountryByIpResponse {
  status: number;
  data: {
    country: {
      code: string;
      phone_prefix: number;
      enabled: boolean;
    };
  };
}

export async function getSupportedCountries() {
  try {
    const response = await cryptoInstance.get<SupportedCountriesResponse>(
      `/public/card-countries`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch supported countries");
  }
}

export async function getCountryByIp(request: CountryByIpRequest) {
  try {
    const { ip } = request;
    const response = await cryptoInstance.get<CountryByIpResponse>(
      `/public/data-by-ip?ip=${ip}`
    );
    return response.data;
  } catch (error) {
    handleAxiosException(error);
  }
}
