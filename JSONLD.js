export default {
  '@type': 'Organization',
  name: 'Infinite Scroll',
  description: 'Self-sustaining systems for the worlds to come.',
  url: 'https://infinitescroll.org',
  sameAs: [
    'https://github.com/infinitescroll',
    'https://twitter.com/infinitescroll_',
    'https://www.are.na/infinite-scroll',
  ],
  owns: [
    {
      '@type': 'WebApplication',
      name: 'Glif Wallet',
      description:
        'A web wallet to manage your Filecoin on your Ledger device.',
      applicationCategory: 'Cryptocurrency wallet',
      operatingSystem: 'All',
      url: 'https://wallet.glif.io',
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Nodes',
      description: 'Private and public gateways to the Filecoin network.',
      applicationCategory: 'Blockchain node infrastructure',
      operatingSystem: 'All',
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Vault',
      description: 'Use your Ledger device to hold your Filecoin SAFT.',
      applicationCategory: 'Cryptocurrency wallet',
      operatingSystem: 'All',
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Faucet',
      description: 'Quickly, easily receive Filecoin to test and develop with.',
      applicationCategory: 'Cryptocurrency faucet',
      operatingSystem: 'All',
      url: 'https://faucet.glif.io',
    },
    {
      '@type': 'WebApplication',
      name: 'Glif Verifier',
      description: 'Earn "verified" Filecoin storage when you verify yourself.',
      applicationCategory: 'Blockchain user validation',
      operatingSystem: 'All',
      url: 'https://verify.glif.io/',
    },
  ],
  knowsAbout: [
    {
      '@type': 'SoftwareApplication',
      name: 'Filecoin',
      url: 'https://filecoin.io',
      applicationCategory: 'Blockchain network',
      operatingSystem: 'All',
    },
    {
      '@type': 'Corporation',
      name: 'Ledger SAS',
      url: 'https://www.ledger.com/',
    },
  ],
}
