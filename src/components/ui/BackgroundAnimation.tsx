import React from 'react';

const BackgroundAnimation = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ 
        background: `
          linear-gradient(rgba(4, 4, 4, 0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(4, 4, 4, 0.8) 1px, transparent 1px),
          radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 20%),
          radial-gradient(circle at 90% 80%, rgba(152, 193, 14, 0.05) 0%, transparent 20%),
          #000000
        `,
        backgroundSize: '50px 50px, 50px 50px, 600px 600px, 600px 600px, auto',
        animation: 'backgroundShift 20s ease-in-out infinite'
      }}
    >
      <style>{`
        @keyframes backgroundShift {
          0% {
            background-position: 0 0, 0 0, 0 0, 0 0;
          }
          50% {
            background-position: 50px 50px, 50px 50px, 100px 100px, 100px 100px;
          }
          100% {
            background-position: 0 0, 0 0, 0 0, 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;