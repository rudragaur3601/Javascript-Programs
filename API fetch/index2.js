const fetchUserInfo=async ()=>{
    const response = await fetch('https://cat-fact.herokuapp.com/facts');

    if(!response.ok){
        throw new Error('user not found')
    }

    // parse json response
    const userData=await response.json();
    console.log(userData)
    for (i in userData){
        console.log(userData[i].text)

    }
}

// calling function
fetchUserInfo()