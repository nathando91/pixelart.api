import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SdkModule } from '../sdk/sdk.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { SignatureService } from './signature.service';
import { JwtRefreshTokenStrategy } from './strategy/jwt-refresh.strategy';

@Module({
  imports: [
    SdkModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET_ACCESS_TOKEN'),
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    SignatureService,
    JwtStrategy,
    JwtRefreshTokenStrategy,
  ],
})
export class AuthModule {}
