const nock = require('nock');

const DATABASE_URL = 'https://hacker-news.firebaseio.com/v0';
const list = require('./list')(DATABASE_URL);

describe('database list', () => {
    it('should return the first 30 of the given entity', async () => {
        // arrange
        const allStories = Array(100).fill().map(() => ({ foo: 'bar' }));
        nock(DATABASE_URL)
            .get('/topstories.json')
            .reply(200, allStories);
        const expected = allStories.slice(0, 30);

        // act
        const actual = await list('topstories');

        // assert
        expect(actual).toEqual(expected);
    });
});
