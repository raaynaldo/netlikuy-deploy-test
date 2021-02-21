# Deploy React to Netlify

## Step One: Login to Netlify

Click `New site from Git` on the home page after you are login.
![first-step](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/first-step.png)

## Step Two: Choose your git provider

Choose what git provider that you use. I am choosing Github in this step.
![second-step](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/second-step.png)

## Step Three: Choose your repository

Search and choose repository you want to deploy
![third-step](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/third-step.png)

## Step Four: Build options and deploy

- You can choose any branch from your repository instead of the `main` branch. 
- Type this `CI= npm run build` in the Build Command.
- Click `Deploy site`!
![fourh-step](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/fourth-step.png)

## Step Five: Change the site name (Optional)

- Go to `Site Settings`.
![site-name-first](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/site-name-first.png)
- Click `Site details` and `Change site name`.
![site-name-second](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/site-name-second.png)
- Change the name and save.
![site-name-third](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/site-name-third.png)

## React Router DOM Problem
```
Page Not Found
Looks like you're followed a broken link or entered a URL that doesn't exist on this site.
```
If you are using `react-router-dom` and you get this error message when you try reload the route page.
![error](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/error.png)

Create a `_redirects` file inside the `public` folder and copy this code
```
/* /index.html 200
```
![_redirects](https://raw.githubusercontent.com/raaynaldo/netlikuy-deploy-test/main/screen-shoot/redirects.png)

## Bonus: Set fetch baseURL dynamically (on Development or on Production)

Changing API baseURL whenever I deploy to the server is really painful because I always forget to do that. However, I found a trick to handle this problem. 

I am using [axios](https://github.com/axios/axios) for handling fetch-request and I set up this in the `index.js`
```js
// ./src/index.js
...

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // development URL
  axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_DEVELOPMENT}/api/v1`;
} else {
  // production URL
  axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_PRODUCTION}/api/v1`;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
```
What is `process.env.REACT_APP_API_SERVER_DEVELOPMENT` and `process.env.REACT_APP_API_SERVER_PRODUCTION`? I create `.env` to save the baseURL.
```
./src/.env
REACT_APP_API_SERVER_DEVELOPMENT=http://localhost:3001
REACT_APP_API_SERVER_PRODUCTION=https://herokuy-deploy-test.herokuapp.com
```

We are good to forget changing URL for production.

https://netlikuy-deploy-test.netlify.app/

