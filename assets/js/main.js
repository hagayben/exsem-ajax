var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getNewUsers, getallUsers } from "./api/users-api.js";
import creatCards from "./reducers/card.js";
let users = [];
(() => __awaiter(void 0, void 0, void 0, function* () {
    //get data from api
    const usersResponse = yield getallUsers();
    console.log(usersResponse);
    // creatCards(usersResponse)
    const html = creatCards(usersResponse);
    document.getElementById("showCards").innerHTML = html;
}))();
document.addEventListener("DOMContentLoaded", function (e) {
    document.addEventListener("scroll", function (e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 200;
        newUser();
        function newUser() {
            return __awaiter(this, void 0, void 0, function* () {
                if (currentScroll + modifier > documentHeight) {
                    console.log("You are at the bottom!");
                    //get data from api
                    const usersNewResponse = yield getNewUsers();
                    const html = creatCards(usersNewResponse);
                    document.getElementById("showCards").innerHTML = html;
                    console.log(usersNewResponse);
                }
            });
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
    const element = e.target;
    console.log(element);
    if (element.id.startsWith("ToggleswitchId-")) {
        alert("user is check");
        document.getElementById("eventClick").innerHTML = `
  users are selected: 
  `;
    }
    else {
        console.log("uncheck");
    }
});
