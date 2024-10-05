import React, { ReactNode, FC } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./index.module.css";
import {Header} from "../Header";

interface ILayout  {
    children: ReactNode;
}
export const Layout: FC<ILayout> = ({children}) => {
    return (
        <div className={styles.main}>
            <Header />
            <AntLayout.Content style={{ height: '100%'}}>
                { children }
            </AntLayout.Content>
        </div>
    )
}