//INICIANDO MODAL
function iniciaModal(modalId){
    const modal = document.getElementById(modalId);
    if (modal){
        modal.classList.add("mostrar");
        modal.addEventListener("click", (e) => {
            if (e.target.id == modalId) {
                modal.classList.remove("mostrar");
            }
        });
    }
}

//BOTAO CONFIRMA
const button1 = document.querySelector("#modal-confirmar"); //botão
button1.addEventListener("click", () => iniciaModal("modal-confirm")) 

//BOTAO CANCELA
const button2 = document.querySelector("#modal-cancelar"); //botão
button2.addEventListener("click", () => iniciaModal("modal-cancel"));



//APLICANDO BOTÃO DESCONTO

jQuery(function() {
    $(document).ready(function() {
      $(".marcado").change(function() {
        var total = $('input[class="marcado"]:checked').get().reduce(function(tot, el) {
          return 100 +20 - Number(el.value);
        }, 120);
        $('#total').text('R$ ' + total + ',00');
      });
    });
  });


// DESATIVANDO VALOR CUPOM CASO NÃO SEJA UTILIZADO

$('input[name="marcado[]"]').change(function () {
    if ($('input[class="marcado"]:checked').val() === "0") {
        $(('#cupom, .cupom-atv')).hide();
    } else {
        $(('#cupom, .cupom-atv')).show();
    }
});