import { createSelector } from 'reselect';

// Memorized selectors
export const selectPage = (state) => state.get('albumViewPage');
export const selectAlbum = (state) => state.get('albums');

export const makeSelectAlbumLoading = () => createSelector(
  selectPage,
  (pageState) => pageState.get('albumLoading')
);

export const makeSelectAlbumError = () => createSelector(
  selectPage,
  (pageState) => pageState.get('albumError')
);

export const makeSelectMemories = () => createSelector(
  selectAlbum,
  (albumState) => {
    const gallery = albumState.get('gallery');
    const album = albumState.get('album');

    return albumState.getIn([gallery, album, 'memories'], []);
  }
);

export const selectNextPage = (state) => {
  const pageState = selectPage(state);
  const albumState = selectAlbum(state);
  const gallery = albumState.get('gallery');
  const album = albumState.get('album');

  return {
    gallery,
    album,
    memories: albumState.getIn([gallery, album, 'memories']),
    page: pageState.get('page'),
  };
};

export const makeSelectNextPage = () => createSelector(
  selectPage,
  selectAlbum,
  selectNextPage,
);

export const makeSelectMoreThumbs = () => createSelector(
  selectPage,
  (pageState) => pageState.get('hasMore')
);

export const makeSelectCurrentMemory = () => createSelector(
  selectAlbum,
  (albumState) => albumState.get('currentMemory')
);
