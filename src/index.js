// Import necessary modules
import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM

// Import the main App component and other styles if needed
import './index.css';
import App from './App';

// Create a root element to render the application into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use ReactDOM.createRoot to render the main App component into the root element
root.render(
  // The main App component is wrapped with <React.StrictMode> for better development experience
  // React.StrictMode helps catch potential problems in your code and highlights them in development mode
  // It does not affect the production build, only development warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
