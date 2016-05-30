import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('vote-guess', 'Integration | Component | vote guess', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  let testPass = false;

  // Template block usage:
  this.render(hbs`
    {{#vote-guess vote=7.53}}
    {{/vote-guess}}
  `);

  this.$('button').each(function(i, ele){
    if($(ele).text() === '7.5'){
      testPass = true;
    }
  });
  assert.equal(testPass, true, 'vote appears in a button and 7.53 rounds to 7.5');
});
