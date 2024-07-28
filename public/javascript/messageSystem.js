

async function sendMessage(){
    const Name = document.getElementById("name").value
    const message = document.getElementById("textchat").value
    console.log(Name)
    console.log(message)
    console.log(JSON.stringify({ message: message, name: Name}))
    fetch('/api/sendmessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message,name: Name }),
    }).then(data => {
        if (data.success) {
            console.log("YAY")
        }
    })
}

async function getMessages(){
    fetch('/api/chatmessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(data => {
        for(let i = 0; i< data.length; i++){
            
        }
    })
}