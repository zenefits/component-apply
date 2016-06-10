import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-apply', 'Integration | Component | component apply', {
  integration: true
});


test('doesnt have its own element (tagless component)', function (assert) {
    this.render(hbs`{{component-apply 'my-component' class="test-class"}}`);

    assert.equal(this.$().children('.my-component').length, 1);
});

test('applies all attrs passed to component-apply', function (assert) {
  this.render(hbs`{{component-apply 'my-component' max=42 min=10 class="test-class"}}`);

  assert.ok(this.$('.my-component').hasClass('test-class'));
  assert.ok(this.$('.my-component').hasClass('ember-view'));
  assert.equal(this.$('.my-component .min').text().trim(), '10');
  assert.equal(this.$('.my-component .max').text().trim(), '42');
});

test('applies the second positional attribute', function (assert) {
  this.set('attrsToApply', {max:42, min:10, 'class':'test-class'});
  this.render(hbs`{{component-apply 'my-component' attrsToApply}}`);

  assert.ok(this.$('.my-component').hasClass('test-class'));
  assert.ok(this.$('.my-component').hasClass('ember-view'));
  assert.equal(this.$('.my-component .min').text().trim(), '10');
  assert.equal(this.$('.my-component .max').text().trim(), '42');
});

test('can mix positional attribute and attrs giving preference to the attrs', function (assert) {
  this.set('attrsToApply', {max:'frompositionalparam', min: 'frompositionalparam'});
  this.render(hbs`{{component-apply 'my-component' attrsToApply max='fromattr' class='from-attr'}}`);

  assert.ok(this.$('.my-component').hasClass('from-attr'));
  assert.ok(this.$('.my-component').hasClass('ember-view'));
  assert.equal(this.$('.my-component .min').text().trim(), 'frompositionalparam');
  assert.equal(this.$('.my-component .max').text().trim(), 'fromattr');
});

test('bindings work', function (assert) {
  this.set('attrsToApply', {max:'frompositionalparam', min: 'originalMinValue'});
  this.set('max', 'originalMaxValue');
  this.render(hbs`{{component-apply 'my-component' attrsToApply max=max}}`);

  this.set('attrsToApply.min', 'newMinValue');
  assert.equal(this.$('.my-component .min').text().trim(), 'newMinValue');

  this.set('max', 'newMaxValue');
  assert.equal(this.$('.my-component .max').text().trim(), 'newMaxValue');
});

test('renders with block', function (assert) {
  this.render(hbs`
    {{#component-apply 'my-component' max=42 min=10 class="test-class"}}
      template block text
    {{/component-apply}}
  `);

  assert.equal(this.$('.my-component').text().trim(), 'template block text');
});


test('the component name is also dynamic', function (assert) {
  this.set('componentName', 'my-component');
  this.render(hbs`{{component-apply componentName attrsToApply max=max}}`);

  assert.equal(this.$('.my-component').length, 1);
  this.set('componentName', 'my-component2');
  assert.equal(this.$('.my-component').length, 0);
  assert.equal(this.$('.my-component2').length, 1);
});
