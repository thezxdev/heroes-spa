import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

	const { user, logout } = useContext( AuthContext );

	// Hook necesario para controlar la navegación
	const navigate = useNavigate(); 

	const onLogout = () => {

		// Mandar a llamar a la función logout del context
		logout();

		navigate( '/login', { // Ruta a la cual ir
			replace: true // Para no volver a la página anterior
		} );
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

			<Link
				className="navbar-brand"
				to="/"
			>
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">

					<NavLink
						className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
						to="/dc"
					>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">
						{ user?.name || 'Sin nombre' }
					</span>

					<button
						onClick={ onLogout }
						className="nav-item nav-link btn"
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	)
}