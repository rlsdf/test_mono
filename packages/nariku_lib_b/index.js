import { format } from 'date-fns';
import a from 'nariku_lib_a';

const container = document.querySelector('.container');
const today = format(new Date(), 'MM/dd/yyyy');

container.innerText = Object.keys(a) + today;

export default Object.keys(a) + today;
