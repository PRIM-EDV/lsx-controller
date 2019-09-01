import { Module } from '@nestjs/common';
import { QlcService } from './common/qlc.service';
import { LoggingService } from './common/logging.service';
import { StateService } from './state/state.service';
import { StateController } from './state/state.controller';
import { ReactorController } from './reactor/reactor.controller';

@Module({
  imports: [],
  controllers: [StateController, ReactorController],
  providers: [QlcService, LoggingService, StateService],
})
export class AppModule {}