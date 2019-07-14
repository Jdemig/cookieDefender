// ESLint configuration for this directory and below.  Before changing configuration here, consider whether the change
// would be most appropriate: here, below, or above in the hierarchy.
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  plugins: ['flowtype', 'css-modules', 'prettier'],

  rules: {
    // Many times we use snake case for data properties.  Therefore, we don't want to
    // enforce camelcase.
    camelcase: 'off',

    'declaration-colon-newlin-after': 'off',

    'max-len': [1, 150, 2, { ignoreComments: true }],

    'no-console': 'off',

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'no-underscore-dangle': [
      'error',
      {
        // Add/remove allowed member names as necessary.
        allow: ['__filename', '_getCss', '_id', '_insertCss'],
        allowAfterSuper: true,
        allowAfterThis: true,
      },
    ],

    'no-unused-vars': ['error', { argsIgnorePattern: '_unused$' }],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    quotes: ['error', 'single', { avoidEscape: true }],

    'spaced-comment': ['error', 'always', { markers: ['!', ':', '::'] }],

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'error',

    'import/dynamic-import-chunkname': 'error',

    // Set `allowComputed` option to `true` when necessary.
    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    'import/namespace': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
    'import/no-deprecated': 'error',

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        // Set the paths where it is okay to have devDependencies:
        devDependencies: ['__tests__/**/*.js', 'tools/**/*.js'],
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
    'import/no-namespace': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],

    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['htmlFor'],
        },
        allowChildren: false,
      },
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',

    'react/destructuring-assignment': [
      false,
      'always',
      { ignoreClassFields: true },
    ],

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: false,
        requiredFirst: false,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],

    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: false,
      },
    ],

    // Add to the forbid array when you find something worth forbidding.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
