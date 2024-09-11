interface HttpRequest {
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

interface IController {
    call: () => string
    save: () => string
    delete: () => string
}