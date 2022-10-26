
## Just testing Github public API
This test consists of a page with 2 major components: one to search data in the Github API and another to render the result.

### Demo
https://cesar-oliveira-web.vercel.app/

### What was used

- **React** - Because it's interface library I have more knowledge/experience.
- **Gatsby** - To generate static files and serve it as a SSG application. I choose this approach because it would be a simple page and I would like it to be fast.
- **TypeScript** - To type the code.
- **React Context** - To create a "store" and feed any component in application without cascade props manually.
- **React Hooks** - To be more simple and create a stateless environment.
- **SASS** - As a styles pre-processor.
- **react-hook-form** - To abstract form states for me. I could do it manually, but RHF it's a lightweight and very simple library, so worth it.
- **react-toastify** - To show the error message. Only because it's simple and pretty.
- **react-helmet** - To do some interactions in the browser tab.
- **Jest** - To run my tests pipeline and create some unit tests.
- **Testing Library** - To have more possibilities when testing the UI.
- **Cypress** - To create a E2E test
- **GitHub Actions** - To run the tests automatically when updating main or opening new PR.
- **Vercel** - To deploy and serve.

### Getting started

**Run:**
```javascript
yarn
yarn start
```
This will start application in development mode.

**Build and serve:**
```javascript
yarn build
yarn serve
```
This will generate static files and serve in a local server.

**Run the tests:**
The tests pipeline will be triggered automatically when you push the branch `main` in GitHub. But it's also possible to run them locally.

*Unit and component tests:*
```shellscript
yarn test:jest
```
*E2E test:*
```shellscript
test:cypress
```

***Extra**: Check the tests coverage:*
```shellscript
yarn coverage
```

**How to deploy new version:**
Just push in the branch `main`.
