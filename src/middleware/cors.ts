import * as cors from 'cors'
import { Application } from "express";

export function accesscors(app: Application) {
  const options: cors.CorsOptions = {
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: true,
    preflightContinue: false,
  };
  app.use(cors(options));
}
