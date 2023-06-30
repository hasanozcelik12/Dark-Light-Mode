let colorIcons = document.querySelector(".color-icon");
icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click",() => {
    colorIcons.classList.toggle("open")
})

let buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
    button.addEventListener("click",(e) => {
        console.log(e)
        let target = e.target
        let open = document.querySelector(".open")
        if(open) open.classList.remove("open")

        document.querySelector(".active").classList.remove("active")
        target.classList.add("active")
        // js code to switch colors (also day night mode)
        let root = document.querySelector(":root"),
        dataColor = target.getAttribute("data-color") // getiing data color value of clicked button
        color = dataColor.split(" ") // splitting each other form space and make them array
        

        root.style.setProperty(" --white,",color[1])
        root.style.setProperty("--black",color[2])
        root.style.setProperty("--nav-main",color[3])
        root.style.setProperty(" --switchers-main",color[4])
      


        console.log(color)

        let iconName = target.className.split(" ")[2]
        colorText = document.querySelector(".home-content span")

        if(target.classList.contains("fa-moon")){
            target.classList.replace(iconName,"fa-sun")
            colorIcons.style.display = "none"
            colorText.classList.add("darkMode")
        }else if(target.classList.contains("fa-sun")){
            target.classList.replace("fa-sun","fa-moon")
            colorIcons.style.display = "block"
            colorText.classList.remove("darkMode")
            document.guerySelector(".btn.blue").click()
         
        }
        console.log(iconName)
    })
    
});
