Swal.fire("Bem-Vindo ao Kani Sushi !");
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      scrollbar: {
    el: '.swiper-scrollbar',
  },
      pagination: {
        el: ".swiper-pagination",
      },
  });
  
  function login(){
    (async () => {
      const { value: user } = await Swal.fire({
        title: "Enter your user",
        input: "text",
        inputLabel: "User",
        inputPlaceholder: "Enter your user",
      });
      if (user) {
       Swal.fire(`Olá,: ${user}`);
       const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          maxlength: "10",
          autocapitalize: "off",
          autocorrect: "off"
        }
      });
      if (password) {
        Swal.fire(`Bem-Vindo ${user}`);
      }
      }
    })()
  }


function comprar(){

  (async () => {
    const { value: compra} = await Swal.fire({
      title: "Selecione algo para comprar",
      input: "select",
      inputOptions: {
        combos: {
          combo18: "Combo 18 peças",
          combo24: "Combo 24 peças",
          combo36: "Combo 36 peças",
        },
        TemakiseBebidas: {
          temakisalmão: "Temali Salmão",
          temakifrito: "Temaki Salmão Frito",
          bebida: "Água ou refregerante"
        },
      },
      inputPlaceholder: "Selecione o que deseja",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value != null) {
            resolve();
            Swal.fire("Produto adcionado no carrinho com sucesso!",value);
            produto=value;
          } else {
            resolve("Precisa selecionar algum ítem");
          }
        });
      }
    });
  })()
}

function carrinho(comprar){
  Swal.fire({
    title: "Seu carrinho",
    text: "Tem certeza que deseja efetuar a compra? Seu produto:  "+produto,
    icon: "question",
    confirmButtonText:'<i class="fa fa-thumbs-up"></i> Confirmar',
    showDenyButton: true,
    showCancelButton:true,
    cancelButtonText:'Sair',
    denyButtonText:'<i class="fa fa-thumbs-down"></i> Apagar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Compra efetuada com sucesso!", "", "success");
    }
    else if (result.isDenied) {
      produto="";
      Swal.fire("Apagado", "", "cancel");
    }
   }
   
   )}
 

  
  function abrirmap(){
   window.open("https://maps.app.goo.gl/WjYaTM12hXp9dmvXA");
  }

  const a=document.getElementById('map');
  a.addEventListener("click",abrirmap);

