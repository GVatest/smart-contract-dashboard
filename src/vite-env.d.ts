/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface Window {
  ethereum?: {
    request: (...args: any) => any;
    on: (...args: any) => any;
    removeListener: (...args: any) => any;
  };
}
