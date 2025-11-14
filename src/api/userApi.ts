import { IProfile } from "src/types";
import { api } from "./axios";

export const getUserProfile = async (): Promise<IProfile> => {
  const { data } = await api.get<IProfile>("/getUserProfile");
  return data;
};

export const getOtherProfiles = async (): Promise<IProfile[]> => {
  const { data } = await api.get<IProfile[]>("/getOtherProfiles");
  return data;
};
