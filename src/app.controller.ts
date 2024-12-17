import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/login')
  async login(@Body() body) {
    const { username, password } = body;
    return this.appService.login(username, password);
  }

  @Post('/register')
  async register(@Body() body) {
    const { username, password } = body;
    return this.appService.register(username, password);
  }
}
