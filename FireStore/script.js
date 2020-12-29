const cafelist = document.querySelector('#content-list');
const form = document.querySelector('#form-data');
//Create element and render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    li.appendChild(name);
    li.appendChild(city);
    cafelist.appendChild(li);

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
