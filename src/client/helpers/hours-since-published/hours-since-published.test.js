import MockDate from 'mockdate';
import hoursSincePublished from './hours-since-published';

describe('hoursSincePublished', () => {
    let unixTimestamp;

    beforeEach(() => {
        unixTimestamp = 1521892800;
        MockDate.set(1521903600000);
    });

    describe('when given a unix timestamp', () => {
        it('should return the hours between the given time and the current time', () => {
            // arrange
            const expected = 3;
            // act
            const actual = hoursSincePublished(unixTimestamp);
            // assert
            expect(actual).toEqual(expected);
        });
    });
});
