import moment from 'moment';

export const getDate = date => moment(date).format('MMM Do YY');
