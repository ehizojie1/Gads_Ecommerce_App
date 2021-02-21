let butt = document.querySelectorAll('.button');
let item = document.querySelector('.item');



butt.forEach(myfunction)

function myfunction(button){
    button.addEventListener('click', () => {
        let content = {}
        // let name = button.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
        let name = button.parentElement.previousElementSibling.children[0].children[0].innerHTML
        console.log(name)
       
        content.name = name;
        // let price = button.previousSibling.previousSibling.innerHTML
        // let price = button.parentElement.previousElementSibling.children[2].innerHTML
        let price = button.parentElement.previousElementSibling.children[2].children[1].innerHTML

        console.log(price)

        
        content.price = price;
        // let img = button.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.src
        let img = button.parentElement.previousElementSibling.previousElementSibling.children[0].src
        console.log(img)
        content.img = img
        addToLocaleStorage(content)
        item.innerHTML = `item ${name} was added to the cart`
        item.classList.add('item_background')
        setTimeout(function(){
            item.innerHTML = ''
            item.classList.remove('item_background')
           
        }, 3000)


        
    })
}


function addToLocaleStorage(todo){
    let todos;
    if (localStorage.getItem('todos') === null){
        todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)

    localStorage.setItem('todos', JSON.stringify(todos))
}



 
