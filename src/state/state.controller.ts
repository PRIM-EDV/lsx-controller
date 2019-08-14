import { Controller, Get, Post, Delete } from '@nestjs/common';
import { StateService } from './state.service';
import { LoggingService } from '../common/logging.service';

@Controller('state')
export class StateController {
    constructor(private _stateService: StateService, private readonly _logger: LoggingService) {

    }

    // @Post('alert')
    // public async setAlert(): Promise<any> {
    //     if (this._stateService.state != 'lockdown') {
    //         this._stateService.state = 'alert'
    //         this._logger.info('Changing state to: alert')
    //     }
    // }

    // @Delete('alert')
    // public async clearAlert(): Promise<any> {

    // }

    // @Post('lockdown')
    // public async setLockdown(): Promise<any> {

    // }

    // @Delete('lockdown')
    // public async clearLockdown() : Promise<any> {

    // }

    // @Post('powersave')
    // public async setPowersave(): Promise<any> {

    // }

    // @Delete('powersave')
    // public async clearPowersave(): Promise<any> {
        
    // }
}