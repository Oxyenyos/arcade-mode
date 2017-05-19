
import { expect } from 'chai';

import {
  PLAYER_PASSED,
  onClickPass
} from '../../../../../client/scripts/arcademode/actions/playerstatus';

describe('Actions: playerstatus', () => {
  it('should return correct player pass type', () => {
    expect(onClickPass().type).to.equal(PLAYER_PASSED);
  });
});
