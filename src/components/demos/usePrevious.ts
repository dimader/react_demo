import React, { useRef, useEffect } from 'react';

export function usePrevious(value: any) {
  
  const ref = useRef(value);

  // Mit dem useEffekt merken wir uns den Aktuellen / Neuen Wert
  // sobald das aktuelle Rendern ausgeführt wurde
  useEffect(() => {
    ref.current = value;
  });

  // Das noch nicht aktualisierte current zurückgeben in welchem
  // jetzt noch der zuvor abgelegte Wert enthalten ist
  return ref.current;
};
