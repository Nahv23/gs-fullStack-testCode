import { GET_PHONE_DETAILS } from '../../Actions';


export const createDataPhonesState = () => ({
    phone: []
});

const infoPhone = (state = createDataPhonesState(), action) => {
    switch (action.type) {
        case GET_PHONE_DETAILS:
            state.phone = action.value
            return state;
        default:
            return state;
    }
};

export default infoPhone;