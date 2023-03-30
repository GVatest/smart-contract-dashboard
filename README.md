<h1 align="center">𝕓𝕤𝕔-𝕤𝕞𝕒𝕣𝕥-𝕔𝕠𝕟𝕥𝕣𝕒𝕔𝕥-𝕕𝕒𝕤𝕙𝕓𝕠𝕒𝕣𝕕</h1>

> Dashboard for interacting with a smart contract

## Screenshots

<img width="1440" alt="Screenshot 2023-03-28 at 17 48 57" src="https://user-images.githubusercontent.com/66703210/228276471-08aa9a21-7022-423a-85d7-abc3cf413d4e.png">
<img width="1440" alt="Screenshot 2023-03-28 at 17 28 32" src="https://user-images.githubusercontent.com/66703210/228270189-07583655-7096-4e26-a486-7eeee0126e49.png">

## Demo

https://smart-contract-dashboard.netlify.app/

## Start

_Clone_

```bash
git clone https://github.com/GVatest/bsc-smart-contract-dashboard
```

_Install_

```bash
npm install
# or
yarn install
```

_Start_

```bash
npm run dev
# or
yarn dev
```

## Custom Setup

_To interact with a network other than BSC set the environment variable_

```js
VITE_CHAIN_ID = your network ID
```

_Set your dapp name to allow users connect their wallets from mobile version of metamask_

```js
VITE_DAPP_NAME = "bnb-king.finance";
```

_Set your custom contract address and url_

```js
VITE_CONTRACT_ADDRESS = "";
VITE_CONTRACT_URL = "";
```

_Replace existing contract intreface located at `src/features/contract/contract.ts` with your own_

## Stack

<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"></img></a>
<a href="https://reactjs.org/)"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img></a>
<a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"></img></a>
<a href="https://docs.ethers.io/v5/"><img src="https://img.shields.io/badge/Ethers-lightgrey?style=for-the-badge"></img></a>
<a href="https://mui.com/"><img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"></img></a>

## Architecture

While developing this application, I followed the feature-sliced design methodology as it allows for a clear organization of the codebase, isolating logical modules, and laying an easily scalable and updatable structure.

- `shared` - Reusable logic.
- `features` - Business logic, user interaction logic
  - `contract` - Logic for interacting with the smart contract
  - `wallet` - Authorization module (connecting to the metamask wallet)
- `pages` - Combining ready-made modules into a complete page
- `app` - Global settings, providers, and components for the entire application

## _Additional_

This application was developed independently within two weeks based on the design provided by the client. I was not involved in the project's further development.

## Credits

Contributors:

- 👤 **Vasiliy Ganja**
  - `Github`: [@Gvatest](https://github.com/gvatest)

## License

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
