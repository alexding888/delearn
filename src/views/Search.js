import { Button, Input } from "antd";
import {
    SearchOutlined
} from "@ant-design/icons"
import { useState } from "react";
import "@/assets/styles/view-style/search.scss"
import "@/assets/styles/mobile/view-style/search.scss"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getEns } from "@/request/api/nft";

export default function Search(params) {

    let [account, setAccount] = useState("");
    let [isLoading, setIsLoading] = useState(false);
    
    const { t } = useTranslation("cert");
    const navigateTo = useNavigate();


    const changeAccount = (v) => {
        account = v;
        setAccount(account);
    }

    const start = async() => {
        setIsLoading(true);
        await getEns({address: account})
        .then(res => {
            if (res?.data) {
                setTimeout(() => {
                    navigateTo(`/${account}`)
                }, 500);
            }
        })
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    return (
        <div className="Search">
            <div className="round1" />
            <div className="round2" />
            <div className="Search-content">
                <p className="title">{t("vitae.title")}</p>
                <p className="title color-primary">{t("vitae.title2")}</p>
                <p className="subtitle">{t("vitae.subtitle")}</p>
                <div className="inner">
                    <div className="icon">
                        <SearchOutlined />
                    </div>
                    <Input placeholder={t("vitae.inner")} bordered={null} value={account} onChange={(e) => changeAccount(e.target.value.trim())} />
                    <Button onClick={() => start()} loading={isLoading} >{t("vitae.btn")}</Button>
                </div>
                <ul className="example">
                    <li>me</li>
                    <li>vitalik.eth</li>
                    <li>tinyxiong.eth</li>
                </ul>
            </div>
        </div>
    )
}