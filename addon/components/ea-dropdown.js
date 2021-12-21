import Component from '@glimmer/component';
// import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EaDropdownComponent extends Component {
  @tracked isShowing = false;

  /**
   * @param buttonLabel
   * @type {string}
   * @description
   */
  get buttonLabel() {
    return this.args.buttonLabel ?? 'Menu';
  }

  get listItems() {
    return this.args.listItems ?? 'one';
  }

  @action
  toggleShowing() {
    this.isShowing = !this.isShowing;
  }
}

//TODO add comments for API
//TODO add inert support
//TODO add ESC key support
//TODO add icon support
//TODO add separator support
//TODO add tests
