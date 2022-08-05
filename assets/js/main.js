function relogio(){
    const relogio = document.querySelector('.relogio');

    let seg=0;
    let timer;
    
    function getDateSeconds(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12:false,
            timeZone:'GMT'
        });
    }
    
    function startRelogio(){
        timer = setInterval(function (){
            seg++;
            relogio.innerHTML = getDateSeconds(seg);
        }, 1000);
    }
    
    document.addEventListener('click', function(e){
        const el = e.target;
    
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00'    
            seg=0;
        } 
    
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startRelogio();
        }
    
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            
            relogio.classList.add('pausado');
        }
    
    });
}


relogio();