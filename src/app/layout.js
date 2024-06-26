import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";
import AuthProvider from "@/provider/AuthProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Blog-Next-App',
    description: 'The best blog app!',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
                <ThemeProvider>
            <div className="container">
                <div className={'wrapper'}>
                    <Header/>
                    {children}
                    <Footer/>
                </div>
            </div>
                </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
        </html>
    )
}
