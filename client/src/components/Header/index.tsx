import { Layout, Space, Typography, Button } from "antd";

import styles from "./index.module.css"
import { LoginOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {CustomBtn} from "../CustomBtn";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/auth/authSlice";

export const Header = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch((logout()));
        localStorage.removeItem('token');
        navigate('/login');
    }

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
                {
                    user
                        ?
                        <CustomBtn
                                type='default'
                                shape='round'
                                icon={<LoginOutlined />}
                                onClick={onLogoutClick}
                        >
                          Logout
                        </CustomBtn>

                        :
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
                }

        </Layout.Header>
    )
}