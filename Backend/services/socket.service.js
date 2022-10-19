var gIo = null

const ObjectId = require('mongodb').ObjectId
const dbService = require('../services/db.service')
async function setupSocketAPI(http) {
    gIo = require('socket.io')(http, {
        cors: {
            origin: '*'
        }
    })

    gIo.on('connection', socket => {
        socket.on('socket_send_msg',msg=>{
            gIo.emit('socket_add_msg',msg)
        })






    })
    async function getUserSocket(siteId) {
        const sockets = await _getAllSockets()
        const socket = sockets.find(s =>{
           return s.siteId === siteId.toString()})

        return socket
    }

    async function _getAllSockets() {
        const sockets = await gIo.fetchSockets()
        return sockets
    }


}
module.exports = {
    setupSocketAPI
}