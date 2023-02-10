const { CdktfProviderProject } = require('@cdktf/provider-project');
const { Semver } = require('projen');

const project = new CdktfProviderProject({
  terraformProvider: "joyent/triton@~> 0.8.2",
  constructsVersion: "10.1.246",
  cdktfVersion: "0.15.4"
});

project.synth();
