##How to Run Development Build
1. Make sure you have Node v8.5.0 installed (confirmed working with v6.9.1 and later). If you do not currently have it installed, I recommend using a version manager like [nvm](https://github.com/creationix/nvm).
2. Clone the project locally.
3. In a terminal, navigate to `receiptacle/` and run `npm install` to install any package dependencies.
4. To configure Twitter OAuth you will need to create a file named config.js in this directory. The file should contain the export below, replacing the asterisks with the API key for a twitter app. See [this post](https://medium.com/@robince885/how-to-do-twitter-authentication-with-react-and-restful-api-e525f30c62bb) for more information. (**note\:** login is still definitely a WIP)
    
        module.exports = {
             "config": {
               "twitter-api-key" : "***************"
             }
        }
   
5. Run `npm start` to create a development build.
6. You can view the project by navigating to `http://localhost:3000/` in your browser.
##Boilerplate Info
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
