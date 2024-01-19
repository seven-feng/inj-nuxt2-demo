<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Galxe simple demo
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="connectKeplr"> connect Keplr </v-btn>
          <v-btn color="primary" @click="connectMetamask"> connect Metamask </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {
  WalletStrategy,
  Wallet,
  MsgBroadcaster,
} from '@injectivelabs/wallet-ts';
import { ChainId } from '@injectivelabs/ts-types';
import { MsgExecuteContractCompat } from '@injectivelabs/sdk-ts';
import { Network } from '@injectivelabs/networks';

export default {
  name: "IndexPage",
  methods: {
     connectKeplr: async () => {
      try {
        debugger;
        const walletStrategy = new WalletStrategy({
          chainId: ChainId.Testnet,
        });
        walletStrategy.setWallet(Wallet.Keplr);
        const [address] = await walletStrategy.getAddresses();
        console.log('address', address)
      } catch (error) {}
    },
    connectMetamask: async () => {
      try {
        debugger;
        const walletStrategy = new WalletStrategy({
          chainId: ChainId.Testnet,
          ethereumOptions: {
            ethereumChainId: EthereumChainId.Goerli,
          },
        });
        walletStrategy.setWallet(Wallet.Metamask);
        debugger;
        const [address] = await walletStrategy.getAddresses();
        console.log('address', address)
      } catch (error) {}
    },
  },
};
</script>
