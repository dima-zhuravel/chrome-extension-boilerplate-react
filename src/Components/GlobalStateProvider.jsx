import React, { useReducer } from 'react';

import GlobalStateContext from '../store/context';
import { reducer, defaultState } from '../store/reducer';

const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return <GlobalStateContext.Provider value={{ state, dispatch }}>{children}</GlobalStateContext.Provider>;
};

export default GlobalStateProvider;
