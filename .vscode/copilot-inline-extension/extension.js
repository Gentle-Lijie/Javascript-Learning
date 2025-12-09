const vscode = require('vscode');

function activate(context) {
  const provider = {
    provideInlineCompletionItems(document, position, context, token) {
      try {
        const fsPath = document.uri.fsPath || document.uri.path || '';
        const inSamples = fsPath.includes('\\Samples\\') || fsPath.includes('/Samples/');

        // If in Samples folder, return no functional completions (empty list)
        if (inSamples) {
          // Optionally, we could provide syntax-only helpers; for now, return empty to avoid revealing solutions.
          return [];
        }

        const line = document.lineAt(position.line).text.substring(0, position.character);

        // Rule: when typing numStr= suggest "123.45"
        if (/numStr\s*=\s*$/.test(line)) {
          const item = new vscode.InlineCompletionItem('"123.45"');
          return [item];
        }

        // Rule: when typing var num= complete to 'var num=' (no Number())
        if (/^\s*var\s+num\s*=\s*$/.test(line)) {
          // Suggest nothing beyond the equal sign; we return an empty string suggestion so user sees a suggestion but no full conversion.
          const item = new vscode.InlineCompletionItem('');
          return [item];
        }

        return [];
      } catch (e) {
        console.error('Inline provider error', e);
        return [];
      }
    }
  };

  const selector = [{ language: 'javascript', scheme: 'file' }, { language: 'javascriptreact', scheme: 'file' }];
  const disposable = vscode.languages.registerInlineCompletionItemProvider(selector, provider);
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };