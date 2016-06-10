# Ember-component-apply
[![Build Status](https://travis-ci.org/zenefits/ember-component-apply.svg?branch=master)](https://travis-ci.org/zenefits/ember-component-apply)


Simply component-helper that will apply a given hash to the specified component. 

### Usage

```
ember install git@github.com:zenefits/component-apply.git
```

```
{{#component-apply 'my-component' hashOfAttrs anotherAttr=42 }}
  template block text
{{/component-apply}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
