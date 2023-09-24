
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


const LabelerPage = () => {
	return (
		<>
			<div className="flex justify-center min-h-screen bg-black p-4 md:p-0">
				<WagmiConfig config={config}>
					<Profile />
				</WagmiConfig>
			</div>
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
			<div className='text-white'>
				Connected to {address}
				<button onClick={() => disconnect()}>Disconnect</button>
			</div>
		)
	return <button className="text-white" onClick={() => connect()}>Connect Wallet</button>
}

export default LabelerPage;