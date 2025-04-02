const firstPromise = new Promise((resolve) => setTimeout(() => resolve('first'), 2000))
const secondPromise = new Promise((_, reject) => setTimeout(() => reject('second'), 1000))
const thirdPromise = new Promise((resolve) => setTimeout(() => resolve('third'), 5000))


function promiseRace(promisesArray) {
    return new Promise((resolve, reject) => {
        for(const promise of promisesArray) {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        }
    })
};

promiseRace([firstPromise, secondPromise, thirdPromise])
    .then(result => console.log('Успех', result))
    .catch(error => console.log('Ошибка', error))