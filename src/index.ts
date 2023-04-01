import type { StateStorage } from 'zustand/middleware';
import type { CookieAttributes } from 'js-cookie';

import Cookies from 'js-cookie';

const CookieStorage: (options?: CookieAttributes) => StateStorage = (options?: CookieAttributes) => {
  const o: CookieAttributes = { ...options, expires: new Date(new Date().setFullYear(9999)) };
  return {
    getItem: async (name: string): Promise<string | null> => {
      const c = Cookies.get(name);
      return typeof c !== 'undefined' ? c : null;
    },
    setItem: async (name: string, value: string): Promise<void> => {
      await Cookies.set(name, value, o);
    },
    removeItem: async (name: string): Promise<void> => {
      await Cookies.remove(name, o);
    }
  };
};

export default CookieStorage;
