import { useState } from 'react';

export default function ProyectoBlob() {
  const [texto, setTexto] = useState('');
  const [urlBlob, setUrlBlob] = useState(null);
  const [contenidoArchivo, setContenidoArchivo] = useState('');

  const crearBlob = () => {
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    setUrlBlob(url);
  };

  const leerArchivo = (evento) => {
    const archivo = evento.target.files[0];
    if (!archivo) return;
    
    const lector = new FileReader();
    lector.onload = (e) => {
      setContenidoArchivo(e.target.result);
    };
    lector.readAsText(archivo);
  };

  return (
    <div className="blob-card">
      <h2>Ejemplo de uso de Blobs</h2>
      <textarea 
        rows="4"
        placeholder="Escribe el texto para generar el Blob..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>
      
      <div className="botones-blob">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        {urlBlob && (
          <a href={urlBlob} download="archivoGenerado.txt">
            <button className="btn-descarga">Descargar Blob</button>
          </a>
        )}
      </div>

      <div className="seccion-lector">
        <h3>Usar FileReader</h3>
        <input type="file" accept=".txt" onChange={leerArchivo} />
        {contenidoArchivo && (
          <div className="resultado-lector">
            <strong>Contenido del archivo:</strong>
            <p>{contenidoArchivo}</p>
          </div>
        )}
      </div>
    </div>
  );
}