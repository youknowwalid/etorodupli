export type MarketTab = 'Stocks' | 'ETFs' | 'Crypto';

export const marketPreview: Record<MarketTab, Array<{ symbol: string; name: string; value: string; change: string }>> = {
  Stocks: [
    { symbol: 'NVDA', name: 'NVIDIA Corporation', value: '$229.16', change: '+0.39%' },
    { symbol: 'AMZN', name: 'Amazon.com Inc', value: '$258.28', change: '+0.14%' },
    { symbol: 'MSFT', name: 'Microsoft Corporation', value: '$542.75', change: '+0.62%' },
  ],
  ETFs: [],
  Crypto: [],
};

export const settingsSections = [
  {
    title: 'Display',
    description: 'Set your language, currency and other general preferences.',
    icon: 'display',
  },
  {
    title: 'Account',
    description: 'Manage account preferences and security options.',
    icon: 'account',
  },
  {
    title: 'Trading',
    description: 'Adjust your core trading experience.',
    icon: 'trading',
  },
  {
    title: 'Notifications',
    description: 'Manage the communications you receive.',
    icon: 'notifications',
  },
  {
    title: 'Privacy and Blocking',
    description: 'Control how other users see you and your activity.',
    icon: 'privacy',
  },
  {
    title: 'Recurring Orders',
    description: 'View recurring-order preferences. No deposits are connected.',
    icon: 'recurring',
  },
] as const;

export const sidebarPrimary = ['Home', 'Watchlist', 'Portfolio', 'Discover', 'Wallet'];
export const sidebarMore = [
  'App Store',
  'Copy Pro Investors',
  'Economic Calendar',
  'Agent Portfolios',
  'eToro Club',
  'Invite Friends',
  'Withdraw Funds',
  'Settings',
  'Help & Resources',
  'Academy',
  'Try Edge',
];
