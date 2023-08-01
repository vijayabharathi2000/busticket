let menubar=document.querySelector(".fa-bars");
let menu=document.querySelector(".showcase");
const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row.seat:not(.booked)');
const count=document.getElementById('count');
const amount=document.getElementById('amount');
const bus=document.getElementById('bus');
const seat=document.getElementById('seats');
let ticketprice=+bus.value;
window.onscroll=()=>{
    menubar.classList.remove('fa-times')
    menu.classList.remove('active');
}
function updateSelectedSeats(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const seatIndex=[...selectedSeats].map(function (seat){
        return[...seats].indexOf(seat);
    });
    localStorage.setItem('selectedSeats',JSON.stringify(seatIndex));
    const seatCount=selectedSeats.length;
    count.innerHTML=seatCount;
    amount.innerHTML=seatCount*ticketprice;
}
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('booked')){
        e.target.classList.toggle('selected');
    }
    if(e.target.classList.contains('lower')){
        seat.innerHTML="L";
    }
    else{seat.innerHTML="U";}
    updateSelectedSeats();
})
bus.addEventListener('change',e=>{
    ticketprice=+e.target.value;
    updateSelectedSeats();
})

menubar.addEventListener('click',()=>{
    menubar.classList.toggle('fa-times')
    menu.classList.add('active')
})