module.exports = {
  envId: 'elvinn-1aa07a',
  framework: {
    plugins: {
      client: {
        use: '@cloudbase/framework-plugin-website',
        inputs: {
          buildCommand: 'npm run build',
          outputPath: 'dist',
          cloudPath: '/memo-vue'
        },
      },
    },
  },
}
