export class appError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}