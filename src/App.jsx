import React from 'react'
import './App.css'
import AppRouter from './Routers/AppRouter';
import AuthProvider from './Auth/AuthProvider';
import Header from './Layout/Header'

const App = () => {
    return (
        <AuthProvider>
            <Header />
            <AppRouter />
        </AuthProvider>
    )
}

export default App