import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JWTRefreshClaims } from '../auth.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: (e) => {
        const payload: { input: any } = ExtractJwt.fromBodyField('input')(
          e,
        ) as any;

        return payload['input']['refresh_token'];
      },
      secretOrKey: configService.get('JWT_SECRET_REFRESH_TOKEN'),
    });
  }

  async validate(payload: JWTRefreshClaims) {
    return {
      userId: payload['x-hasura-user-id'],
    };
  }
}
