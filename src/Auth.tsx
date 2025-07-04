import React, { useState } from 'react';
import { supabase } from './supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isLogin) {
      // Login
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
    } else {
      // Sign up
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br/>
        <button type="submit">{isLogin ? 'Entrar' : 'Registrar'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}