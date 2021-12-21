import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class EaHeaderDemoComponent extends Component {
  @tracked listItems = [
    {
      route: 'index',
      name: 'Home',
    },
    {
      route: 'alpha',
      name: 'Alpha Page',
    },
  ];
}
