

async function sendMessage() {
    const Name = document.getElementById("name").value
    const message = document.getElementById("textchat").value
    const MessagesContainer = document.getElementById("textbox")
    console.log(Name)
    console.log(message)
    console.log(JSON.stringify({ message: message, name: Name }))
    fetch('/api/sendmessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message, name: Name }),
    }).then(response => response.json())
        .then(data => {
            console.log(data.Response)
            if (data.success) {
                getMessages()
            }
        })
}

async function getMessages() {
    console.log('ran')
    await fetch('/api/chatmessage', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(data => {
        const MessagesContainer = document.getElementById("chatbox")
        MessagesContainer.innerText = ""
        for (let i= data.length-1; i > 0; i--) {
            MessagesContainer.innerText += `${data[i].name}: ${data[i].message}\n`
        }
    })
}

window.onload = getMessages();