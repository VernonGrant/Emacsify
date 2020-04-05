const vscode = require('vscode');

async function capitalizeWordForward() {
    await vscode.commands.executeCommand("cursorWordEndRight");
    await vscode.commands.executeCommand("cursorWordStartLeftSelect");
    await vscode.commands.executeCommand("editor.action.transformToLowercase");
    await vscode.commands.executeCommand("cancelSelection");
    await vscode.commands.executeCommand("cursorRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
    await vscode.commands.executeCommand("cursorWordStartRight");
}

async function capitalizeWordBackward() {
    await vscode.commands.executeCommand("cursorWordLeft");
    await vscode.commands.executeCommand("cursorWordStartRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToLowercase");
    await vscode.commands.executeCommand("cursorWordStartLeft");
    await vscode.commands.executeCommand("cursorRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
    await vscode.commands.executeCommand("cursorWordStartLeft");
}

async function lowercaseWordForward() {
    await vscode.commands.executeCommand("cursorWordEndRight");
    await vscode.commands.executeCommand("cursorWordStartLeftSelect");
    await vscode.commands.executeCommand("editor.action.transformToLowercase");
    await vscode.commands.executeCommand("cancelSelection");
    await vscode.commands.executeCommand("cursorWordStartRight");
}

async function lowercaseWordBackward() {
    await vscode.commands.executeCommand("cursorWordLeft");
    await vscode.commands.executeCommand("cursorWordStartRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToLowercase");
    await vscode.commands.executeCommand("cursorWordStartLeft");
}

// join line with previous
function joinLineWithPrevious() {
    vscode.commands.executeCommand("cursorUp").then(() => {
        vscode.commands.executeCommand("editor.action.joinLines");
    });
}

/**
 * There is a bug and these keys can not be bound.
 * @see https://github.com/microsoft/vscode/issues/41024
 * @see https://apple.stackexchange.com/questions/53417/how-to-disable-the-special-characters-shortcut-cmdoptiont-in-os-x-lion
 */
async function uppercaseWordForward() {
    await vscode.commands.executeCommand("cursorWordEndRight");
    await vscode.commands.executeCommand("cursorWordStartLeftSelect");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
    await vscode.commands.executeCommand("cancelSelection");
    await vscode.commands.executeCommand("cursorWordStartRight");
}

async function uppercaseWordBackward() {
    await vscode.commands.executeCommand("cursorWordLeft");
    await vscode.commands.executeCommand("cursorWordStartRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
    await vscode.commands.executeCommand("cursorWordStartLeft");
}

/**
 * @param {vscode.ExtensionContext} context
 */
function setup(context) {
    // uppercase
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingUppercaseWordForward', uppercaseWordForward)
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.editingUppercaseWordBackward', uppercaseWordBackward)
    );

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
