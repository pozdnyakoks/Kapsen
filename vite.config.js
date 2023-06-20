export default {
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './src/assets/images/Tyres',
          dest: 'assets'
        }
      ]
    })
  ],
  appType: 'mpa'
}