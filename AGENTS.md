# AGENTS.md

<!-- PM_SHARED_CONTRACT:START -->
## Repo / Coder Execution Contract

- PM config: `/Volumes/DATABASE/code/business/xuanyuku-cli/.planning/pm/pm.json`
- repo root: `/Volumes/DATABASE/code/business/xuanyuku-cli`
- tasklist: `蛋龟选育库`
- doc folder: `蛋龟选育库`
- default engineering worker: `codex`
- preferred UI worker: `gemini`

- This repository root is the binding point for Claude Code, Codex, PM context, and local project truth.
- Start Claude Code / Codex from `/Volumes/DATABASE/code/business/xuanyuku-cli` before running PM commands or editing project files.
- Read `.planning/pm/pm.json`, `.planning/pm/current-context.json`, `.planning/pm/bootstrap.json`, and `.planning/pm/coder-context.json` before tracked implementation work.
- `pm` remains task truth, context truth, progress write-back, and completion truth.
- Feishu delivery uses the official `lark-cli`; do not route PM Feishu work through OpenClaw/Gateway/Hermes bridge layers.
- Local backend mode must stay offline and must not invoke `lark-cli`.
- Repo doc backend materializes repo-local planning docs under the configured doc folder, defaulting to `.planning/`.
- Do not store app secret, access token, refresh token, tenant secret, or user token in `pm.json`.
- `product-canvas` clarifies ambiguous product, UX, and acceptance questions before implementation.
- `coder` executes implementation after PM intake and routes engineering work to `codex` while preferring `gemini` for UI or visual exploration.
- `project-review` is the project-level review and quality layer after implementation, not the front-door intake role.
- Any tracked behavior, docs, workflow, or code change should still start from a normalized PM task before execution.
<!-- PM_SHARED_CONTRACT:END -->
