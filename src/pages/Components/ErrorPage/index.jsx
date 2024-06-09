import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div>
      <h1>Stránka nebyla nalezena</h1>
      <p>Je nám líto, ale stránka, kterou hledáte, neexistuje.</p>
      <Link to="/">Zpět na hlavní stránku</Link>
    </div>
  );
};

export default ErrorPage;
