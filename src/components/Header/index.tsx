import { Logo } from '../Icon'
import './styles.css';

function Header() {
    return (
        <header>
            <div className="contacts-logo-container">
                <Logo aria-label="Contacts-Logo"/>
                <h1>Contacts App</h1>
                <p>Developed by
                    <a href="https://www.linkedin.com/in/emersonope/">@emersonope</a>
                </p>
            </div>
        </header>
    )
}

export default Header;