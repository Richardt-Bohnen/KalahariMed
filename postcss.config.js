const cssnano = require("cssnano")
const postcssPresetEnv = require("postcss-preset-env")
const viewportFix = require('postcss-viewport-height-correction')
const oldie = require('oldie')

module.exports = {
  plugins: [
    cssnano({
      preset: "default",
    }),
    postcssPresetEnv({
      stage: 1
    }),
    viewportFix({      
    }),
    // oldie({      
    // })
  ],
};