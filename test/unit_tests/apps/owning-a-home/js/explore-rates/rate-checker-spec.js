const BASE_JS_PATH = '../../../../../../cfgov/unprocessed/apps/owning-a-home/';
const rateChecker = require( BASE_JS_PATH + 'js/explore-rates/rate-checker' );

const HTML_SNIPPET = `
  <div class="rate-checker">
<<<<<<< HEAD
    <div id="rate-results">
      <div id="accessible-data-results">
        <table id="accessible-data">
          <tbody>
            <tr class="table-head">
              <th>Loan Rates</th>
            </tr>
            <tr class="table-body">
              <td>number of corresponding rates</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="result">
      <div class="calculator">
        <section class="credit-score">
          <input type="range"
                 id="credit-score"
                 class="a-range">
          <div id="slider-range"></div>
        </section>

        <section class="calc-loan-amt" id="loan-amt-inputs">
            <div class="house-price half-width-gt-1230">
                <label for="house-price">House price</label>
                <div class="dollar-input">
                    <span class="unit">$</span>
                    <input type="text" placeholder="200,000" name="house-price"
                           class="recalc" id="house-price">
                </div>
            </div>
            <div class="down-payment half-width-gt-1230">
                <label for="down-payment">Down payment</label>
                <div class="percent-input">
                    <span class="unit">%</span>
                    <input type="text" placeholder="10"
                           name="percent-down" maxlength="2"
                           class="recalc" id="percent-down">
                </div>
                <div class="dollar-input">
                    <span class="unit">$</span>
                    <input type="text" placeholder="20,000" name="down-payment"
                           class="recalc" "="" id="down-payment">
                </div>
            </div>
            <div class="loan-amt-total half-width-gt-1230">
                <label class="inline">Loan amount</label>
                <span id="loan-amount-result">$180,000</span>
            </div>
            <div class="county half-width-gt-1230 u-hidden">
                <label for="county">County</label>
                <div class="select-content a-select">
                    <select name="county" class="recalc" id="county">
                    </select>
                </div>
            </div>
        </section>
      </div>
    </div>
=======
    <input type="range"
           id="credit-score"
           class="a-range">
    <div id="slider-range"></div>
>>>>>>> Add Slider tests and move to own class
  </div>
`;

describe( 'explore-rates/rate-checker', () => {
  beforeEach( () => {
    document.body.innerHTML = HTML_SNIPPET;
  } );

  describe( 'init()', () => {

    it( 'should not initialize when rate-checker class isn\'t found', () => {
      document.body.innerHTML = '';
      expect( rateChecker.init() ).toBe( false );
    } );

    it( 'should initialize when rate-checker class is found', () => {
      expect( rateChecker.init() ).toBe( true );
    } );

  } );
} );
