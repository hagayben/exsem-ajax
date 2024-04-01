import { getNewUsers, getallUsers } from "./api/users-api.js";
import creatCards from "./reducers/card.js";
import { User } from "./types/user-types.js";

let users: User[] = [];
(async () => {
  //get data from api
  const usersResponse = await getallUsers();
  console.log(usersResponse);
  // creatCards(usersResponse)

  const html = creatCards(usersResponse);
  document.getElementById("showCards").innerHTML = html;
})();

document.addEventListener("DOMContentLoaded", function (e) {
  document.addEventListener("scroll", function (e) {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 200;
    newUser();
    async function newUser() {
      if (currentScroll + modifier > documentHeight) {
        console.log("You are at the bottom!");

        //get data from api
        const usersNewResponse = await getNewUsers();
        const html = creatCards(usersNewResponse);
        document.getElementById("showCards").innerHTML = html;
        console.log(usersNewResponse);
      }
    }
  });
});

// async function clickCheckbox(e: MouseEvent) {
//   console.log('gg')
//   if (e.target instanceof HTMLElement) {
//     const element = e.target as HTMLElement;
//     console.log("check");
//     document.getElementById("eventClick").innerHTML = `
//     users are selected: ${element.click}
//     `;
//   } else {
//     console.log("uncheck");
//   }
// }
document.getElementById("showCards").addEventListener("click", (e) => {
  console.log("modal toggle clicked");
  // get id from event
  const element = e.target as HTMLInputElement;
  console.log(element);

  if (element.id.startsWith("ToggleswitchId-")) {
    alert("user is check");
    document.getElementById("eventClick").innerHTML = `
  users are selected: 
  `;
  } else {
    console.log("uncheck");
  }
});
