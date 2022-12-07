module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '100-1': '30rem',
      }
    },
    //end extended
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '700px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      trueGray600: '#525252',
      trueGray700: '#404040',
      trueGray800: '#262626',
      trueGray900: '#171717',
      Gray800: '#27272A',
      yellow: '#FDBC01',
      white: '#FFFFFF',
      black: '#000000',
      trueGray700: '#404040',
      grayTitle: '#171717',
      bgCooperation: '#F9F9F9',
      bgStatistics: '#F9F9F9',
      bgMobileMenu: '#F2F2F2',
      bgContactForm: '#F2F2F2',
      red: '#FF0000',
      green: '#00AD1A'
    },
    extend: {
      backgroundImage: {
        'banner-image': "url('/media/banner.png')",
        'banner-offer': "url('/media/banner-offer.png')",
        'banner-statistics-mobile': "url('/media/banner-statistics-mobile.png')",
      },
      boxShadow: {
        banner: '0px -50px 71px 100px #F4F4F5',
      },
      borderWidth: {
        DEFAULT: '1px',
        '1': '0.58px',
      }
    },
    //end theme
    variants: {
      extend: {},
    },
    plugins: []
  }
}