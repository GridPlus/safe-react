import { ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const xDai: NetworkConfig = {
  environment: {
    production: {
      txServiceUrl: 'https://safe-transaction.xdai.gnosis.io/api/v1',
      safeAppsUrl: 'https://apps.gnosis-safe.io',
      gasPrice: 1e9,
      rpcServiceUrl: 'https://rpc.xdaichain.com',
      networkExplorerName: 'Blockscout',
      networkExplorerUrl: 'https://blockscout.com/poa/xdai',
      networkExplorerApiUrl: 'https://blockscout.com/poa/xdai/api',
    },
  },
  network: {
    id: ETHEREUM_NETWORK.XDAI,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'xDai',
    isTestNet: false,
    nativeCoin: {
      address: '0x000',
      name: 'xDai',
      symbol: 'xDai',
      decimals: 18,
      logoUri: '',
    },
  }
}

export default xDai
