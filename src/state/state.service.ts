import { Injectable } from "@nestjs/common";
import { LoggingService } from "../common/logging.service";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class StateService {
    private _state: BehaviorSubject<string> = new BehaviorSubject<string>('normal');

    constructor(private readonly _log: LoggingService) {

    }

    public set onStateChange(callback) {
        this._state.subscribe(callback);
    }

    public get state() {
        return this._state.value;
    }

    public set state(state: string) {
        this._state.next(state);
    }
}