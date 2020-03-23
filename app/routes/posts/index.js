import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default class PostsIndexRoute extends Route {

  model() {
    return this.store.findAll('post');
  }

  setupController(controller, context) {
    set(controller, 'posts', context);
  }
}
