import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { TokenRegistry, ABridgeRouter } from '../typechain-types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const token = await deploy('ABridgeToken', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    gasLimit: 18000000,
  })

  await (await ethers.getContractAt('ABridgeToken', token.address)).initialize({ gasLimit: 10000000 })

  const registryDeployment = await deploy('TokenRegistry', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    gasLimit: 18000000,
  })

  const routerDeployment = await deploy('ABridgeRouter', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    estimateGasExtra: 5000000,
    gasLimit: 18000000,
  })

  const registry: TokenRegistry = (await ethers.getContractAt(
    'TokenRegistry',
    registryDeployment.address
  )) as TokenRegistry
  let tx = await registry.initialize(token.address, '0xae2398fe62f348a343a454c3d0cb81885f2bb269')
  await tx.wait()

  const router: ABridgeRouter = (await ethers.getContractAt('ABridgeRouter', routerDeployment.address)) as ABridgeRouter
  tx = await router.initialize(router.address, '0xae2398fe62f348a343a454c3d0cb81885f2bb269')
  await tx.wait()

  // Test Token
  // const mockTokenDeployment = await deploy('SimpleToken', {
  //   args: ['Mock Token', 'aMCK', 10000000000000],
  //   from: deployer,
  //   log: true,
  //   skipIfAlreadyDeployed: true,
  //   estimateGasExtra: 5000000,
  // })
}

func.tags = ['Origin']
export default func
