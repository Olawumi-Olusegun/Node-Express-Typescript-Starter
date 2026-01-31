import { NextFunction, Request, Response } from "express";
import * as z from "zod";

type ValidationOption = {
  body?: z.ZodTypeAny;
  query?: z.ZodTypeAny;
  params?: z.ZodTypeAny;
};

export const validateData = (schema: ValidationOption) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    try {
      if (schema.body) {
        req.body =  await schema.body.parseAsync(req.body)  as Request['body'];
        // req.body = schema.body.parse(req.body) as Request["body"];
      }
      if (schema.query) {
        req.query =  await schema.query.parseAsync(req.query) as Request['query'];
        // req.query = schema.query.parse(req.query) as Request["query"];
      }
      if (schema.params) {
        req.params =  await schema.params.parseAsync(req.params) as Request['params'];
        // req.params = schema.params.parse(req.params) as Request["params"];
      }
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {

        // Better error formatting
        const firstError = error.issues[0];
        let errorMessage = firstError?.message;

        // Handle the "expected object, received undefined" case
        if (errorMessage?.includes("expected object, received undefined")) {
          errorMessage = "Request body is required";
        }

        return res.status(400).json({
          message: "Invalid request!",
          success: false,
          errors: errorMessage,
        });
      }
      return res.status(400).json({
        message: "Invalid request...",
        success: false,
        errors: error,
      });
    }
  };
};
