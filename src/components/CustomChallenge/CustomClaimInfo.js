import { Button, Divider, Progress } from "antd"
import { Viewer } from "@bytemd/react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom"
import ModalViewRecommed from "../CustomModal/ModalViewRecommed";
import { useContext, useMemo } from "react";
import pluginGfm from '@bytemd/plugin-gfm'
import frontmatter from '@bytemd/plugin-frontmatter'
import breaks from '@bytemd/plugin-breaks'
import highlight from '@bytemd/plugin-highlight-ssr'
import MyContext from "@/provider/context";
import CustomViewer from "../CustomViewer";

export default function CustomClaimInfo(props) {
    
    const { answerInfo, percent, detail, isClaim } = props
    const { t } = useTranslation(["claim", "translation"]);
    const plugins = useMemo(() => [pluginGfm(),frontmatter(),highlight(),breaks()], [])
    const { isMobile } = useContext(MyContext);
    const navigateTo = useNavigate();

    function reChallenge(params) {
        navigateTo(`/quests/${detail.tokenId}`);
    }

    return (
        <>
            {
                isMobile ?
                <div className="content-info">
                    <div className="desc">
                        {
                            answerInfo.isPass || isClaim ? 
                                <p className="title">{t("pass")}  🎉🎉</p>
                            :
                                <p className="title">{t("unpass")}</p>
                        }
                        <p className="desc">
                        {
                            answerInfo.isPass || isClaim && t("desc")
                        }
                        </p>
                    </div>
                    <div className="score">
                        <p className="network">{detail.title}</p>
                        <p className="pass">{t("score.passScore",{score: answerInfo.passingPercent})}</p>
                        <div className="score-detail">
                            <div className="circle">
                                <Progress
                                    type="circle"
                                    percent={percent}
                                    width={172}
                                    format={(percent) => percent}
                                    strokeWidth={6}
                                />
                            </div>
                            
                        </div>
                        <Link className="btn" to={`/quests/${detail.tokenId}`}>
                            {t("translation:btn-go-challenge")}
                        </Link>
                    </div>
                    {
                        !answerInfo.isPass && detail.recommend && !isClaim &&
                        <div className="viewer" >
                            <div className="viewer-head">
                                <p>{t("recommend")}</p>
                                <ModalViewRecommed
                                    text={JSON.parse(detail.recommend)} 
                                    plugins={plugins}
                                    viewText={t("view")}
                                />
                    
                            </div>
                            <Divider />
                            <div className="viewer-content">
                                <Viewer value={JSON.parse(detail.recommend)} plugins={plugins} />
                            </div>
                        </div>
                    }
                </div>
                :
                <div className="content-info">
                    <div className="desc">
                        {
                            answerInfo.isPass || isClaim ? 
                                <p className="title">{t("pass")}  🎉🎉</p>
                            :
                                <p className="title">{t("unpass")}</p>
                        }
                    </div>
                    <div className="score">
                        <div className="circle">
                            <Progress
                                type="circle"
                                percent={percent}
                                width={230}
                                format={(percent) => percent}
                                strokeWidth={3}
                            />
                        </div>
                        <div className="info">
                            <p className="network">{detail.title}</p>
                            <p className="pass">{t("score.passScore",{score: answerInfo.passingPercent})}</p>
                            <Button className="btn" onClick={reChallenge}>
                                {t("translation:btn-go-challenge")}
                            </Button>
                        </div>
                    </div>
                    {
                            !answerInfo.isPass && detail.recommend && !isClaim ? 
                            <div className="viewer" >
                                <div className="viewer-head">
                                    <p>{t("recommend")}</p>
                                </div>
                                <Divider />
                                <div className="viewer-content">
                                    <CustomViewer label={JSON.parse(detail.recommend)} />
                                </div>
                            </div>
                            :
                            <p className="desc">{t("desc")}</p>
                    }
                </div>
            }
        </>
    )
}