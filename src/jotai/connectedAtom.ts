import { providers, Signer } from 'ethers'
import { atom } from 'jotai'

export type ConnectedState = {
  connected: boolean
  provider: providers.Web3Provider | null
  signer: Signer | null
  address: string
  chainId: number
}

export const connectedAtom = atom<ConnectedState>({
  connected: false,
  provider: null,
  signer: null,
  address: '',
  chainId: 0,
})
