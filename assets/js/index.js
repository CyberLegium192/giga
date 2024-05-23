function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function createSkeletonCard() {
  const card = document.createElement('swiper-slide');
  card.innerHTML = `
    <div class="rounded-lg overflow-hidden container-card">
              <!-- CARD IMAGE -->
              <div class="overflow-hidden h-40 w-full rounded-lg skeletons">
                <img src="" alt="IMAGE NEWS" class="object-cover h-full w-full image-news transition-all duration-500"/>
              </div>
              <!-- CARD TITLE -->  
              <div class="p-2 pt-3">
                <p class="capitalize text-sm font-bold montserrat skeletons w-32"></p>
                <span class="text-[13px] montserrat text-gray-400 w-16 skeletons"></span>
              </div>
            </div>
  `;
  return card;
}



function Ambil() {
  const swiperContainer = document.getElementById('news');
  
    for (let i = 0; i < 3; i++) {
      swiperContainer.appendChild(createSkeletonCard());
    }
    fetch('https://gigaofficial.id/blog/wp-json/wp/v2/posts?_embed&per_page=3')
      .then(response => response.json())
      .then(data => {
       
       while (swiperContainer.firstChild) {
        swiperContainer.removeChild(swiperContainer.firstChild);
      }
      
      
      
        data.forEach(news => {
          const title = truncateText(news.title.rendered, 6);
          const date = new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
          const articleUrl = news.link; 
  
          const card = document.createElement('swiper-slide');
          card.innerHTML += `
          <a href="${articleUrl}" class='text-black '>
            <div class="rounded-lg overflow-hidden container-card">
              <!-- CARD IMAGE -->
              <div class="overflow-hidden h-40 w-full rounded-lg ">
                <img src="${news._embedded['wp:featuredmedia'][0].source_url}" alt="IMAGE NEWS" class="object-cover h-full w-full image-news transition-all duration-500"/>
              </div>
              <!-- CARD TITLE -->  
              <div class="p-2 pt-3">
                <p class="capitalize text-sm font-bold montserrat ">${news.title.rendered}</p>
                <span class="text-[13px] montserrat text-gray-400 ">${date}</span>
              </div>
            </div>
            </a>
          `;
          swiperContainer.appendChild(card)
          // document.getElementById('news').appendChild(card);
        });
      })
      
      .catch(error => {
        console.error('Error', error)
      });
}
Ambil()