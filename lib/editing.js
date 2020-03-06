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
    vscode.commands.executeCommand("cursorWordStartLeft");
}

// join line with previous
function joinLineWithPrevious() {
    vscode.commands.executeCommand("cursorUp").then(function() {
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
