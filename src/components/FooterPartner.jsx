
export default function FooterPartner(props) {
  const { id, href, title } = props;
  return (
    <div className={id}>
      <a 
        href={href}
        title={title}
        target="_blank"
        rel="noreferrer"
      >{title}</a>
    </div>  
  );
}
