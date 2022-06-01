const projectConfig = {
  nftName: 'ChonkyCats',

  nftSymbol: 'CC',

  maxSupply: 9999,

  maxMintAmountPerTxn: 5,

  mintCost: process.env.NODE_ENV === 'production' ? 100 : 0.01,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Polygon Mainnet' // 'Ethereum Mainnet'
      : 'Mumbai Testnet', // 'Rinkeby Testnet'

  chainName: 'MATIC', // 'ETH'

  chainId: process.env.NODE_ENV === 'production' ? 137 : 80001, // Ethereum (1), Rinkeby (4)

  siteDomain: 'www.yourdomain.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://your_site_domain`
      : 'http://localhost:3000',

  twitterUsername: '@cats_chonky',

  twitterUrl: 'https://twitter.com/cats_chonky',

  discordUrl: 'https://discord.gg/your_discord_invite_code',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0xad59ecb77033391e847cc96829b08beb83151088'
      : '0xad59ecb77033391e847cc96829b08beb83151088',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://polygonscan.com/address/0xad59ecb77033391e847cc96829b08beb83151088'
      : 'https://mumbai.polygonscan.com/address/your_mumbai_contract_address',
  // 'https://etherscan.io/address/your_ethereum_contract_address'
  // 'https://rinkeby.etherscan.io/address/your_rinkeby_contract_address'
};

export default projectConfig;
