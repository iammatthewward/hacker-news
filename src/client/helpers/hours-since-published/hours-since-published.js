import differenceInHours from 'date-fns/difference_in_hours';

function hoursSincePublished(unixTimestamp) {
    const now = new Date();
    const previous = new Date(unixTimestamp * 1000);

    const difference = differenceInHours(now, previous);
    return difference;
}

export default hoursSincePublished;
