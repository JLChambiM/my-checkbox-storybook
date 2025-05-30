import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: 'light',
      list: [
        { 
          name: 'light', 
          class: '', 
          color: '#ffffff',
          title: 'Light Mode'
        },
        { 
          name: 'dark', 
          class: 'dark', 
          color: '#000000',
          title: 'Dark Mode'
        }
      ],
      onChange: (theme: { name: string }) => {
        const root = document.documentElement;
        
        // Limpiar clases/atributos previos
        root.removeAttribute('data-theme');
        root.classList.remove('light', 'dark');
        
        // Aplicar nuevo tema
        if (theme.name === 'dark') {
          root.setAttribute('data-theme', 'dark');
          root.classList.add('dark');
        } else {
          root.setAttribute('data-theme', 'light');
          root.classList.add('light');
        }
      }
    }
  },
};

export default preview;