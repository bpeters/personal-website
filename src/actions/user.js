import * as actions from '../constants';

import config from '../../tools/config';

export const initialize = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_SET_VALUES,
      payload: {
        initialized: true,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.USER_SET_VALUES,
      payload: {
        error,
      },
    });
  }
};
