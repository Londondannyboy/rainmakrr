// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import cookieconsent from '@jop-software/astro-cookieconsent';

// https://astro.build/config
export default defineConfig({
  site: 'https://placement.quest',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind(),
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: 'bar inline',
          position: 'bottom',
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: 'box',
          position: 'right',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      cookie: {
        name: 'placement_cookie_consent',
        domain: 'placement.quest',
        expiresAfterDays: 365,
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          readOnly: false,
        },
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'We use cookies',
              description: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept all", you consent to our use of cookies.',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Manage preferences',
            },
            preferencesModal: {
              title: 'Cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Save preferences',
              closeIconLabel: 'Close',
              sections: [
                {
                  title: 'Cookie usage',
                  description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience.',
                },
                {
                  title: 'Strictly necessary cookies',
                  description: 'These cookies are essential for the proper functioning of the website.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytics cookies',
                  description: 'These cookies help us understand how visitors interact with the website.',
                  linkedCategory: 'analytics',
                },
              ],
            },
          },
        },
      },
    }),
  ],
  server: {
    host: true // Listen on all network interfaces (0.0.0.0)
  }
});
