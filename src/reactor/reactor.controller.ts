import { Controller, Get, Post, Delete } from '@nestjs/common';
import { LoggingService } from '../common/logging.service';

@Controller('reactor')
export class ReactorController {
    constructor(private readonly _logger: LoggingService) {

    }

    
}