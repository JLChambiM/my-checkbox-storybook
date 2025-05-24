/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // Quita temporalmente MDX hasta resolver TS
    // '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Verificar si ya existe una regla para TypeScript
    const hasTypeScriptRule = config.module.rules.some(rule => 
      rule.test && rule.test.toString().includes('tsx?')
    );

    if (!hasTypeScriptRule) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
        ],
      });
    }

    // Asegurar que las extensiones estén incluidas
    if (!config.resolve.extensions.includes('.ts')) {
      config.resolve.extensions.push('.ts', '.tsx');
    }

    return config;
  },
};

export default config;