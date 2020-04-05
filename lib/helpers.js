const vscode = require('vscode');

function getEmptyLineNumberAbove() {
    const activeEditor = vscode.window.activeTextEditor;
    const document = activeEditor.document
    var line = activeEditor.selection.active.line
    var min = 0
    while (line > min && !document.lineAt(--line).isEmptyOrWhitespace) {}

    return line;
}

function getEmptyLineNumberBelow() {
    const activeEditor = vscode.window.activeTextEditor;
    const document = activeEditor.document
    var line = activeEditor.selection.active.line
    var max = document.lineCount - 1
    while (line < max && !document.lineAt(++line).isEmptyOrWhitespace) {}

    return line;
}

module.exports = {
    getEmptyLineNumberBelow,
    getEmptyLineNumberAbove
}
