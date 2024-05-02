// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const bar = require('./front/bar');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	
	console.log('Congratulations, your extension "iet" is now active!');
	
	// 注册侧边栏视图
	class DependenciesProvider {
		constructor(context)
		{
			this.context = context;
		}
		resolveWebviewView(webviewView, context, token) {
			
			webviewView.webview.options = {
				enableScripts: true,
				retainContextWhenHidden: true,
				localResourceRoots: [this.context.extensionUri]
			};
			
			webviewView.webview.html = bar;
		}
	} vscode.window.registerWebviewViewProvider('iet.bar', new DependenciesProvider(context))
	
	// 
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
