import type { IController } from '@/controller';

import type { IRequestData } from '@/types';

const requestController: IController = {
    call: async (requestData: IRequestData) => {
        console.debug("calling api");

        let response:object|null = {
            data: null,
        };
        let error:object|null = null;

        response = fetch(requestData.url, {
            method: requestData.type,
            // headers: requestData.headers,
            // data: requestData.body
        })

        return response;
    },
    save: () => {
        return "save"
    },
    delete: () => {
        return "delete"
    }
}

export default requestController; 