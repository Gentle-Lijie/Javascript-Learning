如何使用本仓库的 Copilot 提示词

文件位置：`.vscode/copilot-prompt.md`（中文） 和 `.vscode/copilot-prompt.en.md`（英文）

步骤：

1. 在 VS Code 中打开 Copilot Chat（如果未安装 Copilot 扩展，请先安装并登录）。
2. 将 `.vscode/copilot-prompt.md` 或 `.vscode/copilot-prompt.en.md` 中的提示词复制到 Chat 对话框顶部，或将其保存为 Copilot Chat 的“默认提示”（如果扩展支持自定义默认提示）。
3. 在写代码时，优先使用行内补全（Inline Suggestions）——已在工作区设置中启用。若需要更详细的解释或重构建议，请在 Chat 中粘贴相关代码并以“按本仓库提示词：...”开头发出请求。

HTML 模板与快速创建

工作区包含一个 HTML 模板（`.vscode/templates/html-template.html`）和一个用于从模板创建新文件的 PowerShell 脚本（`.vscode/scripts/new-from-template.ps1`）。

使用方法：

- 通过任务运行：打开“Terminal -> Run Task...”，选择“New HTML from template”。脚本会提示你输入目标文件路径（相对于工作区根），例如 `Basic Grammar/lesson1.html`，并将模板内容写入该文件（{{FILENAME}} 会被替换为文件名）。
- 片段备用：在编辑器中也可以输入片段前缀 `html-template` 并按 Tab 插入模板（适用于快速插入模板到已打开的文件）。

- 快捷键：已为工作区添加了一个快捷键，按 Ctrl+Alt+N 会触发“New HTML from template”任务（在某些系统或 VS Code 配置中可能与其他快捷键冲突，如果需要可以修改或移除 `/.vscode/keybindings.json`）。

注意：VS Code 没有原生的“在创建新文件时自动注入模板”的全局钩子，因此使用任务或片段是最稳妥的替代方案。

注意：
- 该提示词旨在限制 Copilot 的行为为“学习辅助”：只提供短小补全、语法修正与简短说明，不主动实现完整功能。若你需要完整实现，请在请求中明确说明。
- 如果你希望调整提示词（例如更严格或更宽松），可以编辑 `.vscode/copilot-prompt.md` 或 `.vscode/copilot-prompt.en.md` 并重新粘贴到 Copilot Chat。
