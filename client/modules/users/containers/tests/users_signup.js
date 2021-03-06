const { describe, it } = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import {composer, depsMapper} from '../users_signup';

const initAgeOptions = () => {
  const ageOptions = [];

  for (let minAge = 18; minAge <= 99; minAge++) {
    ageOptions.push({age: minAge});
  }

  return ageOptions;
};

describe('users.containers.usersSignup', () => {
  describe('composer', () => {

    it('should get Errors from local state', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      composer({context}, spy());
      const args = LocalState.get.args;

      expect(args).to.have.length(1);

      expect(args[0]).to.be.deep.equal([ "formErrorObject", null ]);

    });

    it('it should be able to call onData with null and {error}', () => {
      const LocalState = {get: stub().returns('error')};
      const context = () => ({LocalState});
      const onData = spy();
      composer({context}, onData);
      const args = onData.args[0];

      expect(args[0]).to.be.equal(null);
      expect(args[1].getAgeOptions).to.be.deep.equal(initAgeOptions());
      expect(args[1].formErrorObject).to.be.deep.equal('error');

    });

    it('should return clearErrors', () => {
      const LocalState = {get: spy()};
      const context = () => ({LocalState});
      const clearErrors = spy();
      const clearFunc = composer({context, clearErrors}, spy());
      expect(clearFunc).to.be.equal(clearErrors);
    });
  });

  describe('depsMapper', () => {
    describe('actions', () => {

      it('should map users.userSignup', () => {
        const actions = {users: {userSignup: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.userSignup).to.be.equal(actions.users.userSignup);
      });

      it('should map users.clearErrors', () => {
        const actions = {users: {clearErrors: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.clearErrors).to.be.equal(actions.users.clearErrors);
      });

  });


    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {users: {userSignup: spy(), clearErrors: spy(), validateInputField:spy()}};
        const context = spy();
        const deps = depsMapper(context, actions);
        expect(deps.context()).to.be.equal(context);
      });
    });
  });

});
