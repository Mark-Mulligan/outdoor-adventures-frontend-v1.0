import { useMemo } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import { stateList, designationList, debounceFunction } from '../utils/uilt';

const TableFilters = ({ parkName, setParkName, setCurrentPage, setDebouncedParkName, setStates, setDesignations }) => {
  const debouncedSearch = useMemo(
    () =>
      debounceFunction((val) => {
        Promise.resolve().then((res) => {
          ReactDOM.unstable_batchedUpdates(() => {
            setCurrentPage(1);
            setDebouncedParkName(val);
          });
        });
      }, 750),
    [setDebouncedParkName, setCurrentPage],
  );

  const onInputChange = (e) => {
    setParkName(e.target.value);
    debouncedSearch(e.target.value);
  };

  const onStateSelectChange = (inputData) => {
    const result = [];
    if (inputData.length >= 1) {
      inputData.forEach((item) => {
        result.push(item.value);
      });
    }
    setCurrentPage(1);
    setStates(result);
  };

  const onDesignationSelectChange = (inputData) => {
    const result = [];
    if (inputData.length >= 1) {
      inputData.forEach((item) => {
        result.push(item.value);
      });
    }
    setCurrentPage(1);
    setDesignations(result);
  };

  return (
    <div className="row">
      <div className="col-md-4 col-12 mb-4">
        <label htmlFor="parkname-input" className="visually-hidden">
          Park Name
        </label>
        <input
          value={parkName}
          onChange={onInputChange}
          type="text"
          className="form-control parkname-input"
          id="parkname-input"
          aria-describedby="parkname"
          placeholder="Search by park name"
        />
      </div>
      <div className="col-md-4 col-12 mb-4">
        <label htmlFor="states-select" className="visually-hidden">
          States Filter
        </label>
        <Select
          name="states-select"
          placeholder="Filter by State(s)"
          options={stateList}
          isMulti
          onChange={onStateSelectChange}
        />
      </div>
      <div className="col-md-4 col-12 mb-4">
        <label htmlFor="designation-select" className="visually-hidden">
          Designation Filters
        </label>
        <Select
          name="designation-select"
          placeholder="Filter by Deisgnation(s)"
          options={designationList}
          isMulti
          onChange={onDesignationSelectChange}
        />
      </div>
    </div>
  );
};

export default TableFilters;