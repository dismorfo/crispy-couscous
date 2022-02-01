import { useLocation } from 'react-router-dom';
import ItemList from '../../components/ItemList';

export default function Home(props) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const rows = 6;
  const title = 'Monographs, Maps, Postcards, Prints';
  return (
    <>
      <main className="main container-fluid" role="main">
        <header>
          <h2 className="page-title">{title}</h2>
        </header>
        <div className="widget">
          <ItemList rows={rows} page={page} />
        </div>
      </main>
    </>
  );
}