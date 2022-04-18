var MenuItems = document.getElementById("nav_list");
    MenuItems.style.maxHeight ='0px';
    function menutoggle() {
        console.log("hi");
        if(MenuItems.style.maxHeight == '0px')
        {
            MenuItems.style.maxHeight = '700px';
            MenuItems.style.macWeight = "100%";
        }
        else
        {
            MenuItems.style.maxHeight = '0px';
        }
    }

    window.onscroll = () => {
        let scrolly= window.pageYOffset || window.scrollY;
        let navcontainer=document.getElementById("nav-container");
        let navlist=document.getElementsByClassName("nav-item");
        let heading=document.getElementById("heading");
        // console.log('************',navcontainer);

        if(scrolly > 100){
            navcontainer.classList.add("nav-white-container");
            heading.classList.add("text--black");
            for(let i=0;i<navlist.length ;i++){
                navlist[i].style.color = 'black'
            }
        }
        else{
            navcontainer.classList.remove("nav-white-container");
            heading.classList.remove("text--black");

            for(let i=0;i<navlist.length ;i++){
                navlist[i].style.color = 'white'
            }
        }
    }