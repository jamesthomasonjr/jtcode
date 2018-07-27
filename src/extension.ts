'use strict';

import * as vscode from 'vscode';
import { TabsToSpacesProvider } from './TabsToSpaces/TabsToSpacesProvider';

export async function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push((new TabsToSpacesProvider).register());
}

export function deactivate() {
}