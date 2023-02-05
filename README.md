# Dants
This repository contains our project for the FVM Space Warp Hackhathon. 

## Introduction
This project creates the infrastructure to allow data engineers and data science to collaborate on finding insights into the data while monetizing and reusing their job.
Data engineers can automate the data feeding from the graph, create ETLs in a no-code way and store this data in LightHouse as a data lake, then this data can be transformed by executing compute to data over the data, and used as input to other pipelines where the data analysts can find insights, 

## Architecture
![Architecture](/docs/diagram.PNG)

## Components

This repository has four components:
- Airbyte: Airbyte connectors to automate the data extraction from the graph and store in LightHuse
- Backend: Service to store user information and execute Bacalhau jobs
- Contracs: Contracts to implement payments and give access to the users that have paid.
- Frontend: Frontend app where users can interact with the application. 

## Contracts Addresses (Hyperspace Filecoin):
- DANTS ERC20 Token 0x9F36225aFDe2498013FBc323e9d7B52b42d08529
- Pipeline Shop 0xAEdc64Da5c31a5E04f21251e4Aa9DcA0861C46F5
- DANTS NFT Token 0x53E7F31056f14F9CEDf69C2b244e9D02862EB150
