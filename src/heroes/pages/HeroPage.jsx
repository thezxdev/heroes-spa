import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  
  // Obtener parámetros de la ruta
  const { id } = useParams();

  const hero = getHeroById( id );
  
  // Redireccionar en caso de que no se encuentré un heroe
  if( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <h1>{ hero.superhero }</h1>
    </>
  )
}
