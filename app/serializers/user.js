import RESTSerializer from '@ember-data/serializer/rest';

export default class UserSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {users: payload};
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }
}
