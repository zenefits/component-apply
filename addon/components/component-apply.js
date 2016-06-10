import Ember from 'ember';

export default Ember.Component.extend({
  layout: Ember.computed(function () {
    // NOTE: we only splat/apply a hash, we ignore positional params for now
    // const positionalParams = this.constructor.positionalParams;
    const attributesMap = Object.keys(this.attrs)
      .map(key =>`${key}=${key}`).join(' ');
    return Ember.HTMLBars.compile(`
      {{#if hasBlock}}
        {{#if (hasBlock "inverse")}}
          {{#component wrappedComponentName ${attributesMap} as |a b c d e f g h i j k|}}
            {{yield a b c d e f g h i j k}}
          {{else}}
            {{yield to="inverse"}}
          {{/component}}
        {{else}}
          {{#component wrappedComponentName ${attributesMap} as |a b c d e f g h i j k|}}
            {{yield a b c d e f g h i j k}}
          {{/component}}
        {{/if}}
      {{else}}
        {{component wrappedComponentName ${attributesMap}}}
      {{/if}}
    `);
  })
});
