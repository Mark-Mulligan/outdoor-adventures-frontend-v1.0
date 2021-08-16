import styled from 'styled-components';

import { formatPhoneNum } from '../utils/uilt';
import ParkInfoSection from './ParkInfoSection';

const StyledLink = styled.a`
  :hover {
    color: rgb(60, 60, 60);
  }
  color: inherit;
  text-decoration: none;
`;

const BoldFont = styled.span`
  font-weight: 700;
`;

const Contact = ({ contactInfo, websiteUrl }) => {
  return (
    <ParkInfoSection id="contact">
      <h2>Contact Info</h2>
      <hr />
      <div className="row">
        <div className="col-md-6 col-12">
          {contactInfo.phoneNumbers
            .filter((number) => number.type === 'Voice')
            .map((result) => {
              return (
                <p key={result.phoneNumber}>
                  <BoldFont>Phone:</BoldFont> {formatPhoneNum(result.phoneNumber)}
                </p>
              );
            })}
        </div>
        <div className="col-md-6 col-12">
          {contactInfo.emailAddresses.map((email) => (
            <p key={email.emailAddress}>
              <BoldFont>Email: </BoldFont> {email.emailAddress}
            </p>
          ))}
        </div>
        <div className="col-12">
          <p>
            <BoldFont>Website: </BoldFont>
            <StyledLink href={websiteUrl} target="_blank" rel="noreferrer">
              {websiteUrl} <i className="fas fa-xs fa-external-link-alt"></i>
            </StyledLink>
          </p>
        </div>
      </div>
    </ParkInfoSection>
  );
};

export default Contact;
