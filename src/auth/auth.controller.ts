import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('/authorize')
  async authorize(@Headers() headers) {
    const authorization = headers['authorization'];
    if (!authorization) {
      return {
        'X-Hasura-Role': 'anonymous',
      };
    }

    const [, token] = authorization.split(' ');
    if (!token) throw new UnauthorizedException('Invalid JWT token format');

    return this.authService.authorize(token);
  }
}
