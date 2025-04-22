import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#fff',
        warning: '',
        focus:'',

        primarias: {
            a: '#5754ED',
            b: '#e70202',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: '',
        },
    },
    espacamentos: {
        l : '32px',
        s : '16px',
        xs: '8px'
    },
    fontFamily: "'Montserrat', 'sans-serif'"
}

export const ProvedorTema = ({children}) =>{
    return( 
    <ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
    )
}