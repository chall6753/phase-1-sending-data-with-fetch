// Add your code here

function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail
        
    }

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    body: JSON.stringify(formData)
    }


     return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(function(object){
            let newID = object.id 
            document.body.innerHTML = newID

        })
        .catch(function(error) {
            let message = "Unauthorized Access"
            document.body.innerHTML = message
            
          })
        


            
    
 

 
}









