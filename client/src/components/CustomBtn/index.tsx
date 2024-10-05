import { ReactNode, FC } from "react";
import { Button } from "antd";


interface ICustomBtn {
    children: ReactNode;
    htmlType?: "button" | "submit" | "reset";
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed";
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round";
    icon?: ReactNode;
}
export const CustomBtn: FC<ICustomBtn> = ({
    children,
    htmlType = 'button',
    type,
    danger,
    loading,
    shape,
    icon,
    onClick
}) => {
    return (
            <Button
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >
                { children }
            </Button>
    )
}