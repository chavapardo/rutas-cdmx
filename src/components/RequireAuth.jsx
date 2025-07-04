import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function RequireAuth({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // Obtiene la sesión actual
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Se suscribe a cambios de sesión
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (user === undefined) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}