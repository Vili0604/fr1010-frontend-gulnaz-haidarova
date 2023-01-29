
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url, true);

    xhr.onload = function() {
        if(xhr.status != 200) {
            console.log('статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if(callback) {
                callback(result);

            } 

            
        }

    };
    xhr.onerror = function() {
        //console.log('Ошибка! Статус ответа: ' , xhr.status);
    };
    xhr.send();
};

const resultNode = document.querySelector('.error');
const btnNode = document.querySelector('.btn-request');
const value = document.querySelector('input');



function displayResult(apiData) {
    let cards = '';
    //console.log('start cards', cards);

    if( ! Number(value.value) || Number(value.value) > 10 || Number(value.value) < 1) {
        resultNode.innerHtml = 'число вне диапозона от 1 до 10';
   }else {
       apiData.forEach(item => {
           const cardBlock = `
           <div class= "card">
           <img src="${item.download__url}"
           class="card-image"></img>
           <p>${item.author}</p>
       </div>
        
           `;
           cards = cards + cardBlock;
           
       });

       console.log('end cards' , cards);
       resultNode.innerHTML = cards;
   }

}

btnNode.addEventListener('click', () => {
    useRequest('https://picsum.photos/v2/list/?limit=&{parseInt(value.value)}', displayResult);
  });
