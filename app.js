const form = document.getElementById('form')
const nombre = form[0]
const teléfono = form[1]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let contactItem = document.createElement('li')
    contactItem.innerHTML = `<span class="my-1">${nombre.value} - ${teléfono.value}</span>`
    let btnDelete = document.createElement('button')
    btnClass = ["w-full", "bg-emerald-800", "text-white", "rounded", "my-2", "p-1"]
    btnDelete.innerHTML = "Eliminar"
    btnDelete.classList.add(...btnClass)
    btnDelete.addEventListener('click', () => {
        contactItem.remove()
    })
    contactItem.appendChild(btnDelete)
    document.getElementById('contactList').appendChild(contactItem)
    nombre.value = ""
    teléfono.value = ""
})

const search = (item) => {
    let contacts = document.querySelectorAll('li')
    contacts.forEach((contact) => {
        if (contact.innerText.includes(item.value)) {
            contact.style.display = ""
        }else {
            contact.style.display = "none"
        }
    })
    console.log(item.value);
    console.log(contacts);
    ;
}