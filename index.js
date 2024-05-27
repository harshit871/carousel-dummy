(() => {
    const listItemsArr = [1,2,3,4];
    
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const listEl = document.querySelector('.list');
    
    let currIdx = 0;
    
    listItemsArr.forEach((item, i) => {
        const listItem = document.createElement('li');
        listItem.innerText = item;
        listItem.classList.add('list-item');  
        if(i === currIdx){
            listItem.classList.add('active');
        }
        listEl.appendChild(listItem);
    })
    
    const listItems = document.querySelectorAll('.list-item');
    
    prevBtn.addEventListener('click', function(e){
        if(currIdx === 0){
            return;
        }
        
        listItems[currIdx].classList.remove("active");
        listItems[currIdx-1].classList.add("active");  
            
        currIdx--;
    })
    
    nextBtn.addEventListener('click', function(e){
        if(currIdx === listItems.length-1){
            return;
        }
    
        listItems[currIdx].classList.remove("active");
        listItems[currIdx+1].classList.add("active");  
        
        currIdx++;
    })
})();