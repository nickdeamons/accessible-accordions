module.exports = function babelConfig(api) {
  api.cache.using(() => process.env.NODE_ENV === 'development');

  return {
    presets: [
        ['@babel/env',
        {
          modules: false,
          useBuiltIns: 'usage',
          targets: {
            browsers: ["last 2 versions", "ie >= 11"]
            },
            exclude: ["transform-classes"]
        }],
        '@babel/react'
    ],
    
    plugins: ['@babel/proposal-class-properties']
  };
};
