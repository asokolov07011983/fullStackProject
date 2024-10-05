import React, { ReactNode, FC } from "react";

import styles from "./index.module.css";

interface ILayout  {
    children: ReactNode;
}
export const Layout: FC<ILayout> = ({children}) => {
    return (
        <div className={styles.main}>
            { children }
        </div>
    )
}