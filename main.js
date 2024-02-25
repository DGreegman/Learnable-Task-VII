
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

// creating the add task function that will help to add the tasks
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!')
    }
    else{
        let date = new Date()
        let time = date.toLocaleTimeString()
        let div =  document.createElement('div')
        let li = document.createElement('li')
        let pEdit = document.createElement('p')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        pEdit.innerHTML = '\u270E' 
        span.innerHTML = '\u00d7'
        li.appendChild(pEdit)
        li.appendChild(span)
        div.innerHTML = time
        div.style.fontSize = '12px'
        div.style.color = 'gray'
        li.appendChild(div)

    }
    inputBox.value = ''
    saveData()
}


// using event listener to capture all the actions to delete
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }else if(e.target.tagName === 'P'){
        let li = e.target.parentElement;
        editTask(li); // Pass the li element to editTask
    }
})


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()

/* Lets edit a task */

function editTask(li) {
    let editValue = prompt('Enter the new value');
    if (editValue === null || editValue.trim() === '') {
        alert('You must write something!');
    } else {
        li.firstChild.textContent = editValue;
    }
    saveData();
}
