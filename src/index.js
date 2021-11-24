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

    const dogSectionDescription= document.createElement('div')
    dogSectionDescription.setAttribute("class", "main__dog-section__btn")

    const emEl = document.createElement('em')
    emEl.textContent = "Is naughty? "

    const btnEl = document.createElement('button')
    btnEl.textContent = "Good dog!"
    btnEl.addEventListener('click', function(){
        btnEl.textContent = "Bad dog "
    })

    const secondDogParagraph = document.createElement('p')

    secondDogParagraph.textContent += ("yes ")
    secondDogParagraph.append(emEl, btnEl)
     
  

    dogSection.append(dogName, dogImage, dogdDescription ,dogSectionDescription, secondDogParagraph)
    
    dogListElements.append(dogSection)
   
}


for (const dog of data) { 
    getDog(dog)
}


function addDog(){

    const dogSection = document.createElement('section')
    dogSection.setAttribute('class', 'main__dog-section')

    const addDogH2 = document.createElement('h2')
    addDogH2.textContent = ('Add a new Dog')

    const formElement = document.createElement('form')
    formElement.setAttribute('class', 'form')

    const labelElement = document.createElement('label')
    labelElement.setAttribute('for', 'name')
    labelElement.textContent = (`Dog's name`)
    const inputElement =document.createElement('input')
    inputElement.setAttribute('type', 'text')
    inputElement.setAttribute('type', 'text')
    inputElement.setAttribute('name', 'name')

    const labelElement2 = document.createElement('label')
    labelElement2 .setAttribute('for', 'image')
    labelElement2.textContent = (`Dog's picture`)
    const inputElement2 =document.createElement('input')
    inputElement2.setAttribute('type', 'url')
    inputElement2.setAttribute('type', 'image')
    inputElement2.setAttribute('name', 'image')

    const labelElement3 = document.createElement('label')
    labelElement3 .setAttribute('for', 'bio')
    labelElement3.textContent = (`Dog's bio`)
    const inputElement3 =document.createElement('textarea')
    inputElement3.setAttribute('rows', '5')
    inputElement3.setAttribute('id', 'bio')
    inputElement3.setAttribute('name', 'bio')

    formElement.append(labelElement, inputElement, labelElement2,inputElement2, labelElement3 ,inputElement3,  )
    dogSection.append(addDogH2 ,formElement)
}


// function headerDogMenu(){
//     const headerEl = document.querySelector(".header")
//     const listElement = document.querySelector(".dogs-list")
//     const allListElement = document.querySelector(".dogs-list__button dogs-list__button--add")
// }

addDog()