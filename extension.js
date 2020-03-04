const vscode = require('vscode');

const regionSelection = require('./lib/region-selection');
const motion = require('./lib/motion');
const editing = require('./lib/editing');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    editing.setup(context);
    regionSelection.setup(context);
    motion.setup(context);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}
