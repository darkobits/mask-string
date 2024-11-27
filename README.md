<p align="center">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://github.com/darkobits/mask-string/assets/441546/6f385550-ed9e-4933-87f7-f65c4ca11407"
      width="100%"
    >
    <img
      src="https://github.com/darkobits/mask-string/assets/441546/392e18ff-2a0c-46db-a2d3-5167d03bcb2b"
      width="100%"
    >
  </picture>
</p>
<p align="center">
  <a
    href="https://www.npmjs.com/package/@darkobits/mask-string"
  ><img
    src="https://img.shields.io/npm/v/@darkobits/mask-string.svg?style=flat-square"
  ></a>
  <a
    href="https://github.com/darkobits/mask-string/actions?query=workflow%3Aci"
  ><img
    src="https://img.shields.io/github/actions/workflow/status/darkobits/mask-string/ci.yml?style=flat-square"
  ></a>
  <a
    href="https://depfu.com/repos/github/darkobits/mask-string"
  ><img
    src="https://img.shields.io/depfu/darkobits/mask-string?style=flat-square"
  ></a>
  <a
    href="https://conventionalcommits.org"
  ><img
    src="https://img.shields.io/static/v1?label=commits&message=conventional&style=flat-square&color=398AFB"
  ></a>
  <a
    href="https://firstdonoharm.dev"
  ><img
    src="https://img.shields.io/static/v1?label=license&message=hippocratic&style=flat-square&color=753065"
  ></a>
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
