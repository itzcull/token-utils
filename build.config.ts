import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: 'node16',
  clean: true,
  rollup: {
    inlineDependencies: ['@itzcull/json-utils'],
  },
})
