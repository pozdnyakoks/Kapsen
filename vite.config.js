import { viteStaticCopy } from 'vite-plugin-static-copy'

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
}