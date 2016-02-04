import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('vote-guess-button', 'Integration | Component | vote guess button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vote-guess-button}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#vote-guess-button}}
      template block text
    {{/vote-guess-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
