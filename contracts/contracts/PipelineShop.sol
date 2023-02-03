// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./DantsNFT.sol";

contract PipelineShop {
    mapping(uint256 => mapping(address => bool)) public pipelines;
    address public tokenAddress;
    address public nftAddress;

    event PipelinePayed(uint256 pipelineId, address user);

    constructor(address _tokenAddress, address _nftAddress) {
        tokenAddress = _tokenAddress;
        nftAddress = _nftAddress;
    }

    function buyPipeline(uint256 pipelineId, uint256 price) external {
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), price);
        pipelines[pipelineId][msg.sender] = true;
        DANTs(nftAddress).safeMint(msg.sender);
        emit PipelinePayed(pipelineId, msg.sender);
    }

    function isPayed(uint256 pipelineId, address user)
        external
        view
        returns (uint256)
    {
        uint256 result = 0;
        pipelines[pipelineId][user] ? result = 1 : result = 0;
        return result;
    }
}
