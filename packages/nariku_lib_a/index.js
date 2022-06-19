import _ from 'lodash';

const container = document.querySelector('.container');
const value = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

container.innerText = JSON.stringify(value);

export default value;
