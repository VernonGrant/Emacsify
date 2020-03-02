// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// region selection
let regionSelectionModeState = false;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    // /\/\ TODO | IMPORTANCE = 5 | CATEGORY = Software Design
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // Move commands into there own respective modules

    // /\/\ TODO | IMPORTANCE = 5 | CATEGORY = Software Design
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // Move region selection mode to it's own module.

    // Temp solution for emacs marking system.
    var regionSelectionToggle = vscode.commands.registerCommand('emacsify.regionSelectionToggle', function() {
        switch (regionSelectionModeState) {
            case false:
                regionSelectionModeState = true;
                vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', true);
                vscode.window.setStatusBarMessage("Selection Mode: Enabled");
                break;
            case true:
                // clear selection
                let position = vscode.window.activeTextEditor.selection.active;
                vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);

                // disable region selection
                regionSelectionModeState = false;
                vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
                vscode.window.setStatusBarMessage("Selection Mode: Disabled");
                break;
        }
    });
    context.subscriptions.push(regionSelectionToggle);

    // Cancel region selection.
    var regionSelectionCancel = vscode.commands.registerCommand('emacsify.regionSelectionCancel', function() {

        // clear selection
        let position = vscode.window.activeTextEditor.selection.active;
        vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);

        // disable region selection
        regionSelectionModeState = false;
        vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
        vscode.window.setStatusBarMessage("Selection Mode: Disabled");
    });
    context.subscriptions.push(regionSelectionCancel);

    // Region selection cut
    var regionSelectionClipboardCutAction = vscode.commands.registerCommand('emacsify.regionSelectionClipboardCutAction', function() {
        // perform cut
        vscode.commands.executeCommand('editor.action.clipboardCutAction');

        // clear selection
        let position = vscode.window.activeTextEditor.selection.active;
        vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);

        // disable region selection
        regionSelectionModeState = false;
        vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
        vscode.window.setStatusBarMessage("Selection Mode: Disabled");
    });
    context.subscriptions.push(regionSelectionClipboardCutAction);

    // Region selection Past
    var regionSelectionClipboardPasteAction = vscode.commands.registerCommand('emacsify.regionSelectionClipboardPasteAction', function() {
        // clear selection
        let position = vscode.window.activeTextEditor.selection.active;
        vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);

        // perform past
        vscode.commands.executeCommand('editor.action.clipboardPasteAction');

        // disable region selection
        regionSelectionModeState = false;
        vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
        vscode.window.setStatusBarMessage("Selection Mode: Disabled");
    });
    context.subscriptions.push(regionSelectionClipboardPasteAction);


    // Region selection Copy
    var regionSelectionClipboardCopyAction = vscode.commands.registerCommand('emacsify.regionSelectionClipboardCopyAction', function() {
        // perform copy
        vscode.commands.executeCommand('editor.action.clipboardCopyAction');

        // clear selection
        let position = vscode.window.activeTextEditor.selection.active;
        vscode.window.activeTextEditor.selection = new vscode.Selection(position, position);

        // disable region selection
        regionSelectionModeState = false;
        vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
        vscode.window.setStatusBarMessage("Selection Mode: Disabled");
    });
    context.subscriptions.push(regionSelectionClipboardCopyAction);


    // /\/\ TODO | IMPORTANCE = 5 | CATEGORY = Feature
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    // Extend this command to support the default emacs behaviour

    // Scroll window relative to cursor position to the center, top and bottom.
    let motionScrollCenterTopBottom = vscode.commands.registerCommand('emacsify.motionScrollCenterTopBottom', function () {
        let cursorLineNumber = vscode.window.activeTextEditor.selection.start.line;

        vscode.commands.executeCommand("revealLine", {
            lineNumber: cursorLineNumber,
            at: "center"
        });
    });
    context.subscriptions.push(motionScrollCenterTopBottom);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}
