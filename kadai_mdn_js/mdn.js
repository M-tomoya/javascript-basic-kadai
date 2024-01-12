const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const displayDate = () => {
  console.log(date.toLocaleDateString(undefined, options));
}

displayDate();