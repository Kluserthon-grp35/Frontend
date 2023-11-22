import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        forground: 'var(--color-foreground)',
        text: 'var(--color-text)',
        light: 'var(--color-text-light)',
        plight: 'var(--color-accent1)',
        pdark: 'var(--color-accent2)',
      },
      backgroundImage: {
        gradient: 'var(--background-gradient)',
      },
    },
  },
  plugins: [],
}
export default config
