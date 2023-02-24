module.exports = {
    branches: [
        {
            name: 'main',
        },
        {
            name: 'master',
        },
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    {
                        type: 'chore',
                        release: 'minor',
                    },
                    {
                        type: '*!',
                        release: 'major',
                    },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            },
        ],
        [
            '@semantic-release/gitlab',
            {
                gitlabUrl: '',
            },
        ],
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'CHANGELOG.md'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
