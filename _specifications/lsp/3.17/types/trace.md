---
layout: types317
---

#### <a href="#traceValue" name="traceValue" class="anchor"> TraceValue </a>

A `TraceValue` represents the level of verbosity with which the server systematically reports its execution trace using [$/logTrace](#logTrace) notifications.
The initial trace value is set by the client at initialization and can be modified later using the [$/setTrace](#setTrace) notification.

```typescript
export type TraceValue = 'off' | 'message' | 'verbose';
```

#### <a href="#logTraceParams" name="logTraceParams" class="anchor"> LogTraceParams </a>

```typescript
interface LogTraceParams {
	/**
	 * The message to be logged.
	 */
	message: string;
	/**
	 * Additional information that can be computed if the `trace` configuration
	 * is set to `'verbose'`
	 */
	verbose?: string;
}
```

#### <a href="#setTraceParams" name="setTraceParams" class="anchor"> SetTraceParams </a>

```typescript
interface SetTraceParams {
	/**
	 * The new value that should be assigned to the trace setting.
	 */
	value: TraceValue;
}
```