
function timeChangeFunction() {
	let curr = new Date();
	let hrs = curr.getHours();
	let min = String(curr.getMinutes()).padStart(2, "0");
	let sec = String(curr.getSeconds()).padStart(2, "0");
	hrs = String(hrs).padStart(2, "0");
    time.textContent = `${hrs}:${min}:${sec}`;
}

function showAlarmFunction() {
	let alarms = contan.querySelectorAll(".alarm");
	alarms.forEach((alarm) => {
		let deleteButton = alarm.querySelector(".delete-alarm");
		deleteButton.addEventListener("click", () => {
			alarmDiv.remove();
			cnt--;
			clearTimeout(interVal);
			const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
			if (alarmIndex !== -1) {
				almTimesArray.splice(alarmIndex, 1);
			}
		});
	});
}
showAlarmFunction();
setInterval(timeChangeFunction, 1000);
btn.addEventListener("click", alarmSetFunction);
timeChangeFunction();
