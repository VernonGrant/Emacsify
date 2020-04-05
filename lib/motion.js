const vscode = require('vscode');
const helpers = require('./helpers');

/**
 * Checks if the provided line number is within the expected range.
 *
 * @param {number} lineNumber The actual line number.
 * @param {number} expectedLineNumber The line number we expect it to be on.
 * @param {number} play The amount of play room up and down from the expected line number.
 */
function isLineNumberWithinRange(lineNumber, expectedLineNumber, play) {
    if (lineNumber == expectedLineNumber) {
        return true;
    }

    if (lineNumber == (expectedLineNumber - play)) {
        return true;
    }

    if (lineNumber == (expectedLineNumber + play)) {
        return true;
    }

    return false;
}

/**
 * Allows you to cycle the current line between the center, top and bottom
 * of the view port.
 *
 * If the current line is already in the center it moves it to the top.
 * If the current line is already at the top it moves to the bottom.
 * if the current line is at the bottom it moves back to the center.
 *
 * Only works if there's enough vertical room (code) available to perform the
 * movement of the line.
 */
function scrollCenterTopBottom() {
    let cursorLineNumber = vscode.window.activeTextEditor.selection.start.line;
    let visibleRange = vscode.window.activeTextEditor.visibleRanges;

    if (visibleRange.length > 0) {

        let startingLineNumber = visibleRange[0].start.line;
        let endingLineNumber = visibleRange[0].end.line;
        let centerLineNumber = startingLineNumber + Math.floor((endingLineNumber - startingLineNumber)/2);

        // is top
        if (isLineNumberWithinRange(cursorLineNumber, startingLineNumber, 1)) {
            vscode.commands.executeCommand("revealLine", {
                lineNumber: cursorLineNumber,
                at: "bottom",
            });
        }

        // is bottom
        if (isLineNumberWithinRange(cursorLineNumber, endingLineNumber, 1)) {
            vscode.commands.executeCommand("revealLine", {
                lineNumber: cursorLineNumber,
                at: "center"
            });
        }

        // is center
        if (isLineNumberWithinRange(cursorLineNumber, centerLineNumber, 1)) {
            vscode.commands.executeCommand("revealLine", {
                lineNumber: cursorLineNumber,
                at: "top"
            });
        }

        // is center
        if (isLineNumberWithinRange(cursorLineNumber, startingLineNumber, 1) == false &&
            isLineNumberWithinRange(cursorLineNumber, endingLineNumber, 1) == false &&
            isLineNumberWithinRange(cursorLineNumber, centerLineNumber, 1) == false ) {
            vscode.commands.executeCommand("revealLine", {
                lineNumber: cursorLineNumber,
                at: "center"
            });
        }
    }
}

/**
 * There is a bug and these keys can not be bound.
 * @see https://github.com/microsoft/vscode/issues/41024
 * @see https://apple.stackexchange.com/questions/53417/how-to-disable-the-special-characters-shortcut-cmdoptiont-in-os-x-lion
 */
async function moveUpSpaceBlock() {
    const activeEditor = vscode.window.activeTextEditor;
    const line = helpers.getEmptyLineNumberAbove();

    let range = activeEditor.document.lineAt(line).range;
    activeEditor.selection =  new vscode.Selection(range.start, range.end);
    activeEditor.revealRange(range);

    await vscode.commands.executeCommand("cursorMove", {
        to: 'up',
        by: 'line',
        value: 1
    });
}

async function moveDownSpaceBlock() {
    const activeEditor = vscode.window.activeTextEditor;
    const line = helpers.getEmptyLineNumberBelow();

    let range = activeEditor.document.lineAt(line).range;
    activeEditor.selection =  new vscode.Selection(range.start, range.end);
    activeEditor.revealRange(range);

    await vscode.commands.executeCommand("cursorMove", {
        to: 'down',
        by: 'line',
        value: 1
    });
}

/**
 * @param {vscode.ExtensionContext} context
 */
function setup(context) {
    // toggle region selection
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.motionScrollCenterTopBottom', scrollCenterTopBottom)
    );

    // move up multiple lines
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.moveUpSpaceBlock', moveUpSpaceBlock)
    );

    // move down multiple lines
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.moveDownSpaceBlock', moveDownSpaceBlock)
    );
}

module.exports = {
    setup
}
