# Emacsify

An Emacs keymap and configuration for Visual Studio Code. Still in active development,
so use at your own risk! Welcoming all forms of help to make this extension more awesome!
Please feel free to summit any question or idea for the extension via [GitHub Issues](https://github.com/VernonGrant/Emacsify/issues/new).

Please feel free to recommend keybindings, features or report bugs at the following link:
[Repository Issues](https://github.com/VernonGrant/Emacsify/issues)

## Recommended Settings

For the best experience, please set the below values in your **settings.json**

```json
{
    "editor.cursorStyle": "block"
}
```

## Current Key Bindings

### Motion

Key        | Implemented | Description
-----------|-------------|-------------------------------------------
`Ctrl+a`   | ✓           | go to line beginning
`Ctrl+e`   | ✓           | go to line end
`Alt+m`    | ✓           | back to indentation
`Ctrl+p`   | ✓           | line up
`Ctrl+n`   | ✓           | line down
`Ctrl+f`   | ✓           | character forward
`Ctrl+b`   | ✓           | character backward
`Alt+f`    | ✓           | go to end of word
`Alt+b`    | ✓           | go to start of word
`Alt+a`    |             | go one sentence backward
`Alt+e`    |             | go one sentence forward
`Alt+{`    |             | go one paragraph backward
`Alt+}`    |             | go one paragraph forward
`Alt+<`    | ✓           | go to page top
`Alt+>`    | ✓           | go to page bottom
`Ctrl+x [` | ✓           | go to page top
`Ctrl+x ]` | ✓           | go to page bottom
`Alt+v`    | ✓           | scroll to next screen
`Ctrl+v`   | ✓           | scroll to previous screen
`Ctrl+l`   | ✓           | scroll current line to center, top, bottom
`Alt+g g`  | ✓           | goto line

### Killing and Deleting

Key             | Implemented | Description
----------------|-------------|------------------------------
`Ctrl+d`        | ✓           | delete character forward.
`Ctrl+- Ctrl+d` | ✓           | delete character backward.
`backspace`     | ✓           | delete character backward.
`Alt+d`         | ✓           | delete word forward.
`Alt+- Alt+d`   | ✓           | delete word backward.
`Ctrl+k`        | ✓           | delete rest of line forward.
`Ctrl+- Ctrl+k` | ✓           | delete rest of line backward.
`Ctrl+w`        | ✓           | cut the selected region.
`Alt+w`         | ✓           | copy the selected region.
`Alt+k`         |             | delete sentence forward.
`Alt+- Alt+k`   |             | delete sentence backward.

### Incremental Search

Key          | Implemented | Description
-------------|-------------|----------------------------------
`Ctrl+s`     | Partial     | search forward
`Ctrl+r`     |             | search backward
`Ctrl+Alt+s` |             | regular expression search
`Ctrl+Alt+r` |             | reverse regular expression search
`Alt+p`      |             | select previous search string
`Alt+n`      |             | select next later search string
`Enter`      | ✓           | exit incremental search
`Delete`     |             | undo effect of last character
`Ctrl+g`     | ✓           | abort current search

### Editing

Key           | Implemented  | Description
--------------|--------------|--------------------------
`Alt+;`       | ✓            | comment/toggle comment
`Ctrl+/`      | ✓            | undo
`Ctrl+x u`    | ✓            | undo
`Alt+c`       | ✓            | capitalize word forward
`Alt+- Alt+c` | ✓            | capitalize word backward
`Alt+l`       | ✓            | lowercase word forward
`Alt+- Alt+l` | ✓            | lowercase word backward
`Alt+u`       | ✓            | uppercase word forward
`Alt+- Alt+u` | ✓            | uppercase word backward
`Alt+tab`     | ✓            | trigger suggest (completions)
`Alt+tab`     | ✓ (addition) | show suggestion details
`Ctrl+n`      | ✓            | next suggestion
`Ctrl+p`      | ✓            | previous suggestion
`Alt+^`       | ✓            | join line with previous
`Alt+- Alt+^` | ✓            | join line with next
`Alt+.`       | ✓            | find a tag (a definition)
`Alt+- Alt+.` | ✓            | go/peek references
`Alt+,`       | ✓            | go back
`Alt+<`       | ✓            | go to top of file
`Alt+>`       | ✓            | go to bottom of file

### Selection

Key          | Implemented | Description
-------------|-------------|------------------------------------
`Ctrl+space` | ✓           | start region selection.
`Alt+<`      | ✓           | go to top of file with selection
`Alt+>`      | ✓           | go to bottom of file with selection

### Files

Key             | Implemented | Description
----------------|-------------|----------------------------------------------------------
`Ctrl+x Ctrl+f` | ✓           | open file
`Ctrl+x Ctrl+s` | ✓           | save file
`Ctrl+x s`      | ✓           | save all files
`Ctrl+x Ctrl+w` | ✓           | save as new file
`Ctrl+x i`      |             | insert contents of a different file into the current file
`Ctrl+x Ctrl+v` |             | replace this file with the file you really want

### Buffers

Key             | Implemented | Description
----------------|-------------|--------------------
`Ctrl+x b`      | ✓           | select a new buffer
`Ctrl+x k`      | ✓           | kill a buffer
`Ctrl+x Ctrl+b` |             | list all buffers

### Workspace Actions

Key            | Implemented  | Description
---------------|--------------|-------------------------------------
`Ctrl+g`       | ✓            | abort or escape things
`Ctrl+x left`  | ✓            | switch to previous buffer (in group)
`Ctrl+x right` | ✓            | switch to next buffer (in group)
`Ctrl+x ,`     | ✓ (addition) | switch to previous buffer (in group)
`Ctrl+x .`     | ✓ (addition) | switch to next buffer (in group)
`Alt+x`        | ✓            | show commands
`Ctrl+x 1`     | ✓            | close other windows
`Ctrl+x 2`     | ✓            | split window above
`Ctrl+x 0`     | ✓            | delete this window
`Ctrl+x 3`     | ✓            | split window, side by side
`Ctrl+x o`     | ✓            | switch cursor to another window
`Ctrl+Alt+v`   |              | scroll other window

## VSCode Related Bindings

Here's some custom keybindings that has been added, feel free to overwrite them if needed.

From the emacs manual: Don’t define C-c letter as a key in Lisp programs.
`Sequences consisting of C-c and a letter (either upper or lower case) are reserved for users;`

Key        | Description
-----------|-------------------------------------
`Ctrl+c f` | toggle fold.
`Ctrl+c d` | duplicate current line or selection.

## Next Up

- Complete I-Search implementation.
- Correct (C-x left, C-x right) binding.
- (C-x C-o) delete blank lines around point.
- (C-u) Would like to implement this functionality.
- Implement a better solution for list all buffers.

## Known Issues

### Text Transform Needs Work

The current text transform editing bindings does not fully reflect emacs's style and doesn't work very well in some edge cases. This will be fixed in the future. **HELP WANTED**

- `Alt+c`
- `Alt+- Alt+c`
- `Alt+l`
- `Alt+- Alt+l`
- `Alt+u`
- `Alt+- Alt+u`