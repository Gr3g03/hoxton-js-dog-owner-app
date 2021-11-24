// console.log(data);

function getDog(data){

    const dogListElements = document.querySelector(".main")
    
    const dogSection = document.createElement('section')
    dogSection.setAttribute('class', 'main__dog-section')

    const dogName = document.createElement('h2')
    dogName.textContent = data.name

   
    const dogImage = document.createElement('img')
    dogImage.setAttribute ("src", data.image)
    dogImage.setAttribute('alt', "")

    const dogdDescription= document.createElement('div')
    dogdDescription.setAttribute("class" ,"main__dog-section__desc")

   
    const dogBio = document.createElement('h3')
    dogBio.textContent = ("BIO")

    const dogDataBio = document.createElement('p')
    dogDataBio.textContent = data.bio

    dogdDescription.append(dogBio,dogDataBio )

    const emEl = document.createElement('em')
    emEl.textContent = "Is naughty? "

    const secondDogParagraph = document.createElement('p')
    secondDogParagraph.append(emEl)
    secondDogParagraph.textContent += " Yes!"

    const btnEl = document.createElement('button')
    btnEl.textContent = "Good dog!"


    const dogSectionDescription= document.createElement('div')
    dogSectionDescription.textContent = (data.isGoodDog)
    dogSectionDescription.setAttribute("class", "main__dog-section__btn")

    dogSection.append(dogName, dogImage, dogdDescription ,dogSectionDescription )
    
    // dogListButton.append(dogSection)
    dogListElements.append(dogSection)
   
}


for (const dog of data) {
    getDog(dog)
}