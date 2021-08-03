const EntranceFees = ({ feeData }) => {
  return (
    <section id="entrance-fees">
      <h2>Entrance Fees</h2>
      <hr />
      {feeData.map((fee) => {
        return (
          <div key={fee.title}>
            <h6>
              <span className="fw-bold">{fee.title}</span> <span className="fst-italic">${fee.cost}</span>
            </h6>
            <p>{fee.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default EntranceFees;
