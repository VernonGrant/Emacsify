const vscode = require('vscode');

let regionSelectionEnabled = false;

function _enableRegionSelectionMode() {
    regionSelectionEnabled = true;
    vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', true);
    vscode.window.setStatusBarMessage("Selection Mode: Enabled");
}

function _disableRegionSelectionMode() {
    regionSelectionEnabled = false;
    vscode.commands.executeCommand('setContext', 'emacsifyRegionSelectionMode', false);
    vscode.window.setStatusBarMessage("Selection Mode: Disabled");
}

/**
 * Used by the user to disable the region selection via ctrl+g
 * and other abort keybindings.
 *
 * @returns void
 */
function disableRegionSelection() {
    _disableRegionSelectionMode();
    vscode.commands.executeCommand('cancelSelection');
}

/**
 * Toggles the main region selection state holder between true and false.
 *
 * @returns void
 */
function toggleRegionSelection() {
    if (regionSelectionEnabled) {
        _disableRegionSelectionMode();
        vscode.commands.executeCommand('cancelSelection');
    } else {
        _enableRegionSelectionMode();
    }
}

/**
 * Performs the standard vscode cut command but in addition, it disables region
 * selection mode.
 *
 * @returns void
 */
function cutRegionSelection() {
    // if there is no region selection, disable and return.
    if (vscode.window.activeTextEditor.selection.isEmpty == true) {
        _disableRegionSelectionMode();
        return;
    }

    vscode.commands.executeCommand('editor.action.clipboardCutAction').then(() => {
        _disableRegionSelectionMode();
     });
}

/**
 * Performs the standard vscode copy command but in addition, it disables region
 * selection mode.
 *
 * @returns void
 */
function copyRegionSelection() {
    // if there is no region selection, disable and return.
    if (vscode.window.activeTextEditor.selection.isEmpty == true) {
        _disableRegionSelectionMode();
        return;
    }

    vscode.commands.executeCommand('editor.action.clipboardCopyAction').then(() => {
        _disableRegionSelectionMode();
        vscode.commands.executeCommand('cancelSelection');
    });
}

/**
 * Performs the standard vscode past command but in addition, it disables region
 * selection mode.
 *
 * @returns void
 */
function pastRegionSelection() {
    vscode.commands.executeCommand('editor.action.clipboardPasteAction').then(() => {
        _disableRegionSelectionMode();
    });
}

/**
 * Performs the standard backspace|deleteLeft command but in addition, it disables
 * region selection mode.
 *
 * @returns void
 */
function deleteRegionSelection() {
    vscode.commands.executeCommand('deleteLeft').then(() => {
        _disableRegionSelectionMode();
    });
}

function commentLineRegionSelection() {
    vscode.commands.executeCommand('editor.action.commentLine').then(() => {
        _disableRegionSelectionMode();
    });
}

function deleteAllRegionSelection() {
    vscode.commands.executeCommand('deleteAllRight').then(() => {
        _disableRegionSelectionMode();
    });
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
        vscode.commands.registerCommand('emacsify.regionSelectionClipboardCut', cutRegionSelection)
    );

    // copy
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionClipboardCopy', copyRegionSelection)
    );

    // past
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionClipboardPaste', pastRegionSelection)
    );

    // delete
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionDelete', deleteRegionSelection)
    );

    // comment
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionCommentLine', commentLineRegionSelection)
    );

    // delete all
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionDeleteAll', deleteAllRegionSelection)
    );
}

module.exports = {
    setup
}
