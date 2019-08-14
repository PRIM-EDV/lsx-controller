import { Module } from '@nestjs/common';
import { QlcService } from './common/qlc.service';
import { LoggingService } from './common/logging.service';
import { StateService } from './state/state.service';
import { StateController } from './state/state.controller';

@Module({
  imports: [],
  controllers: [StateController],
  providers: [QlcService, LoggingService, StateService],
})
export class AppModule {}