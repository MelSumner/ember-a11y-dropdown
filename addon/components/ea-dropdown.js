import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class EaDropdownComponent extends Component {
  @tracked isShowing = false;

  buttonId = 'ead-button-' + guidFor(this);

  /**
   * @param buttonLabel
   * @type {string}
   * @default 'User Menu'
   * @description the text content for the trigger button.
   */
  get buttonLabel() {
    return this.args.buttonLabel ?? 'User Menu';
  }

  /**
   * @param isIconOnly
   * @type {boolean}
   * @default false
   * @description indicates if an icon should be used for the trigger button. If set to true, the buttonLabel text will be used as the aria-label value.
   */
  get isIconOnly() {
    return this.args.isIconOnly ?? false;
  }

  /**
   * @param iconUrl
   * @type {string|null}
   * @description the URL of the icon
   */
  get iconUrl() {
    return this.args.iconUrl ?? null;
  }

  /**
   * @param iconPos
   * @type {string}
   * @description Indicates the icon position and displayed if iconURL is set. Acceptable values are 'leading' and 'trailing'.
   */
  get iconPos() {
    return this.args.iconPos ?? 'leading';
  }

  /**
   * @param listItems
   * @type {array|null}
   * @description the array that includes the list items to be used for the dropdown
   */
  get listItems() {
    return this.args.listItems ?? null;
  }

  /**
   * @param toggleShowing
   * @type {boolean}
   * @description internal; toggles whether or not the dropdown is shown
   */
  @action
  toggleShowing() {
    this.isShowing = !this.isShowing;
  }
}

//TODD add button support
//TODO add tests
