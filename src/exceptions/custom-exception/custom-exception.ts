import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor() {
    super('Custom Exception Message', HttpStatus.BAD_REQUEST);
  }
}
