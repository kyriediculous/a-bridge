import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { TokenRegistry } from '../typechain-types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const token = await deploy('ABridgeToken', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    estimateGasExtra: 5000000,
  })

  const registryDeployment = await deploy('TokenRegistry', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true,
    estimateGasExtra: 5000000,
  })

  const registry: TokenRegistry = (await ethers.getContractAt(
    'TokenRegistry',
    registryDeployment.address
  )) as TokenRegistry
  await registry.initialize(token.address, '0xae2398fe62f348a343a454c3d0cb81885f2bb269')
  console.log('Registry Address', registry.address)
}

func.tags = ['Origin']
export default func
