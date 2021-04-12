export type RenderMode = 'gfm' | 'markdown';

// SECTION Endpoints

/**
 * @endpoint [POST](https://docs.github.com/en/rest/reference/markdown#render-a-markdown-document) `/markdown`
 */
export interface RenderMarkdownDocument {
	body: {
		/**
		 * The Markdown text to render in HTML.
		 */
		text: string;

		/**
		 * The rendering mode.
		 *
		 * @defaultValue `markdown`
		 */
		mode?: RenderMode;

		/**
		 * The repository context to use when creating references in `gfm` mode.
		 */
		context?: string;
	};

	response: never;
}

/**
 * You must send Markdown as plain text to this endpoint, rather than using JSON format. In raw
 * mode, GitHub Flavored Markdown is not supported and Markdown will be rendered in plain format
 * like a `README.md` file. Markdown content must be 400 KB or less.
 *
 * @endpoint [POST](https://docs.github.com/en/rest/reference/markdown#render-a-markdown-document-in-raw-mode) `/markdown/raw`
 */
export interface RenderMarkdownDocumentRaw {
	response: never;
}

// !SECTION
