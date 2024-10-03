const express = require('express');
const { all, addEmployee } = require('../controllers/employees');
const router = express.Router();
const { auth } = require('../middleware/auth');


// api/employees
router.get('/', auth, all);
// api/employees/:id
router.get('/:id', auth, () => console.log('get single emplyee'));
// api/emplyees/add
router.post('/add', auth, addEmployee);
// api/emplyees/remove
router.post('/remove/:id', auth, () => console.log('delete employee'));
// api/emplyees/edit/:id
router.put('/edit/:id', auth, () => console.log('delete employee'));

module.exports = router;