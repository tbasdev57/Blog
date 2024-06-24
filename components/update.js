const mainBox = document.querySelector(".main-container");
export const updateBlogsComponent = (data) => {
    const loader = document.querySelector(".loader");
    const messageBox = document.querySelector(".message-box");
    mainBox.innerHTML = `<h2 style="text-align: center; margin: 1%; text-decoration: underline;">Update Blog</h2><br />`;
    data.docs.forEach(doc => {
        let form = document.createElement("form");
        let header = document.createElement("h2");
        let input = document.createElement("input");
        let textarea = document.createElement("textarea");
        let button = document.createElement("button");
        let blogBox = document.createElement("div");
        let blogHeading = document.createElement("p");
        let blogAuthor = document.createElement("p");
        let blogInDetails = document.createElement("div");

        blogBox.className = "blog-box";
        blogBox.setAttribute("data-id",doc.id);
        
        blogHeading.className = "blog-heading";
        blogHeading.setAttribute("data-number",doc.id);
        blogHeading.textContent = doc.data().title;
        
        blogAuthor.className = "blog-author";
        blogAuthor.textContent = `by ${doc.data().author}`;

        blogBox.appendChild(blogHeading);
        blogBox.appendChild(blogAuthor);
        mainBox.appendChild(blogBox);
        

        // blogs in details
        // this code open a blog in detail
        blogHeading.addEventListener("click", (e) => {
            mainBox.innerHTML = "";
            let formBox=document.createElement("div");
            let formGroup=document.createElement("div");
            formBox.className="login-form";
            formGroup.className="form-group";
            // form.className = ;
            form.setAttribute("id","updateBlogForm");
            header.className="text-center";
            header.textContent = "Update Blog";
            
            input.setAttribute("type", "text");
            input.setAttribute("name", "title");
            input.setAttribute("class","form-control");
            input.setAttribute("value", doc.data().title);

            textarea.setAttribute("name", "content");
            textarea.setAttribute("class","form-control");
            textarea.setAttribute("style","height: 200px;");
            textarea.textContent = doc.data().content;

            button.setAttribute("type", "submit");
            button.className="btn btn-primary btn-sm";
            button.setAttribute("style","width: 180px;")
            button.innerHTML = "Update Blog";

            form.appendChild(header);
            formGroup.appendChild(input);
            formGroup.appendChild(textarea);
            formGroup.appendChild(button);
            form.appendChild(formGroup);
            formBox.appendChild(form);
            mainBox.appendChild(formBox);

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                messageBox.style.display = "none";
                loader.style.display = "block";
                db.collection('blogs').doc(doc.id).update({
                    title: e.target.title.value,
                    content: e.target.content.value
                }).then(() => {
                    loader.style.display = "none";
                    messageBox.innerHTML = "Blog Updated";
                    messageBox.style.display = "block";
                    setTimeout(() => {
                        messageBox.innerHTML = "";
                        messageBox.style.display = "none";
                    },3000);
                }).catch(err => {
                    loader.style.display = "none";
                    messageBox.innerHTML = `Error: ${err.message}`;
                    messageBox.style.backgroundColor = "red";
                    messageBox.style.display = "block";
                    setTimeout(() => {
                        messageBox.innerHTML = "";
                        messageBox.style.display = "none";
                    },5000);
                })
            })
        })
    })
}