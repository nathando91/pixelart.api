import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { GqlSdk, InjectSdk } from '../sdk/sdk.module';

export type HasuraJwtClaims<
  CustomClaims extends Record<string, string | string[]>,
> = {
  'https://hasura.io/jwt/claims': {
    'x-hasura-default-role': string;
  } & CustomClaims;
};

export type UserJwtClaims = HasuraJwtClaims<{
  'x-hasura-user-id': string;
  'x-hasura-role': string;
}>;

export type JWTRefreshClaims = {
  'x-hasura-user-id': string;
};

@Injectable()
export class AuthService {
  constructor(
    @InjectSdk() private readonly sdk: GqlSdk,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) { }

  public async authorize(token?: string) {
    if (!token) {
      return {
        'X-Hasura-Role': 'anonymous',
      };
    }

    try {
      const payload: UserJwtClaims = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_SECRET_ACCESS_TOKEN'),
      });

      console.log('payload', payload);

      return {
        'X-Hasura-Role':
          payload['https://hasura.io/jwt/claims']['x-hasura-role'],
        'X-Hasura-User-Id':
          payload['https://hasura.io/jwt/claims']['x-hasura-user-id'],
      };
    } catch (error) {
      console.error('error', error);
      throw new UnauthorizedException(error.message);
    }
  }
}
