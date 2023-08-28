
import "./Products.css";



export default function Products({result}) {
  return (
    <>
      <section className="card-container gap-10">
        {result}
      </section>
    </>
  );
}
