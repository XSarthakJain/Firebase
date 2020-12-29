const cafelist = document.querySelector('#content-list');
const form = document.querySelector('#form-data');
//Create element and render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('p');
    cross.textContent = "X";
    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    li.appendChild(cross);
    li.appendChild(name);
    li.appendChild(city);
    cafelist.appendChild(li);

    // Deleting data
    cross.addEventListener('click',(e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })

}

//Getting data
db.collection('cafes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc);
        renderCafe(doc);
    });
})

// Inserting data
form.addEventListener('submit',(e) => {
    e.preventDefault();//prevent refresh
    db.collection('cafes').add({
        name:form.name.value,
        city:form.city.value
    })
    form.name.value = '';
    form.city.value = '';
})


