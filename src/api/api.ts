import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";
const DATABASE_URL = {
  adList: "/ad-list",
  channelStatus: "/channel-report",
  totalAdStatus: "/total-report",
};

type DatabaseType = "adList" | "channelStatus" | "totalAdStatus";

export const dataService = (database : DatabaseType) =>
  axios.create({ baseURL: `${BASE_URL}${DATABASE_URL[database]}` });

export const getData = async <T>(
  database: DatabaseType = "totalAdStatus",
  endpoint: string = ""
): Promise<T> => {
  const response: AxiosResponse<T> = await dataService(database).get(endpoint);
  return response.data;
};