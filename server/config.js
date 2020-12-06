module.exports = {
  port: process.env.PORT || 3000,
  heroku: {
    development: {
      host: "127.0.0.1",
      post: 6379,
    },
    production: {
      host: "ec2-54-74-197-16.eu-west-1.compute.amazonaws.com",
      port: 25669,
    }
  }
}