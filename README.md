# ember-a11y-dropdown

**Note: this is not to replace a `<select>` element in a form.**

This is an accessible dropdown that you can use in your Ember app for a menu dropdown-- or [disclosure navigation menu])https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html)

It's pretty narrow in scope, and there are other addons that do fancier things. 

Use this addon if you:

* want to stop using a `details` element (which is an interactive element so cannot contain other interactive elements)
* need a dropdown menu to put in the header or nav of your site (like a user menu)

Whatever else you may be able to force this component to do is coincidental.

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above

## Installation

I haven't released this addon yet, but once I do you can install it the same way you do other Ember addons:

```bash
ember install ember-a11y-dropdown
```

## Usage

The component markup:

* a `div` to wrap the entire component so it doesn't mess up your flex or grid layout
* a `button` element to show/hide the dropdown
* a `ul` element that contains the dropdown
* the `LinkTo` components (link element) if a route is defined
* a `li` with `role="separator"` (if needed)

### Styling

The specificity in the addon is kept at single level; it is explicitly only the class names that are attached to each element of the component. That means if you want to override on your own, you can. In fact, it is likely that you'll want to override the default styles.

* the wrapping `<div>` has the class `ea-dropdown`
* the `<button>` has the class `ea-dropdown__button`
* the `<ul>` has the class `ea-dropdown__list`
* the `<li>` has the class `ea-dropdown__list-item`
* the `<a>` has the class `ea-dropdown__link`

Note: if you are going to override any borders or outlines, do it the accessible way! Here's what that means: outlines and border-colors need to stay transparent in _your_ code, so if a user has high-contrast mode turned on, they will be able to see the borders; in high-contrast mode, operating systems ignore all color definitions (and `transparent` is indeed considered a color). 

Do this:

```css
.my-element {
  border-color: transparent;
}
```

Do NOT do this:

```css
.my-element {
  border: none;
}
```

Finally, remember that styling pseudo-classes requires your CSS to stay in a specific order. I remember it with the mnemonic "Lord Vader Hates Fluffy Animals":

* `:link`
* `:visited`
* `:hover`
* `:focus`
* `:active`


### Use Case: the component and a controller 

If you add the component directly to your page, you can add an array to a controller:

As a primitive example, here's the controller in this addon's demo app:

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

### Use Case: the nested component

It's far more likely that you'll use this component as part of your app's header or nav component. In this example, I've made a component in the demo app called `ea-header-demo` and used the dropdown component inside of that:

```hbs
{{!--tests/dummy/app/components/ea-header-demo.hbs--}}
<header>
  <NavigationNarrator />
  <h1>
    ember-a11y-dropdown
  </h1>
  <nav>
    <EaDropdown @listItems={{this.listItems}} />
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
      type: 'separator',
    },
    {
      text: 'We are happy to see you!'
    }
  ];
}
```

You'll notice a few things: 

* To create a separator in the list, use `type: 'separator'` - the component looks for `listitem.type` to be `separator`.
* If you want something in the list that isn't a link, then don't define a `route` for that item, just `text`. 

## Keyboard Support

* In order not to conflict with screen readers, I have not done anything fancy with the keyboard support. 
* If a screen reader is active and the dropdown menu is open, users will already be able to navigate with arrow keys. 
* If a screen reader is not open, users can use the `TAB` key to navigate normally.
* If the dropdown is open and the user presses the `ESC` key, the menu will close 
* If focus was on an item list, focus will return to the `button` element that trigger

## Contributing

File an issue if you think something is missing or should be added.

PRs to fix issues are welcome.

Feel free to ping me on Discord if I don't reply soon enough (and sorry in advance if that happens).

## License

This project is licensed under the [MIT License](LICENSE.md).
