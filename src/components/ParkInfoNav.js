import { Link } from 'react-router-dom';

const ParkInfoNav = () => {
  return (
    <nav>
      <ul>
        <li className="back-link">
          <Link to="/parks">
            <i className="fas fa-sm fa-arrow-left"></i> Back to parks
          </Link>
        </li>
        <li>
          <a href="#description">Description</a>
        </li>
        <li>
          <a href="#entrance-fees">Entrance Fees</a>
        </li>
        <li>
          <a href="#hours">Hours</a>
        </li>
        <li>
          <a href="#activites">Actvities</a>
        </li>
        <li>
          <a href="#contact">Contact Info</a>
        </li>
        <li>
          <a href="#photos">Photos</a>
        </li>
      </ul>
    </nav>
  );
};

export default ParkInfoNav;
