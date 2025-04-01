function geolocation () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (postition) => {
                const coord = document.querySelector('.wrapper');
                coord.innerText = `Координы плльзователя: ${postition.coords.latitude} широта, ${postition.coords.longitude} долгота`
                resolve('Координаты успешно получены')
            },
            (error) => {
                const coord = document.querySelector('.wrapper');
                coord.innerText = `Ошибка: Пользователь запретил доступ к геолокации`
                reject(new Error(error.message))
            }
        )
    })
};

geolocation()
.then(message => console.log(message))
.catch(e => console.error(e.message))