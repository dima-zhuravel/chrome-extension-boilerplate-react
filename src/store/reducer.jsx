import { ACTIVE_MENU } from './actions';

export const defaultState = {
    navigation: {
        activeMenu: 'home'
    }
};

const handlers = {
    [ACTIVE_MENU]: (state, { payload }) => ({
        ...state,
        navigation: { activeMenu: payload }
    })
};

export const reducer = (state = defaultState, action) => {
    const handler = handlers[action.type];

    return handler ? handler(state, action) : state;
};
