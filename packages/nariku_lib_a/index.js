import { format } from 'date-fns';
import _ from 'lodash';

const container = document.querySelector('.container');
const value = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
const today = format(new Date(), 'MM/dd/yyyy');

container.innerText = JSON.stringify(value) + today;

export default value;
