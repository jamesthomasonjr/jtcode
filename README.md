# jtcode
My personal extension-level vscode configuration

## Features
- "source.convertIndentationToSpaces" code action for use with "editor.codeActionsOnSave"

## Installation
```bash
git clone git@github.com:jamesthomasonjr/jtcode.git
cd jtcode
npm install
npm run compile
# use ~/.vscode-insiders or ~/.vscode-oss as appropriate
ln -s $(PWD) ~/.vscode/extensions/
```

## Useful VSCode snippets
- `defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false`
