## Vue2 to Vue3 SFC For bug with @vue/compat MRE
### Run the MRE (minimal reproducible example)
- **yarn install**
- **yarn run mre**  
(yarn run mre is an alias for building + serving the files locally)

### Other info
The build outputs a report to dist/report.html which shows bundled packages.  
Previous reports (from my builds) can be found in the build-reports folder

The issue goes away if we remove the following from vue.config.js, but then ofc, we lose the compat layer.
```
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
```