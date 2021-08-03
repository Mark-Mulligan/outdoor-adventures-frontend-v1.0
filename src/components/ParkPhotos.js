import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import ParkInfoSection from './ParkInfoSection';

const zoom = keyframes`
from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
`;

const GridImg = styled.img`
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  height: 200px;
  margin-bottom: 10px;
  margin-right: 10px;
  @media (max-width: 500px) {
    height: 180px;
  }
  @media (max-width: 400px) {
    height: 160px;
  }
`;

const PhotoModal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  display: ${(props) => (props.showModal ? 'block' : 'none')}
}
`;

const ModalInnerWrapper = styled.div`
  color: #ccc;
  text-align: center;
  animation-name: ${zoom};
  animation-duration: 0.6s;
`;

const ArrowWrapper = styled.span`
  padding: 5px 10px;
`;

const PhotoModalContent = styled.img`
  display: block;
  width: auto;
  height: auto;
  margin: auto;
  max-width: 100vw;
  max-height: 70vh;
  text-align: center;
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin: auto;
`;

const ArrowCol = styled.div`
  :hover {
    cursor: pointer;
  }
  position: absolute;
  display: inline-block;
  height: 100%;
  display: flex;
  align-items: center;
`;

const RightArrowCol = styled(ArrowCol)`
  right: 0;
`;

const LeftArrowCol = styled(ArrowCol)`
  left: 0;
`;

const PhotoModalController = styled.div`
  text-align: center;
  max-width: 750px;
  margin: auto;
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.span`
  :hover {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  :focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  position: absolute;
  top: 0;
  right: 15px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
`;

const ParkPhotos = ({ photos }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const handlePhotoClick = (event) => {
    setPhotoIndex(parseInt(event.target.getAttribute('data-photoindex')));
    setShowPhotoModal(true);
  };

  const handlePhotoModalClose = () => {
    setShowPhotoModal(false);
  };

  const onRightArrowClick = () => {
    photoIndex < photos.length - 1 ? setPhotoIndex(photoIndex + 1) : setPhotoIndex(0);
  };

  const onLeftArrowClick = () => {
    photoIndex === 0 ? setPhotoIndex(photos.length - 1) : setPhotoIndex(photoIndex - 1);
  };

  return (
    <ParkInfoSection id="photos">
      <h2>Photos</h2>
      <div>
        {photos.map((photo, index) => (
          <GridImg
            onClick={handlePhotoClick}
            data-photoindex={index}
            key={photo.url}
            src={photo.url}
            alt={photo.altText}
          />
        ))}
      </div>

      <PhotoModal id="myModal" showModal={showPhotoModal}>
        <CloseBtn onClick={handlePhotoModalClose}>&times;</CloseBtn>
        {photoIndex >= 0 && (
          <ModalInnerWrapper>
            <h2 className="text-center">{photos[photoIndex].title}</h2>
            <PhotoWrapper>
              <PhotoModalContent src={photos[photoIndex].url} alt={photos[photoIndex.altText]} />
            </PhotoWrapper>
            <PhotoModalController>
              <RightArrowCol onClick={onRightArrowClick}>
                <ArrowWrapper>
                  <i className="fas fa-3x fa-chevron-right"></i>
                </ArrowWrapper>
              </RightArrowCol>
              <LeftArrowCol onClick={onLeftArrowClick}>
                <ArrowWrapper>
                  <i className="fas fa-3x fa-chevron-left"></i>
                </ArrowWrapper>
              </LeftArrowCol>
              <div>
                <p className="m-0">{photos[photoIndex].caption}</p>
                <p className="fst-italic fw-lighter m-0">
                  Photo {photoIndex + 1} of {photos.length}
                </p>
              </div>
            </PhotoModalController>
          </ModalInnerWrapper>
        )}
      </PhotoModal>
    </ParkInfoSection>
  );
};

export default ParkPhotos;
