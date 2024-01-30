import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

// memoized functions - meaning it keeps memory of previous executions
export const isLoggedIn = createSelector(selectAuthState, (auth) => !!auth.user);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
