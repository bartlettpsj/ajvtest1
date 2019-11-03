const Ajv = require('ajv');
const schema = require('./schema');

const data = [
  {
    "id": 1,
    "name": "An iPad Pro",
    "price": 2.50,
  },
  {
    "id": 2,
    "name": "An ice sculpture",
    "price": 12.50,
  },
  {
    "id": 3,
    "name": "A blue mouse",
    "price": 25.50,
  },
  {
    "id": 4,
    "name": "A product with no price",
    "price": 2.50,
    extra: 123
  }
];

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile(schema);

// check each record
data.forEach((d => {
  const valid = validate(d);
  if (!valid) console.log(validate.errors); else console.log('Data is Valid');
}))

