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