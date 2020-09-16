import { url, resultContainer } from "./constants/constants.js";
import { displayMessage} from "./components/displayMessage.js";
import createTags from "./components/createTags.js";

async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        createHtml(json.data);
    } catch (error) {
        console.log(error);
        resultContainer.innerHTML = displayMessage("error", error);
    }
}

callApi();

function createHtml(data) {
    resultContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        resultContainer.innerHTML += `<div class="result">
                                        <h4>${data[i].name}</h4>
                                        <p>Birthday: <b>${data[i].birthday}</b></p>
                                        <p>Nickname: <b>${data[i].nickname}</b></p>
                                        <div>Occupations:                                         
                                            ${createTags(data[i].occupation)}
                                        </div>
                                    </div>`;
    }
}

