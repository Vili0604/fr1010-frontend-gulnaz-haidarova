const inputWidtch = document.getElementById("widtch");
const inputHeight = document.getElementById("height");
const submitButton = document.querySelector("button");
const outputSpan = document.querySelector("span");
const photosContainer = document.querySelector("div");

submitButton.addEventListener("click", submitButtonHandle);

function submitButtonHandle() {
   const width =  inputWidtch.value;
   const height = inputHeight.value;

   if((width < 100 || width > 300 || isNaN(width)) || (height < 100 || height > 300 || isNaN(height)  )) {
      write ("одно из чисел вне диапозона от 100 до 300.");
      return;
   }
    
   write("загружаю фото...");

   fetch(`https://picsum.photos/${width}/${height}`)
       .then((response) => response.url)
       .then((result) => { 
         loadPhoto(result);
         write("фото загружено.");
       })
       .catch((reason) => {
         write("ошибка: " + reason);
       });
}

function write(text) {
   outputSpan.innerHTML = text;
}

function loadPhoto(photoUrl) {
   const cardBlock = `<img src="${photoUrl}" style="margin-right: 30 px" />`;
                      
   photosContainer.innerHTML = cardBlock;            
};