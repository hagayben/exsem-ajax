export default function creatCards(users) {
    return users
        .map((users) => `
      
        
     <div class="usersShow col col-sm-6 col-md-3" >
     <label class="switch">
     <input type="checkbox" id="ToggleswitchId-${users.email}" onClick="clickCheckbox()" >favorites
     <span class="slider round"></span>
    </label>
    <br>
           name: ${users.name.first} ${users.name.last}
          <br>
          gander: ${users.gender}
          <br>
          age: ${users.dob.age}
          <br>
          email: ${users.email}
          <br>
          <br>
          <img src="${users.picture.large}"/>
    
      </div>
       
        `)
        .reduce((acc, curr) => acc + curr, "");
}
