# zustand-persist-cookie-storage
A simple package created to allow persisting a sustand store to a cookie 🙂. The package will automatically apply an expiry for the cookie as far in the future as it can (you can override this if you want).

## Usage
1. Import using `import CookieStorage from 'zustand-persist-cookie-storage'`.
2. Import 'createJSONStorage' from zustand using `import { createJSONStorage } from 'zustand/middleware'`.
3. Create your store normally.
4. In the persist options, set `storage` to `storage: createJSONStorage(() => CookieStorage())`.
5. Pass any cookie options to CookieStorage.

Your code should look something like:
```
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import CookieStorage from 'zustand-persist-cookie-storage';

export const usePersistedZustandStore = create(
  persist(
    ...,
    {
      name: ...,
      storage: createJSONStorage(() => CookieStorage({...[COOKIE OPTIONS GO HERE]}))
    }
  )
);
```

## Cookie Options
The type of cookie options should match the `CookieAttributes` from `js-cookie` (see [@types/js-cookie](https://www.npmjs.com/package/@types/js-cookie) for more info).
