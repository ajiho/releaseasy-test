/** @type { import('releaseasy').UserConfig } */
export default {
  increments: [
    "major",
    "minor",
    "patch",
    "premajor",
    "preminor",
    "prepatch",
    "prerelease",
    "release",
  ],
  distTags: ["latest", "next"],
  git: {
    changelog: {
      output: "CHANGELOG.md",
      configFile: "cliff.toml",
      args: "--tag ${version}",
    },
  },
  hooks: {
    "before:init": ["pnpm test", "pnpm coverage"],
    "after:release": "echo Successfully released ${name} v${version} with tag ${tagName}.",
  },
};
