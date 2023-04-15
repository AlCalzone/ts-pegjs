import type { SourceOutputs, BuildOptionsBase } from 'peggy';

export type TsPegjsOptions = {
  /**
   * Items inserted at the top of generated grammar. This can be used for import statements, etc.
   */
  customHeader?: null | string;
  /**
   * The base name for the supplementary files generated by ts-pegjs.
   */
  baseName?: string;
  errorName?: string | 'PeggySyntaxError';
  /**
   * If `true`, do not attempt to have Typescript guess the type of each rule
   * by using the return value of each action. This will result in `unknown` being
   * returned as the parsed AST's type.
   */
  skipTypeComputation?: boolean;
  /**
   * If `true`, only types for grammar rules will be exported (that is, the parser itself will not be created)
   */
  onlyGenerateGrammarTypes?: boolean;
  /**
   * The default when creating types is to base type names off of CamelCase versions
   * of rules from the Pegjs/Peggy grammar. Set to `true` to prevent this conversion.
   */
  doNotCamelCaseTypes?: boolean;
};

// Included as a workaround for https://github.com/peggyjs/peggy/issues/403
interface _ParserBuildOptions extends BuildOptionsBase {
  output?: SourceOutputs;
}

export type TsPegjsParserBuildOptions = _ParserBuildOptions & {
  tspegjs?: TsPegjsOptions;
  returnTypes?: Record<string, string>;
};