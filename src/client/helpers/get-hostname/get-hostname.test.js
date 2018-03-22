import getHostname from './get-hostname';

describe('getHostname', () => {
    describe('url has protocol', () => {
        it('should return the hostname for http', () => {
            // arrange
            const url = 'http://google.com/search?foo=bar';
            const expected = 'google.com';
            // act
            const actual = getHostname(url);
            // assert
            expect(actual).toEqual(expected);
        });

        it('should return the hostname for https', () => {
            // arrange
            const url = 'https://google.com/search?foo=bar';
            const expected = 'google.com';
            // act
            const actual = getHostname(url);
            // assert
            expect(actual).toEqual(expected);
        });
    });

    describe('url does not have protocol', () => {
        it('should return the hostname', () => {
            // arrange
            const url = 'google.com/search?foo=bar';
            const expected = 'google.com';
            // act
            const actual = getHostname(url);
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
