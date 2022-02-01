import { useLocation } from 'react-router-dom';
import ItemList from '../../components/ItemList';

export default function Home() {
  const location = useLocation();
  const collection = 'io';
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const rows = 6;
  const title = 'Monographs, Maps, Postcards, Prints';
  return (
    <main className="main container-fluid" role="main">
      <header>
        <h2 className="page-title">{title}</h2>
      </header>
      <div className="widget">
        <ItemList query={query} rows={rows} page={page} collection={collection} />
      </div>
    </main>
  );
}