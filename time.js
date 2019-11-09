// Time
	// #020401
	// Create a function a that logs 'Hello'. Create a function b that takes 2 parameters: 
	// function a and a number in seconds, then triggers function a after the number of seconds 
	// passed as parameter.
	// (a, 3) // should log 'Hello' after 3 seconds
	// (a, 5) // should log 'Hello' after 5 seconds
	a = () => console.log('#020401: Hello')
	b = (func, seconds) => setTimeout(func, seconds*1000)
	b(a, 7)
	
	
	// #020402
	// Create a function that logs 'Hello' and the number of seconds elapsed, every second, 
	// then stops after 5 seconds.
	let count = 0
	let logHelloCount = () => {
	  count++
	  console.log('count = ', count)
	  console.log(`Hello ${count}`)
	}
	
	console.log('#020402')
	intervalID = setInterval(logHelloCount, 1000)
	setTimeout(() => {
	  clearInterval(intervalID)
	}, 5050) 