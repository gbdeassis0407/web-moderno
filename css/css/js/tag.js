// Cores para os forms
const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav:'64dd17',
    main:'#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '616161',
    // referencia a cor as tag e caso não tenha a tag ajusta para padrão
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}
// construção da substituição de cores na pagina
document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    // colocando nolabel no http retira ela do visual e esconde a label
    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})