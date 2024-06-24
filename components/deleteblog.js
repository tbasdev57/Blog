const mainContainer = document.querySelector(".main-container");
export const deleteblog = (data) => {
    const handelDeleteblog = document.querySelector("#deleteblog");
    const loader = document.querySelector(".loader");
    const messageBox = document.querySelector(".message-box");
    mainContainer.innerHTML = `<h2 style="text-align: center; margin: 1%; text-decoration: underline;">Delete Blog</h2><br />`;
    data.docs.forEach(doc => {
        let blogBox = document.createElement("div");
        let blogHeading = document.createElement("p");
        let blogAuthor = document.createElement("p");
        let blogInDetails = document.createElement("div");
        let button = document.createElement("button");
        
        blogBox.className = "blog-box";
        blogBox.setAttribute("data-id",doc.id);
        
        blogHeading.className = "blog-heading";
        blogHeading.setAttribute("data-number",doc.id);
        blogHeading.textContent = doc.data().title;
        
        blogAuthor.className = "blog-author";
        blogAuthor.textContent = `by ${doc.data().author}`;

        blogBox.appendChild(blogHeading);
        blogBox.appendChild(blogAuthor);
        mainContainer.appendChild(blogBox);

        // blogs in details
        // this code open a blog in detail
        blogHeading.addEventListener("click", (e) => {
            mainContainer.innerHTML = "";

            blogHeading.className = "blog-in-details-heading";
            blogHeading.textContent = doc.data().title;

            blogAuthor.textContent = doc.data().content;
            button.className="btn btn-danger";
            button.setAttribute("id", "delete-button");
            button.textContent = "Delete";

            blogInDetails.className = "blog-in-details";
            blogInDetails.appendChild(blogHeading);
            blogInDetails.appendChild(blogAuthor);
            blogInDetails.appendChild(button);
            mainContainer.appendChild(blogInDetails);

            document.querySelector("#delete-button").addEventListener("click", (e) => {
                messageBox.style.display = "none";
                loader.style.display = "block";
                db.collection("blogs").doc(doc.id).delete().then(() => {
                    loader.style.display = "none";
                    messageBox.innerHTML = "Blog Deleted";
                    messageBox.style.display = "block";
                    setTimeout(() => {
                        handelDeleteblog.click();
                        messageBox.innerHTML = "";
                        messageBox.style.display = "none";
                    },1000);
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