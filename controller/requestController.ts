import type { IController } from '@/controller';
import axios from 'axios';

import type { IRequestData } from '@/types';

const requestController: IController = {
    call: async (requestData: IRequestData) => {
        console.debug("calling api");
        return "call"
    },
    save: () => {
        return "save"
    },
    delete: () => {
        return "delete"
    }
}

export default requestController; 