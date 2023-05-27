import {ResolveOptions} from "webpack";

export function buildRelolvers(): ResolveOptions {

  return {
    extensions: ['.tsx', '.ts', '.js']
  }
}