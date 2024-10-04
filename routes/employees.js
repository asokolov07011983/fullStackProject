const express = require('express');
const {
    all,
    addEmployee,
    edit,
    remove,
    employee } = require('../controllers/employees');
const router = express.Router();
const { auth } = require('../middleware/auth');


// api/employees
router.get('/', auth, all);
// api/employees/:id
router.get('/:id', auth, employee);
// api/emplyees/add
router.post('/addEmployee', auth, addEmployee);
// api/emplyees/remove
router.post('/remove/:id', auth, remove);
// api/emplyees/edit/:id
router.put('/edit/:id', auth, edit);

module.exports = router;