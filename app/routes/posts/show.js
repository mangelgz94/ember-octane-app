import Route from '@ember/routing/route';
import {set} from '@ember/object';

export default class PostsShowRoute extends Route {
  model(params) {
    return this.store.findRecord('post', params.id);
  }

  setupController(controller, context) {
    set(controller, 'post', context);
  }
}
