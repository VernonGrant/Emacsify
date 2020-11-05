# Change Log

All notable changes to this project will be documented in this file.

## [1.0.21] - 2020-11-05
- Cleaned up the Readme file.

## [1.0.20] - 2020-11-05
- Removed unneeded commands.

## [1.0.19] - 2020-11-05
- Removed keybinding (Alt+n) to move down by space blocks.
- Removed keybinding (Alt+p) to move up by space blocks in region selection mode.
- Removed keybinding (Alt+n) to move down by space blocks in region selection mode.

## [1.0.18] - 2020-04-05
- Updated readme regarding VSCode and OSX binding issues.
- Added keybinding (Alt+p) to move up by space blocks.
- Added keybinding (Alt+n) to move down by space blocks.
- Added keybinding (Alt+p) to move up by space blocks in region selection mode.
- Added keybinding (Alt+n) to move down by space blocks in region selection mode.
- Added VSCode related binding (Ctrl+c f) to toggle code folding.
- Added VSCode related binding (Ctrl+c d) to duplicate a line or region selection.
- Added command and key binding (alt+u) to uppercase word forward.
- Added command and key binding (alt+- alt+u) to uppercase word backward.

## [1.0.17] - 2020-03-30
- Added keybinding (Alt+<) to go to top of file in selection mode.
- Added keybinding (Alt+>) to go to bottom of file in selection mode.
- Added standard (Alt+<, Alt+>) to readme file.
- Added additional undo binding (Ctrl+x u).
- When commenting out an selected region, the selection now automatically disables.
- When killing a region selection with (Ctrl+k), it now automatically disables selection mode.

## [1.0.16] - 2020-03-18
- Corrected the (Ctrl+x <, Ctrl+x >) bindings.
- Changed (Ctrl+x b) so it only shows the open buffers.

## [1.0.15] - 2020-03-13
- Corrected region selection forward movement via (Alt+f).

## [1.0.14] - 2020-03-13
- Corrected forward movement via (Alt+f).

## [1.0.13] - 2020-03-11
- The motion commands (Alt+f, Alt+b) has been fixed and now behaves very simulator to emacs.
- The motion commands for region selection mode has been updated to match their new behavior.
- The editing commands (Alt+c, Alt+l) including their negatives (Alt+-) has been corrected.
- Added keybinding (Ctrl+x left) to switch to previous buffer (in group).
- Added keybinding (Ctrl+x ,) to switch to previous buffer (in group).
- Added keybinding (Ctrl+x right) to switch to next buffer (in group).
- Added keybinding (Ctrl+x .) to switch to next buffer (in group).

## [1.0.12] - 2020-03-08
- Region selection can now be disabled with both (ctrl+space) and (ctrl+g).
- Commands that need to be called in series now make use of async and await and some callback nesting.
- Region selection command functions has been restructured.
- Added some pointless comments to the codebase.
- Made some readme changes.

## [1.0.11] - 2020-03-06
- Added keybinding (Alt+.) to find a tag (a definition).
- Added keybinding (Alt+- Alt+.) to go/peek references.
- Added keybinding (Alt+,) to go back.
- When creating a vertical split, the cursor now go's back to previous editor group, just like in emacs.

## [1.0.10] - 2020-03-05
- Added keybinding (Alt+^)/(Shift+Alt+6) to join line with previous
- Added keybinding (Alt+- Altx+^)/(Shift+Alt+6) to join line with next

## [1.0.9] - 2020-03-05
- Added keybinding (Alt+<)/(Shift+Alt+,) to go to page top.
- Added keybinding (Altx+>)/(Shift+Alt+.) to go to page bottom.

## [1.0.8] - 2020-03-05
- Region selection now preforms an delete instead of cut when backspace is pressed.
- Region selection cut, copy will only function if there is an selection range.
- Added keybinding (Alt+tab) to trigger suggestions.
- Added keybinding (Alt+tab) to trigger suggestions details.
- Added keybinding (Ctrl+n) to navigate to next suggestion.
- Added keybinding (Ctrl+p) to navigate to prev suggestion.

## [1.0.7] - 2020-03-04
- Corrected region, copy command.

## [1.0.6] - 2020-03-04
- Corrected region, disable command.

## [1.0.5] - 2020-03-04
- Added back standard key bindings.
- Renamed region selection cancellation command.
- Moved commands into their own modules.
- Added command and key binding (alt+c) to capitalize word forward.
- Added command and key binding (alt+- alt+c) to capitalize word backward.
- Added command and key binding (alt+l) to lowercase word forward.
- Added command and key binding (alt+- alt+l) to lowercase word backward.

## [1.0.4] - 2020-03-03
- Mapped open buffer binding (ctrl+x b) to standard quick open command.
- Added temporary solution for (ctrl+l) scroll current line to center, top, bottom.

## [1.0.3] - 2020-03-03
- Region selection now automatically becomes disabled on selection delete.

## [1.0.2] - 2020-03-03
- Fixed window split navigation (ctrl+x o).
- Added basic search key bindings.
- Make readme warning more clear.

## [1.0.1] - 2020-03-03
- Corrected region selection cut, copy and past commands.

## [1.0.0] - 2020-03-03
- Initial Release
