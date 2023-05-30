function tpregunta(){
  let endpoint ='/traerpregu'
  const txt_pregunta = document.getElementById('txtpregunta')

      axios.get(endpoint,{
          'pregunta' : txt_pregunta.value ,
          
      })
      .then(function (response) {
      let data = response.data;
      let pregunta_bd = data[1].enunciado;
        //alert("pregunta mostrada");
        //alert(data[1].id)
        //alert(data[1].enunciado)
        txt_pregunta.textContent = pregunta_bd;
      })
      .catch(function (error) {
        console.log(error);
      });
}

function trespuesta(){
  let endpointb ='/traeresp'
  const resp_a = document.getElementById('respa')
  const resp_b = document.getElementById('respb')
  const resp_c = document.getElementById('respc')
  const resp_d = document.getElementById('respd')

      axios.get(endpointb,{
          'respuesta_a': resp_a.value,
          'respuesta_b': resp_b.value,
          'respuesta_c': resp_c.value,
          'respuesta_d': resp_d.value
          
      })
      .then(function (response) {
      let data = response.data;
      let r_bd = data[1].r1;
        resp_a.textContent = data[1].r1;
        resp_b.textContent = data[1].r2;
        resp_c.textContent = data[1].r3;
        resp_d.textContent = data[1].r4;
      })
      .catch(function (error) {
        console.log(error);
      });
}


  



