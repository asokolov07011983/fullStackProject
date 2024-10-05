import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import {Card, Form, Row, Space, Typography} from "antd";
import { CustomInput } from "../../components/CustomInput";
import { PasswordInput } from "../../components/PasswordInput";
import { CustomBtn } from "../../components/CustomBtn";
import { Paths } from "../../paths";

import styles from "./index.module.css";

export const Login = () => {
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
                        onFinish={() => null}
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
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>

    )
}