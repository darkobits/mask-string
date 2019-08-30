<a href="#top" id="top">
  <img src="https://user-images.githubusercontent.com/441546/61192483-779c0000-a669-11e9-8b41-928707358f37.png" style="max-width: 100%;">
</a>
<p align="center">
  <a href="https://www.npmjs.com/package/@darkobits/mask-string"><img src="https://img.shields.io/npm/v/@darkobits/mask-string.svg?style=flat-square"></a>
  <a href="https://github.com/darkobits/mask-string/actions"><img src="https://img.shields.io/endpoint?url=https://aws.frontlawn.net/ga-shields/darkobits/mask-string&style=flat-square"></a>
  <a href="https://www.codacy.com/app/darkobits/mask-string"><img src="https://img.shields.io/codacy/coverage/62b8c910263441e09aaed24186855891.svg?style=flat-square"></a>
  <a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/conventional%20commits-1.0.0-FB5E85.svg?style=flat-square"></a>
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

const str = 'Twas bryllyg, and ye slythy toves did gyre and gymble in ye wabe.';
const patterns = [/and/, /gy/];
const masked = mask(patterns, str, '#');
// => 'Twas bryllyg, ### ye slythy toves did ##re ### ##mble in ye wabe.'
```

### `maskToken`

This package additionally exports `maskToken`, which has the following signature:

```ts
maskToken(str: string, maskChar = '*'): string
```

This function accepts a string and returns a string of the same length consisting entirely of the provided mask character.

**Example:**

```ts
import {maskToken} from '@darkobits/mask-string';

maskToken('foo') // => '***'
maskToken('bar', '#') // => '###'
```

## &nbsp;
<p align="center">
  <br>
  <img width="24" height="24" src="https://cloud.githubusercontent.com/assets/441546/25318539/db2f4cf2-2845-11e7-8e10-ef97d91cd538.png">
</p>
