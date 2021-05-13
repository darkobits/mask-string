<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/102348696-1a3f6900-3f57-11eb-9184-bf0d192c606e.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/mask-string"><img src="https://img.shields.io/npm/v/@darkobits/mask-string.svg?style=flat-square"></a>
  <a href="https://github.com/darkobits/mask-string/actions?query=workflow%3ACI"><img src="https://img.shields.io/github/workflow/status/darkobits/mask-string/CI/master?style=flat-square"></a>
  <a href="https://app.codecov.io/gh/darkobits/mask-string/branch/master"><img src="https://img.shields.io/codecov/c/github/darkobits/mask-string/master?style=flat-square"></a>
  <a href="https://depfu.com/github/darkobits/mask-string"><img src="https://img.shields.io/depfu/darkobits/mask-string?style=flat-square"></a>
</p>

## Install

```
npm i @darkobits/mask-string
```

## Use

This package's default export is a function with the following signature:

```ts
mask(pattern: string | RegExp | Array<string | RegExp>, str: string, maskChar = '*'): string
```

**Example:**

```ts
import mask from '@darkobits/mask-string';

const str = 'Colorless green ideas sleep furiously.';
const masked = mask('green', str);
// => 'Colorless ***** ideas sleep furiously.'
```

```ts
import mask from '@darkobits/mask-string';

const str = 'Twas bryllyg, and ye slythy toves did gyre and gymble in ye wabe.';
const masked = mask([/and/g, /gy/g], str, '#');
// => 'Twas bryllyg, ### ye slythy toves did ##re ### ##mble in ye wabe.'
```

### `maskAll`

This package additionally exports a function `maskAll` which has the following signature:

```ts
maskAll(str: string, maskChar = '*'): string
```

This function accepts a string and returns a string of the same length consisting entirely of the provided mask character.

**Example:**

```ts
import { maskAll } from '@darkobits/mask-string';

maskAll('foo') // => '***'
maskAll('bar', '#') // => '###'
```

<br />
<a href="#top">
  <img src="https://user-images.githubusercontent.com/441546/102322726-5e6d4200-3f34-11eb-89f2-c31624ab7488.png" style="max-width: 100%;">
</a>
