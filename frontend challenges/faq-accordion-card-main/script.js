document.querySelectorAll('.label').forEach((item) =>{
    item.addEventListener('click',(event)=>{
        item.classList.toggle('open'); 
        item.nextElementSibling.classList.toggle('open');
    })
    });