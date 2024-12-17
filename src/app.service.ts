import { Injectable } from '@nestjs/common';
import { GqlSdk, InjectSdk } from './sdk/sdk.module';

@Injectable()
export class AppService {
  constructor(@InjectSdk() private readonly sdk: GqlSdk) {
  }

  getHello(): string {
    return 'Hello World, the time now is =>' + new Date();
  }

  async onModuleInit() {
    console.log('onModuleInit');
  }

}
