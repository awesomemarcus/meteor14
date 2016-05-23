import React from 'react';

class SelectAge extends React.Component {
  render() {
    const {selectId, selectClass} = this.props;
    return(
      <select id={selectId} className={selectClass}>
        <option value>- select age -</option>
        {this.getAgeArray().map(value => (
          <option value={value.age}>{value.age}</option>
        ))}
      </select>
    );
  }

  getAgeArray() {
    const ageOptions = [];

    for (let minAge = 18; minAge <= 99; minAge++) {
      ageOptions.push({age: minAge});
    }

    return ageOptions;
  }
}

export default SelectAge;
