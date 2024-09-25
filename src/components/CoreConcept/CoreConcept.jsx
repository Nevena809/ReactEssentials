import "./CoreConcept.css";

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default CoreConcept;
