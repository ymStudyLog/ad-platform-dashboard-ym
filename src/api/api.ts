import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  TotalAdStatusType,
  ChannelStatusType
} from "../types";

const BASE_URL = "http://localhost:8000";
const ENDPOINT = {
  adList: "/ad-list",
  channelStatus: "/channel-report",
  totalAdStatus: "/total-report",
};

type EndpointType = "adList" | "channelStatus" | "totalAdStatus";

interface DataServiceType {
  (endpoint: EndpointType): AxiosInstance;
}

export const dataService: DataServiceType = (endpoint) =>
  axios.create({ baseURL: `${BASE_URL}${ENDPOINT[endpoint]}` }); //TODO "http://localhost:8000/total-report?date_gte=...&date_lte=..." 이런식으로 되어야됨. endpoint도 각각 다르고 get을 다시 만들어야될듯 

export const getTotalAdStatusData = async <T = TotalAdStatusType[]>(
  service: AxiosInstance,
  url: string = ""
): Promise<T> => {
  const response: AxiosResponse<T> = await service.get(url);
  return response.data;
};

export const getChannelStatusData = async <T = ChannelStatusType[]>(
  service: AxiosInstance,
  url: string = ""
): Promise<T> => {
  const response: AxiosResponse<T> = await service.get(url);
  return response.data;
};