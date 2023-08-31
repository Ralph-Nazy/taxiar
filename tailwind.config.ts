import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "taxiar-1": "#FFC000",
      "taxiar-2": "#1b1b1b",
      "taxiar-3": "#ADADAD",
      "taxiar-4": "#F7F7F7",
      "taxiar-5": "#B0B0B0",
      "taxiar-6": "#fec624",
      "taxiar-7": "#28a745",
      "taxiar-8": "#dc3545",
      "taxiar-9": "#f2f2f2",
      "taxiar-10": "#000000", 
      "taxiar-11":"#3c4250",
      "taxiar-12":"#0b0b0b",
      "taxiar-13":"#74787C",
      "taxiar-14":"#E7E7E7",
      "white": "#ffffff"

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Jost': ['Jost', 'sans-serif'],
        'Heebo': ['Heebo', 'sans-serif'],
        'Josefin': ['Josefin Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config 