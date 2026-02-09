import { appError } from "./appError";

export class ValidationError extends appError {
  constructor(message:string) {
    super(message, 400)
  }
}