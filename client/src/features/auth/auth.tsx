import { ReactNode, FC } from "react";
import { useCurrentQuery } from "../../app/services/auth";

export const Auth: FC<any> = ({ children }) => {
    const { isLoading } = useCurrentQuery();

    if(isLoading) {
        return <span>Загрузка...</span>
    }
    return children
}