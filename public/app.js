// get user's data


// get user's coordinates
//function getCoords(){
         // navigator.geolocation.getCurrentPosition();
    //It may seem like this is all that's needed to collect the user's location, but it is more complex than that. The getCurrentPosition() method takes a callback function as an argument. We know the advertisement shouldn't attempt to display a message until we have the user's coordinates. That makes this an asynchronous task. You can use a promise to make async/await syntax available and avoid callbacks.
//}


// Get the user's coordinates:                                                              
// Get the user's coordinates:   

// function getCoords(){
    
//         navigator.geolocation.getCurrentPosition()


//        //It may seem like this is all that's needed to collect the user's location, but it is more complex than that. The getCurrentPosition() method takes a callback function as an argument. We know the advertisement shouldn't attempt to display a message until we have the user's coordinates. That makes this an asynchronous task. You can use a promise to make async/await syntax available and avoid callbacks.
// }

// console.log(getCoords());

// function getCoords() {
//     return new Promise((resolve, reject)=> {
//         navigator.geolocation.getCurrentPosition(resolve,reject)
//     })
// }

// console.log(getCoords())

//A promise is returned containing all the GeolocationPosition data. However, the only data needed is the coordinates for the user. First, resolve the position data and then return the latitude and longitude of the object via coords.latitude and coords.longitude. Use async/await syntax to return the coordinates array after the promise is fulfilled.


async function getCoords(){
     pos = await new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve,reject)
     })

     return[pos.coords.latitude, pos.coords.longitude]
}







// get user's time
function userTime(){
    // const now = new Date()
    // console.log(now)

    //The result isn't ideal. Returning the entire Date object makes no sense. The Date object comes with many methods. We only need hours from the object. Use the getHours method to access hours.

     const now = new Date()
     return now.getHours()

}


// helper functions
// check time of day
function getMealTime(){
 const tod = userTime()

    // if(tod>20){return 'late night-snack'}
    // else if(tod>16){return 'dinner'}
    // else if(tod>11){return 'lunch'}
    // else{return 'breakfast'}

    return tod > 20 ? 'late-night snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
// A ternary is another way to write an if-else statement
    // Another way to write the above lines would to refactor it as:
}
 


// build ads
// build ad 1
function buildAd1 () {
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}

// build ad 2

function buildAd2(coordinates){
const coords = coordinates 
const href = 'https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/'
let content = document.querySelector('.ad2')
let inner = document.createElement('p')
inner.innerHTML =  `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
content.append(inner)
}





// event listeners
// on load, build ads
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}