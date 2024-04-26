
//Evento
axios.post("http://localhost:3001/evento", {
           idEvento =  variavel,
           EditorChefe =  variavel,
           Nome =  variavel,
           Descricao = variavel ,
           AssuntoPrincipal = variavel,
           EmailEvento =  variavel,
           DataInicio =  variavel,
           DataFinal =  variavel,
           HorarioInicio = variavel,
           HorarioFinal =  variavel,
           Manha =  variavel,
           Tarde =  variavel,
           Noite =  variavel,
           Status =  variavel,
           Publico =  variavel,
           Formato =  variavel,
           Proceedings =  tvariavel,
           Certificados =  variavel,
           Logo =  variavel
})

axios.get("http://localhost:3001/evento",(res)=>{
    console.log(res.data)
    //faz oq quiser com a resposta
})

//Editor Chefe

axios.post("http://localhost:3001/editorChefe", {
          idEditorChefe = variavel,
          idInstituicao = variavel,
          idUserProfile = variavel,
          idEvento = variavel,
          LinkLattes = variavel,
          Status = variavel
})

axios.get("http://localhost:3001/editorChefe",(res)=>{
    console.log(res.data)
})

//