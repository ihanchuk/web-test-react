import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reactToWebComponent from "react-to-webcomponent";

class WebComponentApp extends React.Component {
    render() {
      return <App />;
    }
  }
  
  
  customElements.define("web-app", reactToWebComponent(WebComponentApp, React, ReactDOM) );
