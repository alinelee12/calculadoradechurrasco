const resultsDiv = document.querySelector('#results')
const calculaBtn = document.querySelector('#calcula')

calculaBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let pessoasInput = document.querySelector('#pessoas').value
    let horasInput = document.querySelector('#horas').value

    let carne = (pessoasInput * horasInput / 2) * 50

    if(carne >= 1000) {
        carne = `${carne / 1000}Kg`
    } else {
        carne = `${carne}g`
    }

    let vegetais = (pessoasInput * horasInput / 2) * 50
    if(vegetais >= 1000) {
        vegetais = `${vegetais / 1000}Kg`
    } else {
        vegetais = `${vegetais}g`
    }

    let cervejas = pessoasInput * horasInput
    if (cervejas > 1) {
        cervejas = `${cervejas} Latinhas`
    } else {
        cervejas = `${cervejas} Latinha`
    }
    

    let refrigerantes = (pessoasInput * horasInput) * 100
    if(refrigerantes >= 1000) {
        refrigerantes = `${refrigerantes / 1000} Lt`
    } else {
        refrigerantes = `${refrigerantes} ml`
    }

    let htmlContent = `
    <div class="row text-center">
    <div class="col-md-6">
    <h1>Comida</h1>
    <h3>Vegetais</h3>
    <p>${vegetais}</p>
    <h3>Carnes</h3>
    <p>${carne}</p>
    </div>
    <div class="col-md-6">
    <h1>Bebida</h1>
    <h3>Cervejas</h3>
    <p>${cervejas}</p>
    <h3>Refrigerantes</h3>
    ${refrigerantes}
    </div>
    </div>
    `
    resultsDiv.innerHTML = htmlContent
})