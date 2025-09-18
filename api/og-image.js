import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          position: 'relative',
        }}
      >
        {/* Patrón de fondo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 200px 150px, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 1000px 200px, rgba(247, 147, 30, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 150px 500px, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 1050px 450px, rgba(247, 147, 30, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Contenido principal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Nombre */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginBottom: 20,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Santiago Ruge
          </h1>
          
          {/* Subtítulo */}
          <h2
            style={{
              fontSize: 36,
              color: '#FF6B35',
              margin: 0,
              marginBottom: 30,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            UX/UI Designer
          </h2>
          
          {/* Descripción */}
          <p
            style={{
              fontSize: 24,
              color: '#cccccc',
              margin: 0,
              marginBottom: 40,
              fontFamily: 'Arial, sans-serif',
              maxWidth: '800px',
            }}
          >
            Especializado en investigación de usuarios y diseño de interfaces
          </p>
          
          {/* Línea decorativa */}
          <div
            style={{
              width: 300,
              height: 4,
              background: 'linear-gradient(90deg, #FF6B35 0%, #F7931E 100%)',
              borderRadius: 2,
              marginBottom: 40,
            }}
          />
          
          {/* URL */}
          <p
            style={{
              fontSize: 20,
              color: '#888888',
              margin: 0,
              fontFamily: 'Arial, sans-serif',
            }}
          >
            uxsantiago.vercel.app
          </p>
        </div>
        
        {/* Elementos decorativos */}
        <div
          style={{
            position: 'absolute',
            top: 100,
            left: 200,
            width: 80,
            height: 80,
            border: '3px solid rgba(255, 107, 53, 0.3)',
            borderRadius: '50%',
            borderStyle: 'dashed',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 200,
            width: 70,
            height: 70,
            border: '3px solid rgba(247, 147, 30, 0.3)',
            borderRadius: '50%',
            borderStyle: 'dashed',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
