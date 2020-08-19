import Mail from "../lib/Mail"

export default {
    key: `RegistrationMail`,
    options: {
        delay: 5000,
        priority: 3,
        // repeat: {
        //     every: 1,
        //     limit: 100
        // },
        lifo: true
    },
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: `NomadWeb <contato@nomadweb.com.br>`,
            to: `${user.name} <${user.email}>`,
            subject: `Cadastro de Usuário`,
            html: `Olá ${user.name}, seja bem vindo à NomadWeb!`
        })
    }
}

