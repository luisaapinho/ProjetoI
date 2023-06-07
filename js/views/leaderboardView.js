import * as User from "../models/UserModel.js";

const leaderTable = document.querySelector('#tableLeaderboard');
const search=document.querySelector('#lupa')


search.addEventListener("click",async function(){
    const usernameSearched = document.querySelector('#inputForm').value;
    let allUsers = await User.getUsers();

    allUsers = allUsers.filter(user => user.hasFinished === true);
    allUsers.sort((a, b) => b.time - a.time);

    
  
    let content = "<tr><th>RANK</th><th>USER</th><th>TIME</th><tr>";
    let userFound = false; // Flag to check if a matching user is found
    
    for (let i = 0; i < allUsers.length; i++) {
        const user = allUsers[i];
        if(i<7)
        {
            if(user.username.includes(usernameSearched))
            {   
                userFound = true;
                
                    if(i==0)
                    {
                    user.time = 3600 - user.time;
                    const minutes = Math.floor(user.time / 60);
                    const seconds = user.time - minutes * 60;
                    if(user)
                    content += `
                        <tr>
                        <td><img class="medal" src="../assets/images/medalFirst.png" alt=""></td>
                        <td>${user.username}</td>
                        <td>${minutes}:${seconds}</td>
                        </tr>
                    `;
                    
                    }
                    else if(i==1)
                    {
                    user.time = 3600 - user.time;
                    const minutes = Math.floor(user.time / 60);
                    const seconds = user.time - minutes * 60;
                    if(user)
                    content += `
                        <tr>
                        <td><img class="medal" src="../assets/images/medalSecond.png" alt=""></td>
                        <td>${user.username}</td>
                        <td>${minutes}:${seconds}</td>
                        </tr>
                    `;
                    }
                    else if(i==2)
                    {
                    user.time = 3600 - user.time;
                    const minutes = Math.floor(user.time / 60);
                    const seconds = user.time - minutes * 60;
                    if(user)
                    content += `
                        <tr>
                        <td><img class="medal" src="../assets/images/medalThird.png" alt=""></td>
                        <td>${user.username}</td>
                        <td>${minutes}:${seconds}</td>
                        </tr>
                    `;
                    }
                    else
                    {
                    
                        user.time = 3600 - user.time;
                        const minutes = Math.floor(user.time / 60);
                        const seconds = user.time - minutes * 60;
                        if(user)
                        content += `
                            <tr>
                            <td>${i+1}</td>
                            <td>${user.username}</td>
                            <td>${minutes}:${seconds}</td>
                            </tr>
                        `;
                        
                    }
                    
                

            }
            

            
            
            

        }
       
        
    
    
  }
  if (!userFound)
  {
      content = `
              <tr>
              <td colspan=3>NO USERS WITH THAT USERNAME HAVE FINISHED THE GAME</td>
              </tr>
          `;
          
  }
  
  leaderTable.innerHTML = content;
})



async function renderTable() {
    
    let allUsers = await User.getUsers();

    allUsers = allUsers.filter(user => user.hasFinished === true);
    allUsers.sort((a, b) => b.time - a.time);

    let content = "<tr><th>RANK</th><th>USER</th><th>TIME</th><tr>";
  
  for (let i = 0; i < allUsers.length; i++) {
    const user = allUsers[i];
    if(i<7)
    {
        
            if(i==0)
            {
              user.time = 3600 - user.time;
              const minutes = Math.floor(user.time / 60);
              const seconds = user.time - minutes * 60;
              if(user)
              content += `
                  <tr>
                  <td><img class="medal" src="../assets/images/medalFirst.png" alt=""></td>
                  <td>${user.username}</td>
                  <td>${minutes}:${seconds}</td>
                  </tr>
              `;
              
            }
            else if(i==1)
            {
              user.time = 3600 - user.time;
              const minutes = Math.floor(user.time / 60);
              const seconds = user.time - minutes * 60;
              if(user)
              content += `
                  <tr>
                  <td><img class="medal" src="../assets/images/medalSecond.png" alt=""></td>
                  <td>${user.username}</td>
                  <td>${minutes}:${seconds}</td>
                  </tr>
              `;
            }
            else if(i==2)
            {
              user.time = 3600 - user.time;
              const minutes = Math.floor(user.time / 60);
              const seconds = user.time - minutes * 60;
              if(user)
              content += `
                  <tr>
                  <td><img class="medal" src="../assets/images/medalThird.png" alt=""></td>
                  <td>${user.username}</td>
                  <td>${minutes}:${seconds}</td>
                  </tr>
              `;
            }
            else
            {
              
                  user.time = 3600 - user.time;
                  const minutes = Math.floor(user.time / 60);
                  const seconds = user.time - minutes * 60;
                  if(user)
                  content += `
                      <tr>
                      <td>${i+1}</td>
                      <td>${user.username}</td>
                      <td>${minutes}:${seconds}</td>
                      </tr>
                  `;
                
            }
            
          

    }
    
    
  }
  
  leaderTable.innerHTML = content;
}

renderTable();