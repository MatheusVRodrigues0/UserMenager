import { appError } from "./appError";

export class ForbiddenError extends appError{
  constructor(message:string) {
    super(message, 403)    
  }
}