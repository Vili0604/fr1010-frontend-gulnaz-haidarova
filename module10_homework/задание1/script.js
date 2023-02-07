  const btn = document.querySelector("button");
  const div = document.querySelector("button");
 
  const icon1 =`<svg xmIns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
             <path fill-rule="evenodd"d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
          </svg>
        `;
  const icon2 = `
        <svg xmIns="http://www.w3.org/2000/svg"  width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
        <path d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
        </svg>   
        `;
  let icon = icon1;
  div.innerHTMl = icon;
  btn.addEventListener('click', () => {
      if (icon == icon1) {
        icon = icon2;
      } else icon = icon1;
      div.innerHTML = icon;
  });
        
