import { lazy } from 'react';

// Lazy-loaded components
export const LazyHome = lazy(() => import('./home/Home'));
export const LazyComponents = lazy(() => import('./dev/Components'));

// Default exports for non-lazy imports
export { default as Home } from './home/Home';
export { default as Components } from './dev/Components';
