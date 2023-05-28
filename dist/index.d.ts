import type { StateStorage } from 'zustand/middleware';
import type { CookieAttributes } from 'js-cookie';
declare const CookieStorage: (userOptions?: CookieAttributes) => StateStorage;
export default CookieStorage;
