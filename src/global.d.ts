// global.d.ts
declare module "*.json" {
    const value: any;
    export default value;
  }
  
  // Déclare Webpack-specific `require.context` pour TypeScript
  declare var require: {
    context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): __WebpackModuleApi.RequireContext;
  };
  
  declare namespace __WebpackModuleApi {
    export interface RequireContext {
      keys(): string[];
      <T>(id: string): T;
    }
  }
  