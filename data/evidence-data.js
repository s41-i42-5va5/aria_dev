window.ARIA_EVIDENCE = Object.freeze({
  "summary": {
    "before_ok": false,
    "after_ok": true,
    "drift_rejection": "Product Git state changed after aria verify",
    "run_id": "20261004T053941Z-1c5dbd0e",
    "execution_id": "focused-tests-29334ba688db"
  },
  "receipt": {
    "schema_version": 1,
    "execution_id": "focused-tests-29334ba688db",
    "run_id": "20261004T053941Z-1c5dbd0e",
    "command_id": "focused-tests",
    "adapter": "python",
    "command_contract_sha256": "43da79cf9720f10da12cbc22284d42ae81202422d91e395de2a74d83e505e855",
    "execution_contract_sha256": "ce7a062b7cdca7e35d5bb224841101fb0aa8fcc456ef4fd41b3e130a7ad4247e",
    "links_sha256": null,
    "argv": [
      "X:\\Projects\\ARIA-1.5.3-CLEAN\\venv-1.5.4\\Scripts\\python.exe",
      "verify_status.py"
    ],
    "command": "X:\\Projects\\ARIA-1.5.3-CLEAN\\venv-1.5.4\\Scripts\\python.exe verify_status.py",
    "resolved_executable": "X:\\Projects\\ARIA-1.5.3-CLEAN\\venv-1.5.4\\Scripts\\python.exe",
    "resolved_executable_sha256": "560b9ef7d856608ab8da02ded2dc8a1951ad1f424c382c0ec6a698874165a18e",
    "resolved_executable_sha256_after": "560b9ef7d856608ab8da02ded2dc8a1951ad1f424c382c0ec6a698874165a18e",
    "cwd": ".",
    "classes": [
      "focused"
    ],
    "requirement_ids": [],
    "acceptance_ids": [],
    "git": {
      "head": "dd2c451c19f8901a424ebf81907dc27cc4393f7b",
      "working_tree_sha256": "f5c8b2d37b6ebcf0af29f03e0e3fedc206426cac1452b91c9fb1c7c11ad1b9b9",
      "changed_count": 1
    },
    "git_after": {
      "head": "dd2c451c19f8901a424ebf81907dc27cc4393f7b",
      "working_tree_sha256": "f5c8b2d37b6ebcf0af29f03e0e3fedc206426cac1452b91c9fb1c7c11ad1b9b9",
      "changed_count": 1
    },
    "started_at": "2026-10-04T05:39:42.342559Z",
    "finished_at": "2026-10-04T05:39:42.605879Z",
    "duration_seconds": 0.078,
    "timeout_seconds": 30,
    "status": "passed",
    "exit_code": 0,
    "output_path": "execution/logs/focused-tests-29334ba688db.log",
    "output_sha256": "eb48326462456f4cb9ef4100d1fac3a533739175e1e06dabded6b68c72f1af28",
    "output_size": 74,
    "output_excerpt": "PASS: administrator can change status\r\nPASS: viewer cannot change status",
    "redacted_environment_names": [],
    "launch_error": null
  },
  "hashes": {
    "before.py": "0e2e2715b79e9a04b6a9a66f48980730e4ac119e5c596b2b2ac60d0b5335550d",
    "after.py": "0522f1a28554b60cf83425ef52027713e816dedb96d4526166ed413e3951239d",
    "verify_status.py": "2df5fe8162ba061a057cc7229635bd178c6e7a6cf27374a99c8d6dd43cbe3af2",
    "before-output.txt": "5b5dfabff71ec4bb449424545e8b7f8355f63f9d321a63ce2e96ed58ab324839",
    "after-output.txt": "eb48326462456f4cb9ef4100d1fac3a533739175e1e06dabded6b68c72f1af28",
    "receipt.json": "15fa219f3f1e0b25c4814d12e4c20f04ec67b1d5cc63c908c73c5c256783bbae",
    "summary.json": "bb3bab4fa292b95584ad48a54001e6391f44f8bb7a02285fe37cd998b7d9a4e6"
  },
  "beforeCode": "def change_status(role, request, status):\n    request['status'] = status\n    return request['status']\n",
  "afterCode": "def change_status(role, request, status):\n    if role != 'admin':\n        raise PermissionError('Status change is not allowed')\n    request['status'] = status\n    return request['status']\n",
  "checkCode": "from backend.service import change_status\nrequest = {'status': 'new'}\nassert change_status('admin', request, 'in_progress') == 'in_progress'\nassert request['status'] == 'in_progress'\nprint('PASS: administrator can change status')\nrequest = {'status': 'new'}\ntry:\n    change_status('viewer', request, 'in_progress')\nexcept PermissionError:\n    assert request['status'] == 'new'\n    print('PASS: viewer cannot change status')\nelse:\n    raise AssertionError('FAIL: viewer changed status without permission')\n",
  "beforeOutput": "PASS: administrator can change status\nTraceback (most recent call last):\n  File \"C:\\Users\\marti\\AppData\\Local\\Temp\\tmpmwtkwgbj\\product-code\\verify_status.py\", line 13, in <module>\n    raise AssertionError('FAIL: viewer changed status without permission')\nAssertionError: FAIL: viewer changed status without permission\n",
  "afterOutput": "PASS: administrator can change status\nPASS: viewer cannot change status\n",
  "beforeResult": {
    "ok": false,
    "project": "demo",
    "run_id": "20261004T053941Z-1c5dbd0e",
    "bundle_path": "C:\\Users\\marti\\AppData\\Local\\Temp\\tmpmwtkwgbj\\runtime\\projects\\demo\\runs\\20261004T053941Z-1c5dbd0e\\execution\\bundle.json",
    "bundle_sha256": "1df642cd8f37dd3574852d02546e1e171fee050f9daca8e136c36d2c400526c8",
    "verification_template_path": "C:\\Users\\marti\\AppData\\Local\\Temp\\tmpmwtkwgbj\\runtime\\projects\\demo\\runs\\20261004T053941Z-1c5dbd0e\\execution\\verification-template.json",
    "executions": [
      {
        "execution_id": "focused-tests-56fce89e44f6",
        "command_id": "focused-tests",
        "status": "failed",
        "exit_code": 1,
        "output_path": "execution/logs/focused-tests-56fce89e44f6.log",
        "requirement_ids": [],
        "acceptance_ids": []
      }
    ],
    "reused_execution_ids": [],
    "missing_execution_classes": [
      "focused"
    ],
    "failed_command_ids": [
      "focused-tests"
    ],
    "next_action": "Fix failed commands or add commands for missing assurance classes, then rerun aria verify."
  },
  "afterResult": {
    "ok": true,
    "project": "demo",
    "run_id": "20261004T053941Z-1c5dbd0e",
    "bundle_path": "C:\\Users\\marti\\AppData\\Local\\Temp\\tmpmwtkwgbj\\runtime\\projects\\demo\\runs\\20261004T053941Z-1c5dbd0e\\execution\\bundle.json",
    "bundle_sha256": "a134cadb0db60db5f176ba4ecaba3096b0c6ef0f78ee0f6ffcb202e2fe0b089c",
    "verification_template_path": "C:\\Users\\marti\\AppData\\Local\\Temp\\tmpmwtkwgbj\\runtime\\projects\\demo\\runs\\20261004T053941Z-1c5dbd0e\\execution\\verification-template.json",
    "executions": [
      {
        "execution_id": "focused-tests-29334ba688db",
        "command_id": "focused-tests",
        "status": "passed",
        "exit_code": 0,
        "output_path": "execution/logs/focused-tests-29334ba688db.log",
        "requirement_ids": [],
        "acceptance_ids": []
      }
    ],
    "reused_execution_ids": [],
    "missing_execution_classes": [],
    "failed_command_ids": [],
    "next_action": "Complete the semantic verification template, independent review and convergence evidence."
  }
});
