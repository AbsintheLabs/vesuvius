import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import React, { useState } from 'react';

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    // todo: change this to the actual chains that we are supporting
    // todo: use rainbow kit instead of just wagmi
    chain: mainnet,
    transport: http()
  }),
})


const DataProviderPage = () => {

  return (
    <>
      <WagmiConfig config={config}>
        <Profile />
      </WagmiConfig>

      <textarea
        placeholder='Enter comma separated addresses here...'
      />

    </>
  );
}

function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected)
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  return <button onClick={() => connect()}>Connect Wallet</button>
}

export default DataProviderPage;
