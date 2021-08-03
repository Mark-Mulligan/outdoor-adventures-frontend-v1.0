import { sortObjByName } from '../utils/uilt';
import UnorderedListNoStyle from './UnorderedListNoStyle';
import ParkInfoSection from './ParkInfoSection';

const Actvities = ({ activities }) => {
  const returnSingleCol = () => {
    return (
      <UnorderedListNoStyle>
        {activities.sort(sortObjByName).map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </UnorderedListNoStyle>
    );
  };

  const returnTwoCol = () => {
    let listFirstHalf = [];
    let listSecondHalf = [];

    activities.sort(sortObjByName).forEach((activity, index) => {
      if (index < activities.length / 2) {
        listFirstHalf.push(activity);
      } else {
        listSecondHalf.push(activity);
      }
    });

    return (
      <UnorderedListNoStyle className="row">
        <div className="col">
          {listFirstHalf.map((activity) => {
            return <li key={activity.id}>{activity.name}</li>;
          })}
        </div>
        <div className="col">
          {listSecondHalf.map((activity) => {
            return <li key={activity.id}>{activity.name}</li>;
          })}
        </div>
      </UnorderedListNoStyle>
    );
  };

  return (
    <ParkInfoSection id="activites">
      <h2>Activites</h2>
      <hr />
      {activities.length <= 10 ? returnSingleCol() : returnTwoCol()}
    </ParkInfoSection>
  );
};

export default Actvities;
