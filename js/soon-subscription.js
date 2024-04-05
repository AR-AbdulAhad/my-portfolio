const scriptURL = 'https://script.google.com/macros/s/AKfycbw3twIKPcdjEVybR3vs3wLxqF5oTynS-egjTdtcbUi8lCifqVaIys2NCVui6h0It_-K/exec'
  const form = document.forms['submit-to-google-sheet']
  const soonSubscribingAlert = document.getElementById("soon-subscribing-alert");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        soonSubscribingAlert.innerHTML = "Thank Your For Subscribing!"
        setTimeout(function(){
            soonSubscribingAlert.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  