import { appError } from "./appError";

export class NotFoundError extends appError {
  constructor(message:string) {
    super(message, 404);
  }
}