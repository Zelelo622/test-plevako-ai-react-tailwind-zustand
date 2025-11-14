import { create } from "zustand";
import { IProfile } from "src/types";
import * as userApi from "src/api/userApi";

interface IUserStore {
  userProfile: IProfile | null;
  otherProfiles: IProfile[];
  loading: boolean;
  error: string | null;
  fetchUserProfile: () => Promise<void>;
  fetchOtherProfiles: () => Promise<void>;
}

export const useUserStore = create<IUserStore>((set) => ({
  userProfile: null,
  otherProfiles: [],
  loading: false,
  error: null,

  fetchUserProfile: async () => {
    set({ loading: true, error: null });
    try {
      const data = await userApi.getUserProfile();
      set({ userProfile: data, loading: false });
    } catch (err: any) {
      console.error(err);
      set({ error: err.message, loading: false });
    }
  },

  fetchOtherProfiles: async () => {
    set({ loading: true, error: null });
    try {
      const data = await userApi.getOtherProfiles();
      set({ otherProfiles: data, loading: false });
    } catch (err: any) {
      console.error(err);
      set({ error: err.message, loading: false });
    }
  },
}));
