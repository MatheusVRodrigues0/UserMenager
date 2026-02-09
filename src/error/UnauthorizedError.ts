import { appError } from "./appError";

export class UnauthorizedError extends appError {
  constructor(message: string) {
    super(message, 401)
  }
}