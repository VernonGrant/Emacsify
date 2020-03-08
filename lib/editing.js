const vscode = require('vscode');

async function capitalizeWordForward() {
    await vscode.commands.executeCommand("cursorWordEndRight");
    await vscode.commands.executeCommand("cursorWordStartLeft");
    await vscode.commands.executeCommand("cursorRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
    await vscode.commands.executeCommand("cursorWordEndRight");
}

async function capitalizeWordBackward() {
    await vscode.commands.executeCommand("cursorWordStartLeft");
    await vscode.commands.executeCommand("cursorRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToUppercase");
    await vscode.commands.executeCommand("cursorWordStartLeft");
}

async function lowercaseWordForward() {
    await vscode.commands.executeCommand("cursorWordEndRight");
    await vscode.commands.executeCommand("cursorWordStartLeft");
    await vscode.commands.executeCommand("cursorRightSelect");
    await vscode.commands.executeCommand("editor.action.transformToLowercase");
    await vscode.commands.executeCommand("cursorWordEndRight");
}

async function lowercaseWordBackward() {
    await vscode.commands.executeCommand("cursorWordStartLeft");
    await vscode.commands.executeCommand("cursorRightSelect");
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
 */
// function moveUpMultipleLines() {
//     vscode.commands.executeCommand("cursorMove", {
//         to: 'up',
//         by: 'line',
//         value: 5
//     });
// }
// function moveDownMultipleLines() {
//     vscode.commands.executeCommand("cursorMove", {
//         to: 'down',
//         by: 'line',
//         value: 5
//     });
// }

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
