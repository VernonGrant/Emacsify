const vscode = require('vscode');

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
 * @param {vscode.ExtensionContext} context
 */
function setup(context) {
    // toggle region selection
    context.subscriptions.push(
        vscode.commands.registerCommand('emacsify.motionScrollCenterTopBottom', scrollCenterTopBottom)
    );
}

module.exports = {
    setup
}
