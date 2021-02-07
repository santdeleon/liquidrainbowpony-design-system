const path = require('path');

const StyleDictionary = require('style-dictionary').extend({
  source: [path.resolve(__dirname, 'figma/properties/**/*.json')],
  platforms: {
    web: {
      transformGroup: 'web',
      buildPath: 'build/',
      files: [
        {
          destination: 'colors.css',
          format: 'css/variables',
        },
        {
          destination: 'colors.js',
          format: 'javascript/object',
        },
        {
          destination: 'colors.json',
          format: 'json',
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
