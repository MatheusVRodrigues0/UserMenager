import { appError } from "./appError";

export class BusinnesRule extends appError{
  constructor(message:string){
    super(message, 422);
  }
}