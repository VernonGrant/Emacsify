const vscode = require('vscode');

function splitEditorRight() {
    vscode.commands.executeCommand('workbench.action.splitEditorRight').then(function() {
        vscode.commands.executeCommand('workbench.action.focusPreviousGroup');
    });
}

/**
 * @param {vscode.ExtensionContext} context
 */
function setup(context) {
    // vertical split
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.workspaceSplitEditorRight', splitEditorRight)
    );
}

module.exports = {
    setup
}
