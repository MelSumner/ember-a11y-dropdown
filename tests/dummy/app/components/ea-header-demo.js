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
      type: 'separator',
    },
    {
      type: 'button',
      text: 'Button Text',
    },
    {
      text: 'Hi Melanie how are you today?',
    },
  ];
}
