const vscode = require('vscode');

function capitalizeWordForward() {
    vscode.commands.executeCommand("cursorWordEndRight");
    vscode.commands.executeCommand("cursorWordStartLeft");
    vscode.commands.executeCommand("cursorRightSelect");
    vscode.commands.executeCommand("editor.action.transformToUppercase");
    vscode.commands.executeCommand("cursorWordEndRight");
}

function capitalizeWordBackward() {
    vscode.commands.executeCommand("cursorWordStartLeft");
    vscode.commands.executeCommand("cursorRightSelect");
    vscode.commands.executeCommand("editor.action.transformToUppercase");
    vscode.commands.executeCommand("cursorWordStartLeft");
}

function lowercaseWordForward() {
    vscode.commands.executeCommand("cursorWordEndRight");
    vscode.commands.executeCommand("cursorWordStartLeft");
    vscode.commands.executeCommand("cursorRightSelect");
    vscode.commands.executeCommand("editor.action.transformToLowercase");
    vscode.commands.executeCommand("cursorWordEndRight");
}

function lowercaseWordBackward() {
    vscode.commands.executeCommand("cursorWordStartLeft");
    vscode.commands.executeCommand("cursorRightSelect");
    vscode.commands.executeCommand("editor.action.transformToLowercase");
    vscode.commands.executeCommand("cursorWordStartLeft")
}

// join line with previous
function joinLineWithPrevious() {
    vscode.commands.executeCommand("cursorUp");
    vscode.commands.executeCommand("editor.action.joinLines");
}

/**
 * @param {vscode.ExtensionContext} context
 */
function setup(context) {
    // capitalize
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingCapitalizeWordForward', capitalizeWordForward)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingCapitalizeWordBackward', capitalizeWordBackward)
    );

    // lowercase
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingLowercaseWordForward', lowercaseWordForward)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingLowercaseWordBackward', lowercaseWordBackward)
    );

    // join lines
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingJoinLineWithPrevious', joinLineWithPrevious)
    );
}

module.exports = {
    setup
}
