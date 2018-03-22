const nock = require('nock');

const DATABASE_URL = 'https://hacker-news.firebaseio.com/v0';
const read = require('./read')(DATABASE_URL)('item');

describe('database read', () => {
    it('should return the item at the given ID', async () => {
        // arrange
        const item = {
            foo: 'bar'
        };
        nock(DATABASE_URL)
            .get('/item/1.json')
            .reply(200, item);
        const expected = item;

        // act
        const actual = await read(1);

        // assert
        expect(actual).toEqual(expected);
    });
});
