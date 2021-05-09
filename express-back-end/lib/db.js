// Connects to our database
let dbParams = {};
if (process.env.POSTGRES_URL) {
	dbParams.connectionString = process.env.POSTGRES_URL;
} else {
	dbParams = {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
	};
}

module.exports = dbParams;
