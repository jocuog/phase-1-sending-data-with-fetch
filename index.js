// Add your code here
const submitData = (name, email) => {

const obj = {
    name: `${name}`,
    email: `${email}`
}

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(obj)
};
    return fetch("http://localhost:3000/users", config)
    .then((r) => r.json())
    .then((rep) => {
        const value = rep.id;
        const p = document.createElement('p')
        p.textContent = value;
        const body = document.querySelector('body');
        body.append(p);
    })

    .catch(error => {
        const message = document.createElement('p')
        message.textContent = error.message;
        const body = document.querySelector('body');
        body.append(message);
    })

}
