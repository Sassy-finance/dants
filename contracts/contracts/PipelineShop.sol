// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";

contract PipelineShop {
    mapping(uint256 => mapping(address => bool)) public pipelines;

    event PipelinePayed(uint256 pipelineId, address user);

    function buyPipeline(uint256 pipelineId) external payable {
        require(msg.value >= 0);
        pipelines[pipelineId][msg.sender] = true;
        emit PipelinePayed(pipelineId, msg.sender);
    }

    function isPayed(uint256 pipelineId) external view returns(bool) {
        return pipelines[pipelineId][msg.sender];
    }
}
