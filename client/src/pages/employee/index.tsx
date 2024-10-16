import { Layout } from "../../components/Layout";
import {Link, Navigate, useNavigate, useNavigation, useParams} from "react-router-dom";
import { useState } from "react";
import { useGetEmployeeQuery, useRemoveEmployeeMutation } from "../../app/services/employees";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import {Descriptions, Divider, Modal, Space} from "antd";
import {CustomBtn} from "../../components/CustomBtn";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {ErrorMessage} from "../../components/ErrorMessage";
import {Paths} from "../../paths";
import {isErrorWithMessage} from "../../utils/usErrorWithMessage";
export const Employee = () => {
    const navigate = useNavigate();
    const [err, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const params = useParams<{id: string}>();
    const { data, isLoading } = useGetEmployeeQuery(params.id || '');
    const [removeEmployee] = useRemoveEmployeeMutation();
    const user = useSelector(selectUser);

    if(isLoading) {
        return <span>Загрузка...</span>
    }

    if(!data) {
        return <Navigate to='/' />
    }

    const showModal = () => {
        setIsModalOpen(true);
    }
    const hideModal = () => {
        setIsModalOpen(false);
    };
    const handleDeleteUser = async () => {
        hideModal();
        console.log('data', data);
        try {
            await removeEmployee(data.id).unwrap();
            navigate(`${Paths.status}/deleted`)
        } catch(err) {
            const maybeError = isErrorWithMessage(err)
            if(maybeError) {
                setError(err.data.message)
            } else {
                setError('Неизвестная ошибка')
            }
        }
    };

    return (
        <Layout>
            <Descriptions
                title='Информация о сотруднике'
                bordered
            >
                <Descriptions.Item
                    label='Имя'
                    span={3}
                >
                    {`${data.firstName} ${data.lastName}`}
                </Descriptions.Item>
                <Descriptions.Item
                    label='Возраст'
                    span={3}
                >
                    {data.age}
                </Descriptions.Item>
                <Descriptions.Item
                    label='Адресс'
                    span={3}
                >
                    {data.address}
                </Descriptions.Item>
            </Descriptions>
            {
                user?.id === data.userId && (
                    <>
                        <Divider
                            orientation='left'
                        >
                            Действия
                        </Divider>
                        <Space>
                            <Link to={`/employee/edit/${data.id}`}>
                                <CustomBtn
                                    shape='round'
                                    type='default'
                                    icon={<EditOutlined />}
                                >
                                    Редактировать
                                </CustomBtn>
                            </Link>
                            <CustomBtn
                                shape='round'
                                danger
                                onClick={showModal}
                                icon={<DeleteOutlined />}
                            >
                               Удалить
                            </CustomBtn>
                        </Space>
                    </>
                )
            }
            <ErrorMessage message={err} />
            <Modal
                title='Подтвердите удаление'
                open={ isModalOpen }
                onOk={handleDeleteUser}
                onCancel={hideModal}
                okText='Подтвердить'
                cancelText='Отменить'
            >
                Вы действительно хотите удалить сотрудника из таблицы?
            </Modal>
        </Layout>
    )
};