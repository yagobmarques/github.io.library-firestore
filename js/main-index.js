function inicializar_db(){
    db.collection('usuários').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data())
        });
    })
    db.collection('usuários').add({
        email : $("#Email").val(),
        password : $("#Password").val(),
        author: "",
        pages: "",
        title : "",
        status: ""
    })
}
