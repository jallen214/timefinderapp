import { useState, useEffect } from 'react';

const SchedulePage = () => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const wheelImages = [
    '/src/images/Spinner 1.png',
    '/src/images/Spinner 2.png',
    '/src/images/Spinner 3.png',
    '/src/images/Spinner 4.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prevIndex) => (prevIndex + 1) % wheelImages.length);
    }, 600);

    const redirectTimeout = setTimeout(() => {
      setRedirect(true);
    }, wheelImages.length * 600);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimeout);
    };
  }, [wheelImages.length]);

  useEffect(() => {
    if (redirect) {
      window.location.href = "/home";
    }
  }, [redirect]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/src/images/Progress Bar 4.png" alt="Progress Bar 4" className="mx-auto mb-8" />
      <h1 className="text-4xl font-bold mb-4">Scheduling your tasks for you</h1>
      <p className="text-lg mb-4">This will take less than 5 seconds.</p>
      <div className="mt-8">
        <img src={wheelImages[rotationIndex]} alt="Rotating Wheel" className="h-40 w-40 animate-spin" />
      </div>
    </div>
  );
};

export default SchedulePage;

