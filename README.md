# zustand-persist-cookie-storage
A simple package created to allow persisting a sustand store to a cookie 🙂.

## Usage
1. Import using `import CookieStorage from 'zustand-persist-cookie-storage';`.
2. Import 'createJsonStorage' from zustand using `import { createJSONStorage } from 'zustand/middleware';`.
3. Create your store normally.
4. In the persist options, set `storage` to `storage: createJsonStorage(() => CookieStorage())`.
5. Pass any cookie options to CookieStorage.