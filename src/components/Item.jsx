import { Link } from 'react-router-dom';

function typesMap(type) {
  const types = {
    book: 'books',
    map: 'maps',
    photo: 'photos',
  };
  return types[type];
}

export default function Item(props) {
  
  const { title, identifier, type } = props.document;

  console.log(props);
  
  const resource_type = typesMap(type);

  return (
    <article className="item">
      <div className="card">
        <div className="thumbs">
          <div className="clipper">
            <Link 
              to={`/${resource_type}/${identifier}`}
              aria-hidden="true"
              role="presentation" 
              tabIndex="-1"
            >
              <img 
                src={`https://sites.dlib.nyu.edu/viewer/api/image/${resource_type}/${identifier}/1/full/150,/0/default.jpg`}
                alt="" 
                title="" 
                role="presentation"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
        <h1 className="md_title">
          <Link to={`/${resource_type}/${identifier}`}>{title}</Link>
        </h1>
      </div>
    </article>
  );
}
