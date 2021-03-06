var OAHRCAnalytics = (function() {

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  var track = function(event, action, label) {
    dataLayer.push({
      "event": event,
      "action": action,
      "label": label
    });
    console.log( event, action, label );
  };

  // credit score slider
  var rangeSliders = document.querySelectorAll( '.rangeslider' );
  var rangeSliderEl;
  for ( var i = 0, len = rangeSliders.length; i < len; i++ ) {
    rangeSliderEl = rangeSliders[i];
    rangeSliderEl.addEventListener( 'click', _rangeSliderEventHandler );
    rangeSliderEl.addEventListener( 'touchend', _rangeSliderEventHandler );
  }
  function _rangeSliderEventHandler() {
    var sliderRangeEl = document.querySelector( '#slider-range' );
    var score = sliderRangeEl.textContent;
    track('OAH Rate Tool Interactions', 'Score range', score);
  }


  // state select
  var locationEl = document.querySelector( '#location' );
  locationEl.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'Select state', value);
  } );

  // house price
  var housePriceEl = document.querySelector( '#house-price' );
  housePriceEl.addEventListener( 'keyup', function(evt) {
    var target = evt.target;
    var value = target.value;
    delay(function(){
      track('OAH Rate Tool Interactions', 'House price', value);
    }, 5000 );
  } );

  // down payment percentage
  var percentDownEl = document.querySelector( '#percent-down' );
  percentDownEl.addEventListener( 'keyup', function(evt) {
    var target = evt.target;
    var value = target.value;
    delay(function(){
      track('OAH Rate Tool Interactions', 'Down payment percent', value);
    }, 5000 );
  } );

  // down payment $
  var downPaymentEl = document.querySelector( '#down-payment' );
  downPaymentEl.addEventListener( 'keyup', function(evt) {
    var target = evt.target;
    var value = target.value;
    delay(function(){
      track('OAH Rate Tool Interactions', 'Down payment amount', value);
    }, 5000 );
  } );

  // rate structure
  var rateStructureEl = document.querySelector( '#rate-structure' );
  rateStructureEl.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'Rate structure', value);
  } );

  // loan term
  var loanTermEl = document.querySelector( '#loan-term' );
  loanTermEl.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'Loan term', value);
  } );

  // loan type
  var loanTypeEl = document.querySelector( '#loan-type' );
  loanTypeEl.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'Loan type', value);
  } );

  // arm type
  var armTypeEl = document.querySelector( '#arm-type' );
  armTypeEl.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'ARM type', value);
  } );

  // rate comparison select #1
  var rateCompare1El = document.querySelector( '#rate-compare-1' );
  rateCompare1El.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'Interest cost 1', value);
  } );

  // rate comparison select #2
  var rateCompare2El = document.querySelector( '#rate-compare-2' );
  rateCompare2El.addEventListener( 'change', function(evt) {
    var target = evt.target;
    var value = target.value;
    track('OAH Rate Tool Interactions', 'Interest cost 2', value);
  } );

  // page reload link
  var reloadLinkEl = document.querySelector( '#reload-link' );
  if ( reloadLinkEl ) {
    reloadLinkEl.addEventListener( 'click', function() {
      track('OAH Rate Tool Interactions', 'Revert', '/owning-a-home/rate-checker');
    } );
  }

  // next steps: I plan to buy in the next couple of months
  var planToBuyTabEl = document.querySelector( '#plan-to-buy-tab' );
  planToBuyTabEl.addEventListener( 'click', function() {
    track('OAH Rate Tool Interactions', 'Click', 'Collapsed_Tabs_Buying');
  } );

  // next steps: I won't buy for several months
  var wontBuyTabEl = document.querySelector( '#wont-buy-tab' );
  wontBuyTabEl.addEventListener( 'click', function() {
    track('OAH Rate Tool Interactions', 'Click', 'Collapsed_Tabs_Not_Buying');
  } );
})();
