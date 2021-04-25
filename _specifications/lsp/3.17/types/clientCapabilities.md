---
layout: types317
---

#### <a href="#clientCapabilities" name="clientCapabilities" class="anchor"> ClientCapabilities </a>

`ClientCapabilities` define capabilities for dynamic registration, workspace and text document features the client supports. The `experimental` can be used to pass experimental capabilities under development. For future compatibility a `ClientCapabilities` object literal can have more properties set than currently defined. Servers receiving a `ClientCapabilities` object literal with unknown properties should ignore these properties. A missing property should be interpreted as an absence of the capability. If a missing property normally defines sub properties, all missing sub properties should be interpreted as an absence of the corresponding capability.

Client capabilities got introduced with version 3.0 of the protocol. They therefore only describe capabilities that got introduced in 3.x or later. Capabilities that existed in the 2.x version of the protocol are still mandatory for clients. Clients cannot opt out of providing them. So even if a client omits the `ClientCapabilities.textDocument.synchronization` it is still required that the client provides text document synchronization (e.g. open, changed and close notifications).

```typescript
interface ClientCapabilities {
	/**
	 * Workspace specific client capabilities.
	 */
	workspace?: {
		/**
		 * The client supports applying batch edits
		 * to the workspace by supporting the request
		 * 'workspace/applyEdit'
		 */
		applyEdit?: boolean;

		/**
		 * Capabilities specific to `WorkspaceEdit`s
		 */
		workspaceEdit?: WorkspaceEditClientCapabilities;

		/**
		 * Capabilities specific to the `workspace/didChangeConfiguration`
		 * notification.
		 */
		didChangeConfiguration?: DidChangeConfigurationClientCapabilities;

		/**
		 * Capabilities specific to the `workspace/didChangeWatchedFiles`
		 * notification.
		 */
		didChangeWatchedFiles?: DidChangeWatchedFilesClientCapabilities;

		/**
		 * Capabilities specific to the `workspace/symbol` request.
		 */
		symbol?: WorkspaceSymbolClientCapabilities;

		/**
		 * Capabilities specific to the `workspace/executeCommand` request.
		 */
		executeCommand?: ExecuteCommandClientCapabilities;

		/**
		 * The client has support for workspace folders.
		 *
		 * @since 3.6.0
		 */
		workspaceFolders?: boolean;

		/**
		 * The client supports `workspace/configuration` requests.
		 *
		 * @since 3.6.0
		 */
		configuration?: boolean;

		/**
		 * Capabilities specific to the semantic token requests scoped to the
		 * workspace.
		 *
		 * @since 3.16.0
		 */
		 semanticTokens?: SemanticTokensWorkspaceClientCapabilities;

		/**
		 * Capabilities specific to the code lens requests scoped to the
		 * workspace.
		 *
		 * @since 3.16.0
		 */
		codeLens?: CodeLensWorkspaceClientCapabilities;

		/**
		 * The client has support for file requests/notifications.
		 *
		 * @since 3.16.0
		 */
		fileOperations?: {
			/**
			 * Whether the client supports dynamic registration for file
			 * requests/notifications.
			 */
			dynamicRegistration?: boolean;

			/**
			 * The client has support for sending didCreateFiles notifications.
			 */
			didCreate?: boolean;

			/**
			 * The client has support for sending willCreateFiles requests.
			 */
			willCreate?: boolean;

			/**
			 * The client has support for sending didRenameFiles notifications.
			 */
			didRename?: boolean;

			/**
			 * The client has support for sending willRenameFiles requests.
			 */
			willRename?: boolean;

			/**
			 * The client has support for sending didDeleteFiles notifications.
			 */
			didDelete?: boolean;

			/**
			 * The client has support for sending willDeleteFiles requests.
			 */
			willDelete?: boolean;
		};
	};

	/**
	 * Text document specific client capabilities.
	 */
	textDocument?: TextDocumentClientCapabilities;

	/**
	 * Window specific client capabilities.
	 */
	window?: {
		/**
		 * Whether client supports handling progress notifications. If set
		 * servers are allowed to report in `workDoneProgress` property in the
		 * request specific server capabilities.
		 *
		 * @since 3.15.0
		 */
		workDoneProgress?: boolean;

		/**
		 * Capabilities specific to the showMessage request
		 *
		 * @since 3.16.0
		 */
		showMessage?: ShowMessageRequestClientCapabilities;

		/**
		 * Client capabilities for the show document request.
		 *
		 * @since 3.16.0
		 */
		showDocument?: ShowDocumentClientCapabilities;
	};

	/**
	 * General client capabilities.
	 *
	 * @since 3.16.0
	 */
	general?: {
		/**
		 * Client capability that signals how the client
		 * handles stale requests (e.g. a request
		 * for which the client will not process the response
		 * anymore since the information is outdated).
		 *
		 * @since 3.17.0
		 */
		staleRequestSupport?: {
			/**
			 * The client will actively cancel the request.
			 */
			cancel: boolean;

			/**
			 * The list of requests for which the client
			 * will retry the request if it receives a
			 * response with error code `ContentModified``
			 */
			 retryOnContentModified: string[];
		}

		/**
		 * Client capabilities specific to regular expressions.
		 *
		 * @since 3.16.0
		 */
		regularExpressions?: RegularExpressionsClientCapabilities;

		/**
		 * Client capabilities specific to the client's markdown parser.
		 *
		 * @since 3.16.0
		 */
		markdown?: MarkdownClientCapabilities;
	};

	/**
	 * Experimental client capabilities.
	 */
	experimental?: any;
}
```

#### <a href="#textDocumentClientCapabilities" name="textDocumentClientCapabilities" class="anchor"> TextDocumentClientCapabilities </a>

`TextDocumentClientCapabilities` define capabilities the editor / tool provides on text documents.

```typescript
/**
 * Text document specific client capabilities.
 */
export interface TextDocumentClientCapabilities {

	synchronization?: TextDocumentSyncClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/completion` request.
	 */
	completion?: CompletionClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/hover` request.
	 */
	hover?: HoverClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/signatureHelp` request.
	 */
	signatureHelp?: SignatureHelpClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/declaration` request.
	 *
	 * @since 3.14.0
	 */
	declaration?: DeclarationClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/definition` request.
	 */
	definition?: DefinitionClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/typeDefinition` request.
	 *
	 * @since 3.6.0
	 */
	typeDefinition?: TypeDefinitionClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/implementation` request.
	 *
	 * @since 3.6.0
	 */
	implementation?: ImplementationClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/references` request.
	 */
	references?: ReferenceClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/documentHighlight` request.
	 */
	documentHighlight?: DocumentHighlightClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/documentSymbol` request.
	 */
	documentSymbol?: DocumentSymbolClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/codeAction` request.
	 */
	codeAction?: CodeActionClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/codeLens` request.
	 */
	codeLens?: CodeLensClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/documentLink` request.
	 */
	documentLink?: DocumentLinkClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/documentColor` and the
	 * `textDocument/colorPresentation` request.
	 *
	 * @since 3.6.0
	 */
	colorProvider?: DocumentColorClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/formatting` request.
	 */
	formatting?: DocumentFormattingClientCapabilities

	/**
	 * Capabilities specific to the `textDocument/rangeFormatting` request.
	 */
	rangeFormatting?: DocumentRangeFormattingClientCapabilities;

	/** request.
	 * Capabilities specific to the `textDocument/onTypeFormatting` request.
	 */
	onTypeFormatting?: DocumentOnTypeFormattingClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/rename` request.
	 */
	rename?: RenameClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/publishDiagnostics`
	 * notification.
	 */
	publishDiagnostics?: PublishDiagnosticsClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/foldingRange` request.
	 *
	 * @since 3.10.0
	 */
	foldingRange?: FoldingRangeClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/selectionRange` request.
	 *
	 * @since 3.15.0
	 */
	selectionRange?: SelectionRangeClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/linkedEditingRange` request.
	 *
	 * @since 3.16.0
	 */
	linkedEditingRange?: LinkedEditingRangeClientCapabilities;

	/**
	 * Capabilities specific to the various call hierarchy requests.
	 *
	 * @since 3.16.0
	 */
	callHierarchy?: CallHierarchyClientCapabilities;

	/**
	 * Capabilities specific to the various semantic token requests.
	 *
	 * @since 3.16.0
	 */
	semanticTokens?: SemanticTokensClientCapabilities;

	/**
	 * Capabilities specific to the `textDocument/moniker` request.
	 *
	 * @since 3.16.0
	 */
	moniker?: MonikerClientCapabilities;
}
```