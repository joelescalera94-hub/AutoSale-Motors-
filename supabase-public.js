/* =========================================================
   AUTOSALE MOTORS · DATOS PÚBLICOS
   Solo consulta catalogo_publico. Nunca solicita precios.
   ========================================================= */
(() => {
  const cfg = window.AUTOSALE_SUPABASE || {};
  const enabled = Boolean(window.supabase?.createClient && cfg.url && cfg.anonKey);
  const client = enabled ? window.supabase.createClient(cfg.url, cfg.anonKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
  }) : null;

  function normalize(row) {
    return {
      id: row.id,
      slug: row.slug || row.id,
      clase: row.clase || 'minibus',
      marca: row.marca || '',
      modelo: row.modelo || '',
      version: row.version || '',
      motor: row.motor || '',
      descripcion: row.descripcion || '',
      estado: row.estado || 'nuevo',
      variante: row.variante || '',
      novedad: Boolean(row.novedad),
      destacado: Boolean(row.destacado),
      imagen: row.imagen || '',
      galeria: Array.isArray(row.galeria) ? row.galeria : [],
      video: row.video || '',
      especificaciones: Array.isArray(row.especificaciones) ? row.especificaciones : []
    };
  }

  async function loadVehicles() {
    if (!client) return [];
    const { data, error } = await client.from('catalogo_publico').select('id,slug,clase,marca,modelo,version,motor,descripcion,estado,variante,novedad,destacado,imagen,galeria,video,especificaciones').order('destacado', { ascending: false }).order('marca');
    if (error) {
      console.warn('[Autosale] No se pudo cargar catálogo público:', error.message);
      return [];
    }
    return (data || []).map(normalize);
  }

  async function findVehicle(id) {
    if (!client) return null;
    const { data, error } = await client.from('catalogo_publico').select('id,slug,clase,marca,modelo,version,motor,descripcion,estado,variante,novedad,destacado,imagen,galeria,video,especificaciones').or(`id.eq.${id},slug.eq.${id}`).maybeSingle();
    if (error) {
      console.warn('[Autosale] No se pudo cargar la ficha:', error.message);
      return null;
    }
    return data ? normalize(data) : null;
  }

  window.AutosalePublicData = { loadVehicles, findVehicle, enabled };
})();
