import applyProps from './apply-props';

describe('applyProps helper', () => {
    describe('when passed a component and some props', () => {
        let component;
        let props;
        let actual;

        beforeEach(() => {
            component = _props => _props;
            props = { foo: 'bar' };
            actual = applyProps(props)(component);
        });

        it('returns a function', () => {
            expect(actual).toBeInstanceOf(Function);
        });

        it('sets a name on the returned function for a sensible stack trace', () => {
            const expected = 'applyProps: component';
            expect(actual.name).toEqual(expected);
        });

        it('returns the applied props', () => {
            const expected = { foo: 'bar' };
            expect(actual()).toEqual(expected);
        });

        it('merges new props passed in with applied props', () => {
            const expected = { foo: 'bar', baz: 'bar' };
            expect(actual({ baz: 'bar' })).toEqual(expected);
        });
    });
});
