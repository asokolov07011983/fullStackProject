import {Link, useNavigate, useParams} from "react-router-dom";
import { Button, Result, Row } from "antd";
import { useEffect } from "react";

const Statuses: Record<string, string> = {
    created: 'Пользователь создан',
    updated: 'Пользователь обновлён',
    deleted: 'Пользователь удалён',
}
export const Status = () => {
    const navigate = useNavigate();
    const { status } = useParams();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Row
            align='middle'
            justify='center'
            style={{
                width: '100%'
            }}
        >
            <Result
                status={status ? 'success' : 404}
                title = {status ? Statuses[status] : 'Не найдено'}
                extra={
                    <Button key='dashboard'>
                        <Link
                            to='/'
                        >
                            На главную
                        </Link>
                    </Button>
                }
            >
            </Result>
        </Row>
    )
}