import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default class PostsUserRoute extends Route {
  model(params) {
    return this.store.query('post', {userId: params.id});
  }

  setupController(controller, context) {
    set(controller, 'posts', context);
  }
}
