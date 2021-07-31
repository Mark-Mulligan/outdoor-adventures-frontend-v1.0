import Table from '../components/Table';
import FullPageBackground from '../components/FullPageBackground';

const columns = [
  { name: 'Name', accessor: 'fullname' },
  { name: 'Park Code', accessor: 'parkcode' },
  { name: 'State(s)', accessor: 'states' },
  { name: 'Designation', accessor: 'designation' },
];

const data = [
  {
    fullname: 'Abraham Lincoln Birthplace National Historical Park',
    parkcode: 'abli',
    states: 'KY',
    designation: 'National Historical Park',
  },
  {
    fullname: 'Acadia National Park',
    parkcode: 'acad',
    states: 'ME',
    designation: 'National Park',
  },
  {
    fullname: 'Adams National Historical Park',
    parkcode: 'adam',
    states: 'MA',
    designation: 'National Historical Park',
  },
  {
    fullname: 'African American Civil War Memorial',
    parkcode: 'afam',
    states: 'DC',
    designation: '',
  },
  {
    fullname: 'African Burial Ground National Monument',
    parkcode: 'afbg',
    states: 'NY',
    designation: 'National Monument',
  },
  {
    fullname: 'Agate Fossil Beds National Monument',
    parkcode: 'agfo',
    states: 'NE',
    designation: 'National Monument',
  },
  {
    fullname: 'Ala Kahakai National Historic Trail',
    parkcode: 'alka',
    states: 'HI',
    designation: 'National Historic Trail',
  },
  {
    fullname: 'Alagnak Wild River',
    parkcode: 'alag',
    states: 'AK',
    designation: 'Wild River',
  },
  {
    fullname: 'Alaska Public Lands',
    parkcode: 'anch',
    states: 'AK',
    designation: '',
  },
  {
    fullname: 'Alcatraz Island',
    parkcode: 'alca',
    states: 'CA',
    designation: '',
  },
];

const ParksPage = () => {
  return (
    <FullPageBackground backgroundImg="./images/mountainForestBackground-min.jpg">
      <h1>Parks Page</h1>
      <Table columns={columns} data={data} pagination />
    </FullPageBackground>
  );
};

export default ParksPage;
