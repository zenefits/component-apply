import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-apply', 'Integration | Component | component apply', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{component-apply 'link-to' target="_blank" class="myClass"}}`);

  assert.equal(this.$('a').attr('target'), '_blank');
  assert.equal(this.$('a').hasClass('myClass'));
  assert.equal(this.$('a').hasClass('ember-view'));

  // Template block usage:
  this.render(hbs`
    {{#component-apply 'link-to' target="_blank" class="myClass"}}
      template block text
    {{/component-apply}}
  `);
});

test('it renders with block', function(assert) {
  assert.equal(this.$('a').text().trim(), 'template block text');
  assert.equal(this.$('a').attr('target'), '_blank');
  assert.equal(this.$('a').hasClass('myClass'));
  assert.equal(this.$('a').hasClass('ember-view'));
});
