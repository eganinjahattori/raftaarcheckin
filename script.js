async function handleSubmit() {
    const name = document.getElementById("name_input").value;
    var phone = document.getElementById("phone_input").value;
    console.log(name, phone);
    if (name != undefined && name != '' && phone != undefined && phone != '') {
        if (phone.length == 10) {
            phone = '+91' + phone;
            const body = { name: name, phone: phone };
            const response = await fetch('http://localhost:9800/send', {
                method: 'POST',
                body: JSON.stringify(body),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
            if(response.status == 200)
            {
                window.alert("Submitted");
                document.getElementById("name_input").value = null;
                document.getElementById("phone_input").value = null;
            }
            else
                window.alert("Some error.");
        }
    }
}