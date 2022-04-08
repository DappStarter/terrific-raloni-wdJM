require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind equip hockey kiwi olympic gas'; 
let testAccounts = [
"0xa878a1a34e3a201bbed5dc5adfbe370b801b33a2d17a3a60ce9f34f2b7e10c7c",
"0xd1dc8339622fb0183dfa192859cdc5e03d6c964020f861bd2cb1ccfe5ef3e506",
"0x296154d3ca14eb7923e122cb7d6f5859dd1de1210de72fef358cba9335642fa9",
"0xc684587453db39623536049af676b3859ed41da294be9ea30e526ea3427db203",
"0x42261a27d532e7617227bcb40de212fe0108e8cc64f95062d86dbee96291ed22",
"0x2fa7186813042c4b070a1e141dfcfb655782dc90b976de61da0082c00033e2f0",
"0x383d55493e108114a5f825a6311768486e3b78795920be0ca2afbe53e6a219f0",
"0xa36c30b21be771228764f1a851c47a451bbc37df87f073504b0c24e4218a0281",
"0x8196b748d97145b3ac40770b7938b6508559b114b2d334025b57f0322cbf928d",
"0x7aaae0c155e68dfd2856aefcc7ac6c0db852b591b510684bec078ada423e215d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

