import mongoose from 'mongoose';
import http from 'http';
import { app } from './app';
import { config } from 'dotenv';

config();

const port = process.env.PORT ?? 8080;
const atlasUrl = process.env.ATLAS_URL;

const startServer = () => {
  http.createServer(app).listen(port, () => {
    console.log(`Application running on http://localhost:${port}`);
  });
};

const connectToDatabase = async () => {
  if (!atlasUrl) {
    throw new Error('ATLAS_URL is not defined in the environment variables.');
  }

  try {
    await mongoose.connect(atlasUrl, {
      ssl: true, // Enables SSL/TLS connection
      tlsAllowInvalidCertificates: false, // Ensures only valid certificates are accepted
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
    process.exit(1);
  }
};

const bootstrap = async () => {
  try {
    await connectToDatabase();
    startServer();
  } catch (error) {
    console.error('Error during bootstrap:', error);
    process.exit(1);
  }
};

bootstrap();
