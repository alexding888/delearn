import { constans } from "./constans";



export const ipfsToImg = (e) => {
    let gateway = "https://nftscan.mypinata.cloud/ipfs/";
    // let gateway = "https://dweb.link/ipfs/";

    const { defaultImg } = constans();
    const url = e.image_uri;
    const contractUrl = e.contract_logo;

    let selectValue = "";

    if (!url) {
        selectValue = process.env.REACT_APP_NFT_BASE_URL+e.contract_logo;
    }else if (!url && !contractUrl) {
        selectValue = defaultImg;
    }else {
        if (url.indexOf('Qm') === 0 || url.indexOf('ba') === 0) {
            selectValue = gateway+url;
        }else{
            selectValue = url;
        }
    }
    // if (url.indexOf('data:image/svg+xml;base64') === 0) {
    //     return url
    // }
    // if(url.indexOf('https://') === 0){
    //     return url
    // }
    // if(url.indexOf('ar://') === 0){
    //     return url
    // }

    return selectValue;
}