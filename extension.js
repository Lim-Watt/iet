// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function getWebViewContent(context, templatePath, panel) {
	
    const resourcePath = path.join(__dirname, templatePath);
    let htmlIndexPath = fs.readFileSync(resourcePath, 'utf-8');

    const html = htmlIndexPath.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
        const absLocalPath = __dirname + $2;
        const webviewUri = panel.webview.asWebviewUri(vscode.Uri.file(absLocalPath));
        const replaceHref = $1 + webviewUri.toString() + '"';
        return replaceHref;
    });
    return html;
}

function activate(context) {
	console.log(context.extensionPath);
	
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
			
			webviewView.webview.html = getWebViewContent(this.context,"/front/index.html", webviewView);
		}
	};
	vscode.window.registerWebviewViewProvider('iet.bar', new DependenciesProvider(context));
	
	// 
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
