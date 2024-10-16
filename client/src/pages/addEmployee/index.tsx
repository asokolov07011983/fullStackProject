import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Row } from "antd";
import { EmployeeForm } from "../../components/EmployeeForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useAddEmployeeMutation } from "../../app/services/employees";
import { Employee } from "@prisma/client";
import { Paths } from "../../paths";
import { isErrorWithMessage } from "../../utils/usErrorWithMessage";

export const AddEmployee = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [ addEmployee ] = useAddEmployeeMutation();
    const handleAddEmployee = async (data: Employee) => {
        try {
            console.log('data', data)
            await addEmployee(data).unwrap();
            navigate(`${Paths.status}/created`)
        } catch(error) {
            console.log('2222')
            const maybeError = isErrorWithMessage(error);
            if(maybeError) {
                setError(error.data.message);
            } else {
                setError('Неизвестная ошибка');
            }
        }
    };

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    }, [navigate, user]);

    return (
        <Layout>
            <Row align='middle' justify='center'>
                <EmployeeForm onFinish={handleAddEmployee} btnText='Добавить' title='Добавить сотрудника' error={error} />
            </Row>
        </Layout>
    )
}