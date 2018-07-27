'use strict';

import * as vscode from 'vscode';

export class TabsToSpacesProvider implements vscode.CodeActionProvider {
    private static readonly title: string = 'Convert Indentation to Spaces';
    private static readonly command: string = 'editor.action.indentationToSpaces';
    private static readonly selector: vscode.DocumentSelector = { scheme: 'file' };
    private static readonly convertIndentationKind: vscode.CodeActionKind = vscode.CodeActionKind.Source.append('convertIndentationToSpaces');
    private static readonly metadata: vscode.CodeActionProviderMetadata = { providedCodeActionKinds: [TabsToSpacesProvider.convertIndentationKind]};

    public register(): vscode.Disposable {
        return vscode.languages.registerCodeActionsProvider(
            TabsToSpacesProvider.selector,
            this,
            TabsToSpacesProvider.metadata
        );
    }

    public provideCodeActions(document: vscode.TextDocument, _range: vscode.Range, _context: vscode.CodeActionContext, _token: vscode.CancellationToken): vscode.CodeAction[] {
        const action = new vscode.CodeAction(TabsToSpacesProvider.title, TabsToSpacesProvider.convertIndentationKind);
        action.command = {
            title: TabsToSpacesProvider.title,
            command: TabsToSpacesProvider.command,
            arguments: [document.fileName]
        };

        return [action];
    }
}