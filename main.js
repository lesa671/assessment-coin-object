// transparency - had assistance from classmate Colin on scope, getting rid of extraneous code,
// and making the 'Heads'/'Tails' strings appear with spaces between them on the page

let coin = {
    state: 0,
    flip: function () {
        this.state = Math.floor(Math.random() * 2)
    },
    toString: function () {
        if (this.state === 0) {
            return 'Heads'
        } else {
            return 'Tails'
        }
    },
    toHTML: function () {
        let image = document.createElement('img')
        if (this.state === 0) {
            image.src = './images/Kennedy half dollar heads.jpg'
        } else {
            image.src = './images/2020-P-Kennedy-Half-Dollar-reverse.jpg'
        }
        return image
    }
};

const bodyElement = document.querySelector('body')
const mainElement = document.createElement('main')
bodyElement.append(mainElement)

function display20Flips() {
    for (let index = 0; index < 20; index++) {
        let showFlip = document.createElement('p')
        coin.flip()
        showFlip.append(coin.toString())
        mainElement.append(showFlip)
    }
}
console.log(display20Flips())

function display20Images() {
    for (let index = 0; index < 20; index++) {
        coin.flip()
        coin.toHTML()
        mainElement.append(coin.toHTML())
    }
}
console.log(display20Images())

