import { BigNumberish, ethers, BigNumber } from 'ethers';

class Contract {
  CONTRACT_ABI = [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_RewardsAddressContract',
          type: 'address',
        },
        {
          internalType: 'address payable',
          name: '_founderAddress',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [{ internalType: 'address', name: 'adr', type: 'address' }],
      name: 'bnbKingRewards',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'ref', type: 'address' }],
      name: 'buyCrowns',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'eth', type: 'uint256' },
        { internalType: 'uint256', name: 'contractBalance', type: 'uint256' },
      ],
      name: 'calculateCrownBuy',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'eth', type: 'uint256' }],
      name: 'calculateCrownBuySimple',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'Crowns', type: 'uint256' }],
      name: 'calculateCrownsell',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBalance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'adr', type: 'address' }],
      name: 'getCrownsSinceLastHatch',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'adr', type: 'address' }],
      name: 'getMyCrowns',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'adr', type: 'address' }],
      name: 'getMyMiners',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'am', type: 'uint256' }],
      name: 'giveMeReward',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'ref', type: 'address' }],
      name: 'hatchCrowns',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'seedMarket',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sellCrowns',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];
  provider: ethers.providers.Web3Provider;
  windowEthProvider: NonNullable<Window['ethereum']>;

  constructor(
    public address: string,
    public windowProvider: NonNullable<Window['ethereum']>,
    public chainId: number
  ) {
    this.provider = new ethers.providers.Web3Provider(windowProvider);
    this.windowEthProvider = windowProvider;
    this.provider.getSigner();
  }

  private async requestToChangeChain(): Promise<void> {
    await this.windowEthProvider
      .request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x38',
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'Binance Coin',
              symbol: 'BNB',
              decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com'],
          },
        ],
      })
      .then(async () => {
        let netVersion = await this.windowEthProvider.request({
          method: 'eth_chainId',
        });
        if (netVersion != 56) {
          throw new Error('Connected to different chain');
        }
      })
      .catch(() => {
        throw new Error("Rejected to change chain");
      });
  }

  protected async checkChain(): Promise<void> {
    const chainId = await this.windowEthProvider.request({
      method: 'eth_chainId',
    });

    if (this.chainId !== chainId) {
      await this.requestToChangeChain();
    }
  }

  protected getContractInterface() {
    return new ethers.Contract(
      this.address,
      this.CONTRACT_ABI,
      this.provider.getSigner()
    );
  }

  protected async getRef() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ref = urlParams.get('ref');
    const address = await this.getSigner().getAddress();

    return ref ? ref : address;
  }

  protected getSigner() {
    return this.provider.getSigner();
  }

  public async getTVL(): Promise<string> {
    await this.checkChain();

    const contract = this.getContractInterface();
    const tvl = await contract['getBalance']().then((balance: BigNumberish) => {
      return ethers.utils.formatEther(balance);
    });

    return tvl;
  }

  public async buyCrowns(amount: number): Promise<void> {
    await this.checkChain();

    const contract = this.getContractInterface();
    const signer = this.getSigner();
    const ref = await this.getRef();

    const daiWithSigner = contract.connect(signer);
    await daiWithSigner['buyCrowns'](ref, {
      value: ethers.utils.parseUnits(amount.toString(), 18),
    });
  }

  public async claimCrowns(): Promise<void> {
    await this.checkChain();

    const contract = this.getContractInterface();
    const signer = this.getSigner();

    const daiWithSigner = contract.connect(signer);
    await daiWithSigner['sellCrowns']();
    // setReward(0.0)
  }

  public async reinvestCrowns() {
    await this.checkChain();

    const contract = this.getContractInterface();
    const signer = this.getSigner();
    const ref = await this.getRef();

    const daiWithSigner = contract.connect(signer);
    await daiWithSigner['hatchCrowns'](ref);
    // setReward(0.0)
  }

  public async getReward(): Promise<string> {
    await this.checkChain();

    const contract = this.getContractInterface();
    const address = await this.getSigner().getAddress();

    const reward = await contract['bnbKingRewards'](address).then(
      (reward: BigNumberish) => {
        return ethers.utils.formatEther(reward);
      }
    );

    return reward;
  }

  public async getCrowns(): Promise<string> {
    await this.checkChain();

    const contract = this.getContractInterface();
    const address = await this.getSigner().getAddress();

    return await contract['getMyCrowns'](address).then((crowns: BigNumber) => {
      return crowns.toNumber()
    });
  }
}

export default Contract;
