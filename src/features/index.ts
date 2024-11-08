import { lazy } from 'react';

export { default as Home } from './home/Home';
export const LazyHome = lazy(() => import('./home/Home'));

export { default as Components } from './dev/Components';
export const LazyComponents = lazy(() => import('./dev/Components'));
