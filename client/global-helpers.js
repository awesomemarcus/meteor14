import moment from 'moment';

const formatDate = (date) => {
  return moment(date).calendar();
};

module.exports = {
  formatDate,
};
