#!/usr/bin/env node

import getGitRepositoryInfo from 'git-repo-info'

const { sha: commit, committerDate: date } = getGitRepositoryInfo()

const info = { commit, date }
const string = JSON.stringify(getGitRepositoryInfo(), null, 2)

process.stdout.write(
  `// DO NOT EDIT THIS FILE.
// It is autogenerated on build time.

const version = ${string}

export { version }
`
)
