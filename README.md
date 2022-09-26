# Description

This [progressive web app (PWA)](https://web.dev/progressive-web-apps) is the result of a coding challenge https://fetch-hiring.s3.amazonaws.com/frontend.html

## View the app

https://user-fetch.vercel.app/

> Note: Since it is a PWA, meaning it has an active [service worker](https://developer.chrome.com/docs/workbox/service-worker-overview/), you can install it on your computer if you wish.

## Run the app locally

Although you can easily view and interact with the PWA using [the above public link](https://user-fetch.vercel.app/), you can also run the app locally:

```bash
yarn install
yarn dev
```

To ensure proper linting and typescript rules have been followed:

```bash
yarn lint
yarn type-check
```

To run tests:

```bash
yarn test
```

## Appendix

Technologies used:

- [NextJS](https://nextjs.org/)
- [Service Worker](https://developer.chrome.com/docs/workbox/service-worker-overview/)
- [SWC](https://swc.rs/)
- Sharp image optimization

Run a Lighthouse test in Chrome to see app performance!