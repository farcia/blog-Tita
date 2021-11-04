import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Be Vietnam Web:100,300,400,500,600,700', 'sans-serif']
  }
});
ReactDom.render(<App />,document.getElementById('root'))