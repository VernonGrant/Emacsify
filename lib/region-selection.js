const vscode = require('vscode');
const helpers = require('./helpers');

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
 * There is a bug and these keys can not be bound.
 * @see https://github.com/microsoft/vscode/issues/41024
 * @see https://apple.stackexchange.com/questions/53417/how-to-disable-the-special-characters-shortcut-cmdoptiont-in-os-x-lion
 */
async function moveUpSpaceBlockRegionSelection() {
    const activeEditor = vscode.window.activeTextEditor;
    const line = helpers.getEmptyLineNumberAbove();

    activeEditor.selection = new vscode.Selection(
        activeEditor.selection.anchor.line,
        activeEditor.selection.anchor.character,
        line,
        0,
    );

    await vscode.commands.executeCommand("revealLine", {
        lineNumber: activeEditor.selection.active.line,
        at: "center"
    });

    await vscode.commands.executeCommand("cursorMove", {
        to: 'up',
        by: 'line',
        value: 1,
        select: true
    });
}

async function moveDownSpaceBlockRegionSelection() {
    const activeEditor = vscode.window.activeTextEditor;
    const line = helpers.getEmptyLineNumberBelow();

    activeEditor.selection = new vscode.Selection(
        activeEditor.selection.anchor.line,
        activeEditor.selection.anchor.character,
        line,
        0,
    );

    await vscode.commands.executeCommand("revealLine", {
        lineNumber: activeEditor.selection.active.line,
        at: "center"
    });

    await vscode.commands.executeCommand("cursorMove", {
        to: 'down',
        by: 'line',
        value: 1,
        select: true
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

    // select up multiple lines
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionMoveUpSpaceBlock', moveUpSpaceBlockRegionSelection)
    );

    // select down multiple lines
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.regionSelectionMoveDownSpaceBlock', moveDownSpaceBlockRegionSelection)
    );
}

module.exports = {
    setup
}
