export const db = {
    dbClient: null,
    connect: async function(url) {
        const mysql = require('mysql2')
        const connection = await mysql.createConnection(url);

        connection.connect((err) => {
            if (err) {
              console.error('Error connecting to DB ' + err.stack);
              return;
            }
            console.log('Connected to planet scale DB');
            this.dbClient = connection
        });
    },
    getConnection: function() {
        if (!this.dbClient) {
            console.log('You need to call .connect() first!');
            process.exit(1);
        }

        return this.dbClient;
    },
}