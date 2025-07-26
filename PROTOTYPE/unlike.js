
// var a;
// document.querySelectorAll('[data-bloks-name="bk.components.Text"]').forEach((el)=>{
//     if(el.innerHTML.trim() =='Select'){a = el}
//     });

// document.querySelectorAll('[data-bloks-name="bk.components.Image"]').forEach((el)=>{console.log(el);
//                                                                                    el.click()})
// var b;
// document.querySelectorAll('[data-bloks-name="bk.components.TextSpan"]').forEach((el)=>{
//     if(el.innerHTML.trim() =='Unlike'){b = el}
//     });

// document.querySelector('button[tabindex="0"]').click();

async function waitForIt(ms){
    return new Promise(resolve => {setInterval(resolve,ms)})
}

async function deleteLikedVideos(){
    while(true){
        let a = null;
        document.querySelectorAll('*').forEach((el)=>{
            if(el.innerHTML.trim() =='Select'){a = el}
        });

        if(!a){
            console.log("No more liked videos!");
            break;
        }
        a.click();
        await waitForIt(1000);

        const images = document.querySelectorAll('[data-bloks-name="bk.components.Image"]');
        for(const img of images){
            img.click();
            await waitForIt(500);    
        }

        let b = null;
        document.querySelectorAll('[data-bloks-name="bk.components.TextSpan"]').forEach((el)=>{
            if(el.innerHTML.trim().includes('Unlike')){b = el}
        });
        if(b){
            b.click();
            await waitForIt(1000)
        }

        const delBtn = document.querySelector('button[tabindex="0"]');
        if(delBtn){
            delBtn.click();
            await waitForIt(4000);
        }

        await waitForIt(10000);
    }
}
deleteLikedVideos();