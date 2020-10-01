import merge from 'webpack-merge';
import { isProduction } from './webpack.utils.config';

export default (env = {}) => {
  return merge([
    {
      node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
      devtool: utils.isProduction ? 'nosources-source-map' : 'cheap-module-eval-source-map',
      context: __dirname,
      entry: '',
      output: '',
      module: {
        rules: getLoadingRules(build),
      },
    },
    plugins.common(build),
    utils.isProduction ? plugins.production(build, env) : plugins.development(build, env),
  ]);
};
