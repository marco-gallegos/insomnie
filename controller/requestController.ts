import type { IController } from './index';
import axios from 'axios';

const requestController: IController = {
    call: () => {
        console.debug("calling api")
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