import {Layout} from "../../components/Layout";
import {CustomBtn} from "../../components/CustomBtn";
import {PlusCircleOutlined} from "@ant-design/icons";
import {Table} from "antd";
import {useGetAllEmployeesQuery} from "../../app/services/employees";
import type {ColumnsType} from "antd/es/table";
import {Employee} from "@prisma/client";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useEffect} from "react";

const columns: ColumnsType<Employee> = [
    {
        title: 'Имя',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Адресс',
        dataIndex: 'address',
        key: 'address',
    },
]

export const Employees = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const { data, isLoading } = useGetAllEmployeesQuery();

    const addEmployee = () => navigate(Paths.addEmployee)

    useEffect(() => {
        if(!user) navigate(Paths.login)
    }, [navigate, user]);

    return (
        <Layout>
            <CustomBtn
                type='primary'
                onClick={addEmployee}
                icon={<PlusCircleOutlined />}
            >
                Добавить
            </CustomBtn>
            <Table
                loading={ isLoading }
                dataSource={ data }
                pagination = { false }
                columns={ columns }
                rowKey={(record) => record.id}
                onRow={(record) => {
                    return {
                        onClick: () => navigate(`/employees/${record.id}`),
                    };
                }}
            />
        </Layout>
    )
}