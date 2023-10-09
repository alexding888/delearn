import { BigNumber } from "ethers";
import BadgeAddress from "@/contracts/Badge.address";


export const constans = (contractType) => {

    const chains = {
        80001: {
            name: "mumbai", 
            icon: require("@/assets/images/img/net-Polygon.png"),
            link: "https://mumbai.polygonscan.com/address/"
        },
        56: {
            name: "BNB", 
            opensea: "bsc",
            nftscan: "bnb",
            icon: require("@/assets/images/img/net-BNB.png"),
            link: "https://bscscan.com/address/"
        },
        137: {
            name: "Polygon", 
            opensea: "matic", 
            nftscan: "polygon",
            icon: require("@/assets/images/img/net-Polygon.png"), 
            link: "https://polygonscan.com/address/"
        },
        10: {
            name: "Optimism", 
            opensea: "optimism",
            nftscan: "optimism",
            icon: require("@/assets/images/img/net-Optimism.png"),
            link: "https://optimistic.etherscan.io/address/"
        },
        1: {
            name: "Ethereum", 
            opensea: "ethereum",
            nftscan: "eth",
            icon: require("@/assets/images/img/net-ETH.png"),
            link: "https://etherscan.io/address/"
        },
        42161: {
            name: "Arbitrum One", 
            opensea: "arbitrum",
            nftscan: "arbitrum",
            icon: require("@/assets/images/img/net-Arbitrum.png"),
            link: "https://arbiscan.io/address/"
        },
        100: {
            name: "Gnosis", 
            nftscan: "gnosis",
            icon: require("@/assets/images/img/net-Gnosis.png"),
            link: "https://gnosisscan.io/address/"
        }
    }
    const defaultChainId = Number(process.env.REACT_APP_CHAIN_ID) || (window.location.origin.indexOf("https://decert.me/") === -1 ? 80001 : 137);

    const questAddr = process.env.REACT_APP_CONTRACT_QUEST_ADDRESS;

    const maxUint32 = Math.pow(2,32) - 1;
    const maxUint192 = BigNumber.from('2').pow(192).sub(1);

    const imgPath = process.env.REACT_APP_BASE_URL;

    const openseaBase = window.location.origin.indexOf("https://decert.me/") === -1 ? "https://testnets.opensea.io" : "https://opensea.io/";
    const openseaLink = `${openseaBase}/assets/${chains[defaultChainId]?.opensea || chains[defaultChainId]?.name}/${contractType ? questAddr : BadgeAddress}`;
    const openseaSolanaLink = `${openseaBase}/assets/solana`;
    const ipfsGateway = process.env.REACT_APP_IPFS_GATEWAY || "https://nftscan.mypinata.cloud/ipfs/"
    const defaultImg = require('@/assets/images/img/default.png');
    const ipfsPath = 'https://ipfs.decert.me';
    const screenSize = {
        mobile: "(max-width: 480px)",
    }

    return {
        maxUint32,
        maxUint192,
        openseaLink,
        openseaSolanaLink,
        defaultImg,
        ipfsPath,
        chains,
        defaultChainId,
        screenSize,
        ipfsGateway,
        imgPath
    }
}