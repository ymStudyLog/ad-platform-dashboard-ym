import { AdListDataType } from "../types";
import { dataService } from "./api";

export const useAdList = () => {
  const adListService = dataService("adList");

  const getAdList = async (url: string) => {
    const response = await adListService.get(url); 
    return response.data;
  };

  const modifyAdById = async (id: number, data: AdListDataType) => {
    await adListService
      .put(`/${id}`, data)
      .then((response) => console.log(response.data))
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteAdById = async (id: number) => {
    await adListService
      .delete(`/${id}`)
      .then((response) => console.log(response.data))
      .catch((e) => {
        console.log(e);
      });
  };

  const createAd = async (data: AdListDataType) => {
    await adListService
      .post("", data)
      .then((response) => console.log(response.data))
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    getAdList,
    modifyAdById,
    deleteAdById,
    createAd,
  };
};
