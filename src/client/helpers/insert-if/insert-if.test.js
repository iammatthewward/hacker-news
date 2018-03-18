import insertIf from './index';

describe('insertIf', () => {
    describe('condition is true', () => {
        it('should return an array wrapping a single element', () => {
            // arrange
            const expected = ['foo'];
            // act
            const actual = insertIf(true, 'foo');
            // assert
            expect(actual).toEqual(expected);
        });

        it('should return an array wrapping multiple elements', () => {
            // arrange
            const expected = ['foo', 'bar'];
            // act
            const actual = insertIf(true, 'foo', 'bar');
            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('condition is false', () => {
        it('should return an empty array', () => {
            // arrange
            const expected = [];
            // act
            const actual = insertIf(false, 'foo');
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
