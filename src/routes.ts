export const routes = {
  home: '/',
  explore: '/explore',
  chat: '/chat',

  // profile routes
  profile: '/:username',
  info: '/:username',
  posts: '/:username/posts',
  projects: '/:username/projects',
  components: '/:username/components',
  articles: '/:username/articles',
  videos: '/:username/videos',
  saved: '/:username/saved',
  tagged: '/:username/tagged',

  login: '/login',
  register: '/register',
  verify: '/auth/verify/:token',

  devComponents: '/dev/components',
};
