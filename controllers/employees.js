const { prisma } = require('../prisma/prisma-client');

/**
 * @route GET /api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */

const all = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        res.status(200).json(employees);
    } catch {
        res.status(500).json({
            message: 'Что-то пошло не так'
        })
    }
};
/**
 * @route POST /api/employees/add
 * @desc Добавление сотрудника
 * @access Private
 */

const addEmployee = async (req, res) => {
    console.log('123123')
    try {
        const data = req.body;
        if(!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({
                message: 'Все поля обязательны!11'
            });
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user.id
            }
        });

        return res.status(201).json(employee);
    } catch {
        res.status(500).json({
            message: 'Что-то пошло не так!'
        })
    }
};
/**
 * @route POST /api/employees/remove/:id
 * @desc Удаление сотрудника
 * @access Private
 */
const remove = async (req, res) => {
    try {
        const {id} = req.body;
        await prisma.employee.delete({
            where: {
                id: id
            }
        });

        res.status(204).json('OK');
    } catch {
        return res.status(500).json({
            message: 'Не удалось удалить сотрудника!'
        })
    }
};
/**
 * @route POST /api/employees/edit/:id
 * @desc Редактирование сотрудника
 * @access Private
 */
const edit = async (req, res) => {
    try {
        const data = req.body;
        const { id } = data;

        await prisma.employee.update({
            where: {
                id
            },
            data
        });

        res.status(204).json('OK');
    } catch {
        return res.status(500).json({
            message: 'Не удалось отредактировать сотрудника!'
        });
    }
};
/**
 * @route POST /api/employees/:id
 * @desc Получение данных сотрудника
 * @access Private
 */
const employee = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await prisma.employee.findUnique({
            where: {
                id
            }
        });

        res.status(200).json(employee);
    } catch {
        return res.status(500).json({
            message: 'Не удалось получить сотрудника!'
        });
    }
};

module.exports = {
    all,
    addEmployee,
    edit,
    remove,
    employee
}