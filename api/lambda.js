const serverlessExpress = require('@vendia/serverless-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

let isConnected = false;

const connectDB = async () => {
  if (!isConnected) {
    const DB = process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD,
    );
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('DB Connection successful!');
    isConnected = true;
  }
};

let server;

exports.handler = async (event, context) => {
  await connectDB();

  console.log(JSON.stringify(event, null, 2))

  if (!server) {
    server = serverlessExpress({ app });
  }

  // Return the proxied event directly
  return server(event, context);
};