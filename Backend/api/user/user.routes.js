const express = require('express')
const router = express.Router()
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {getUser, getUsers, deleteUser, updateUser} = require('./user.controller')

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id',  updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

// router.put('/:id',  requireAuth, updateUser)
router.delete('/:id', deleteUser)

module.exports = router