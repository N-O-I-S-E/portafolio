const togleTheme = document.getElementById('toggle-theme');
const togleIcon = document.getElementById('toggle-theme-icon');
const togleText = document.getElementById('toggle-teme-text');
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;

togleTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    if(togleIcon.src.includes('moon.svg')){
        togleIcon.src='assets/icons/sun.svg'
        togleText.textContent='Ligth Mode'
    } else{
        togleIcon.src = 'assets/icons/moon.svg';
        togleText.textContent = 'Dark Mode'
    }
});

toggleColors.addEventListener('click',(e)=>{
    rootStyles.setProperty('--primary-color', e.target.dataset.color);
})