// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const words = require('./words');
const path = require('path');
const fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed



const createCompletionItem = () => {
	let wl = words.list;

	return wl.map((word) => {
		return new vscode.CompletionItem(word);
	});
}



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "var-share" is now active!');

	const provider = vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(document, position) {
			let isStatement = isVarStatement(document.getText());
			console.log('document:', document.getText())
			console.log('isStatement:', isStatement)

			if (isStatement === false) {
				return [];
			}

            // const completionItem1 = new vscode.CompletionItem('Hello World!');
            // const completionItem2 = new vscode.CompletionItem('World Peace!');
            return createCompletionItem();
        }
    });

	// scan all file
	const disposable = vscode.commands.registerCommand('var.scan', function (args, thisArg) {
		// const workspacePath = vscode.workspace.workspaceFolders[0].uri.path;
		// console.log('workspacePath:', workspacePath)

		// console.log('args:', typeof args)
		// console.log('args:', args.path)
        vscode.window.showInformationMessage('Scan variable name success!');
    });

        
    context.subscriptions.push(provider);
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
