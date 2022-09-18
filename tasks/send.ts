import { task, types } from 'hardhat/config'
import { ABridgeRouter } from '../typechain-types'
import { utils } from 'ethers'
import { ABridgeToken, IERC20 } from '../typechain'

const GOERLI_DOMAIN = 3331
const MUMBAI_DOMAIN = 9991

task('bridge', 'bridge tokens to the destination chain')
  //   .addParam('token', 'token to transfer', '', types.string)
  //   .addParam('destination', 'destination chain', '', types.int)
  //   .addParam('amount', 'amount of LP tokens to farm (in 10e18)', 0, types.float)
  .setAction(async (args, hre) => {
    const { deployments, ethers, getNamedAccounts } = hre

    const { deployer } = await getNamedAccounts()

    let receiver
    if (!args.receiver) {
      const signer = (await ethers.getSigners())[0]
      receiver = signer.address
    } else {
      receiver = args.receiver
    }

    const routerAddress = (await deployments.get('ABridgeRouter')).address
    const tokenAddress = '0x29F4E8cc99fE3778a2fb99BBdef73ec71c3BcB05'
    const router: ABridgeRouter = (await ethers.getContractAt('ABridgeRouter', routerAddress)) as any
    const token: IERC20 = (await ethers.getContractAt('SimpleToken', tokenAddress)) as IERC20
    console.log(utils.formatEther(await token.balanceOf(deployer)))
    let tx = await token.approve(routerAddress, 10)
    await tx.wait()
    tx = await router.send(tokenAddress, 10, GOERLI_DOMAIN, utils.hexZeroPad(deployer, 32), { gasLimit: 5000000 })
    await tx.wait()
    console.log(tx)
  })
