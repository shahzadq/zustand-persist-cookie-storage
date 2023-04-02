import type { StateStorage } from 'zustand/middleware';
import type { CookieAttributes } from 'js-cookie';

import Cookies from 'js-cookie';

const CookieStorage: (options?: CookieAttributes) => StateStorage = (options?: CookieAttributes) => {
  // create default options with expiry set to a date as far in the future as possible
  const o: CookieAttributes = { expires: new Date(new Date().setFullYear(9999)), ...options };

  // return a StateStorage object with the required functions
  return {
    getItem: async (name: string): Promise<string | null> => {
      // attempt to get the cookie
      const c = Cookies.get(name);

      // if the cookie exists return it
      //    otherise return null
      return typeof c !== 'undefined' ? c : null;
    },
    setItem: async (name: string, value: string): Promise<void> => {
      // set a cookie with options
      await Cookies.set(name, value, o);
    },
    removeItem: async (name: string): Promise<void> => {
      // delete a cookie with a matching name and 
      //    matching options
      await Cookies.remove(name, o);
    }
  };
};

export default CookieStorage;
