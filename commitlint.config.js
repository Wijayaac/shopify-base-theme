module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style changes (formatting, missing semicolons, etc)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "chore", // Maintenance tasks, dependency updates, etc
        "revert", // Revert previous commits
        "ci", // CI/CD related changes
        "build", // Build system changes
        "init", // Project initialization
      ],
    ],
    "type-case": [2, "always", "lowercase"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]], // Allow both sentence case and lowercase
    "header-max-length": [2, "always", 72],
  },
};
