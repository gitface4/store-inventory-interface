To run this application properly, the data feed from https://github.com/mathieugagne/shoe-store is needed.

From the _shoe-store_ directory, run the following command:
`websocketd --port=8080 ruby inventory.rb`

Then, from the _store-inventory-interface_ directory, run the following command:
`npm start`

*Overview:*
- The application is built with React
- Real-time inventory data is streamed directly from the WebSocket server to the React application
- To efficiently manage state and facilitate data sharing across multiple components, React Context API is used

*Features:*
- The Dashboard provides real-time updates on the most recent sales and an overview of the store-models that are running low on stock
- Alerts for low inventory are displayed, indicating which stores and models are running low
- The minimum inventory threshold for these alerts can be customized in the 'Settings' panel
- The app allows for inventory viewing categorized by 'Store'

![image](https://github.com/gitface4/store-inventory-interface/assets/139724361/e216eb41-1c92-4fb3-9114-3372ec322548)
