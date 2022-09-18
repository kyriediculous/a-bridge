import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-web3'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'

// deployment plugins
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import '@openzeppelin/hardhat-upgrades'

// Tools
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import '@nomiclabs/hardhat-etherscan'

import { HardhatUserConfig } from 'hardhat/types'

import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

dotenv.config()
const PRIVATE_KEY = process.env.PRIVATE_KEY

function loadTasks() {
  const tasksPath = path.join(__dirname, 'tasks')
  fs.readdirSync(tasksPath).forEach((task) => {
    require(`${tasksPath}/${task}`)
  })
}

if (fs.existsSync(path.join(__dirname, 'artifacts')) && fs.existsSync(path.join(__dirname, 'typechain'))) {
  loadTasks()
}

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    gorli: {
      url: 'https://goerli.infura.io/v3/79c508601e4b4b8296b921f1064220e8',
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : undefined,
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/y5D9C_eB0aRhS4Sqa57ZdvD0EQ1HzLkO',
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : undefined,
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: {
      mumbai: process.env.MUMBAISCAN as string,
      arbitrumOne: process.env.ETHERSCAN as string,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.15',
        settings: {
          optimizer: {
            runs: 200,
          },
        },
      },
    ],
  },
}

export default config
