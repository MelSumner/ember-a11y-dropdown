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
    return this.args.buttonLabel ?? 'User Menu';
  }

  get listItems() {
    return this.args.listItems ?? null;
  }

  @action
  toggleShowing() {
    this.isShowing = !this.isShowing;
  }

  @action
  handleKeyUp(event) {
    let trigger = document.querySelector('#ea-dropdown-button--trigger');
    let escapeKey = event.key === 'Escape' || event.keycode === 27;

    if (escapeKey && this.isShowing === true) {
      this.isShowing = false;
      trigger.focus();
    }
  }
}

//TODO add comments for API
//TODO add inert support
//TODO add clickoutside support
//TODO add icon support
//TODO add tests
