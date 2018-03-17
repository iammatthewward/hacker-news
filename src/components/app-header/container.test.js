import Container from './container';

describe('AppHeader container', () => {
    let component;

    beforeEach(() => {
        component = jest.fn();
    });

    it('should pass a heading prop to the wrapped component', () => {
        // arrange
        const expected = { heading: expect.any(String) };
        // act
        Container(component)();
        // assert
        expect(component).toHaveBeenCalledWith(expected);
    });
});
