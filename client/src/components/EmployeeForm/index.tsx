import {Employee} from "@prisma/client";
import {Card, Form, Space} from "antd";
import {CustomInput} from "../CustomInput";
import {ErrorMessage} from "../ErrorMessage";
import {CustomBtn} from "../CustomBtn";

type Props<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error: string;
    employee?: T;
}

export const EmployeeForm = ({
    onFinish,
    title,
    btnText,
    error,
    employee
                             }: Props<Employee>) => {
    return (
        <Card title={title} style={{ width: '30rem'}}>
            <Form
                name='employee-form'
                onFinish={onFinish}
                initialValues={employee}
                >
                <CustomInput type='text' name='firstName' placeholder='Имя' />
                <CustomInput type='text' name='lastName' placeholder='Фамилия' />
                <CustomInput type='number' name='age' placeholder='Возраст' />
                <CustomInput type='text' name='address' placeholder='Адресс' />
                <Space>
                    <ErrorMessage message={error} />
                    <CustomBtn htmlType='submit'>
                        { btnText }
                    </CustomBtn>
                </Space>
            </Form>
        </Card>
    )
}