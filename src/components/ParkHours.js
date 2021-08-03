import { days, formatDate } from '../utils/uilt';
import styled from 'styled-components';

import UnorderedListNoStyle from './UnorderedListNoStyle';
import OrderedListNoStyle from './OrderedListNoStyle';
import ParkInfoSection from './ParkInfoSection';

const DaySpan = styled.span`
  display: inline-block;
  width: 50px;
`;

/* Sometimes the date has a start and end date that are the same.  
This function returns only one date if they are the same or two if they are different. */
const formatStartAndEndDate = (startDate, endDate) => {
  if (startDate === endDate) {
    return formatDate(startDate);
  }

  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const Hours = ({ operatingHours }) => {
  return (
    <ParkInfoSection id="hours">
      <h2>Operating Hours</h2>
      <hr />

      <div>
        {operatingHours.map((setOfHours) => {
          return (
            <div key={setOfHours.description} className="row">
              <h5 className="fst-italic mb-3">{setOfHours.description}</h5>
              <div className="col">
                <h6 className="fw-bold">Standard Hours</h6>
                <OrderedListNoStyle>
                  {days.map((day) => {
                    return (
                      <li key={day.value}>
                        <DaySpan className="fw-light">{day.value}</DaySpan>
                        <span className="fw-light">{operatingHours[0].standardHours[day.accessor]}</span>
                      </li>
                    );
                  })}
                </OrderedListNoStyle>
              </div>
              {setOfHours.exceptions.length > 0 && (
                <div className="col">
                  <h6 className="fw-bold">Holiday Hours</h6>
                  <UnorderedListNoStyle>
                    {setOfHours.exceptions.map((exception) => {
                      return (
                        <li key={exception.startDate}>
                          <div className="fst-italic">{exception.name}</div>
                          <div className="fw-light">
                            {formatStartAndEndDate(exception.startDate, exception.endDate)}
                          </div>
                          <div className="fw-light">{exception.exceptionHours.monday}</div>
                        </li>
                      );
                    })}
                  </UnorderedListNoStyle>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </ParkInfoSection>
  );
};

export default Hours;
