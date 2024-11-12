import type { LocalePrefixMode } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'Boilerplate by Mustaque Nadim',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
