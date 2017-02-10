import { Action } from '@ngrx/store';
import { type } from '../util';

export const ActionTypes = {
  OPEN_SIDENAV:   type('[Layout] Open Sidenav'),
  CLOSE_SIDENAV:  type('[Layout] Close Sidenav'),
  TOGGLE_FILTERBAR:  type('[Layout] Toggle Filter-Bar')
};


export class OpenSidenavAction implements Action {
  type = ActionTypes.OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
  type = ActionTypes.CLOSE_SIDENAV;
}

export class ToggleFilterbarAction implements Action {
  type = ActionTypes.TOGGLE_FILTERBAR;
}

export type Actions
  = OpenSidenavAction
  | CloseSidenavAction
  | ToggleFilterbarAction;