const home = document.getElementById('showcase')
const check = document.getElementById('check')
const gal = document.getElementById('gal')
const logo = document.getElementById('logo')
const about = document.getElementById('about')

const display = ()=> {
    let str = ""
    str += `
        <div class="image center" style="flex-direction: column;">
            <div class="facts">
                <h1>NutriVeal...!</h1>
                <h3>Your health is in your hands!</h3>
            </div>
            <div class="image">
                <img src="./images/4.jpg" alt="food">
            </div>
        </div>
    `
    home.innerHTML = str
}
display()

logo.addEventListener('click', ()=> {
    let str = ""
    str += `
        <div class="image center" style="flex-direction: column;">
            <div class="facts">
                <h1>Nutriveal...!</h1>
                <h3>Your health is in your hands!</h3>
            </div>
            <div class="image">
                <img src="./images/4.jpg" alt="food">
            </div>
        </div>
    `
    home.innerHTML = str
})

gal.addEventListener('click', ()=> {
    if(home.classList.contains("act")) home.classList.remove("act")
    let str = ""
    str += `
        <div class="imgs my-3">
            <div id="carouselExampleIndicators" class="carousel slide nar w-100 h-100" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner w-100 h-100">
                <div class="carousel-item active w-100 h-100">
                    <img src="./images/1.jpg" class="d-block w-100 h-100" alt="...">
                </div>
                <div class="carousel-item w-100 h-100">
                    <img src="./images/2.jpg" class="d-block w-100 h-100" alt="...">
                </div>
                <div class="carousel-item w-100 h-100">
                    <img src="./images/3.jpg" class="d-block w-100 h-100" alt="...">
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    `
    home.innerHTML = str
})

check.addEventListener('click', ()=> {
    if(home.classList.contains("act")) home.classList.remove("act")
    let str = ""
    str += `
        <div class="center form my-5">
            <form class="row g-3">
                <div class="col-md-12">
                  <label class="form-label">Symptom 1</label>
                  <input type="text" class="form-control" id="symp1">
                </div>
                <div class="col-md-12">
                  <label class="form-label">Symptom 2</label>
                  <input type="text" class="form-control" id="symp2">
                </div>
                <div class="col-md-12">
                    <label class="form-label">Symptom 3</label>
                    <input type="text" class="form-control" id="symp3">
                </div>
                <div class="col-md-12">
                    <label class="form-label">Symptom 4</label>
                    <input type="text" class="form-control" id="symp4">
                  </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary offset-3 col-6">Submit</button>
                </div>
            </form>
        </div>
    `
    home.innerHTML = str
})  

about.addEventListener('click', ()=> {
    let str = ""
    str += `
        <div class="about">
            <p class="container my-5">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in <strong>Virgin</strong>, 
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
            and going through the cites of the word in classical literature, discovered the undoubtable source. 
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p  class="container my-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
            you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet 
            tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 
            200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
            </p>
        </div>
    `
    home.innerHTML = str
})