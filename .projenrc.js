const { typescript } = require('projen');
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'advent-of-code',
  deps: ['csv-parse'],
  devDeps: [],
});
project.synth();