import { connectedAtom } from '../jotai/connectedAtom'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'
import WalletConnect from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import { useAtom } from 'jotai'
import { useEffectOnce } from 'react-use'
import Web3Modal from 'web3modal'

const PROJECT_NAME = "Puff Puff Pandas";
export const useConnection = () => {
  const [connectedState, setConnectedState] = useAtom(connectedAtom)

  const providerOptions = {
    walletlink: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: PROJECT_NAME, // Required
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID ? process.env.NEXT_PUBLIC_INFURA_ID : '', // Required unless you provide a JSON RPC url; see `rpc` below
      },
    },
    walletconnect: {
      package: WalletConnect, // required
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID ? process.env.NEXT_PUBLIC_INFURA_ID : '', // Required unless you provide a JSON RPC url; see `rpc` below
      },
    },
  }

  async function connectHandler() {
    try {
      if (connectedState.connected == true) return
      const web3Modal = new Web3Modal({
        // network: "mainnet", // optional
        cacheProvider: true, // optional
        disableInjectedProvider: false,
        providerOptions, // required
      })

      web3Modal.clearCachedProvider()
      const instance = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(instance)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const chainId = await (await provider.getNetwork()).chainId
      setConnectedState({
        connected: true,
        provider,
        signer,
        address,
        chainId,
      })
    } catch (err) {
      // eslint-disable-next-line no-empty
      console.log(err)
    }
  }

  const runOnStartup = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum || window.web3.currentProvider)
      const signer = provider.getSigner()
      const accounts = await provider.listAccounts()
      if (signer && accounts.length > 0) {
        const address = await signer.getAddress()
        const chainId = await signer.getChainId()
        setConnectedState({
          connected: true,
          provider,
          signer,
          address,
          chainId,
        })
      } else {
        setConnectedState({
          connected: false,
          provider,
          signer,
          address: '',
          chainId: 0,
        })
      }

        //@ts-ignore
        window.ethereum.on('accountsChanged', async (accounts: string[]) => {
            if (accounts.length > 0) {
                const signer = provider.getSigner()
                const address = await signer.getAddress()
                const chainId = await signer.getChainId()
                setConnectedState({
                connected: true,
                provider,
                signer,
                address,
                chainId,
                })
            } else {
                setConnectedState({
                connected: false,
                provider,
                signer: null,
                address: '',
                chainId: 0,
                })
            }
            }
        )

  
      }  }

  useEffectOnce(() => {
    runOnStartup()
  })

  return {
    connectedState,
    connectHandler,
  }
}
