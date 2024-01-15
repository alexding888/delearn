import { ClockCircleFilled, EditOutlined } from '@ant-design/icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "@/assets/styles/component-style/index"
import "@/assets/styles/mobile/component-style/user/challengeItem.scss"
import { useNavigate } from "react-router-dom";
import { constans } from "@/utils/constans";
import { useTranslation } from "react-i18next";
import { convertTime } from "@/utils/convert";
import MyContext from '@/provider/context';
import { useContext } from 'react';
import { Tooltip, message } from 'antd';
import { CONTRACT_ADDR_721, CONTRACT_ADDR_721_TESTNET } from '@/config';

export default function ChallengeItem(props) {
    
    const isDev = process.env.REACT_APP_IS_DEV;
    const { info, profile } = props;
    const { isMobile } = useContext(MyContext);
    const { t } = useTranslation(["profile", "explore"]);
    const navigateTo = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const { ipfsPath, defaultImg, openseaLink, openseaSolanaLink } = constans(profile?.checkType);
    const arr = [0, 1, 2];


    const toQuest = () => {
        if (info?.claimable || info?.claimed || (profile && profile.isMe && info.complete_ts && !info.claimed) || info?.open_quest_review_status === 1) {
            // 个人查看完成的挑战
            navigateTo(`/claim/${info.uuid}`)
        }else{
            navigateTo(`/quests/${info.uuid}`)
        }
    }

    // const toOpensea = (event) => {
    //     event.stopPropagation();
    //     if (profile.walletType === "evm") {
    //         window.open(`${openseaLink}/${info.tokenId}`,'_blank');
    //     }else{
    //         window.open(`${openseaSolanaLink}/${info.nft_address}`,'_blank');
    //     }
    // }

    // opensea跳转链接
    function toOpensea(event) {
        event.stopPropagation();
        const { version, nft_address, badge_chain_id, badge_token_id } = info;
        let evmLink = openseaLink;
        const solanaLink = `${openseaSolanaLink}/${nft_address}`;
        if (version == 1) {
            evmLink = `${evmLink}/${isDev ? "mumbai" : "matic"}/${isDev ? CONTRACT_ADDR_1155_TESTNET?.QuestMinter : CONTRACT_ADDR_1155?.QuestMinter}/${badge_token_id}`;
        }else{
            const chainAddr = isDev ? CONTRACT_ADDR_721_TESTNET[badge_chain_id] : CONTRACT_ADDR_721[badge_chain_id];
            evmLink = `${evmLink}/${chainAddr.opensea}/${chainAddr.Badge}/${badge_token_id}`
        }
        if (profile.walletType === "evm") {
            window.open(evmLink,'_blank');
        }else{
            window.open(solanaLink,'_blank');
        }
    }

    function clickSbt(event) {
        if (isMobile && (profile.walletType === "evm" || info.claimed)) {
            event.stopPropagation();
            if (profile.walletType === "evm") {
                window.open(`${openseaLink}/${info.tokenId}`,'_blank');
            }else{
                window.open(`${openseaSolanaLink}/${info.nft_address}`,'_blank');
            }
        }
    }

    async function goEdit(event) {
        event.stopPropagation();
        // 已有人claim，终止
        if (info?.has_claim) {
            messageApi.open({
                type: 'warning',
                content: t("edit.error"),
            });
            return
        }
        // 跳转至编辑challenge
       !info?.has_claim && window.open(`/publish?${info.tokenId}`, '_blank');
    }

    function getTimeDiff(time) {
        const { type, time: num } = convertTime(time, "all")

        return (
            <>
                {t(`translation:${type}`, {time: Math.round(num)})}
            </>
        )
    }

    return (
        <div className="ChallengeItem" onClick={toQuest}>
            {contextHolder}
            {/* 可领取 */}
            {
                info.claimable &&
                <div className="item-claimable">
                    {t("claimble")}
                </div>
            }
            {/* 已领取 */}
            {
               info.claimed && 
               <div className="item-claimed">
                   {t("explore:pass")}
               </div> 
            }
            {/* 待打分 */}
            {
                info?.open_quest_review_status === 1 && 
                <div className="item-claimed" style={{borderColor: "#007DFA", color: "#007DFA"}}>
                    {t("explore:review")}
                </div>
            }
            {/* 编辑 */}
            {
                profile && info?.creator === profile?.address && info?.has_claim !== undefined &&
                <div className="edit" onClick={goEdit}>
                    <EditOutlined />
                </div>
            }
            <div className="right-sbt challenge-img" onClick={clickSbt}>
                <div className="img">
                        <LazyLoadImage
                            src={
                                info.metadata.image.split("//")[1]
                                ? `${ipfsPath}/${info.metadata.image.split("//")[1]}`
                                : defaultImg
                            }
                        />
                </div>
                <div style={{
                    position: "absolute",
                    right: "5px",
                    top: "5px",
                    display: "flex",
                    gap: "5px"
                }}>
                    {/* 链 */}
                    {
                        profile && (profile.walletType === "evm" && (info.claim_status === 1 || info.claim_status === 3)) &&
                        <div className={`opensea img ${isMobile ? "show" : ""}`} onClick={(event) => event.stopPropagation()}>
                            <img src={isDev ? CONTRACT_ADDR_721_TESTNET[info.badge_chain_id]?.img: CONTRACT_ADDR_721[info.badge_chain_id].img} alt="" />
                        </div>
                    }
                    {/* opensea */}
                    {
                        profile && (profile.walletType === "evm" && (info.claim_status === 1 || info.claim_status === 3)) &&
                        <div className={`opensea img ${isMobile ? "show" : ""}`} onClick={toOpensea}>
                            <img src={require("@/assets/images/icon/user-opensea.png")} alt="" />
                        </div>
                    }
                    {/* zk */}
                    {
                        profile && (info.claim_status === 2 || info.claim_status === 3) &&
                        <Tooltip title={t("zkTool")}>
                            <div className={`opensea img ${isMobile ? "show" : ""}`} onClick={(event) => event.stopPropagation()}>
                                <img src={require("@/assets/images/icon/user-zk.png")} alt="" />
                            </div>
                        </Tooltip>
                    }
                </div>
            </div>
            <div className="left-info">
                <div>
                    <p className="title newline-omitted">
                        {info.title}
                    </p>
                    <p className="desc newline-omitted">
                        {info.description}
                    </p>
                </div>
                <div className="sbt-detail">
                    <div className='flex'>
                        {
                            info.metadata?.attributes?.difficulty !== null && 
                            <>
                            <span>{t("translation:diff")}</span>
                            <div className="imgs">
                                {
                                    arr.map((e,i) => {
                                        if (i >= info.metadata?.attributes?.difficulty+1) {
                                            return <img key={i} src={require("@/assets/images/icon/star-line.png")} alt="" />
                                        }else{
                                            return <img key={i} src={require("@/assets/images/icon/star-full.png")} alt="" />
                                        }
                                    })
                                }
                            </div>
                            </>
                        }
                    </div>
                    <div className="time">
                        {
                            info.quest_data?.estimateTime && info.quest_data?.estimateTime !== null && 
                            <>
                                <ClockCircleFilled />
                                {getTimeDiff(info.quest_data?.estimateTime)}
                            </>
                        }
                    </div>
                    {/* 
                    <div className="date">
                        <div className="icon img">
                            <img src={require("@/assets/images/icon/yes.png")} alt="" />
                        </div>
                        {formatTimeToStrYMD(info.complete_ts ? info.complete_ts : info.addTs)}
                    </div> */}
                </div>
            </div>
        </div>
    )
}