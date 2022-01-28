
function onInit( wasm )
{ 
  let result = wasm.add( 1, 2 );
  document.body.innerText = `Result: ${result}`;
}

export default onInit;
