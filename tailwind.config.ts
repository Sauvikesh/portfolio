import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: { max: '425px' },
      },
      keyframes: {
        lineGrow: {
          '0%': {
            height: '0px',
          },
          '50%': {
            height: '240px',
            transform: 'translateY(0px)',
          },
          '100%': {
            height: '0px',
            transform: 'translateY(240px)',
          },
        },
      },
      animation: {
        grow: 'lineGrow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
