let timeDisplay = document.getElementById('time-display');

function updateTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let milliseconds = String(now.getMilliseconds()).padStart(1, '0');
    milliseconds = milliseconds.substring(0, 1); // Take only the first digit of milliseconds
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}0`;

    let lessonDisplay = document.getElementById('lesson-display');
    let schoolTime = detectSchoolTime();

    lessonDisplay.innerHTML = `${schoolTime.getHours()}:${schoolTime.getMinutes()}`;

}

setInterval(updateTime, 100);
updateTime();

function detectSchoolTime() {
    const starts = [
        [8, 0],
        [8, 55],
        [10, 0],
        [10, 55],
        [11, 50],
        [12, 45],
        [13, 40],
        [14, 35],
        [15, 30],
        [16, 25],
        [17, 20],
    ]
    const pause = [

        [8, 50],
        [8, 55],

        [9, 45],
        [10, 0],

        [10, 50],
        [10, 55],

        [11, 45],
        [11, 50],

        [12, 40],
        [12, 45],

        [13, 35],
        [13, 40],

        [14, 30],
        [14, 35],

        [15, 25],
        [15, 30],

        [16, 20],
        [16, 25],

        [17, 15],
        [17, 20],
    ]

    let date = new Date()

    let ret;

    for (let i = 0; i < starts.length; i++) {
        if (date.getHours() > 18) {
            ret = "Wait till tomorrow 🎀"
        } else {


            if (
                (date.getHours() == starts[i][0] && date.getMinutes() >= starts[i][1] ||
                    date.getHours() == starts[i][0] + 1) && date.getMinutes() <= starts[i][1]
            ) {

                ret = new Date(date.getFullYear(), date.getMonth(), date.getDay(), pause[i * 2][0], pause[i * 2][1], date.getSeconds(), date.getMilliseconds());
                let temp = new Date()

            }
        }

    }


    return ret;

}
