import * as layout from '../actions/layout';


export interface State {
  showSidenav: boolean;
  showFilterbar: boolean;
}

const initialState: State = {
  showSidenav: true,
  showFilterbar: true
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.CLOSE_SIDENAV:
      return {
        showSidenav: false,
        showFilterbar: state.showFilterbar
      };

    case layout.ActionTypes.OPEN_SIDENAV:
      return {
        showSidenav: true,
        showFilterbar: state.showFilterbar
      };

    case layout.ActionTypes.TOGGLE_FILTERBAR:
      return {
        showSidenav: state.showSidenav,
        showFilterbar: !state.showFilterbar
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowFilterbar = (state: State) => state.showFilterbar;
