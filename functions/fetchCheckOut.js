

function fetchCheckOut(productId, size, threadId){
    var earlyLink = "https://www.nike.com/us/en/launch-checkout?productId=" 
    + productId + "&size=" + size + "&channel=snkrs&threadId=" + threadId

    // console.log(earlyLink);
    return earlyLink
}

module.exports = fetchCheckOut