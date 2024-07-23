import type { StateStorage } from "zustand/middleware";
import type { CookieAttributes } from "js-cookie";

import Cookies from "js-cookie";

// https://docs.pmnd.rs/zustand/integrations/persisting-store-data#how-can-i-use-a-custom-storage-engine

const CookieStorage= (
  options: CookieAttributes = {
    expires: new Date(new Date().setFullYear(9999)),
  }
) => {
  return {
    getItem: async (name: string): Promise<string | null> => {
      const cookie = Cookies.get(name);
      return typeof cookie !== "undefined" ? cookie : null;
    },
    setItem: async (name: string, value: string): Promise<void> => {
      await Cookies.set(name, value, options);
    },
    removeItem: async (name: string): Promise<void> => {
      await Cookies.remove(name, options);
    },
  } as StateStorage;
};

export default CookieStorage;
