/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import "dotenv"
import * as admin  from 'firebase-admin';
import * as express from 'express';
import * as functions from 'firebase-functions'

import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';

const initFirebaseApp = () => admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID
  }),
  databaseURL: "https://backend-challenge-e45fc.firebaseio.com"
});;

function configureAppMiddlewares(app: INestApplication){

  const options = new   DocumentBuilder()
    .setTitle('Gemo-Challenge Api')
    .setDescription('Gemography Challenge api over NestJs server')
    .setVersion('1.0')
    .addTag('gemography')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  app.enableCors();
}

async function bootstrap() {
  const globalPrefix = 'api';
  const port = process.env.port || 3333;

  initFirebaseApp();

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);

  configureAppMiddlewares(app);

  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}


bootstrap();

const expressServer = express();

const createFunction =
  async (expressInstance): Promise<void> =>{

    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressInstance));

    configureAppMiddlewares(app);

    await app.init();
  };

createFunction(expressServer)
  .then(()=> console.log("Nest is ready"))
  .catch(err => console.error("Something went wrong!! ", err));

export const api = functions.https.onRequest(expressServer);
