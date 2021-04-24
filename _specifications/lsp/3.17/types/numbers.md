#### <a href="#number" name="number" class="anchor"> Numbers </a>

The protocol use the following definitions for integers, unsigned integers and decimal numbers:

```typescript
/**
 * Defines an integer number in the range of -2^31 to 2^31 - 1.
 */
export type integer = number;
```

```typescript
/**
 * Defines an unsigned integer number in the range of 0 to 2^31 - 1.
 */
export type uinteger = number;
```

```typescript
/**
 * Defines a decimal number. Since decimal numbers are very
 * rare in the language server specification we denote the
 * exact range with every decimal using the mathematics
 * interval notation (e.g. [0, 1] denotes all decimals d with
 * 0 <= d <= 1.
 */
export type decimal = number;
```