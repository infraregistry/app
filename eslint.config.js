// import eslintPluginSvelte from 'eslint-plugin-svelte';
// import svelteConfig from './svelte.config.js';
// export default [
//   ...eslintPluginSvelte.configs['flat/recommended'],
//   {
//     files: [
//       '**/*.svelte',
//       '*.svelte'
//       // Add more files if you need.
//       // '**/*.svelte.ts', '*.svelte.ts', '**/*.svelte.js', '*.svelte.js',
//     ],

//     languageOptions: {
//       parserOptions: {

//         // Specify the `svelte.config.js`.
//         svelteConfig
//       }
//     }
//   }
// ];
// import prettier from 'eslint-config-prettier';
// import svelte from 'eslint-plugin-svelte';
// export default [prettier, ...svelte.configs['flat/prettier']];
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser"; // Import the Svelte parser

// export default [
//   {
//     files: ["**/*.svelte", "*.svelte"],
//     languageOptions: {
//       parser: svelteParser,
//       parserOptions: {
//         parser: tsParser,
//       },
//     },
//   },
// ];
export default [
  // ...
  {
    ignores: [
      "cypress/*",
      "**/*.js"
    ]
  },
  {
    // ...
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
  },
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
          svelteFeatures: {
          /* -- Experimental Svelte Features -- */
          /* It may be changed or removed in minor versions without notice. */
          // This option is for Svelte 5. The default value is `true`.
          // If `false`, ESLint will not recognize rune symbols.
          // If not configured this option, The parser will try to read the option from `compilerOptions.runes` from `svelte.config.js`.
          // If `parserOptions.svelteConfig` is not specified and the file cannot be parsed by static analysis, it will behave as `true`.
          runes: true,
          /* -- Experimental Svelte Features -- */
          /* It may be changed or removed in minor versions without notice. */
          // Whether to parse the `generics` attribute.
          // See https://github.com/sveltejs/rfcs/pull/38
          experimentalGenerics: true,
        },
      },
    },
  },
];