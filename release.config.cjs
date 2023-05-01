module.exports = {
  branches: [
    {'name': 'main', 'channel': 'latest', 'prerelease': false},
    {'name': 'master', 'channel': 'latest', 'prerelease': false},
  ],
  debug: true,
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'angular',
      parserOpts: {
        headerPattern: /(\w*)(?:\((.*)\))?: (.*)$/,
      }
    }],
    ["@semantic-release/release-notes-generator", {
      preset: 'angular',
      parserOpts: {
        headerPattern: /(\w*)(?:\((.*)\))?: (.*)$/,
      }
    }],
    [
      "@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md"
    }
    ],
    // "@semantic-release/npm", // Uncomment this line if the project is a GitHub / NPM package
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
      }
    ]
  ],
};
