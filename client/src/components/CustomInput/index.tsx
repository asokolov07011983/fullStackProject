import { FC } from "react";
import { Form, Input } from "antd";

import styles from "./index.module.css"

interface ICustomInput {
    name: string;
    type?: string;
    placeholder: string;
}
export const CustomInput: FC<ICustomInput> = (
    { name,
        type= 'text',
        placeholder
    }) => {
    return (
        <Form.Item
            name={name}
            rules={[
                {
                    required: true,
                    message: 'Обязательное поле'
                }
            ]}
            shouldUpdate={true}
        >
            <Input
                placeholder={placeholder}
                type={type}
                size="large"
            />
        </Form.Item>

    )
}