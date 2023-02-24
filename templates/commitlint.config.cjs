module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'body-max-line-length': [0, 'always', 200],
    },
};
