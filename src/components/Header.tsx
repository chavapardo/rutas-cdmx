import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { logout, login } from "../features/user/userSlice";

// ...Tus styled-components igual que antes...

export const Header = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Intenta cargar usuario si hay token guardado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user.isLoggedIn) {
      fetch("http://localhost:4000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            dispatch(login({ id: data.user.id, name: data.user.name, email: data.user.email }));
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          dispatch(logout());
        });
    }
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
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

