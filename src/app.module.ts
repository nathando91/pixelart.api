import { HasuraModule } from '@golevelup/nestjs-hasura';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppLogger } from './logger.service';
import { LoggingInterceptor } from './logging.interceptor';
import { SdkModule } from './sdk/sdk.module';
import { ColyseusModule } from './colyseus/colyseus.module';

@Module({
  imports: [
    HttpModule,
    SdkModule,
    ScheduleModule.forRoot(),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HasuraModule.forRootAsync(HasuraModule, {
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const webhookSecret = configService.get<string>(
          'NESTJS_EVENT_WEBHOOK_SHARED_SECRET',
        );

        const environment = configService.get<string | undefined>('NODE_ENV');

        return {
          webhookConfig: {
            secretFactory: webhookSecret,
            secretHeader: 'nestjs-event-webhook',
          },
          managedMetaDataConfig:
            environment === undefined || environment === 'development'
              ? {
                metadataVersion: 'v3',
                dirPath: join(process.cwd(), 'hasura/metadata'),
                nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
                secretHeaderEnvName: 'NESTJS_EVENT_WEBHOOK_SHARED_SECRET',
                defaultEventRetryConfig: {
                  numRetries: 3,
                  timeoutInSeconds: 100,
                  intervalInSeconds: 30,
                  toleranceSeconds: 21600,
                },
              }
              : undefined,
        };
      },
    }),
    ColyseusModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppLogger,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})
export class AppModule { }
