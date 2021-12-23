ember-a11y-dropdown
==============================================================================

This is an accessible dropdown that you can use in your Ember app for a menu dropdown.
I'm making it so people can stop using the `<details>` element because that's really a nested interactive element.

Whatever else you may be able to force this component to do is coincidental.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.20 or above
* Ember CLI v3.20 or above
* Node.js v12 or above

Installation
------------------------------------------------------------------------------

I haven't released this addon yet, but once I do you can install it the same way you do other Ember addons:

```bash
ember install ember-a11y-dropdown
```

Usage
------------------------------------------------------------------------------

The component markup:

* a div to wrap the entire component so it doesn't mess up your flex or grid layout
* a button element to show/hide the dropdown
* an unordered list element that contains the dropdown
* the LinkTo components (link element) if a route is defined

Classes for styling:

The specificity in the addon is a single level; it is explicitly only the class names that are attached to each element of the component. That means if you want to override on your own, you can.

* the wrapping `<div>` has the class `ea-dropdown`
* the `<button>` has the class `ea-dropdown__button`
* the `<ul>` has the class `ea-dropdown__list`
* the `<li>` has the class `ea-dropdown__list-item`
* the `<a>` has the class `ea-dropdown__link`

Now, if you are going to override any borders or outlines, do it the accessible way!

```css
.my-element {
  border-color: transparent;
}
```

With a transparent border, users with high-contrast mode will still be able to see borders because high-contrast mode ignores border colors. Pretty cool trick, right?

Basic use:


You can add an array to a controller for the page where you've used the component:

For example, here's the controller in this addon's demo app:

```js
// controllers/application.js
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked someArray = [
    {
      route: 'index',
      text: 'one',
    },
    {
      route: 'alpha', // actual name of route in demo app
      text: 'two',
    },
  ];
}
```

And here it is invoked in the demo app's application template:

```hbs
<EaDropdown @listItems={{this.someArray}} />
```

Of course, it's far more likely that you'll use this as part of your header or nav component. In this example, I've made a component in the demo app called `ea-header-demo` and used the dropdown component inside of that:

```hbs
{{!--tests/dummy/app/components/ea-header-demo.hbs--}}
<header>
  <NavigationNarrator />
  <h1>
    ember-a11y-dropdown
  </h1>
  <nav>
    <EaDropdown @listItems={{this.listItems}} @buttonLabel="Sample Dropdown" />
  </nav>
</header>
```

This means that I can define the array for `@listItems` in my component instead of a controller:

```js
// tests/dummy/app/components/ea-header-demo.js
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
      text: 'separator',
    },
    {
      text: 'We are happy to see you!'
    }
  ];
}
```

You'll notice a few things: 

* to create a separator in the list, use `type: 'separator'` - the component looks for `listitem.type` to be `separator`.
* if you want something in the list that isn't a link, then don't define a `route` for that item, just `name`. 

Contributing
------------------------------------------------------------------------------

File an issue if you think something is missing or should be added.

PRs to fix those issues are welcome.

Feel free to ping me on Discord if I don't reply soon enough (and sorry in advance if that happens).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
