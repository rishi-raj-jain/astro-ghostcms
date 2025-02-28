---
title: Integration Mode - Manual Install
description: Integration Mode - Manual Install
---

## Install

```sh
npm i @matthiesenxyz/astro-ghostcms @matthiesenxyz/astro-ghostcms-theme-default
```

Then set your `astro.config.ts` to look like this:

```ts frame="code" title="astro.config.ts"
import { defineConfig } from "astro/config";
import GhostCMS from '@matthiesenxyz/astro-ghostcms';

// https://astro.build/config
export default defineConfig({
  site: "https://YOUR-DOMAIN-HERE.com"
  integrations: [GhostCMS()],
});
```


## Setup `.env` variables

```ansi frame="code" title=".env"
[1;31mCONTENT_API_KEY[0m=[33ma33da3965a3a9fb2c6b3f63b48
[1;31mCONTENT_API_URL[0m=[33mhttps://ghostdemo.matthiesen.xyz
```

***When you deploy your install dont forget to set the above ENVIRONMENT VARIABLES!***

## Created Routes

The routes are the same as a standard Ghost Blog so you can migrate to Astro easily.

| Route                 | Content                                   |
| --------------------- | ----------------------------------------- |
| `/`                   | Homepage with recents/features Blog Posts |
| `/404`                | 404 Page                                  |
| `/[slug]`             | Post or Page                              |
| `/author/[slug]`      | Author page with related posts            |
| `/authors`            | All the authors                           |
| `/tag[slug]`          | Tag page with related posts               |
| `/tags`               | All the tags                              |
| `/archives/[...page]` | All the posts, paginated                  |
| `/rss.xml`            | All the posts, in a FEED                  |
