// fetch("/data.json")
// .then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
//     return myData;
//   })
//     .then((full) => {
//         full.length = 5;
//         return full;
//     })
//     .then((result) => {
//         for (let i = 0; i < result.length; i++) {
//             let div = document.createElement("div");

//             let title = document.createElement("h3");
//             title.appendChild(document.createTextNode(result[i].title));
//             div.appendChild(title);

//             let desc = document.createElement("p");
//             desc.appendChild(document.createTextNode(result[i].description));
//             div.appendChild(desc);

//             document.body.appendChild(div);
//         }
//     })
//     .catch((rej) => {
//         document.body.appendChild(document.createTextNode(rej));
//     });

async function getData(jsonLink) {
    try {
        const response = await fetch(jsonLink);
        const data = await response.json();
        data.length = 5;
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div");

            let h3 = document.createElement("h3");
            h3.innerHTML = data[i].title;
            div.appendChild(h3);

            let p = document.createElement("p");
            p.innerHTML = data[i].description;
            div.appendChild(p);

            document.body.appendChild(div);
        }
    } catch (error) {
        document.body.appendChild(document.createTextNode(error));
    }
}
getData("../data.json");