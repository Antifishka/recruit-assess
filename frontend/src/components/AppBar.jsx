import { useAuth } from '../hooks';
import { UserMenu } from './UserMenu';
import { NavLink } from "react-router-dom";

export const AppBar = () => {
    const { isLoggedIn } = useAuth(); 
    console.log("isLoggedIn", isLoggedIn)

    return (
        <header className="flex items-center justify-between py-[8px] px-0 border-b border-primary">
            <nav className="flex gap-[12px]">
                <NavLink to="/" end className="navigation__link">Home</NavLink>
                <NavLink to="/tests" className="navigation__link">Tests</NavLink>
            </nav>

            {isLoggedIn
                ? <UserMenu />
                : <NavLink to="/login"
                    className="auth__link">
                    Login
                </NavLink>}   
        </header>
    );
};