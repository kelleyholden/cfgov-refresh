const BASE_JS_PATH = '../../../../../../cfgov/unprocessed/apps/owning-a-home/';
const Slider = require( BASE_JS_PATH + 'js/explore-rates/Slider' );
let sliderDom;
let sliderTextDom;
let slider;

const HTML_SNIPPET = `
  <input type="range"
         id="credit-score"
         class="a-range">
  <div id="slider-range"></div>
`;

describe( 'explore-rates/Slider', () => {
  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
    sliderDom = document.querySelector( '.a-range' );
    sliderTextDom = document.querySelector( '#slider-range' );
    slider = new Slider( sliderDom );
  } );

  describe( 'init()', () => {
    it( 'should return Slider instance if initialized', () => {
      expect( slider.init( 0, 100, sliderTextDom ) ).toBeInstanceOf( Slider );
    } );

    it( 'should return undefined if already initialized', () => {
      slider.init( 0, 100, sliderTextDom );
      expect( slider.init( 0, 100, sliderTextDom ) ).toBeUndefined();
    } );
  } );

  describe( 'min()', () => {
    it( 'should return minimum value of the range slider', () => {
      slider.init( 0, 100, sliderTextDom );
      expect( slider.min() ).toBe( 0 );
    } );
  } );

  describe( 'max()', () => {
    it( 'should return maximum value of the range slider', () => {
      slider.init( 0, 100, sliderTextDom );
      expect( slider.max() ).toBe( 100 );
    } );
  } );

  describe( 'render()', () => {
    beforeEach( () => {
      slider.init( 0, 100, sliderTextDom );
    } );
    it( 'should initialize rangeslider plugin', () => {
      slider.render();
      const rangeSliderDom =
        sliderDom.parentNode.querySelector( '.rangeslider' );
      expect( rangeSliderDom.classList.contains( 'rangeslider' ) )
        .toBe( true );
    } );
  } );

} );
