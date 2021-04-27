

var accounts
var ethBalance
var zedBalance

var tokenContract = '0x11003E410ca3FcD220765B3d2f343433A0b2bffd';
var tokenAbi = [
    {
        "constant": true,
        "inputs": [],
        "name": "rate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "cap",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "weiRaised",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "capReached",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "wallet",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_beneficiary",
                "type": "address"
            }
        ],
        "name": "buyTokens",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "rate",
                "type": "uint256"
            },
            {
                "name": "wallet",
                "type": "address"
            },
            {
                "name": "cap",
                "type": "uint256"
            },
            {
                "name": "goal",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "purchaser",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "beneficiary",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokenPurchase",
        "type": "event"
    }
]

function truncateGwei(wei) {
    fmt = {
        prefix: '=> ',
        decimalSeparator: '.',
        groupSeparator: ',',
        groupSize: 3
    }
    return new BigNumber(web3.utils.fromWei(wei, 'ether')).decimalPlaces(0).toFormat(fmt);
}

function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
}

async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.autoRefreshOnNetworkChange = false;
        window.ethereum.enable();
    }
}

async function loadContract(abi, addr) {
    return await new window.web3.eth.Contract(abi, addr)
}


async function load() {
    await loadWeb3();
    window.contract = await loadContract(tokenAbi, tokenContract);
    accounts = window.web3.accounts[0];
    var accountInterval = setInterval(function() {
        if (window.web3.eth.accounts[0] !== account) {
          account = window.web3.eth.accounts[0];
          document.getElementById("address").innerHTML = account;
        }
      }, 100);
}

function updateEthBalance() {
    // returns current eth balance
}

function updateZedBalance() {
    // returns the amount of zed 
}

function maxPurchaseable() {
    // returns max amount of zed tokens to be purchased
}

function buyTokens(amount) {
    // crafts the metamask transaction to buy the tokens
}

function updateElement(elementId, elements) {
    const el = document.getElementById(elementId);
    el.innerHTML = elements;
}


load();