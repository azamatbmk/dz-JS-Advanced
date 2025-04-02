const timeOptions = [
    { month: 'numeric' },
    { day: 'numeric' },
    { hour: 'numeric' },
    { minute: 'numeric' },
    { second: 'numeric' }
];


function timeForNewYear(options) {
    let now = Date.now();
    let newYear = new Date('2025-12-31').getTime()
    let timer = newYear - now
    return new Intl.DateTimeFormat('ru-RU', options).format(timer)
};

    setInterval(() => {
        let timer = document.querySelector('.timer');
        timer.innerText = `${timeForNewYear(timeOptions[0])} месяцев ` + 
                          `${timeForNewYear(timeOptions[1])} дней ` + 
                          `${timeForNewYear(timeOptions[2])} часов ` + 
                          `${timeForNewYear(timeOptions[3])} минут ` + 
                          `${timeForNewYear(timeOptions[4])} секунд`
        
    },1000);