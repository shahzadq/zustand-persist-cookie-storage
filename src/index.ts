import { StateStorage } from "zustand/middleware";
import { CookieAttributes } from "js-cookie";

import Cookies from "js-cookie";

const CookieStorage: (options?: CookieAttributes) => StateStorage = (
  options = {
    expires: new Date(new Date().setFullYear(9999)),
  }
) => {
  // return a StateStorage object with the required functions
  return {
    getItem: async (name: string): Promise<string | null> => {
      // attempt to get the cookie
      const cookie = Cookies.get(name);

      // if the cookie exists return it
      //    otherise return null
      return typeof cookie !== "undefined" ? cookie : null;
    },
    setItem: async (name: string, value: string): Promise<void> => {
      // set a cookie with options
      await Cookies.set(name, value, options);
    },
    removeItem: async (name: string): Promise<void> => {
      // delete a cookie with a matching name and
      //    matching options
      await Cookies.remove(name, options);
    },
  };
};

export default CookieStorage;
