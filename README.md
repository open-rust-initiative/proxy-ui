# proxy-ui

## When should I use Static Generation?
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts and portfolios
- E-commerce product listings
- Help and documentation

## Deploy proxy-ui to DigitalOcean App Platform

### Deploying as a Static Site
To deploy the Next.js app to App Platform as a Static Site, you’ll use Next’s built-in commands to generate all of your HTML files. You first call next build, followed by next export. To make it easier, create a single npm run export command that calls both.

Open package.json in your editor and add the following export script to the file:

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "npm run build && next export -o _static"
}, 
```

The export command runs npm run build first, which in turn runs next build. It then runs next export. App Platform looks for HTML files in a _static folder, so this command uses the -o switch to create the folder that App Platform wants to see and populate it with the static files.

You can run this command locally and see the new _static folder.

```js
npm run export
```

The command generates the files:
```log
info  - Creating an optimized production build  
info  - Compiled successfully
info  - Collecting page data  
info  - Generating static pages (3/3)
info  - Finalizing page optimization  

Route (pages)                              Size     First Load JS
┌ ● /                                      50.4 kB         213 kB
├   /_app                                  0 B             162 kB
└ ○ /404                                   182 B           163 kB
+ First Load JS shared by all              174 kB
  ├ chunks/framework-7751730b10fa0f74.js   45.5 kB
  ├ chunks/main-39b800bdc8ff5043.js        31.1 kB
  ├ chunks/pages/_app-5197ef9369ce03a3.js  84.9 kB
  ├ chunks/webpack-59c5c889f52620d6.js     819 B
  └ css/d0ff0de31991b0e5.css               11.3 kB

```
You now have to commit your code to GitHub so that you can update your GitHub repo for deploying to App Platform.

First, add the _static folder to the .gitignore file so you don’t check it in. Open .gitignore in your editor and add these lines to the end:
```git
# static folder for DigitalOcean App Platform
_static
```

Save the file and return to your terminal.

Run the following command to add the changed files:
```git
git add -A
```

Create a commit:
```git
git commit -m "adding export command"
```
Push the code to GitHub:
```git
git push
```
Once the code is pushed, go into your DigitalOcean App Platform Dashboard and create a new app by pressing the **Create App** button.

Select the GitHub repository that contains your app and then press Next.

Choose the region you and your customers are closest to, and ensure that the main branch is selected. Select Autodeploy code changes to ensure that App Platform redploys your application whenever you push code changes to GitHub.

App Platform will detect that you have a Node.JS app. Change the type from Web Service to Static Site. Then change the build command to use the new export command you created by entering npm run export.

You have successfully deployed Next.js as a Static Site to App Platform.