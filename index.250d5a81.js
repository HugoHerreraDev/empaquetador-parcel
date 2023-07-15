const e=document.getElementById("app"),t=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json(),s=a?.map(e=>`
        <article class="Card">
            <img src="${e.images}">
            <h2>
                ${e.title} <small>Precio $ ${e.price}</small>
            </h2>
        </article>
        `).join(""),c=document.createElement("section");c.classList.add("Items"),c.innerHTML=s,e.append(c)};t();
//# sourceMappingURL=index.250d5a81.js.map
