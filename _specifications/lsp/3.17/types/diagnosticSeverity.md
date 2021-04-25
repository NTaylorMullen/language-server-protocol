---
layout: types317
---

#### <a href="#diagnosticSeverity" name="diagnosticSeverity" class="anchor"> DiagnosticSeverity </a>

The protocol currently supports the following diagnostic severities and tags:

```typescript
export namespace DiagnosticSeverity {
	/**
	 * Reports an error.
	 */
	export const Error: 1 = 1;
	/**
	 * Reports a warning.
	 */
	export const Warning: 2 = 2;
	/**
	 * Reports an information.
	 */
	export const Information: 3 = 3;
	/**
	 * Reports a hint.
	 */
	export const Hint: 4 = 4;
}

export type DiagnosticSeverity = 1 | 2 | 3 | 4;