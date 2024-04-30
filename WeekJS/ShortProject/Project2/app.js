let data = [
    {
        name: 'Ben',
        show: 'Ben10',
        Powers: "Transformation"
    },
    {
        name: 'Ben',
        show: 'Ben10',
        Powers: "Transformation"
    },
    {
        name: 'Ben',
        show: 'Ben10',
        Powers: "Transformation"
    },
    {
        name: 'Ben',
        show: 'Ben10',
        Powers: "Transformation"
    },
    {
        name: 'Ben',
        show: 'Ben10',
        Powers: "Transformation"
    },
    {
        name: 'Ben',
        show: 'Ben10',
        Powers: "Transformation"
    }

]

const createParagrahElements = (amountPtags) => {
    let listOfTags = [ ]
    for (let i=0; i < amountPtags; i++ ) {
        paragraphTag = document.createElement('p')
        listOfTags.append(paragraphTag)
    }
    return listOfTags
}

const createElements = () => {
    for (let i=0; i < data.length; i++) {
        hero = data[i]
        const heroElement = document.createElement(div)

        //create child elements
        const heroNameElement = document.createElement('p')
        const heroShowElement = document.createElement('p')
        const heroPowerElement = document.createElement('p')
        
        //add inner text to element
        heroNameElement.innerHTML = hero.name
        heroNameElement.innerHTML = hero.name
        heroNameElement.innerHTML = hero.namejhbg


        heroElement.appe

    }
}

CartoonDiv = document.querySelectorAll('.Cartoon-Heroes')

