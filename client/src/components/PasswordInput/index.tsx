import { FC } from "react";
import { Input, Form } from "antd";
import { NamePath } from "antd/es/form/interface";

interface IPasswordInput {
    name: string;
    placeholder: string;
    dependencies?: NamePath[]
}


export const PasswordInput: FC<IPasswordInput> = ({
    name,
    placeholder,
    dependencies
}) =>
{
    return (
        <Form.Item
            name={name}
            dependencies={dependencies}
            hasFeedback
            rules={[{
                required: true,
                message: 'Обязательное поле!'
            }, ({ getFieldValue }) => ({
                validator(_, value) {
                    if(!value) {
                        return Promise.resolve()
                    }
                    if(name === 'confirmPassword') {
                        if(!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        } else {
                            return Promise.reject(new Error('Пароли должны совпадать'))
                        }
                    } else {
                        if(value.length < 6) {
                            return Promise.reject(new Error('Пароли должен быть длиннее 7 символов'))
                        } else {
                            return Promise.resolve()
                        }
                    }
                }
            })]}
        >
            <Input.Password
                placeholder={placeholder}
                size='large'
            />
        </Form.Item>
    )
}