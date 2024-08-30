onReady();

function onReady() {
  console.log('Javascript is working!');
}
function fireEmj(){
const fireEmoji = document.createElement("p");
fireEmoji.innerHTML = "🔥"
const emojiFarm = document.getElementById("emoji-farm");
emojiFarm.appendChild(fireEmoji);
}

function iceEmj(){
  const iceEmoji = document.createElement("p");
  iceEmoji.innerHTML = "❄️"
  const emojiFarm = document.getElementById("emoji-farm");
  emojiFarm.appendChild(iceEmoji);
  }

  function grabValue(event){
    event.preventDefault();
    const affInput = document.getElementById('affirm-input').value;
    const authorInput = document.getElementById("author-input").value;


    const tbody = document.getElementById("tbody-id");
    const tdata = document.createElement('tr');
    tdata.classList.add('tdata')
    tbody.appendChild(tdata);
    
   tdata.innerHTML = 
   `  <td>${affInput}</td>
      <td>${authorInput}</td>
      <button onClick="removeRow(event)">❌</button>`
  }

  function removeRow(event) {
event.target.closest('.tdata').remove()
  }
  