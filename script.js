let links = document.querySelectorAll('a');
if(links){
    links.forEach((link)=>{
        link.onclick = (e) =>{
            let body = document.querySelector('body');
            e.preventDefault();
            //in async handler do these actions
            setTimeout(function(){
                if (body.classList.contains('fade-out')){
                    console.log('navigating..');
                    if(!e.this.parentElement.href){
                        window.location = e.this.href;
                    }else{
                        window.location = e.this.parentElement;
                    }
                }else{
                    console.log('whoops', e.this.parentElement.href);
                }
            }, 500);
            body.classList.add('fade-out')
        }
    })
}
/*Customizable scroll speeds for each row function*/
const scrollSpeed = (num, scrollAmt, scrollDel) =>{
    let scrollingColumn = document.getElementById(`scrolling-column-${num}`);
    let scrollAmount = scrollAmt; // amount of pixels to scroll
    let scrollDelay = scrollDel; // time in milliseconds between each scroll

    setInterval(function() {
        scrollingColumn.scrollTop += scrollAmount;
        }, scrollDelay);
}


scrollSpeed(1, 2, 50);
scrollSpeed(2, 3, 60);