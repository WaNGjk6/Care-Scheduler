// src/pages/RedirectToStatic404.jsx
import { useEffect } from 'react';

export default function RedirectToStatic404() {
  useEffect(() => {
    window.location.href = '/404.html';
  }, []);
  return null;
}
