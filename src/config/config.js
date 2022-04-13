// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-efcacb8f6f4dbe7fcce1ca79b71d0c5db7e5e498.clvwxqiiaxiy.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'BDWebApp',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'yT(S*u;)I98Z_$a<cm&;2vfB2IsBg*m='
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}