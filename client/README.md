## Live Website

You can view the deployed website [here](https://react-rush-80301.web.app/). 

## Built using:

- **Front-end library:** React


## Getting Started

In the `/personal-portfolio` directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment

To deploy the changes, follow these steps:

1. **Login to Firebase:**

   ```sh
   firebase login
   ```

2. **Initialize Firebase:**

   ```sh
   firebase init
   ```

### During Initialization, Follow These Prompts:

1. **Are you ready to proceed? (Y/n)**  
   Type `Y` and press **Enter**.

2. **Select Firebase Hosting**  
   Choose **"( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"** and press **Space** to select it, then press **Enter**.

3. **What do you want to use as your public directory? (public)**  
   Type `build` and press **Enter**.

4. **Configure as a Single-Page App (rewrite all URLs to /index.html)?**  
   Type `N` and press **Enter** (since this is not a single-page application).

5. **Set up automatic builds and deploys with GitHub?**  
   Type `N` and press **Enter**.

6. **File `build/index.html` already exists. Overwrite?**  
   Type `yes` and press **Enter**.

3. **Build the project:**

   ```sh
   npm run build
   ```

4. **Deploy to Firebase:**
   ```sh
   firebase deploy
   ```
