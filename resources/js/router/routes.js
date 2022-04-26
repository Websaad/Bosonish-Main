function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  // { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/landing', name: 'landing', component: page('landing/index.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/verify/2fa', name: 'verify.2fa', component: page('auth/2fa.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/', name: 'home', component: page('home.vue') },
  { path: '/forms', name: 'forms', component: page('forms.vue') },
  { path: '/cards', name: 'cards', component: page('cards.vue') },
  { path: '/buttons', name: 'buttons', component: page('buttons.vue') },
  { path: '/slideout', name: 'slideout', component: page('slideout.vue') },
  {
    path: '/components',
    component: page('components/index.vue'),
    children: [
      { path: 'tabs', name: 'components.tabs', component: page('components/tabs.vue') }
    ]
  },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: '2fa', name: 'settings.2fa', component: page('2fa/2fa.vue') },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') },
      { path: 'notifications', name: 'settings.notifications', component: page('settings/notifications/index.vue') },
      // Roles Routes
      { path: 'roles', name: 'settings.roles', component: page('settings/roles/index.vue') },
      { path: 'permissions', name: 'settings.permissions', component: page('settings/permissions/index.vue') },
      { path: 'options', name: 'settings.options', component: page('settings/options/index.vue') },
      { path: 'roles/:id/permissions', name: 'settings.assign.permissions', component: page('settings/roles/assign.vue') },
      { path: 'users', name: 'settings.users', component: page('settings/users/index.vue') },
      // Activity Logs
      { path: 'activity', name: 'settings.activity', component: page('settings/activity/index.vue') }
    ]
  },

  { path: '/unauthorized', component: page('errors/401.vue') },
  { path: '*', component: page('errors/404.vue') }
]
