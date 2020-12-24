import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainImageProvider, Shell } from './components';
import './index.css';
import { Home, BlogPost, About } from './modules';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Shell>
          <MainImageProvider>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/:slug" component={BlogPost} />
              <Route path="/" component={Home} />
            </Switch>
          </MainImageProvider>
        </Shell>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
