export const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "upgrade",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "games",
		"outputs": [
			{
				"name": "round",
				"type": "uint256"
			},
			{
				"name": "crystals",
				"type": "uint256"
			},
			{
				"name": "prizePool",
				"type": "uint256"
			},
			{
				"name": "endTime",
				"type": "uint256"
			},
			{
				"name": "ended",
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
		"name": "round",
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
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_round",
				"type": "uint256"
			}
		],
		"name": "calculateReward",
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
		"name": "isContractMiniGame",
		"outputs": [
			{
				"name": "_isContractMiniGame",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getData",
		"outputs": [
			{
				"name": "_prizePool",
				"type": "uint256"
			},
			{
				"name": "_crystals",
				"type": "uint256"
			},
			{
				"name": "_endTime",
				"type": "uint256"
			},
			{
				"name": "_reward",
				"type": "uint256"
			},
			{
				"name": "_share",
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
		"name": "miningWarDeadline",
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
		"name": "HALF_TIME",
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
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "setMiningWarInterface",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Engineer",
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
				"name": "",
				"type": "uint256"
			},
			{
				"name": "_miningWarDeadline",
				"type": "uint256"
			}
		],
		"name": "setupMiniGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "share",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MiningWar",
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
		"inputs": [],
		"name": "withdrawReward",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "CRTSTAL_MINING_PERIOD",
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
		"constant": false,
		"inputs": [],
		"name": "startGame",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "players",
		"outputs": [
			{
				"name": "currentRound",
				"type": "uint256"
			},
			{
				"name": "lastRound",
				"type": "uint256"
			},
			{
				"name": "reward",
				"type": "uint256"
			},
			{
				"name": "share",
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
		"name": "administrator",
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
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "setEngineerInterface",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
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
				"indexed": false,
				"name": "round",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "crystals",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "prizePool",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "endTime",
				"type": "uint256"
			}
		],
		"name": "EndRound",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "questId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "questLv",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "deposit",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "bonus",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "percent",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	}
];