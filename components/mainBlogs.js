const mainContainer = document.querySelector(".main-container");
export const mainBlogs = (data) => {
    mainContainer.innerHTML = "";
    let blogRows = document.createElement("div");
    blogRows.className="row m-5";
    mainContainer.appendChild(blogRows);
    
    data.docs.forEach(doc => {
        let blogBox = document.createElement("div");
        let blogContainer = document.createElement("div");
        let blogHeading = document.createElement("h1");
        let blogContent = document.createElement("p");
        let blogAuthor = document.createElement("p");
        let blogInDetails = document.createElement("div");

        blogBox.className = "jumbotron jumbotron-fluid jumbo-color";
        blogContainer.className = "container";
        blogContainer.setAttribute("data-id",doc.id);
        
        blogHeading.className = " blog-heading";
        blogHeading.setAttribute("data-number",doc.id);
        blogHeading.textContent = doc.data().title;
        
        blogContent.className = "lead";
        blogAuthor.className = "text-muted rights";
        blogContent.textContent = `${String(doc.data().content).slice(0,350)}.....`;
        blogAuthor.textContent = `Author: ${doc.data().author}`;

        blogBox.appendChild(blogContainer);
        blogContainer.appendChild(blogHeading);
        blogContainer.appendChild(blogContent);
        blogBox.appendChild(blogAuthor);
        blogRows.appendChild(blogBox);

        // blogs in details
        // this code open a blog in detail
        blogHeading.addEventListener("click", (e) => {
            mainContainer.innerHTML = "";

            blogHeading.className = "blog-in-details-heading";
            blogHeading.textContent = doc.data().title;

            blogAuthor.textContent = doc.data().content;

            blogInDetails.className = "blog-in-details";
            blogInDetails.appendChild(blogHeading);
            blogInDetails.appendChild(blogAuthor);
            mainContainer.appendChild(blogInDetails);
        })
    })
}