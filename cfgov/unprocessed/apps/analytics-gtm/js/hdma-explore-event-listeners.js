// HMDA Explore custom analytics file

var HMDAAnalytics = (function() {

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
  };

  // Collapsible open and close
  $('#all div.filter').click( function() {
    var action = "Filter Expandable Opened";
    if ( $(this).hasClass('closed') ) {
      action  = "Filter Expandable Closed";
    }
    var label = $(this).attr('id');
    track('HMDA Explore Interactions', action, label);
  });

  // Chosen menu selections for Summary Table Variables
  $('select.chzn-single').change(function() {
    var label = $(this).parent().find('.chzn-container a.chzn-single').text();
    var parent = $(this).closest('div');
    var n = $( '.drop-downs > div' ).index( parent ) + 1;
    var action = 'Variable Dropdown Menu #' + n;
    track('HMDA Explore Interactions', action, label);
  });

  // Chosen menu selections for Year filter
  $('select#as_of_year').change(function() {
    var label = $('#as_of_year_chzn .search-choice:last').text();
    delay(function() {
      track('HMDA Explore Interactions', 'Year Dropdown', label);
    }, 250);
  });

  // Chosen menu selections for suggested filters
  $('select#suggested').change(function() {
    var label = $(this).val();
    track('HMDA Explore Interactions', 'Suggested Dropdown', label);
  });

})(jQuery);

/*
// TODO: Verify the below works and then replace jQuery dependent block above.

// Search for support of the matches() method by looking at
// browser prefixes.
// @param {HTMLNode} elem
//   The element to check for support of matches() method.
// @returns {Function} The appropriate matches() method of elem.
function _getMatchesMethod( elem ) {
return elem.matches ||
       elem.webkitMatchesSelector ||
       elem.mozMatchesSelector ||
       elem.msMatchesSelector;
}

// Get the nearest parent node of an element.
// @param {HTMLNode} elem - A DOM element.
// @param {string} selector - CSS selector.
// @returns {HTMLNode} Nearest parent node that matches the selector.
function closest( elem, selector ) {
  elem = elem.parentNode;

  var matchesSelector = _getMatchesMethod( elem );
  var match;

  while ( elem ) {
    if ( matchesSelector.bind( elem )( selector ) ) {
      match = elem;
    } else {
      elem = elem.parentElement;
    }

    if ( match ) { return elem; }
  }

  return null;
}

// HMDA Explore custom analytics file

var HMDAAnalytics = (function() {

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
  };

  // Collapsible open and close
  var divFilterEls = document.querySelectorAll( '#all div.filter' );
  for ( var i = 0, len = divFilterEls.length; i < len; i++ ) {
    divFilterEls[i].addEventListener('click', _handleDivFilterClick);
  }
  function _handleDivFilterClick(evt) {
    var target = evt.target;
    var action = "Filter Expandable Opened";
    if ( target.classList.contains('closed') ) {
      action  = "Filter Expandable Closed";
    }
    var label = target.getAttribute('id');
    track('HMDA Explore Interactions', action, label);
  });

  // Chosen menu selections for Summary Table Variables
  var selectChznSingleEl = document.querySelector( 'select.chzn-single' );
  selectChznSingleEl.addEventListener('change', function(evt) {
    var target = evt.target;
    var label = target.parentNode.querySelector( '.chzn-container a.chzn-single' ).textContent;
    var parent = closest(target, 'div');
    var divs = document.querySelectorAll( '.drop-downs > div' );
    var n = divs.indexOf( parent ) + 1;
    var action = 'Variable Dropdown Menu #' + n;
    track('HMDA Explore Interactions', action, label);
  });

  // Chosen menu selections for Year filter
  var selectAsOfYear = document.querySelector( 'select#as_of_year' );
  selectAsOfYear.addEventListener( 'change', function(evt) {
    var lastItem = document.querySelector( '#as_of_year_chzn .search-choice:last' );
    var label = lastItem.textContent;
    delay(function() {
      track('HMDA Explore Interactions', 'Year Dropdown', label);
    }, 250);
  });

  // Chosen menu selections for suggested filters
  var selectSuggestedEl = document.querySelector( 'select#suggested' );
  selectSuggestedEl.addEventListener('change', function(evt) {
    var target = evt.target;
    var label = target.value;
    track('HMDA Explore Interactions', 'Suggested Dropdown', label);
  });

})();
*/
