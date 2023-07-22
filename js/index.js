var bookNameInput = document.getElementById('bookName');
var webSitUrlInput = document.getElementById('webSitUrl');
var booksContiner=[];
if (localStorage.getItem("bookList")!= null) 
{
    booksContiner=JSON.parse(localStorage.getItem("bookList"));
    displayBooks(booksContiner);
}

function submitBook()
{  
    var books=
    {
        bookName:bookNameInput.value,
        webSiteUrl:webSitUrlInput.value
    }
    if (validtionNameInput()&&validtionWebSitUrlInput()==true) 
    {

    booksContiner.push(books);
    localStorage.setItem("bookList",JSON.stringify(booksContiner));
    displayBooks(booksContiner);
    clrForm();

    }
      else{
        swal("Site Name or Url is not valid, Please follow the rules below :" , `Site name must contain at least 3 characters
        Site URL must be a valid one`);
          }
        
    }

function clrForm()
{
    bookNameInput.value="";
    webSitUrlInput.value="";

}

function displayBooks()
{
    var box=``;
    for ( var i=0 ; i < booksContiner.length ; i++ )
    {
        box+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${booksContiner[i].bookName}</td>
            <td><button class="btn btn-success"><a target="_blank" href="${booksContiner[i].webSiteUrl}"><i class="fa-solid fa-eye"></i> Visit</a></button></td>
            <td><button onclick="deleteItem(${i});" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
            </tr>
        `
    }
    document.getElementById("tBody").innerHTML=box;
}

function deleteItem(index)
{
    booksContiner.splice(index,1);
    localStorage.setItem("bookList",JSON.stringify(booksContiner));
    displayBooks(booksContiner);
}

function validtionNameInput()
{
    var rejex=/^[a-zA-Z]{3}/;
    return rejex.test(bookNameInput.value);
}

function validtionWebSitUrlInput()
{
    var rejex=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    return rejex.test(webSitUrlInput.value);
}
