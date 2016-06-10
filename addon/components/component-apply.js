import Ember from 'ember';

const ComponentApply = Ember.Component.extend({
  tagName: '',
  className: 'component-apply',
  layout: Ember.computed(function () {
    // NOTE: we only splat/apply a hash, we ignore positional params for now
    const positionalParams = this.constructor.positionalParams;
    const attrsToApply = Object.keys(this.attrs.attrsToApply || {});
    const attributesMap = attrsToApply.map(key => `${key}=attrsToApply.${key}`)
      .concat(Object.keys(this.attrs)
        .filter(key => positionalParams.indexOf(key) === -1)
        .map(key =>`${key}=${key}`))
      .join(' ');
    const templateString = `
      {{#if hasBlock}}
        {{#if (hasBlock "inverse")}}
          {{#component componentName ${attributesMap} as |a b c d e f g h i j k|}}
            {{yield a b c d e f g h i j k}}
          {{else}}
            {{yield to="inverse"}}
          {{/component}}
        {{else}}
          {{#component componentName ${attributesMap} as |a b c d e f g h i j k|}}
            {{yield a b c d e f g h i j k}}
          {{/component}}
        {{/if}}
      {{else}}
        {{component componentName ${attributesMap}}}
      {{/if}}
    `;
    // this.set('layout', Ember.HTMLBars.compile(templateString));
    return Ember.HTMLBars.compile(templateString);
  })
});

ComponentApply.reopenClass({
  positionalParams: ['componentName', 'attrsToApply']
});

export default ComponentApply;
