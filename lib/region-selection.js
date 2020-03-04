const vscode = require('vscode');

let regionSelectionEnabled = false;

function enableRegionSelection() {
    regionSelectionEnabled = true;
    vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', true);
    vscode.window.setStatusBarMessage("Selection Mode: Enabled");
}

function disableRegionSelection() {
    vscode.commands.executeCommand('cancelSelection'); // clear selection | possible issue
    regionSelectionEnabled = false;
    vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
    vscode.window.setStatusBarMessage("Selection Mode: Disabled");
}

function toggleRegionSelection() {
    if (regionSelectionEnabled) {
        disableRegionSelection();
    } else {
        enableRegionSelection();
    }
}

function cutRegionSelection() {
    vscode.commands.executeCommand('editor.action.clipboardCutAction'); // perform cut
    disableRegionSelection();
}

function copyRegionSelection() {
    vscode.commands.executeCommand('editor.action.clipboardCopyAction'); // perform copy
    disableRegionSelection();
}

function pastRegionSelection() {
    vscode.commands.executeCommand('editor.action.clipboardPasteAction'); // perform past
    disableRegionSelection();
}

/**
 * @param {vscode.ExtensionContext} context
 */
function setup(context) {
    // toggle region selection
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionToggle', toggleRegionSelection)
    );

    // disable region selection.
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionDisable', disableRegionSelection)
    );

    // cut
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionClipboardCutAction', cutRegionSelection)
    );

    // copy
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionClipboardCopyAction', copyRegionSelection)
    );

    // past
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionClipboardPasteAction', pastRegionSelection)
    );
}

module.exports = {
    setup
}
