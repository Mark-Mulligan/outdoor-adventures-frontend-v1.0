import ParkInfoSection from './ParkInfoSection';

const Description = ({ parkDescription }) => {
  return (
    <ParkInfoSection id="description">
      <h2>Description</h2>
      <hr />
      <p>{parkDescription}</p>
    </ParkInfoSection>
  );
};

export default Description;
