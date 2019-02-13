# useCall React hook

[![NPM Version][npm-image]][npm-url] ![NPM Downloads][downloads-image] [![GitHub issues][issues-image]][issues-url] [![Telegram][telegram-image]][telegram-url]

[npm-image]: https://img.shields.io/npm/v/use-call.svg
[npm-url]: https://www.npmjs.com/package/use-call
[downloads-image]: https://img.shields.io/npm/dw/use-call.svg
[issues-image]: https://img.shields.io/github/issues/doasync/use-call.svg
[issues-url]: https://github.com/doasync/use-call/issues
[telegram-image]: http://i.imgur.com/WANXk3d.png
[telegram-url]: https://t.me/doasync

### Installation

```bash
npm install use-call
```
or
```bash
yarn add use-call
```

### Usage

```js

  // Sync
  const defaultValues = useCall(getDefaultValues)
  const three = useCall(sum, 1, 2) // fn, ...args
  const companyPromise = useCall(fetchCompany, { companyId: 102 }) // payload

  // Async
  const [company] = useAsyncCall(fetchCompany, { companyId: 234 })
  const [user, userError, userLoading] = useAsyncCall(fetchUser, 120) // id

  // Call once
  const fetchUsersOnce = once(fetchUsers) // not in render
  const usersPromise = useCall(fetchUsersOnce, 234)
  const [users] = useAsyncCall(fetchUsersOnce, { userId: 234 })
```

### Author
@doasync
