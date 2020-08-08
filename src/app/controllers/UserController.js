import passwordGenerator from 'password-generator'

import Queue from '../lib/Queue'
import db from '../../database/connection'


export default {
    async store(req, res) {
        const { name, email } = req.body

        const user = {
            name: name,
            email: email,
            password: passwordGenerator(15, false)
        }

        await db('users').insert({
            name: user.name,
            email: user.email,
            password: user.password
        })

        await Queue.add(`RegistrationMail`, { user })

        return res.json(user)
    }
}