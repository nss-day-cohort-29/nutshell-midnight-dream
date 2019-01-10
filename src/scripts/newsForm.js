import eventListeners from "./eventListeners"

const newsForm = {

    displayForm() {

        console.log("Button clicked!");

        // Clear output container on DOM
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML = "";

        // Create main form container
        let formContainer = document.createElement("div");
        formContainer.setAttribute("id", "form_container");

        // Add main title
        let formContainerTitle = document.createElement("h1");
        formContainerTitle.textContent = "Add New Article";
        formContainer.appendChild(formContainerTitle);

        // Create "Title" field
        let title = document.createElement("fieldset");

        let titleLabel = document.createElement("label");
        titleLabel.textContent = "Title";
        titleLabel.setAttribute("for", "article_name");

        let titleInput = document.createElement("input");
        title.setAttribute("id", "article_name");
        title.setAttribute("name", "article_name");

        title.appendChild(titleLabel);
        title.appendChild(titleInput);

        // Create "Synopsis" textarea

        let synopsis = document.createElement("fieldset");

        let synopsisLabel = document.createElement("label");
        synopsisLabel.textContent = "Synopsis";
        synopsisLabel.setAttribute("for", "article_name");

        let synopsisBox = document.createElement("textarea");
        synopsisBox.setAttribute("id", "article_synopsis");
        synopsisBox.setAttribute("name", "article_synopsis");
        synopsisBox.setAttribute("rows", "4");
        synopsisBox.setAttribute("cols", "50");

        synopsis.appendChild(synopsisLabel);
        synopsis.appendChild(synopsisBox);

        // Create "URL" field

        let url = document.createElement("fieldset");

        let urlLabel = document.createElement("label");
        urlLabel.textContent = "URL";
        urlLabel.setAttribute("for", "article_url");

        let urlInput = document.createElement("input");
        urlInput.setAttribute("id", "article_url");
        urlInput.setAttribute("name", "article_url");

        url.appendChild(urlLabel);
        url.appendChild(urlInput);

        // Create "Save Article" button and attach event listener
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save Article";
        saveBtn.setAttribute("class", "save_new_article");

        // Attach event listener to button, to POST to database
        saveBtn.addEventListener("click", eventListeners.saveNewsArticle);

        // Add each field to form
        formContainer.appendChild(title);
        formContainer.appendChild(synopsis);
        formContainer.appendChild(url);
        formContainer.appendChild(saveBtn);

        // Add form to output container
        outputContainer.appendChild(formContainer);

    }

}

export default newsForm;