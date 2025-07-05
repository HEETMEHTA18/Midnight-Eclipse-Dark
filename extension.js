const vscode = require('vscode');

function activate(context) {
    console.log('Theme Sample extension is now active!');

    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        vscode.window.showInformationMessage('Hello from Theme Sample!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};