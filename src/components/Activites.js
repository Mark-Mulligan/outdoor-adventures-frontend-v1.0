import styled from 'styled-components';

import { sortObjByName } from '../utils/uilt';
import UnorderedListNoStyle from './UnorderedListNoStyle';
import ParkInfoSection from './ParkInfoSection';

const ActivitiesListItem = styled.li`
  margin-right: 1rem;
`;

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
      <UnorderedListNoStyle className="row g-0">
        <div className="col">
          {listFirstHalf.map((activity) => {
            return <ActivitiesListItem key={activity.id}>{activity.name}</ActivitiesListItem>;
          })}
        </div>
        <div className="col">
          {listSecondHalf.map((activity) => {
            return <ActivitiesListItem key={activity.id}>{activity.name}</ActivitiesListItem>;
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
