import { expect } from 'chai'

import * as actions from '../../../src/Redux/Actions/Actions';

describe('Dev Actions', () => {
  it('Creates add pixel action', () => {

    for(var i = 0; i < 10; i++){
      let expected = {
        type: 'ADD_TO_LIT_PIXEL_ARRAY',
        value: i
      };

      const actual = actions.addLitPixel(i);

      expect(expected).to.eql(actual);
    }
  });
});