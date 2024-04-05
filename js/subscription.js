const scriptURL = 'https://script.google.com/macros/s/AKfycbw3twIKPcdjEVybR3vs3wLxqF5oTynS-egjTdtcbUi8lCifqVaIys2NCVui6h0It_-K/exec'
  const form = document.forms['submit-to-google-sheet']
  const subscribingAlert = document.getElementById("subscribing-alert");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        subscribingAlert.innerHTML = "Thank Your For Subscribing!"
        setTimeout(function(){
            subscribingAlert.innerHTML = ""
        },3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  