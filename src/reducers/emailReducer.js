import { actionTypes } from "../utils/constants";

const {
  INITIALIZE_EMAILS,
  INITIALIZE_SINGLE_EMAIL,
  MARK_AS_FAVORITE,
  MARK_AS_READ,
} = actionTypes;

export const initialState = {
  emails: [],
  email: [],
};

export const actionMap = {
  [INITIALIZE_EMAILS]: (state, payload) => ({
    ...state,
    emails: payload.map((email) => ({
      ...email,
      favorite: false,
      read: false,
    })),
  }),
  [INITIALIZE_SINGLE_EMAIL]: (state, payload) => ({ ...state, email: payload }),
  [MARK_AS_READ]: (state, payload) => ({
    ...state,
    emails: state.emails.map((email) =>
      email.id === payload ? { ...email, read: true } : email
    ),
  }),
  [MARK_AS_FAVORITE]: (state, payload) => ({
    ...state,
    emails: state.emails.map((email) =>
      email.id === payload ? { ...email, favorite: true } : email
    ),
  }),
};

export const emailReducer = (state, action) => {
  const newState = actionMap?.[action.type]?.(state, action.payload);
  return newState ?? state;
};
