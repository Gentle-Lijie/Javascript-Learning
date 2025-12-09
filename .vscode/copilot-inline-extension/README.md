Copilot Inline Enforcer (workspace)

This small VS Code workspace extension provides minimal inline completions for JavaScript files to implement repository-specific rules for learning exercises.

What it does:
- When you type `numStr=` it suggests the literal `"123.45"`.
- When you type `var num=` it provides a minimal (empty) inline suggestion so no conversion is auto-inserted.
- If the file path includes a `Samples` folder, the provider returns no suggestions (to avoid revealing full solutions).

How to use (development mode):
1. Open this workspace in VS Code.
2. Open a new VS Code window for Extension Development Host: Run the "Run Extension" launch in the Debug panel (press F5).
3. In the Extension Development Host window, open or edit `Basic Grammar/variable.js` and try typing `numStr=` or `var num=`.

To install as a packaged extension:
- Install `vsce` and run `vsce package` in the extension folder, then install the generated .vsix in VS Code.

Notes:
- This extension provides inline completions but cannot suppress other providers like GitHub Copilot; it offers prioritized suggestions which should appear in the inline suggestion list.
- For more advanced behavior (syntax-only fixes in Samples), the provider currently returns no suggestions in Samples folder; you can expand behavior to provide syntax-fix offers instead.
