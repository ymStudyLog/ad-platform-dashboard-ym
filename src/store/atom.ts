import { selector } from "recoil";
import { getData } from "../api/api";
import { TotalAdDataType, ChannelAdDataType } from "../types";

export const earliestDate = selector<string>({
  key: "earliestDate",
  get: async () => {
    const totalAd = await getData<TotalAdDataType[]>(
      "totalAdStatus",
      "?_sort=date&_order=asc&_limit=1"
    );
    const channelAd = await getData<ChannelAdDataType[]>(
      "channelStatus",
      "?_sort=date&_order=asc&_limit=1"
    );
    if (totalAd[0].date <= channelAd[0].date) {
      return totalAd[0].date;
    } else return channelAd[0].date;
  },
});

export const latestDate = selector<string>({
  key: "latestDate",
  get: async () => {
    const totalAd = await getData<TotalAdDataType[]>(
      "totalAdStatus",
      "?_sort=date&_order=desc&_limit=1"
    );
    const channelAd = await getData<ChannelAdDataType[]>(
      "channelStatus",
      "?_sort=date&_order=desc&_limit=1"
    );
    if (totalAd[0].date >= channelAd[0].date) {
      return totalAd[0].date;
    } else return channelAd[0].date;
  },
});