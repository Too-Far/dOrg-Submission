import React from 'react';
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';
import {Web3ReactProvider} from '@web3-react/core'
import {Web3Provider} from '@ethersproject/providers'
import {InjectedConnector} from '@web3-react/injected-connector'
import {lightTheme} from './theme/AppTheme'
import InnerLayout from '../src/components/InnerLayout'
import Layout from '../src/components/Layout'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1,
    4,
    100,
  ]
})

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  let theme: Theme = createMuiTheme(lightTheme);
  theme = responsiveFontSizes(theme)
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout>
          <InnerLayout />
        </Layout>
      </div>
    </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default App;
