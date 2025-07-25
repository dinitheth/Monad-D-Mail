# Monad D-Mail: Decentralized Messaging App

Monad D-Mail is a fully decentralized messaging application built on the Monad Testnet. It provides a censorship-resistant, secure, and user-friendly platform for sending and receiving messages directly on the blockchain. This dApp demonstrates the power of high-performance EVM-compatible blockchains like Monad to create fast, responsive, and truly decentralized applications.

![Monad D-Mail Screenshot](./public/screenshot.png?raw=true "Monad D-Mail Application")

## Key Features

- **Wallet Integration**: Seamlessly connect with MetaMask to interact with the Monad Testnet.
- **On-Chain Messaging**: Send and receive messages that are permanently stored on the Monad blockchain.
- **Real-Time Public Feed**: View a live feed of all messages sent through the smart contract.
- **Local Contact Management**: Add, remove, and select contacts using your browser's local storage for a personalized experience.
- **Responsive Design**: A clean, modern UI built with ShadCN and Tailwind CSS that works beautifully on both desktop and mobile devices.
- **EVM Compatibility**: Built with standard web3 tools like Hardhat and Ethers.js, showcasing Monad's Ethereum compatibility.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (with App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/)
- **Blockchain Interaction**: [Ethers.js](https://ethers.io/)
- **Smart Contracts**: [Solidity](https://soliditylang.org/), [Hardhat](https://hardhat.org/)
- **Target Network**: [Monad Testnet](https://monad.xyz/)

## Getting Started

Follow these instructions to set up and run the project locally for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MetaMask](https://metamask.io/) browser extension installed and configured.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/monad-dmail.git
cd monad-dmail
```

### 2. Install Dependencies

Install all the required packages using npm or yarn.

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add your Monad Testnet private key. This key is required for deploying the smart contract.

```
PRIVATE_KEY=your_metamask_private_key
```

**Note**: To get started with the Monad Testnet, you can get testnet MON tokens from the [Monad Faucet](https://faucet.monad.xyz/).

### 4. Deploy the Smart Contract

Run the deployment script using Hardhat to deploy the `MessageBoard.sol` contract to the Monad Testnet.

```bash
npx hardhat run scripts/deploy.ts --network monad
```

This script will deploy the contract and save its address and ABI to `src/contracts/contract-address.json`, which the frontend will use to interact with it.

### 5. Run the Development Server

Start the Next.js development server to run the app locally.

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

## Project Structure

Here is an overview of the key directories in the project:

- **/src/app/**: Contains the main pages of the application using the Next.js App Router.
- **/src/components/**: Includes all reusable React components, including UI components from ShadCN.
- **/src/context/**: Holds the `WalletContext`, which manages the application's state, wallet connection, and contract interactions.
- **/src/hooks/**: Contains custom React hooks, such as `useContacts` for managing the contact list.
- **/contracts/**: The `MessageBoard.sol` Solidity smart contract.
- **/scripts/**: The Hardhat script (`deploy.ts`) used to deploy the smart contract.

---

Developed by **crypto_xbr**.
