const findPanel = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.properyName === 'flex-grow'){
        this.classList.toggle('open-active');
    }
}

findPanel.forEach(panel => panel.addEventListener('click', toggleOpen));
findPanel.forEach(panel => panel.addEventListener('transitionEnd', toggleActive));