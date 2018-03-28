// Required modules.
import { checkDom, setInitFlag }
  from '../../../../js/modules/util/atomic-helpers';
import { UNDEFINED }
  from '../../../../js/modules/util/standard-type';
import { sliderLabel } from './template-loader';
import { getSelection } from './dom-values';
import rangesliderJs from 'rangeslider-js'


/**
 * Footer
 * @class
 *
 * @classdesc Initializes the organism.
 *
 * @param {HTMLNode} element
 *   The DOM element within which to search for the organism.
 * @returns {Footer} An instance.
 */
function Slider( element ) {

  const BASE_CLASS = 'a-range';
  const _dom = checkDom( element, BASE_CLASS );
  let _min;
  let _max;
  let _onSlideEndHandler;
  let _sliderTextDom;

  /**
   * @param {number} min - Minimum value of the range.
   * @param {number} max - Minimum value of the range.
   * @param {HTMLNode} sliderTextDom - HTML element used for slider range text.
   * @param {Function} onSlideEndHandler - Callback when user releases slider.
   * @returns {Slider|undefined} An instance,
   *   or undefined if it was already initialized.
   */
  function init( min, max, sliderTextDom, onSlideEndHandler ) {
    if ( !setInitFlag( _dom ) ) {
      return UNDEFINED;
    }

    _min = min;
    _max = max;
    _sliderTextDom = sliderTextDom;
    _onSlideEndHandler = onSlideEndHandler;

    return this;
  }

  /**
   * Initialize the range slider. http://andreruffert.github.io/rangeslider.js/
   */
  function render() {
    rangesliderJs.create(
      _dom, {
        min: 600,
        max: 850,
        onInit: () => _update(),
        onSlide: ( position, value ) => _update(),
        onSlideEnd: ( position, value ) => _onSlideEndHandler()
      }
    );
  }

  function _update() {
    const handle = _dom.parentNode.querySelector( '.rangeslider__handle' );
    const leftVal = +Number(
      handle.style.left = handle.style.left.replace( 'px', '' )
    );
    _min = getSelection( 'credit-score' );
    if ( _min === 840 || _min === '840' ) {
      _max = _min + 10;
    } else {
      _max = _min + 19;
    }

    _sliderTextDom.textContent = sliderLabel( {
      min: _min,
      max: _max
    } );
    _sliderTextDom.style.left = leftVal - 9 + 'px';
  }

  this.init = init;
  this.min = () => _min;
  this.max = () => _max;
  this.render = render;

  return this;
}

module.exports = Slider;
