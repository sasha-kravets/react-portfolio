import HtmlCertificate from "../../assets/softserve-certificate.pdf";

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      {props.link ? (
        <a href={props.link} target="_blank" rel="noreferrer">
          <p className="timeline__text">{props.desc}</p>
        </a>
      ) : (
        <p className="timeline__text">{props.desc}</p>
      )}
    </div>
  )
}

export default Card