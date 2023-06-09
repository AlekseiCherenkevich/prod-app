import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildRelolvers } from './buildRelolvers';

import { buildDevServer } from './buildDevServer';

export function buidWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildRelolvers(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
    performance: {
      hints: false,
    },
  };
}
