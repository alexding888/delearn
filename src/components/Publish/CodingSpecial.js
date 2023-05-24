import { Button, Select } from "antd";
import {
    CaretRightOutlined
} from '@ant-design/icons';
import MonacoEditor from "../MonacoEditor";
import CustomIcon from "../CustomIcon";
import { useEffect, useRef } from "react";

const frame = [
    {
      label: 'Solidity',
      options: [
        {
          label: 'Foundry',
          value: 'Foundry'
        },
        {
          label: 'Hardhat',
          value: 'Hardhat'
        },
      ],
    }
]

const frameLang = [
    {
        frame: "Foundry",
        language: "Solidity"
    },
    {
        frame: "Hardhat",
        language: "javascript"  
    }
]

export default function CodingSpecial(props) {
    
    const { onChange, deleteCase, defaultValue, checkCode } = props;
    const editorRef = useRef(null);

    return (
        <div className="coding-special">
            <div className="case-close" onClick={deleteCase}>
                <CustomIcon type="icon-close" />
            </div>
            <div className="form">
                <div className="label">
                    代码编辑器
                </div>
                <Select
                    style={{
                        width: "200px",
                        marginTop: "10px"
                    }}
                    placeholder="框架"
                    onChange={(frame => {
                        // 切换编辑器语种
                        console.log(frame);
                        editorRef.current
                        .changeLang(frameLang.find(e => e.frame === frame)?.language)
                        // 返回值
                        onChange(frame, "frame")
                    })}
                    options={frame}
                    defaultValue={defaultValue.spj_code.frame}
                />
                <MonacoEditor
                    value={defaultValue.spj_code.code}
                    onChange={(newValue) => {
                        onChange(newValue, "code")
                    }}
                    ref={editorRef}
                    language={defaultValue ? frameLang.find(e => e.frame === defaultValue.spj_code.frame)?.language : ""}
                />
            </div>
            <div>
                <Button 
                    className="test-btn"
                    onClick={() => {
                        checkCode()
                    }}
                >
                    <CaretRightOutlined />执行测试用例
                </Button>
                
            </div>
        </div>
    )
}