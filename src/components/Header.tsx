import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { logout, login } from "../features/user/userSlice";

// --- Estilos: igual a tu versión con Supabase ---
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  background: #22223b;
  position: relative;
  z-index: 10;

  @media (max-width: 700px) {
    padding: 0.7rem 0.8rem;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  letter-spacing: 1px;
  flex: 0 0 auto;
  z-index: 30;
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 1rem;
  z-index: 30;
  @media (max-width: 700px) {
    display: block;
  }
`;

const DesktopMenu = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex: 1 1 auto;
  justify-content: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  &:hover {
    color: #4f46e5;
  }
`;

const RightActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 0 0 auto;

  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div<{ open: boolean }>`
  display: none;
  @media (max-width: 700px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(34,34,59,0.98);
    z-index: 20;
  }
`;

const MobileMenu = styled.nav<{ open: boolean }>`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 85vw;
    max-width: 320px;
    height: 100vh;
    background: #22223b;
    padding: 1.5rem 1.2rem 1.2rem 1.2rem;
    z-index: 40;
    box-shadow: -2px 0 16px rgba(0,0,0,0.12);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.2s;
    gap: 1.2rem;
  }
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const MobileActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.7rem;
`;

const ActionButton = styled(Link)`
  background: transparent;
  color: #fff;
  border: 1px solid #4f46e5;
  border-radius: 4px;
  padding: 0.5rem 1.1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    background: #4f46e5;
    color: #fff;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #4f46e5;
  border-radius: 4px;
  padding: 0.5rem 1.1rem;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
  &:hover {
    background: #4f46e5;
    color: #fff;
  }
`;

const UserEmail = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  padding-right: 0.2rem;
  opacity: 0.9;
  margin-bottom: 0.1rem;
`;

// --- Componente Header Redux ---
export const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Si quieres sincronizar con localStorage al montar (opcional):
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const userData = JSON.parse(userStr);
      if (userData && userData.email) {
        dispatch(login({ email: userData.email }));
      }
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/login");
    setMenuOpen(false);
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <HeaderContainer>
      <Logo to="/">Rutas CDMX</Logo>
      <Burger
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </Burger>

      {/* Menú escritorio */}
      <DesktopMenu>
        <MenuLink to="/">Inicio</MenuLink>
        {user.isLoggedIn && <MenuLink to="/crear-ruta">Crear Ruta</MenuLink>}
        <MenuLink to="#">Rutas</MenuLink>
        <MenuLink to="#">Acerca</MenuLink>
      </DesktopMenu>
      <RightActions>
        {!user.isLoggedIn ? (
          <>
            <ActionButton to="/login">Iniciar sesión</ActionButton>
            <ActionButton to="/register">Registrarse</ActionButton>
          </>
        ) : (
          <>
            <UserEmail>{user.email}</UserEmail>
            <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
          </>
        )}
      </RightActions>

      {/* Menú móvil */}
      <MobileMenuOverlay open={menuOpen} onClick={handleLinkClick} />
      <MobileMenu open={menuOpen}>
        <MobileMenuLinks>
          <MenuLink to="/" onClick={handleLinkClick}>Inicio</MenuLink>
          {user.isLoggedIn && <MenuLink to="/crear-ruta" onClick={handleLinkClick}>Crear Ruta</MenuLink>}
          <MenuLink to="#" onClick={handleLinkClick}>Rutas</MenuLink>
          <MenuLink to="#" onClick={handleLinkClick}>Acerca</MenuLink>
        </MobileMenuLinks>
        <MobileActions>
          {!user.isLoggedIn ? (
            <>
              <ActionButton to="/login" onClick={handleLinkClick}>Iniciar sesión</ActionButton>
              <ActionButton to="/register" onClick={handleLinkClick}>Registrarse</ActionButton>
            </>
          ) : (
            <>
              <UserEmail>{user.email}</UserEmail>
              <LogoutButton onClick={handleLogout}>Cerrar sesión</LogoutButton>
            </>
          )}
        </MobileActions>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;