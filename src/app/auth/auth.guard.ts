import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { isLoggedIn } from './auth.selectors';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  return store.pipe(
    select(isLoggedIn),
    tap((loggedIn) => {
      if (!loggedIn) {
        router.navigateByUrl('/');
      }
    })
  );
};
