import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from './app.type';
import { ScenarioModule } from './scenario/scenario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get(MONGO_URL),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }),
    }),
    ScenarioModule,
  ],
})
export class AppModule {}
