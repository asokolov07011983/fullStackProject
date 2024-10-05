import { Layout, Space, Typography, Button } from "antd";

import styles from "./index.module.css"
import {LoadingOutlined, LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomBtn} from "../CustomBtn";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";
import {Login} from "../../pages/login";

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to={Paths.home}>
                    <CustomBtn
                        type='default'
                    >
                        Сотрудники
                    </CustomBtn>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.login}>
                    <CustomBtn
                        type='default'
                        shape='round'
                        icon={<LoginOutlined />}
                    >
                        Login
                    </CustomBtn>

                </Link>
                <Link to={Paths.register}>
                    <CustomBtn
                        type='default'
                        shape='round'
                        icon={<UserOutlined />}
                    >
                        Register
                    </CustomBtn>

                </Link>
            </Space>
        </Layout.Header>
    )
}