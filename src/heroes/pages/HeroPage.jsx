import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  
  // Obtener parámetros de la ruta
  const { id } = useParams();

  const navigate = useNavigate();

  const hero = getHeroById( id );
  
  const onNavigateBack = () => {
    navigate( -1 ); // Regresar a la pantalla anterior / Puede salir de la aplicación si la pantalla anterior es una diferente de esta.
  }

  // Redireccionar en caso de que no se encuentré un heroe
  if( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={ `/assets/heroes/${ id }.jpg` }
          alt={ hero.superhero }
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"><b>Appearance:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          back
        </button>

      </div>

    </div>
  )
}
