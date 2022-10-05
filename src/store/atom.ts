import { selector } from "recoil";
import { getData } from "../api/api";
import { TotalAdDataType, ChannelAdDataType } from "../types";

export const earliestDate = selector({
  key: "earliestDate",
  get: async () => {
    const totalAd = await getData<TotalAdDataType>(
      "totalAdStatus",
      "?_sort=date&_order=asc&_limit=1"
    );
    const channelAd = await getData<ChannelAdDataType>(
      "channelStatus",
      "?_sort=date&_order=asc&_limit=1"
    );
    if (totalAd.date <= channelAd.date) {
      return Object.values(totalAd)[0];
    } else return Object.values(channelAd)[0];
  },
});

export const latestDate = selector({
  key: "latestDate",
  get: async () => {
    const totalAd = await getData<TotalAdDataType>(
      "totalAdStatus",
      "?_sort=date&_order=desc&_limit=1"
    );
    const channelAd = await getData<ChannelAdDataType>(
      "channelStatus",
      "?_sort=date&_order=desc&_limit=1"
    );
    if (totalAd.date >= channelAd.date) {
      return Object.values(totalAd)[0];
    } else return Object.values(channelAd)[0];
  },
});