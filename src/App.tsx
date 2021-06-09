import React from 'react';
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';
import {lightTheme} from './theme/AppTheme'

import Layout from '../src/components/Layout'
function App() {
  let theme: Theme = createMuiTheme(lightTheme);
  theme = responsiveFontSizes(theme)
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Layout>
        <div>
          <h1>Inner portion</h1>
        </div>

      </Layout>
    </div>
    </ThemeProvider>
  );
}

export default App;
