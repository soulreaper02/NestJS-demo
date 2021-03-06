module.exports = {
    extends: [
        "@commitlint/config-conventional"
    ],
    rules: {
        "type-enum" : [2, "always", ['feature', 'fix', 'test', 'revert', 'refactor', 'docs', 'ci']]
    },
    failOnWarnings: true
}