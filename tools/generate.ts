const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  // Example of generating a single file
  {
    option: 'Create New Thing',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/__model__.ts',
    },
    stringReplacers: ['__model__'],
    output: {
      path: './src/objects/__model__/__model__.ts',
      pathAndFileNameDefaultCase: '(pascalCase)',
    },
  },
]);
