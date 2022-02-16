import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class EaHeaderDemoComponent extends Component {
  @tracked listItems = [
    {
      route: 'index',
      text: 'Home',
    },
    {
      route: 'alpha',
      text: 'Alpha Page',
    },
    {
      route: 'bravo',
      text: 'Bravo Page',
    },
    {
      type: 'separator',
    },
    {
      text: 'User: melsumner',
    },
  ];
}
