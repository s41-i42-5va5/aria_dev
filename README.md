# // A.R.I.A. — interactive demo

An English interactive demonstration of A.R.I.A., a framework for organizing software development with AI.

Website: https://s41-i42-5va5.github.io/aria_dev/

## Try the demo

Follow six stages: task, context, plan, code change, checks and readiness. Try changing a request status as a read-only user, apply the permission fix, inspect the recorded checks and change the verified file to see why the earlier result no longer supports acceptance.

Additional views explain A.R.I.A., model two contributors claiming the same file scope, and describe nine feature groups with source links. The demo includes a search, an action log, fullscreen controls and local browser storage.

## Evidence and limits

The interface models the workflow. It includes records from an actual A.R.I.A. 1.5.5 core run on October 4, 2026: a failed permission check, a successful check of the fix, and rejected closure after the verified file changed.

The recorded run uses a temporary Python module and a compatible 1.4 profile in shadow mode. It does not verify a complete signed 1.5.5 cycle, live AI execution, independent review or live GitHub collaboration. The demo does not execute Python or connect to AI services.

## Files and publishing

GitHub Pages serves the root of `main`. `index.html` is the English demo; `en.html` serves the same page for existing links. Both use `styles/`, `scripts/`, `data/` and `assets/fonts/`. All runtime files match the approved local HTML demo. No build step or external libraries are required. Source links on GitHub require internet access.

Framework source: https://github.com/s41-i42-5va5/ARIA

Release: https://github.com/s41-i42-5va5/ARIA/releases/tag/v1.5.5
