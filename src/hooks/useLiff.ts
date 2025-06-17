import liff from '@line/liff';
import { useState, useEffect } from 'react';

export const useLiff = () => {
  const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_LIFF_ID) {
      setLiffError('NEXT_PUBLIC_LIFF_ID is not set');
      return;
    }
    liff
      .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID })
      .then(() => {
        setLiffObject(liff);
        console.log('LIFF initialized successfully');
      })
      .catch((error) => {
        setLiffError(error.toString());
      });
  }, []);

  return { liff: liffObject, liffError };
};
