New version of Loose-lips.
Svelte + Vite app that uses svelte-spa-router for routing & tailwindcss for styling. The layout functionality of svelte-kit is now implimented by defining placeholder elements with the slot functionality. (similar to "props.children" in React).

**Why use this over SvelteKit?**

- less intimidating iceberg of dependecies and configuration files
- It brings its own routing solution.
- better control over the application

* It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

Set up:

Clone repo: git clone
Change directory cd repo
Install dependencies: npm install

Dev:

Pull latest code from main branch: git pull
Create branch for issue:git checkout -b "branch-name"
Run the dev server to test code:npm run dev
Commit changes as you go along: git commit -am "commit-message"
Build app: npm run build
Commit message when you make a build: git commit -am "commit-message-build-bump"
Make a pull request
Merge into main branch
Delete old branch
Repeat

```js
// store.js
// An extremely simple external store
import { writable } from "svelte/store";
export default writable(0);
```
