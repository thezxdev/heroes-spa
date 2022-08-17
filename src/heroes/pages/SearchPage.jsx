import { useLocation, useNavigate } from 'react-router-dom';
// yarn add query-string
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation(); // Obtener query params

  const { q = '' } = queryString.parse( location.search ); // Obtner las propiedades del query

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = ( e ) => {
    e.preventDefault();

    if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText.toLowerCase().trim() }`); // Ir a la página actual con los query params
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          
          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search a hero
          </div>

          <div className="alert alert-danger">
            No hero with with <b>{ q }</b>
          </div>

          {/* <HeroCard /> */}

        </div>
      </div>
    </>
  )
}
