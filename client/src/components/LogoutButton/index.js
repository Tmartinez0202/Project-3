import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./LogoutButton.css"

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout()}
        id="qsLogoutBtn"
        variant="danger"
        className="logoutButton"
        >
            Log Out
        </button>
    );
};

export default LogoutButton;