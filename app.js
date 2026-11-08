document.querySelectorAll('#copy').forEach(function(b){
  b.addEventListener('click',function(){
    var t=document.getElementById(b.dataset.target).innerText,m=document.getElementById('copy-msg');
    function ok(){m.textContent='Copiado!';setTimeout(function(){m.textContent=''},2000)}
    if(navigator.clipboard){navigator.clipboard.writeText(t).then(ok,function(){m.textContent='Selecione o texto e copie.'})}
    else{m.textContent='Selecione o texto e copie.'}
  });
});
