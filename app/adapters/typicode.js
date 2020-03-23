import RESTAdapter from '@ember-data/adapter/rest';

export default class TypiCodeAdapter extends RESTAdapter {
  host = 'https://jsonplaceholder.typicode.com';
}
