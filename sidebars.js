module.exports = {
  mySidebar: [
    'overview',
    'release-notes',
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'installation/overview',
      },
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
      collapsed: true,
      link: {
        type: 'doc',
        id: 'administration/overview',
      },
      items: [
        'administration/configuration-file',
        'administration/manage-lsam',
      ],
    },
    {
      type: 'category',
      label: 'Advanced features',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'advanced-features/overview',
      },
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
      collapsed: true,
      link: {
        type: 'doc',
        id: 'reference/overview',
      },
      items: [
        'reference/machine-messages',
        'reference/known-issues',
      ],
    },
  ],
};
