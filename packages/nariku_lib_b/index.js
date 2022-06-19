import a from 'nariku_lib_a';

const container = document.querySelector('.container');
const value = Object.keys(a);

container.innerText = value;

export default value;
