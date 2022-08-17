import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={ <MarvelPage /> } />
          <Route path="dc" element={ <DcPage /> } />

          {/* Search, Hero by id */}
          <Route path="hero" element={ <HeroPage /> } />
          <Route path="search" element={ <SearchPage /> } />

          <Route path="/" element={ <Navigate to="marvel" /> } />
        </Routes>
      </div>

    </>
  )
}
