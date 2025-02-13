import { Suspense } from 'react';
import './App.css'

import DataTable from './Component/DataTable/DataTable.jsx';

import Loading from './Component/Loading/Loading.jsx';

import { fetchProducts, fetchUsers } from './Service/api.js';

function App() {

  // collones pour les utilisateurs 
  const columnsUsers = [
    { key: 'id', label: 'id' },
    { key: 'firstName', label: 'Prénom' },
    { key: 'lastName', label: 'Nom' },
    { key: 'jobTitle', label: 'Travail' },
    { key: 'email', label: 'Email' }
  ];

  // collones pour les produits 
  const columnsProducts = [
    { key: 'id', label: 'id' },
    { key: 'name', label: 'Nom du produit' },
    { key: 'price', label: 'Prix' }
  ];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          <h2> Voici le tableau concernant les utilisateurs : </h2>
          <DataTable columns={columnsUsers} fetchData={fetchUsers}/>
        </div>
      </Suspense>

      <Suspense fallback={<Loading />}>
        <div>
          <h2> Voici le tableau concernant les produits : </h2>
          <DataTable columns={columnsProducts} fetchData={fetchProducts} />
        </div>
      </Suspense>
    </>
  );
}

export default App
