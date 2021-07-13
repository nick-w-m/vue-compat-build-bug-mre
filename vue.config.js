/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */

module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8081
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat');

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 3,
            GLOBAL_EXTEND: true,
            INSTANCE_CHILDREN: true,
            INSTANCE_EVENT_EMITTER: true,
            INSTANCE_LISTENERS: true
          }
        }
      }));

    config
      .plugin('fork-ts-checker')
      .tap((args) => {
        args[0] = {
          ...args[0],
          typescript: {
            memoryLimit: 512
          },
          eslint: {
            memoryLimit: 512,
            files: './src/**/*.{ts,tsx,js,jsx,vue}'
          },
          issue: {
            exclude: [{
              origin: 'eslint',
              severity: 'warning'
            }]
          }
        };
        return args;
      });
  }
};
