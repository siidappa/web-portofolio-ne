function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        city: document.getElementById('whereyourform').value,
        message: document.getElementById('yourmessage').value
    }
    const serviceId = 'service_mvrf1u9';
    const tempId = 'template_juvuocq';
    
    emailjs.send(serviceId, tempId, params).then(
        (res) => {
            document.getElementById('name').value = ""
            document.getElementById('whereyourform').value = ""
            document.getElementById('yourmessage').value = ""
            console.log(res);
            
            Swal.fire({
                icon: 'success',
                title: 'Success !!',
                text: 'Message sended to Daffa 👌',
                showConfirmButton: true,
                timer: 1300
            })
        }
    ).catch((err) => console.log(err))
}
