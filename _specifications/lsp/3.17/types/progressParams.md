---
layout: types317
---

#### <a href="#progressParams" name="progressParams" class="anchor"> ProgressParams </a>

```typescript
type ProgressToken = integer | string;

interface ProgressParams<T> {
	/**
	 * The progress token provided by the client or server.
	 */
	token: ProgressToken;

	/**
	 * The progress data.
	 */
	value: T;
}
```