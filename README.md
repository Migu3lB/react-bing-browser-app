# Web browser via Microsoft's Bing API

Application created from the template generated by [Create React App](https://github.com/facebook/create-react-app). It is an application that uses react to display in a simple interface, a search engine and returns the search results in a card component using boostrap styles. This app connects directly to the Bing API, through the Azure Bing Search service. 

## How to run it

Download or clone the repository and run the `npm install` command to install the dependencies. Then run the `npm start` command to start the app. Finally navigate to the url: http://localhost:3000/.

## Configuration of the subscription key.

As mentioned in the header of this document, searches are performed through the Bing API, to achieve this when executing the search it is necessary to provide the subscription key, which is provided from the Azure service. For practical purposes within this code there is a valid key to access the service in the free tier. However, if you need to change to your own, you need to update its value in the `subsKey` constant in the `WebBrowser.jsx` component.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Go and try the application in the following Link!

https://bing-browser-mb.azurewebsites.net/


