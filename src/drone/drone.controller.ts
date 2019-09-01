import { Controller, Get, Post, Delete } from '@nestjs/common';
import { StateService } from '../state/state.service';
import { LoggingService } from '../common/logging.service';

@Controller('state')
export class DroneController {
    constructor(private _stateService: StateService, private readonly _logger: LoggingService) {

    }
}