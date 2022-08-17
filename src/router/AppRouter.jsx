import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />

        {/* Cualquier ruta que no coincida con una URL */}
        <Route path="/*" element={ <HeroesRoutes /> } />

      </Routes>
    </>
  )
}
