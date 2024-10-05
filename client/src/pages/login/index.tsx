import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import {Card, Form, Row, Space, Typography} from "antd";
import { CustomInput } from "../../components/CustomInput";
import { PasswordInput } from "../../components/PasswordInput";
import { CustomBtn } from "../../components/CustomBtn";
import { Paths } from "../../paths";

import styles from "./index.module.css";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/usErrorWithMessage";
import {ErrorWithMessage} from "../../types";
import {ErrorMessage} from "../../components/ErrorMessage";

export const Login = () => {
    const navigate = useNavigate();
    const [userLogin, loginUserResult] = useLoginMutation();
    const [error, setError] = useState<string>('');
    const login = async (data: UserData) => {
        try {
            await userLogin(data).unwrap();
            navigate('/');
        } catch(err) {
            const isError = isErrorWithMessage(err);
            if(isError) {
                setError(err.data.message);
            } else {
                setError('Неизвестная ошибка')
            }
        }
    };

    return (
        <Layout>
            <Row
                align='middle'
                justify={'center'}
            >
                <Card
                    title='Войдите'
                    style={{
                        width: '30rem'
                    }}
                >
                    <Form
                        onFinish={ login }
                    >
                        <CustomInput
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                        <PasswordInput
                            name='password'
                            placeholder='Пароль'
                        />
                        <CustomBtn
                            type='primary'
                            htmlType='submit'
                            loading={false}
                        >
                            Войти
                        </CustomBtn>
                        <Space
                            direction='vertical'
                            size='large'
                        >
                            <Typography.Text>
                                Нет аккаунта?
                                <Link to={Paths.register}>Зарегистрируйтесь</Link>
                            </Typography.Text>
                            <ErrorMessage message={error} />
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>

    )
}