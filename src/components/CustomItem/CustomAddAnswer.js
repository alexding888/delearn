import React from "react";
import { MinusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";

export default function CustomAddAnswer(params) {

    return (
        <Form.List name={"options"} initialValue={[{}]}>
        {(fields, { add, remove }) => (
          <div style={{ borderBottom: "1px solid #D8D8D8" }}>
            {fields.map(({ key, name, ...restField }) => ( 
                <div
                  key={key}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your answer",
                      },
                    ]}
                  >
                    <Input style={{ width: 400, marginRight: "5px" }} placeholder="First answer" />
                  </Form.Item>
                  {fields.length === 1 ? null : (
                    <Form.Item
                      {...restField}
                      name={[name, "options"]}
                      rules={[
                        {
                          required: true,
                          message: "Please choose right or wrong",
                        },
                      ]}
                      initialValue={1}
                    >
                      <Select
                        style={{
                          width: 120,
                          marginRight: "10px",
                        }}
                        options={[
                          {
                            value: 2,
                            label: "Yes",
                          },
                          {
                            value: 1,
                            label: "No",
                          },
                        ]}
                      />
                    </Form.Item>
                  )}
                  {fields.length === 1 ? null : <MinusCircleOutlined onClick={() => remove(name)} />}
                </div>
            ))}

            <Button type="link" style={{ width: 200 }} onClick={() => add()} block>
              {"Add Answer"}
            </Button>
          </div>
        )}
      </Form.List>
    )
}