module.exports = {
    test: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/testDB.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    },
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/devDB.sqlite'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true
    }
}