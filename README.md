# useCall React hook

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/use-call.svg
[npm-url]: https://www.npmjs.com/package/use-call
[downloads-image]: https://img.shields.io/npm/dw/use-call.svg
[issues-image]: https://img.shields.io/github/issues/doasync/use-call.svg
[issues-url]: https://github.com/doasync/use-call/issues
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

This package is about calling functions in React components

## Installation

```bash
npm install use-call
```
or
```bash
yarn add use-call
```

## Usage

#### `useCall`

```js
import { useCall } from 'use-call'
```

Call a function lazily with arguments and just get cached result on next renders

It takes a function and arguments: `const useCall = (fn, ...args) =>`

```js
const defaultValues = useCall(getDefaultValues)
const three = useCall(sum, 1, 2) // fn, ...args
const companyPromise = useCall(fetchCompany, { companyId: 102 }) // payload
```

#### `useAsyncCall`

```js
import { useAsyncCall } from 'use-call'
```

Call an async function and handle promise. Returns the following array: `[result, error, pending]`

```js
const [company] = useAsyncCall(fetchCompany, { companyId: 234 })
const [user, userError, userLoading] = useAsyncCall(fetchUser, 120) // id
```

## Useful packages

`usePromise` hook is used to handle promises in `useAsyncCall`

See docs: https://github.com/doasync/use-promise

```js
const [data, dataError, loading] = usePromise(fetchDataPromise)
```

---

Use `once-only` package to create a function to be called once

See docs: https://github.com/doasync/once-only

```js
const fetchUsersOnce = onceOnly(fetchUsers) // not in render
const usersPromise = useCall(fetchUsersOnce, 234)
```

### Tip

If you found this hook useful, please star this package on [GitHub](https://github.com/doasync/use-call) ★

### Author
@doasync
