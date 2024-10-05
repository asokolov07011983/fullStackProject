
import { Layout } from "../../components/Layout";

import styles from "./index.module.css";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/CustomInput";
import {PasswordInput} from "../../components/PasswordInput";
import {CustomBtn} from "../../components/CustomBtn";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";
export const Register = () => {
    return (
        <Layout>
            <Row
                align='middle'
                justify={'center'}
            >
                <Card
                    title='Зарегистрируйтесь'
                    style={{
                        width: '30rem'
                    }}
                >
                    <Form
                        onFinish={() => null}
                    >
                        <CustomInput
                            name='name'
                            placeholder='Имя'
                        />
                        <CustomInput
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                        <PasswordInput
                            name='password'
                            placeholder='Пароль'
                        />
                        <PasswordInput
                            name='confirmPassword'
                            placeholder='Повторите пароль'
                        />
                        <CustomBtn
                            type='primary'
                            htmlType='submit'
                            loading={false}
                        >
                            Зарегистрироваться
                        </CustomBtn>
                        <Space
                            direction='vertical'
                            size='large'
                        >
                            <Typography.Text>
                                Уже зарегистрированы?
                                <Link to={Paths.login}>Войти</Link>
                            </Typography.Text>
                        </Space>
                    </Form>
                </Card>
            </Row>
        </Layout>

    )
}