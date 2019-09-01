import { Controller, Get, Post, Delete } from '@nestjs/common';
import { LoggingService } from '../common/logging.service';
import { StateService } from 'src/state/state.service';

@Controller('reactor')
export class ReactorController {
    constructor(private readonly _logger: LoggingService, private readonly _stateService: StateService) {

    }

    @Get('alert_pressure')
    public async alertPressure():Promise<any> {
        if (this._stateService.state == 'normal' || this._stateService.state == 'powersave') {
            // Trigger Warning
        }
    }

    @Get('alert_heat')
    public async alertHeat(): Promise<any> {
        if (this._stateService.state == 'normal' || this._stateService.state == 'powersave') {
            // Trigger Warning
        }
    }

    @Get('power_low')
    public async powerLow(): Promise<any> {
        if (this._stateService.state == 'normal' || this._stateService.state == 'shutdown') {
            this._stateService.state = 'powersave';
            // Trigger Warning
        }
    }

    @Get('power_high')
    public async powerHigh(): Promise<any> {
        if (this._stateService.state == 'powersave' || this._stateService.state == 'shutdown') {
            this._stateService.state = 'normal';
        }
    }

    @Get('shutdown')
    public async shutdown(): Promise<any> {
        if (this._stateService.state == 'normal' || this._stateService.state == 'powersave') {
            this._stateService.state = 'shutdown';
        }
    }
    
}