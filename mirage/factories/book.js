import {Factory} from 'ember-cli-mirage';
import faker from 'faker';


export default Factory.extend({
  title: faker.lorem.sentence,
  author() {
    return faker.name.findName();
  },
  year: faker.date.past
});
