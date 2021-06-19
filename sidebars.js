module.exports = {
  mySidebar: [
    'index',
    'release-notes',
    {
      type: 'category', 
      label: 'Installation',
      collapsed: false,
      items: [
        'installation/prerequisites',
        'installation/determine-installation-media',
        'installation/new-installation',
        'installation/upgrade-installation',
        'installation/silent-mode',
        'installation/multiple-instances',
      ], 
    },
    {
      type: 'category', 
      label: 'Administration',
      collapsed: false,
      items: [
        'administration/configuration-file',
        'administration/manage-lsam',
      ], 
    },
    {
      type: 'category', 
      label: 'Advanced features',
      collapsed: false,
      items: [
        'advanced-features/restart-on-step',
        'advanced-features/jors',
        'advanced-features/logging',
        'advanced-features/kill-command',
        'advanced-features/msgin',
      ], 
    },
    {
      type: 'category', 
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/machine-messages',
        'reference/known-issues',
      ], 
    },
  ],
};
