import { Injectable } from "@nestjs/common";
import { LoggingService } from "./logging.service";
import  * as WebSocket  from "ws"

const URL = 'ws://127.0.0.1:9999/qlcplusWS'

@Injectable()
export class QlcService {
    private _ws: WebSocket;
    
    constructor(private readonly _log: LoggingService) {
       this._connectWebsocket();
    }

    public setWidgetValue(widgetId: number, value: number) {
        if(this._ws.readyState == WebSocket.OPEN) {

        } else {
            this._log.error(`Could not set widget value: WebSocket not connected`)
        }
    }
    // public send(id: number, value: number, step?: number) {

    // }

    private _onConnectionError() {
        // this._log.info(`Could not connect to ${URL} trying to reconnect...`)
        // setTimeout(this._reconnectWebsocket.bind(this), 5000);
    }

    private _onConnectionClosed() {
        this._log.info(`Could not connect to ${URL} retrying...`)
        setTimeout(this._reconnectWebsocket.bind(this), 5000);
    }

    private _onConnectionSuccess() {
        this._log.info(`Connected to ${URL}`)
    }

    private _reconnectWebsocket() {
        if (!this._ws || this._ws.readyState == WebSocket.CLOSED) {
            this._connectWebsocket();
        }
    }

    private _connectWebsocket() {
        this._ws = new WebSocket(URL);
        this._ws.on('error', this._onConnectionError.bind(this));
        this._ws.on('close', this._onConnectionClosed.bind(this))
        this._ws.on('open', this._onConnectionSuccess.bind(this))
    }
}