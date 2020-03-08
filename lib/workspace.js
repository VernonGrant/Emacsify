const vscode = require('vscode');

/**
 * Performs the standard vscode split right command but in addition,
 * it refocuses on the previous split. Just like in emacs.
 *
 * @returns void
 */
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
