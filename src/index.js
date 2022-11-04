const display = (msg, ...rest) => {
  console.log(msg, rest);
}

const user = {
  name: 'test',
  job: 'researcher'
};

const { name, job } = user;