/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectRepoLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('repoLoading')
);

const makeSelectRepoError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('repoError')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectRepoLoading,
  makeSelectRepoError,
  makeSelectRepos,
  makeSelectLocation,
};
