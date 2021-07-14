// Add modules which does not have a @types lib

// types mostly copied from defineComponents compatConfig
declare module '@vue/compat' {
  export interface CompilerCompatConfig extends Record<string, any> {
    MODE?: 2 | 3
  }
  // eslint-disable-next-line import/prefer-default-export
  export function configureCompat(conf: CompilerCompatConfig): void;
}
