import type { IController } from '@/controller';
import axios from 'axios';

import type { IRequestData } from '@/types';

const requestController: IController = {
    call: async (requestData: IRequestData) => {
        console.debug("calling api");

        let response:object|null = {
            data: null,
        };
        let error:object|null = null;

        try {
            response = await axios({
                method: requestData.type,
                url: requestData.url,
                // headers: requestData.headers,
                // data: requestData.body
            })
        } catch (err) {
            error = err;
        }

        return {response, error};
    },
    save: () => {
        return "save"
    },
    delete: () => {
        return "delete"
    }
}

export default requestController; 