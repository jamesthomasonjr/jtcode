# jtcode
My personal extension-level vscode configuration

## Features
- "source.convertIndentationToSpaces" code action for use with "editor.codeActionsOnSave"

## Installation
Replace `.vscode` with `.vscode-insiders` or `.vscode-oss` as appropriate
```bash
git clone git@github.com:jamesthomasonjr/jtcode.git & \
cd jtcode & \
npm install & \
npm run compile & \
ln -s $(PWD) ~/.vscode/extensions/
```

## Useful VSCode snippets
- `defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool false`
