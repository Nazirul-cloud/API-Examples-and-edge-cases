const loadBuddies = () =>{
    fetch ('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data));
}
// loadBuddies();
const displayBuddies = data =>{
    const buddies = data.results; // 'data' akta "results" nam er object er mddhe ache.
    const buddiesDiv = document.getElementById('buddy')
    for (const buddy of buddies){ // Array er vitor thaka kono element access korta chailei for loop use korta hbe. (results nam er object er vitore data gula array hisebe ache) 
        const p = document.createElement('p');
        p.innerText = buddy.email;
        console.log(buddy.name.first, buddy.name.last);
        buddiesDiv.appendChild(p);

    }  
}