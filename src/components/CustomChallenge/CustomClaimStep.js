import { constans } from "@/utils/constans";
import { Button, Input, message, Steps, Tooltip } from "antd";
import {
    UploadOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import CustomClaim from "./CustomClaim";
import CustomConnect from "./CustomConnect";
import CustomDiscord from "./CustomDiscord";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { GetScorePercent } from "@/utils/GetPercent";
import { submitClaimTweet } from "@/request/api/public";
import { ClaimShareSuccess } from "../CustomMessage";
import MyContext from "@/provider/context";



export default function CustomClaimStep(props) {
    
    const { 
        detail, 
        step, 
        changeStep, 
        tokenId, answers, 
        showInner, 
        isClaim, 
        isShow,
        verify,
        answerInfo
    } = props;
    const { openseaLink, defaultImg, ipfsPath } = constans(); 
    const { t } = useTranslation(["claim", "translation"]);
    const { isMobile } = useContext(MyContext);

    let [hrefUrl, setHrefUrl] = useState();
    let [isLoading, setIsLoading] = useState();

    function changeHrefUrl(e) {
        hrefUrl = e;
        setHrefUrl(hrefUrl);
    }

    async function hrefSubmit() {
        let hasHash = true;
        await verify()
        .catch(() => {
            hasHash = false;
        })
        if (!hasHash) {
            return
        }

        const pattern = /^https:\/\/twitter\.com\/.*/i;
        if (!pattern.test(hrefUrl)) {
            message.warning(t("message.link"))
            return
        }
        setIsLoading(true);
        let score = GetScorePercent(answerInfo.totalScore, answerInfo.score);
        submitClaimTweet({
            tokenId: Number(tokenId),
            tweetUrl: hrefUrl,
            score: score,
            answer: JSON.stringify(answers)
        })
        .then(res => {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
            if (res) {
                ClaimShareSuccess();
            }
        })
    }

    const tip = (
        <div className="tip-content">
            <p className="step">{t("tip.step",{num: 1})}</p>
            <p>{t("tip.step1")}</p>
            <p className="step">{t("tip.step",{num: 2})}</p>
            <p>
                {t("tip.step2.p1")}
                <span><UploadOutlined /></span>
                {t("tip.step2.p2")}
            </p>
            <p className="step">{t("tip.step",{num: 3})}</p>
            <p>{t("tip.step3")}</p>
        </div>
    )

    return (
        <div className="content-step">
            <div className="nft">
                    <div className="img">
                        <a href={`${openseaLink}/${detail.tokenId}`} target="_blank">
                            <img 
                                src={
                                    detail.metadata.image.split("//")[1]
                                        ? `${ipfsPath}/${detail.metadata.image.split("//")[1]}`
                                        : defaultImg
                                }
                                alt="" 
                            />
                        </a>
                    </div>
            </div>
            <div className="step">
                <h5>{t("step.title")}</h5>
                <Steps
                    className="step-detail"
                    progressDot
                    current={step}
                    direction="vertical"
                    items={[
                        {
                            description: (
                                <div className={`step-box ${step === 0 ? "checked-step" : ''}`}>
                                    {
                                        answerInfo.isPass ?
                                        t("step.pass")
                                        :
                                        t("step.unpass")
                                    }
                                </div>
                            )
                        },
                        {
                            description: (
                                <CustomConnect
                                    step={step}
                                    setStep={changeStep}
                                />
                            )
                        },
                        {
                            description: (
                                <CustomDiscord
                                    step={step}
                                    setStep={changeStep}
                                />
                            )
                        },
                        {
                            description: (
                                <CustomClaim
                                    step={step}
                                    setStep={changeStep}
                                    cliamObj={{
                                        tokenId: Number(tokenId),
                                        score: answerInfo.score,
                                        answer: JSON.stringify(answers),
                                        totalScore: answerInfo.totalScore
                                    }}
                                    img={detail.metadata.image}
                                    showInner={showInner}
                                    isClaim={isClaim}
                                />
                            )
                        }
                    ]}
                />
                {
                    isShow && 
                    <div className="position">
                        <div className="innerHref step-box">
                            <Input
                                placeholder="https://twitter.com/account/access" 
                                onChange={e => changeHrefUrl(e.target.value)} 
                            />
                            <Button 
                                loading={isLoading} 
                                type="link" 
                                onClick={() => hrefSubmit()} 
                                disabled={!hrefUrl} 
                            >
                                {t("translation:btn-submit")}
                            </Button>
                        </div>
                        <Tooltip
                            overlayInnerStyle={{
                                width: "290px", 
                                borderRadius: "25px"
                            }} 
                            placement="topRight" 
                            title={tip} 
                            color="#D8D8D8" 
                        >
                            <QuestionCircleOutlined className="tips" />
                        </Tooltip>
                    </div>
                }
            </div>
        </div>
    )
}