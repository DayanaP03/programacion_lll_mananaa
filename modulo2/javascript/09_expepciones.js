try{
    console.log(variablesNoDeclaradas);
}catch(error){
    console.log("mensaje de error:" ,error.message);
}


try{
    console.log("Intentando abrir archivo...");
    throw new Error("Arrchivo no encontrado")
}catch(error){
    console.log("mensaje de error:" ,error.message);
}finally{
    console.log('Finalizando intendo de abrir archivo');
}



