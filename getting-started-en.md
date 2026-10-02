# Getting started with // A.R.I.A. 1.5.5

// A.R.I.A. is a local framework for managing and verifying digital product development with AI tools. It connects the task, repository context, requirements, execution, checks and acceptance of the result.

This guide does not include the // A.R.I.A. distribution. Use the complete package supplied by the project owner.

## Codex

Codex must be installed and authenticated separately. In the `1.5.5 for Codex` package folder, run these commands in order:

```text
CHECK_RELEASE.cmd
INSTALL.cmd
RUN_ARIA.cmd doctor
RUN_ARIA.cmd --help
```

Proceed only after the integrity check and diagnostics succeed. Follow the complete `ИНСТРУКЦИЯ.md` supplied with the package to connect your project and configure access. The filename is retained exactly as it appears in the distribution.

## Claude Code

Before installation, you need an installed and authenticated Claude Code, plus a supported Git Bash or WSL environment. They are not included in the // A.R.I.A. package.

In the `1.5.5 for Claude` folder, run these commands in order:

```text
CHECK_RELEASE.cmd
INSTALL.cmd
RUN_ARIA.cmd claude status
RUN_ARIA.cmd doctor
```

The installer adds the `aria-project` skill and a protective PreToolUse hook for the current user. Restart Claude Code after installation and follow the full package instructions. The hook provides an additional control mechanism; it does not provide operating system isolation.

## Team workflow

// A.R.I.A. Control uses one GitHub repository with `main`, `dev`, `work/<github-username>` and `aria-control` branches. The Coordinator runs locally on the owner's PC. Live operations require internet access and configured GitHub access. GitHub App setup and participant permissions are covered by the full package instructions.

## What to verify in your environment

- Package integrity and diagnostics.
- Connection to the intended repository and correct boundaries for source code, documents and runtime data.
- Integration with the selected AI tool.
- Actual product checks and saved evidence.
- For team workflows: roles, tasks, pull requests, required checks and merges using real accounts.

Framework verification does not establish the readiness of a particular product, external API or device. Acceptance criteria and verification in the real environment must be defined separately.
