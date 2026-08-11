export abstract class BaseCustomException extends Error {
  abstract status: number;
  protected constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
  formatError() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
