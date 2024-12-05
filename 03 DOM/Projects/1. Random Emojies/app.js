//----------------------------------------------------------------------|
//                                                                      |
//                        RANDOM EMOJIES                                |
//                                                                      |
//                                                                      |
// https://youtu.be/H3XIJYEPdus?feature=shared&t=35860                  |
//                                                                      |
//                                                                      |
//----------------------------------------------------------------------|

const emoji = document.querySelector("#emoji"); // it said const btn

const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "😄",
    "🤔",
    "🤪",
    "🥲",
    "😃",
    "😁",
    "😬",
];

emoji.addEventListener("mouseover", () => {
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
});

// he wrote it (in the lesson) as...

// emoji.addEventListener("mouseover", () => {
//     emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
// });

// and it's undefined