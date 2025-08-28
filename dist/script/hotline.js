// Get Time
function getTime() {
  const now = new Date();
  let hours = now.getHours();
  let minute = now.getMinutes();
  let secound = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  } else {
    hours = hours;
  }
  const h = String(hours).padStart(2, '0');
  const m = String(minute).padStart(2, '0');
  const s = String(secound).padStart(2, '0');

  const time = `${h}:${m}:${s} ${ampm}`;
  return time;
}

// Card Load
const cardContain = document.getElementById('card-section-main');
const cardsList = [
  {
    img: './dist/assets/emergency.png',
    title: 'National Emergency Number',
    subtitle: 'National Emergency',
    number: '999',
    category: 'All',
    color: 'bg-[#FFE3E2]',
  },
  {
    img: './dist/assets/police.png',
    title: 'Police Helpline Number',
    subtitle: 'Police',
    number: '999',
    category: 'Police',
    color: 'bg-[#DFEFFF]',
  },
  {
    img: './dist/assets/fire-service.png',
    title: 'Fire Service Number',
    subtitle: 'Fire Service',
    number: '999',
    category: 'Fire',
    color: 'bg-[#FFE3E2]',
  },
  {
    img: './dist/assets/ambulance.png',
    title: 'Ambulance Service',
    subtitle: 'Ambulance',
    number: '1994-999999',
    category: 'Health',
    color: 'bg-[#FFE3E2]',
  },
  {
    img: './dist/assets/woman.png',
    title: 'Women & Child Helpline',
    subtitle: 'Women & Child Helpline',
    number: '109',
    category: 'Help',
    color: 'bg-[#FFE3E2]',
  },
  {
    img: './dist/assets/corruption.png',
    title: 'Anti-Corruption Helpline',
    subtitle: 'Anti-Corruption',
    number: '106',
    category: 'Govt.',
    color: 'bg-[#FFE3E2]',
  },
  {
    img: './dist/assets/electricity.jpg',
    title: 'Electricity Helpline',
    subtitle: 'Electricity Outage',
    number: '16216',
    category: 'Electricity',
    color: 'bg-[#FFE3E2]',
  },
  {
    img: './dist/assets/brac.png',
    title: 'Brac Helpline',
    subtitle: 'Brac',
    number: '16445',
    category: 'NGO',
    color: 'bg-[#41ff6b1a]',
  },
  {
    img: './dist/assets/Bangladesh-Railway.png',
    title: 'Bangladesh Railway Helpline ',
    subtitle: 'Bangladesh Railway',
    number: '163',
    category: 'Travel',
    color: 'bg-[#DFEFFF]',
  },
];

for (const card of cardsList) {
  const newCard = document.createElement('div');
  newCard.innerHTML = `
  <div id="card-section-main">
            <div class="container p-8 bg-white rounded-[12px] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)] h-full">
              <div class="flex items-center justify-between mb-4">
                <div class="rounded-2xl p-[14px] img-bg">
                  <img class="w-8 mx-auto" src="${card.img}" alt="">
                </div>
                <div class="heart-icon">
                <i class="fa-regular fa-heart"></i>
                </div>
                
              </div>
              <div class= "">
              <h2 class="font-hind text-[1.25rem] xl:text-xl 2xl:text-2xl font-bold truncate w-full">${card.title}</h2>
              <h3 class="text-[#5C5C5C] text-[1.15rem] md:text-[1.25rem] font-roboto mb-6">${card.subtitle} </h3>
              <h2 class="font-bold font-roboto text-[1.5rem] md:text-[2rem]">${card.number}</h2>
              <div class="bg-[#F2F2F2] rounded-[9999px] inline-block px-4 py-1.5 text-center mb-6">
                <p class="text-[#5C5C5C] text-[1rem] md:text-[1.25rem]">${card.category}</p>
              </div>
              </div>
              
              <div class="flex items-center justify-between gap-2">
                <button class="btn copy-btn text-[#5C5C5C] bg-white border-1 border-[#D4D6D5] rounded-[8px] font-roboto flex-1"><i class="fa-solid fa-copy"></i> Copy</button>
                <button class="btn bg-[#00A63E] rounded-[8px] text-white flex-1 btn-call"><i
                    class="fa-solid fa-phone"></i>Call</button>
              </div>
            </div>
          </div>
  `;

  cardContain.appendChild(newCard);
  const imageBG = newCard.querySelector('.img-bg');
  imageBG.classList.add(card.color);
}

function getElement(id) {
  return document.getElementById(id);
}

// Call Function
document
  .getElementById('card-section-main')
  .addEventListener('click', function (event) {
    if (event.target.closest('.btn-call')) {
      const callBtn = event.target.closest('.btn-call');
      const title =
        callBtn.parentNode.parentNode.parentNode.children[0].children[1]
          .children[0].innerText;
      const number =
        callBtn.parentNode.parentNode.parentNode.children[0].children[1]
          .children[2].innerText;
      const name =
        callBtn.parentNode.parentNode.parentNode.children[0].children[1]
          .children[1].innerText;
      const stockCoin = Number(getElement('stock-coin').innerText);
      if (stockCoin < 20) {
        alert(
          'insufficient Coin to make the call , Minimum 20 coin required to call'
        );
        return;
      } else {
        alert('📞 Calling ' + name + ' ' + number + '...');
        const finalCoin = stockCoin - 20;
        getElement('stock-coin').innerText = finalCoin;
        const historyDiv = document.createElement('div');
        const historyParent = document.getElementById('history-main');
        const time = getTime();
        historyDiv.innerHTML = `
        <div class="flex items-center justify-between bg-[#FAFAFA] rounded-[8px] p-4 mb-2 space-y-3">
              <div>
                <h4 class="font-semibold font-inter text-[1rem]">${title}</h4>
                <p class="font-hind text-[#5C5C5C] ">${number}</p>
              </div>
              <div>
                ${time}
              </div>
            </div>
        `;
        historyParent.prepend(historyDiv);
      }
    }
  });

// Clear Function
document.getElementById('clear-btn').addEventListener('click', function () {
  const historyDiv = getElement('history-main');
  historyDiv.innerHTML = '';
});

// Favourite Function
const hearts = document.getElementsByClassName('heart-icon');
let totalHeart = Number(document.getElementById('heart-value').innerText);
for (heart of hearts) {
  heart.addEventListener('click', function () {
    totalHeart = totalHeart + 1;
    document.getElementById('heart-value').innerText = totalHeart;
    this.classList.add('text-red-500');
    console.log(this);
  });
}

// Copy Function
document
  .getElementById('card-section-main')
  .addEventListener('click', function (event) {
    const copyCount = Number(getElement('copy-count').innerText);
    if (event.target.closest('.copy-btn')) {
      const copyBtn = event.target.closest('.copy-btn');
      const textCopy =
        copyBtn.parentNode.parentNode.parentNode.children[0].children[1]
          .children[2].innerText;
      console.log(textCopy);
      navigator.clipboard.writeText(textCopy);
      alert('✔ Number copied ' + textCopy);
      const totalCopy = copyCount + 1;
      getElement('copy-count').innerText = totalCopy;
    }
  });
