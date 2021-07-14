require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy riot pitch essay inner drop symptom gate'; 
let testAccounts = [
"0x032040c758815181cbfddc4ac87014c73a59e4fc1557d0980fcf28eb5b8d7ab1",
"0xba12c8508874926b1c5ec07c047f05b671e0a75ad32254028439854f416a58ba",
"0x68b34e6de991d2d0bc08a2f3c9c0c37b560613cd9d3059399e9e733aec28e0fc",
"0xf93fd3e972e5bce575895073d5ecd3ce65cf538a6e07e60a13b59e10189aabef",
"0xfa18a0adb9396742175cd47b93235b78ee0c06d4c17474b643eb0d493266e104",
"0xc956b5810f9c16f0f57db2dac34d6965c6d35e63f54e127f029f5b391ef43588",
"0x1ac37929b044371da56bdae3163f887cc8a2891595f43d09b041785b6c58913e",
"0x3dd633cab12b70f087f18bcf02bdd8887dbc19ce37fd09c4ea9dee35ea68fa14",
"0xe5e810f33708bf30d0b3fd11453f3ba1ceaabe1a335718b1cc6fe47200f0495f",
"0xa22654774d4371e4880100790a1f7858708f5c8dc0f2b4a1c67ddcae0aa322c1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

