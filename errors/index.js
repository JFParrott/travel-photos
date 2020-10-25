exports.invalidEndpointHandler = (req, res, next) => {
  res.status(404).send({ msg: 'This page does not exist' });
};

exports.customErrorHandler = (err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

exports.send500Error = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal server error' });
};

exports.handle405Error = (req, res, next) => {
  res.status(405).send({ msg: 'Method not allowed' });
};
