import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatar/avatar-25.webp',
};

// ----------------------------------------------------------------------

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  status: index % 4 ? 'active' : 'banned',
  role:
    [
      'Leader',
      'Hr Manager',
      'UI Designer',
      'UX Designer',
      'UI/UX Designer',
      'Project Manager',
      'Backend Developer',
      'Full Stack Designer',
      'Front End Developer',
      'Full Stack Developer',
    ][index] || 'UI Designer',
}));

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: `/assets/images/cover/cover-${index + 1}.webp`,
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: `/assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status:
      ([1, 3, 5].includes(setIndex) && 'sale') || ([4, 8, 12].includes(setIndex) && 'new') || '',
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/flags/ic-flag-de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/assets/icons/flags/ic-flag-fr.svg',
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    '1983, orders, $4220',
    '12 Invoices have been paid',
    'Order #37745 from September',
    'New order placed #XF-2356',
    'New order placed #XF-2346',
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

// ----------------------------------------------------------------------

export const _tasks = [...Array(5)].map((_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

// ----------------------------------------------------------------------

export const _notifications = [
  {
    id: _id(1),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatarUrl: null,
    type: 'order-placed',
    postedAt: _times(1),
    isUnRead: true,
  },
  {
    id: _id(2),
    title: _fullName(2),
    description: 'answered to your comment on the Minimal',
    avatarUrl: '/assets/images/avatar/avatar-2.webp',
    type: 'friend-interactive',
    postedAt: _times(2),
    isUnRead: true,
  },
  {
    id: _id(3),
    title: 'You have new message',
    description: '5 unread messages',
    avatarUrl: null,
    type: 'chat-message',
    postedAt: _times(3),
    isUnRead: false,
  },
  {
    id: _id(4),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatarUrl: null,
    type: 'mail',
    postedAt: _times(4),
    isUnRead: false,
  },
  {
    id: _id(5),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatarUrl: null,
    type: 'order-shipped',
    postedAt: _times(5),
    isUnRead: false,
  },
];

export const repositories = [
  {
    id: 10270250,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
    name: 'react',
    full_name: 'facebook/react',
    private: false,
    html_url: 'https://github.com/facebook/react',
    description: 'The library for web and native user interfaces.',
    fork: false,
    url: 'https://api.github.com/repos/facebook/react',
    languages_url: 'https://api.github.com/repos/facebook/react/languages',
    created_at: '2013-05-24T16:15:54Z',
    updated_at: '2024-03-17T02:37:45Z',
    pushed_at: '2024-03-17T01:34:23Z',
    homepage: 'https://react.dev',
    size: 405436,
    stargazers_count: 220201,
    watchers_count: 220201,
    language: 'JavaScript',
    languageData: {
      JavaScript: 4168197,
      HTML: 120786,
      CSS: 64424,
      'C++': 44290,
      TypeScript: 21136,
      CoffeeScript: 17378,
      C: 5227,
      Shell: 2205,
      Python: 259,
      Makefile: 189,
    },
    forks_count: 44998,
    open_issues_count: 1620,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    topics: ['declarative', 'frontend', 'javascript', 'library', 'react', 'ui'],
    subscribers_count: 6634,
    owner: {
      login: 'facebook',
      id: 69631,
      node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
      avatar_url: 'https://avatars.githubusercontent.com/u/69631?v=4',
    },
  },
  {
    id: 1296269,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
    name: 'Hello-World',
    full_name: 'octocat/Hello-World',
    private: false,
    html_url: 'https://github.com/octocat/Hello-World',
    description: 'This your first repo!',
    fork: false,
    url: 'https://api.github.com/repos/octocat/Hello-World',
    homepage: 'https://github.com',
    forks_count: 9,
    forks: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues_count: 0,
    open_issues: 0,
    is_template: false,
    topics: ['octocat', 'atom', 'electron', 'api'],
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    has_downloads: true,
    has_discussions: false,
    archived: false,
    disabled: false,
    visibility: 'public',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    permissions: {
      pull: true,
      push: false,
      admin: false,
    },
    allow_rebase_merge: true,
    temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
    allow_squash_merge: true,
    allow_auto_merge: false,
    delete_branch_on_merge: true,
    allow_merge_commit: true,
    subscribers_count: 42,
    network_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZW1pdA==',
    },
    organization: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url: 'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url: 'https://api.github.com/users/octocat/received_events',
      type: 'Organization',
      site_admin: false,
    },
  },
  {
    id: 1296269,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
    name: 'Hello-World-Template',
    full_name: 'octocat/Hello-World-Template',
    owner: {
      login: 'octocat',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://github.com/images/error/octocat_happy.gif',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url: 'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url: 'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false,
    },
    private: false,
    html_url: 'https://github.com/octocat/Hello-World-Template',
    description: 'This your first repo!',
    fork: false,
    url: 'https://api.github.com/repos/octocat/Hello-World-Template',
    git_url: 'git:github.com/octocat/Hello-World-Template.git',
    homepage: 'https://github.com',
    language: null,
    forks: 9,
    forks_count: 9,
    stargazers_count: 80,
    watchers_count: 80,
    watchers: 80,
    size: 108,
    default_branch: 'master',
    open_issues: 0,
    open_issues_count: 0,
    is_template: true,
    license: {
      key: 'mit',
      name: 'MIT License',
      url: 'https://api.github.com/licenses/mit',
      spdx_id: 'MIT',
      node_id: 'MDc6TGljZW5zZW1pdA==',
      html_url: 'https://api.github.com/licenses/mit',
    },
    topics: ['octocat', 'atom', 'electron', 'api'],
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    has_pages: false,
    has_downloads: true,
    archived: false,
    disabled: false,
    visibility: 'public',
    pushed_at: '2011-01-26T19:06:43Z',
    created_at: '2011-01-26T19:01:12Z',
    updated_at: '2011-01-26T19:14:43Z',
    permissions: {
      admin: false,
      push: false,
      pull: true,
    },
    allow_rebase_merge: true,
    temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
    allow_squash_merge: true,
    allow_auto_merge: false,
    delete_branch_on_merge: true,
    allow_merge_commit: true,
    subscribers_count: 42,
    network_count: 0,
  },
];