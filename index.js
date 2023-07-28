// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", config)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        document.body.innerHTML = `<p>New ID: ${id}</p>`;
        return data;
      })
      .catch(error => {
        document.body.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  submitData()
  