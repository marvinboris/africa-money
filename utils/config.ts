export const bills = {
  baseUrl: process.env.BILLS_BASE_URL || "",
  password: process.env.BILLS_PASSWORD || "",
  username: process.env.BILLS_USERNAME || "",
  apiKey: process.env.BILLS_API_KEY || "",
  apiSecret: process.env.BILLS_API_SECRET || "",
};

export const crypto = {
  baseUrl: process.env.CRYPTO_BASE_URL || "",
  widgetId: process.env.CRYPTO_WIDGET_ID || "",
  address: process.env.CRYPTO_ADDRESS || "",
  sdkPartnerToken: process.env.CRYPTO_SDK_PARTNER_TOKEN || "",
};

export const mobileMoney = {
  baseUrl: process.env.MOBILE_MONEY_BASE_URL || "",
  username: process.env.MOBILE_MONEY_USERNAME || "",
  password: process.env.MOBILE_MONEY_PASSWORD || "",
  partnerId: process.env.MOBILE_MONEY_PARTNER_ID || "",
  loginApi: process.env.MOBILE_MONEY_LOGIN_API || "",
  passwordApi: process.env.MOBILE_MONEY_PASSWORD_API || "",
};

export const exchangeRateProvider = {
  apiKey: process.env.EXCHANGE_RATE_API_KEY || "",
};
