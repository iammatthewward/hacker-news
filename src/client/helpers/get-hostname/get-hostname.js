function hasProtocol(url) {
    return url.includes('http') || url.includes('https');
}

function getHostname(url) {
    const index = hasProtocol(url) ? 2 : 0;
    return url.split('/')[index];
}

export default getHostname;
