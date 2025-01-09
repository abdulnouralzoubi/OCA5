heading.innerHTML = "Hello, World!";

document.querySelector("input").click();

car.colour; // Property
car.numbeOfWheels; // Property
car.drive(); // Method

//  all methods are functions, but not all functions are methods
// all methods has paranthesis

document.getElementById("li");
document.getElementsByClassName("btn").style.colour = "red"; // error because getElementsByClassName returns an array
document.getElementById("li").style.colour = "red"; // correct
document.querySelector("li").style.colour = "red"; // correct
document.querySelector("li a").style.colour = "red"; // correct
document.querySelector("#list a").style.colour = "red"; // correct
document.querySelector(".item").style.colour = "red"; // correct
document.getElementById("mydiv").innerHTML = "<h1>Hello, World!</h1>"; // correct

// ---------------------------------------------------

// function mOver(obj) {
//     obj.innerHTML = "How can I help you"
// }

// function mOut(obj) {
//     obj.innerHTML = "Hello world"
// }
// document.getElementById("mydiv").setAttribute("onmouseover", "mOver(this)");
// document.getElementById("mydiv").setAttribute("onmouseout", "mOut(this)");

// const myDiv = document.getElementById("mydiv");

// myDiv.onmouseover = function() {
//     this.innerHTML = "How can I help you";
// };

// myDiv.onmouseout = function() {
//     this.innerHTML = "Hello world";
// };

// ---------------------------------------------------

// document.getElementById("mydiv").onclick = function() {
//     this.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
// };

// const myDiv = document.getElementById("mydiv");

// function getRandomColor() {
//     const letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// myDiv.onclick = function() {
//     this.style.backgroundColor = getRandomColor();
// }

// ---------------------------------------------------

// const textElement = document.getElementById("text");

// const updateStyle = (property, value) => {
//     textElement.style[property] = value;
// };

// document.getElementById("font_family").addEventListener("change", function() {
//     updateStyle("fontFamily", this.value);
// });

// document.getElementById("font_size").addEventListener("change", function() {
//     updateStyle("fontSize", this.value);
// });

// document.getElementById("font_italic").addEventListener("change", function() {
//     updateStyle("fontStyle", this.checked ? "italic" : "normal");
// });

// document.getElementById("font_bold").addEventListener("change", function() {
//     updateStyle("fontWeight", this.checked ? "bold" : "normal");
// });

// document.getElementById("font_underline").addEventListener("change", function() {
//     updateStyle("textDecoration", this.checked ? "underline" : "none");
// });

// const textElement = document.getElementById("text");
// const fontFamilySelect = document.getElementById("font_family");
// fontFamilySelect.addEventListener("change", function() {
//     const fontFamily = fontFamilySelect.value;
//     textElement.style.fontFamily = fontFamily;
// })
// const fontSizeSelect = document.getElementById("font_size");
// fontSizeSelect.addEventListener("change", function() {
//     const fontSize = fontSizeSelect.value;
//     textElement.style.fontSize = fontSize;
// });
// const fontItalicSelect = document.getElementById("font_italic");
// fontItalicSelect.addEventListener("change", function() {
//     const fontItalic = fontItalicSelect.checked;
//     textElement.style.fontStyle = fontItalic ? "italic" : "normal";
// })
// const fontBoldSelect = document.getElementById("font_bold");
// fontBoldSelect.addEventListener("change", function() {
//     const fontBold = fontBoldSelect.checked;
//     textElement.style.fontWeight = fontBold ? "bold" : "normal";
// })
// const fontUnderlineSelect = document.getElementById("font_underline");
// fontUnderlineSelect.addEventListener("change", function() {
//     const fontUnderline = fontUnderlineSelect.checked;
//     textElement.style.textDecoration = fontUnderline ? "underline" : "none";
// });

//---------------------------------------------------

// const inputField1 = document.getElementById("password1");
// const inputField2 = document.getElementById("password2");
// const message1 = document.getElementById("pw1_check");
// const message2 = document.getElementById("pw2_check");

// inputField1.addEventListener("input", function() {
//     const value = inputField1.value;
//     if (value.length < 6) {
//         message1.innerHTML = "Password must be at least 6 characters long.";
//     } else {
//         message1.innerHTML = "";
//     }
// });

// inputField2.addEventListener("input", function() {
//     const value1 = inputField1.value;
//     const value2 = inputField2.value;
//     if (value1 !== value2) {
//         message2.innerHTML = "Passwords do not match.";
//     } else {
//         message2.innerHTML = "";
//     }
// });

//-----------------------------------------------------

// ["p1", "p2", "p3"].forEach(id => {
//     document.getElementById(`${id}_show`).addEventListener("click", function() {
//         const textElement = document.getElementById(`${id}_text`);
//         textElement.style.display = textElement.style.display === "none" ? "block" : "none";
//     });
// });

// document.getElementById("p1_show").addEventListener("click", function() {
//     const p1Text = document.getElementById("p1_text");
//     p1Text.style.display = p1Text.style.display === "none" ? "block" : "none";
// })
// document.getElementById("p2_show").addEventListener("click", function() {
//     const p2Text = document.getElementById("p2_text");
//     p2Text.style.display = p2Text.style.display === "none" ? "block" : "none";
// })
// document.getElementById("p3_show").addEventListener("click", function() {
//     const p3Text = document.getElementById("p3_text");
//     p3Text.style.display = p3Text.style.display === "none" ? "block" : "none";
// })

//-------------------------------------------------------

// const songTextInput = document.getElementById("songTextInput");
// const playlist = document.getElementById("playlist");

// function addSong() {
//   const songName = songTextInput.value.trim();
//   if (!songName) return;

//   const li = document.createElement("li");
//   li.textContent = songName;

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.onclick = () => playlist.removeChild(li);

//   li.appendChild(deleteButton);
//   playlist.appendChild(li);
//   songTextInput.value = "";
// }

// document.getElementById("addButton").addEventListener("click", addSong);

// songTextInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     addSong();
//   }
// });

//-------------------------------------------------------

