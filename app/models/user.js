import Model, {attr, hasMany} from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') email;
  @attr('string') phone;
  @attr('string') website;
  @hasMany('post') posts;
}
