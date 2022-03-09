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

  const resource_type = typesMap(type);

  // See: https://mui.com/components/skeleton/
  // const { loading = false } = props;

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
        <p>Iframe Mirador: <Link to={`/${resource_type}/${identifier}`}>{title}</Link></p>
        <p>Local Mirador: <Link to={`/viewer/mirador/${identifier}`}>{title}</Link></p>
      </div>
    </article>
  );
}
