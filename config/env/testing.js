module.exports = {
	DB_URL: "mongodb://localhost:27017/testing",
	sessionSecret: "heregoessecret",
	PORT: process.env.NODE_PORT || 3000,
	HOST: process.env.NODE_HOST || 'localhost'
}
