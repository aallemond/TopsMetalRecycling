export default function Section({ id, title, children }) {
  return (
    <section id={id} className="metalSection">

      <div className="metalCard">
        <h2>{title}</h2>
        {children}
      </div>

    </section>
  );
}