# Emacsify

An Emacs keymap and configuration for Visual Studio Code. This extension is still
in active development and **not production ready**, so use at own risk!

Please feel free to recommend keybindings, features or report bugs at the following link:
[Repository Issues](https://github.com/VernonGrant/Emacsify/issues)

## Current Key Bindings

### Motion

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+a`                  | ✓                   | go to line beginning
`Ctrl+e`                  | ✓                   | go to line end
`Alt+m`                   | ✓                   | back to indentation
`Ctrl+p`                  | ✓                   | line up
`Ctrl+n`                  | ✓                   | line down
`Ctrl+f`                  | ✓                   | character forward
`Ctrl+b`                  | ✓                   | character backward
`Alt+f`                   | ✓                   | go to end of word
`Alt+b`                   | ✓                   | go to start of word
`Alt+a`                   |                     | go one sentence backward
`Alt+e`                   |                     | go one sentence forward
`Alt+{`                   |                     | go one paragraph backward
`Alt+}`                   |                     | go one paragraph forward
`Alt+Shift+<`             |                     | go to buffer beginning
`Alt+Shift+>`             |                     | go to buffer end
`Ctrl+x [`                | ✓                   | go to page top
`Ctrl+x ]`                | ✓                   | go to page bottom
`Alt+v`                   | ✓                   | scroll to next screen
`Ctrl+v`                  | ✓                   | scroll to previous screen
`Ctrl+l`                  | Partial             | scroll current line to center, top, bottom
`Alt+g g`                 | ✓                   | goto line

### Killing and Deleting

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+d`                  | ✓                   | delete character forward.
`Ctrl+- Ctrl+d`           | ✓                   | delete character backward.
`backspace`               | ✓                   | delete character backward.
`Alt+d`                   | ✓                   | delete word forward.
`Alt+- Alt+d`             | ✓                   | delete word backward.
`Ctrl+k`                  | ✓                   | delete rest of line forward.
`Ctrl+- Ctrl+k`           | ✓                   | delete rest of line backward.
`Ctrl+w`                  | ✓                   | cut the selected region.
`Alt+w`                   | ✓                   | copy the selected region.
`Alt+k`                   |                     | delete sentence forward.
`Alt+- Alt+k`             |                     | delete sentence backward.

### Incremental Search
Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+s`                  |                     | search forward
`Ctrl+r`                  |                     | search backward
`Ctrl+Alt+s`              |                     | regular expression search
`Ctrl+Alt+r`              |                     | reverse regular expression search
`Alt+p`                   |                     | select previous search string
`Alt+n`                   |                     | select next later search string
`enter`                   |                     | exit incremental search
`delete`                  |                     | undo effect of last character
`Ctrl+g`                  | ✓                   | abort current search

### Editing

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Alt+;`                   | ✓                   | comment/toggle comment

### Selection

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+space`              | ✓                   | start region selection.

### Files

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+x Ctrl+f`           | ✓                   | open file
`Ctrl+x Ctrl+s`           | ✓                   | save file
`Ctrl+x s`                | ✓                   | save all files
`Ctrl+x Ctrl+w`           | ✓                   | save as new file
`Ctrl+x i`                |                     | insert contents of a different file into the current file
`Ctrl+x Ctrl+v`           |                     | replace this file with the file you really want

### Buffers

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+x b`                | ✓                   | select a new buffer
`Ctrl+x k`                | ✓                   | kill a buffer
`Ctrl+x Ctrl+b`           |                     | list all buffers

### Workspace Actions

Key                       | Implemented         | Description
------------------------- |---------------------| -------------------------
`Ctrl+g`                  | ✓                   | abort or escape things
`Alt+x`                   | ✓                   | show commands
`Ctrl+x 1`                | ✓                   | close other windows
`Ctrl+x 2`                | ✓                   | split window above
`Ctrl+x 0`                | ✓                   | delete this window
`Ctrl+x 3`                | ✓                   | split window, side by side
`Ctrl+Alt+v`              |                     | scroll other window
`Ctrl+x o`                | ✓                   | switch cursor to another window
