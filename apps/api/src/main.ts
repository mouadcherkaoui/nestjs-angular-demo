/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as express from 'express';
import * as functions from 'firebase-functions'

import { AppModule } from './app/app.module';
import { INestApplication } from '@nestjs/common';

const globalPrefix = 'api';
const port = process.env.port || 3333;

function configureAppMiddlewares(app: INestApplication){

  app.setGlobalPrefix(globalPrefix);
  const options = new   DocumentBuilder()
    .setTitle('Gemo-Challenge Api')
    .setDescription('Gemography Challenge api over NestJs server')
    .setVersion('1.0')
    .addTag('gemography')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
