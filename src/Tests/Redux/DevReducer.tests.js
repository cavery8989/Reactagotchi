import {expect} from 'chai';
import devReducer from '../../../src/Redux/Reducers/Dev';
import * as actions from '../../../src/Redux/Actions/Actions';

describe('Dev Reducer', () => {
  it('is a function', () => {
    expect(devReducer).to.be.a('function');
  });

  describe('when passed action with type of ADD_TO_LIT_PIXEL_ARRAY', () => {
    it('returns correct new state in pure fashion', () => {
      const initialState = {
        litPixels: [1,2,3,4,5]
      };

      const initialStateTemplate = {
        litPixels: [1,2,3,4,5]
      };

      const action = actions.addLitPixel(33);

      const newState = devReducer(initialState,action);

      const expected = {
        litPixels: [1,2,3,4,5,33]
      };

      expect(newState).to.eql(expected);
      expect(initialState).to.eql(initialStateTemplate);

    })
  });
});
