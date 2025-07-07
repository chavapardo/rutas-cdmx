import React, { useState, useEffect } from 'react';

export default function CreateRouteForm() {
  const [form, setForm] = useState({
    punto_partida: '',
    destino: '',
    transporte: 'auto',
    tiempo_estimado: '',
  });
  const [user, setUser] = useState(null);
  const [mensaje, setMensaje] = useState('');

  // Obtener usuario actual
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };
    getUser();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setMensaje('Debes iniciar sesión.');
      return;
    }
    const { error } = await supabase.from('rutas').insert([{
      ...form,
      user_id: user.id,
      tiempo_estimado: parseInt(form.tiempo_estimado, 10),
    }]);
    if (error) {
      setMensaje('Error al guardar la ruta');
    } else {
      setMensaje('¡Ruta guardada!');
      setForm({ punto_partida: '', destino: '', transporte: 'auto', tiempo_estimado: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nueva ruta</h2>
      <div>
        <label>Punto de partida:</label>
        <input type="text" name="punto_partida" value={form.punto_partida} onChange={handleChange} required />
      </div>
      <div>
        <label>Destino:</label>
        <input type="text" name="destino" value={form.destino} onChange={handleChange} required />
      </div>
      <div>
        <label>Transporte:</label>
        <select name="transporte" value={form.transporte} onChange={handleChange}>
          <option value="auto">Auto</option>
          <option value="bici">EcoBici</option>
          <option value="caminando">Caminando</option>
          <option value="transporte público">Metro</option>
          <option value="transporte público">Metrobus</option>
          <option value="transporte público">RTP</option>
          <option value="transporte público">Trolebus</option>
        </select>
      </div>
      <div>
        <label>Tiempo estimado (minutos):</label>
        <input type="number" name="tiempo_estimado" value={form.tiempo_estimado} onChange={handleChange} required />
      </div>
      <button type="submit">Guardar ruta</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}