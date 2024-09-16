import type { IRequestData } from "@/types";

export interface HttpRequest {
    url: string;
    method: string;
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, string>;
    authentication?: {
        token: string;
        type: string;
    };
}

export interface ICallResponseType {
    response: object,
    error: object,
}

export interface IController {
    call: (requestData: IRequestData) => ICallResponseType
    test: (requestData: IRequestData) => boolean
    save: () => string
    delete: () => string
}