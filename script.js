document.addEventListener('DOMContentLoaded', function() {
    

    const encryptBtn = document.getElementById('encrypt')
    const decryptBtn = document.getElementById('decrypt')
    const clearBtn = document.getElementById('clear')

    const txtBox = document.getElementById('text-input')
    const resultBox = document.getElementById('result-text')
    const noResultBox = document.getElementById('no-result')

    const alertBox = document.getElementById('alert')

    
    txtBox.addEventListener('input', function (e) {
        if(this.value.match(/[^a-zA-ZñÑ\s]/g)) showAlert('No se admiten números o carácteres especiales')
        this.value = this.value.toLowerCase().replace(/[^a-zA-ZñÑ\s]/g, '');
    });


    txtBox.addEventListener('input', updateNoResultVisibility);
    function updateNoResultVisibility() {
        if (txtBox.value.trim() !== '') {
            noResultBox.classList.add('hidden');
        } else {
            noResultBox.classList.remove('hidden');
            resultBox.textContent = ''
        }
    }


    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
           showAlert('Resultado copiado al portapapeles')
        }).catch(function(err) {
           console.log(err)
        });
    }


    function showAlert(txt) {
       
        alertBox.textContent = txt
        alertBox.classList.remove('hidden');
        alertBox.classList.add('show');

        setTimeout(function() {
            alertBox.classList.remove('show');
            alertBox.classList.add('hidden');
            alertBox.textContent = ''
        }, 3000);
    }
    
   
   

    encryptBtn.addEventListener('click', function(){

        let text = txtBox.value.toLowerCase().trim();
        if(text.length ==0){
            showAlert('Debes ingresar algún texto')
            return
        }
            
        
        let encryptedText = text.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
        resultBox.textContent = encryptedText;
        copyToClipboard(encryptedText);

    });
    
    
    decryptBtn.addEventListener('click',  function() {

        let text = txtBox.value.toLowerCase().trim();
        if(text.length ==0){
            showAlert('Debes ingresar algún texto')
            return
        }


        let decryptedText = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
        
        resultBox.textContent = decryptedText;
        copyToClipboard(decryptedText);
    });


    clearBtn.addEventListener('click', function(){
        txtBox.value = ''
        updateNoResultVisibility()
    })

 });



