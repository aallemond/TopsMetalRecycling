export default function Section({ title, children }) {
  return (
    <section className="metalSection">

      <div className="metalCard">

        <h2>{title}</h2>

        {children}

      </div>

    </section>
  );
}