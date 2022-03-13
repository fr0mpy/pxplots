//initialize throttlePause variable outside throttle function
let throttlePause: Boolean;

const throttle = (callback: Function, time: number) => {
	if (throttlePause) return;
	console.log('throttle')
	throttlePause = true;

	setTimeout(() => {
		callback();

		throttlePause = false;
	});
};

export default throttle;