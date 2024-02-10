document.addEventListener("DOMContentLoaded", function () {
    const months = document.querySelector('#months');
    const day = document.querySelector('.day');
    const dates = document.querySelector('.dates');
    const year = document.querySelector('.year');

 
    function getCurrentDate() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
      
        day.textContent = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        months.textContent = currentDate.toLocaleDateString('en-US', { month: 'long' });
        dates.textContent = currentDate.toLocaleDateString('en-US', { day: 'numeric' });
        year.textContent = currentDate.toLocaleDateString('en-US', { year: 'numeric' });
    }

  
    getCurrentDate();
});




