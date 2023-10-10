// Q1.
// given a rating, dislpay a (*) for each full number and a (.) for half rating
function showRating(rating) {
    let ratings = ''    // init empty str
    for (let i = 0; i < Math.floor(rating); i++) {
        ratings += '*'  // add star every iteration
        if (i !== Math.floor(rating) - 1) {
            ratings += ' '  // if not the last iteration add a space
        }
    }
    if (!Number.isInteger(rating)) {    // if not a whole number
        ratings += ' .'     // add a period
    }
    return ratings

}
console.log(showRating(4.5))



// Q2.
// given arr of numbers, return sorted by low to high
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b)
}
console.log(sortLowToHigh([21, 1000, 18, 93, 0, 6]))



// Q3.
// given an arr of objects, sort the prices from high to low
function sortHighToLow(objects) {
    return objects.sort((a, b) => b.price - a.price)
}
console.log(sortHighToLow([
    { id: 4, price: 38 },
    { id: 6, price: 25 },
    { id: 2, price: 70 }
]))



// Q4.
/**
 * Find all the posts by a single user
 * 
 * Call this API:
 * 'https://jsonplaceholder.typicode.com/posts'
 */
async function postsByUser(userId) {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await promise.json()
    const posts = result.filter(elem => elem.userId === userId)

    console.log(posts)
}
postsByUser(6)



//Q5.
/**
 * Use jsonplaceholder API again
 * 
 * return the first 6 incomplete todo's from the result
 */
async function firstSixIncomplete(completed) {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
    const result = await promise.json()
    const incomplete = result.filter(element => !element.completed).slice(0, 6)

    console.log(incomplete)
}
firstSixIncomplete()