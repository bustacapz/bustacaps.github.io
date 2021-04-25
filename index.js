var methPerWeek = 0
var methPrice
var methTickers
function days_passed() {
    let previous = new Date("03/23/2021")
    var current = new Date();
    var Difference_In_Time = current.getTime() - previous.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 60 * 60 * 24);
    console.log(Difference_In_Days);
    return new web3.utils.BN(Difference_In_Days);
}

var burnBlocks = [
    "12092087",
    "12156427"
]

var burnAddress = '0x000000000000000000000000000000000000dead';
var tokenContract = '0x11003E410ca3FcD220765B3d2f343433A0b2bffd';
var tokenAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LimitMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ListingMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableLimitMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableListingMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupplyHit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var totalBurned = 0
async function loadBurns() {
    for await (const block of burnBlocks.map(file => fetch(`burns/${file}.json`).then(response => response.json()))) {
        totalBurned += block['amount']
    }
}
//
function truncateGwei(wei) {
    fmt = {
        prefix: '=> ',
        decimalSeparator: '.',
        groupSeparator: ',',
        groupSize: 3
    }
    return new BigNumber(web3.utils.fromWei(wei, 'ether')).decimalPlaces(0).toFormat(fmt);
}

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.autoRefreshOnNetworkChange = false;
        window.ethereum.enable();
        window.uniswap = {};
    }
}

async function loadContract(abi, addr) {
    return await new window.web3.eth.Contract(abi, addr)
}

async function printSupply() {
    updateStatus('fetching supply metrics');
    var burned = new web3.utils.BN(
        await window.contract.methods.balanceOf(burnAddress).call());
    totalBurned = burned
    var totalSupply = new web3.utils.BN(
        await window.contract.methods.totalSupply().call());

    var maxSupply = new web3.utils.BN(
        await window.contract.methods.MAX_SUPPLY().call());

    var toMine = maxSupply.sub(totalSupply).sub(burned);
    methPerWeek = new web3.utils.BN(burned.div(days_passed())).mul(new web3.utils.BN(7))
    methTickers = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=farming-bad&vs_currencies=usd,eth').then(response => {return response.json()})

    methPriceUsd = methTickers['farming-bad']['usd'] * web3.utils.fromWei(burned.toString()) 
    methPriceEth = new BigNumber(methTickers['farming-bad']['eth'] * web3.utils.fromWei(burned.toString()))
    
    updateStatus(`<br>max ${truncateGwei(maxSupply)}
    <br>burned ${truncateGwei(burned)} (${Math.trunc(methPriceUsd,0)} USD / ${methPriceEth.decimalPlaces(2)} ETH)
    <br>unfarmed ${truncateGwei(toMine)}
    <br>total ${truncateGwei(totalSupply)}
    <br>burning average ${truncateGwei(methPerWeek)} per week since first burn ${days_passed()} days ago<br>https://etherscan.io/tx/0x250acfe3eb8a31b019961f3bc7b73c2e23f02004611a38568d14a55f0a48c7c1`);
}

async function load() {
    await loadWeb3();
    window.contract = await loadContract(tokenAbi, tokenContract);
    updateStatus('Ready!');
}

function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
}

load();

var uniswap = {'abi': {}, 'contracts': {}}

let methToken = "0x11003e410ca3fcd220765b3d2f343433a0b2bffd"
let wethToken = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"


async function loadUniswapAbi(component) {
    const response = fetch(`abi/uniswap_${component}.json`)
    .then(response => response.json());
    return response
}
async function loadUniswapAbis() {
    window.uniswap.factoryabi = await loadUniswapAbi('factory')
    window.uniswap.pairabi = await loadUniswapAbi('pair')
}

async function loadUniswapContracts() {
    window.uniswap.factory =  new window.web3.eth.Contract(window.uniswap.factoryabi['abi'], "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f")
    window.uniswap.meth = new window.web3.eth.Contract(window.uniswap.pairabi['abi'], "0x429d2daabf4d281e8d768f6c08a316e90957ddec")
    window.uniswap.usdc = new window.web3.eth.Contract(window.uniswap.pairabi['abi'], "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc")
}

async function loadUniswap() {
    await loadWeb3();
    await loadUniswapAbis();
    await loadUniswapContracts();
}

loadUniswap(); 