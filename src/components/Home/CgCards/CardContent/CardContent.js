import "./CardContent.css";

export default function CardContent(props) {
  return (
    <>
      <div className="cg-card mx-2 px-3 py-2 h-20 position-relative cursor-pointer">
        <p>{props.title}</p>
        <img className="position-absolute" src={props.image} alt=""/>
      </div>
    </>
  );
}