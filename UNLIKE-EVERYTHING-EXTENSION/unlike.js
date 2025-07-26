document.getElementById("pop").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: deleteLikedVideos
    });
});



async function deleteLikedVideos(){
    async function waitForIt(ms){
        return new Promise(resolve => {setInterval(resolve,ms)})
    }


    while(true){
        let a = null;
        document.querySelectorAll('*').forEach((el)=>{
            if(el.innerHTML.trim() =='Select'){a = el}
        });
        console.log("C1");
        if(!a){
            console.log("No more liked videos!");
            break;
        }
        a.click();
        await waitForIt(1000);
        console.log("C2");
        const images = document.querySelectorAll('[data-bloks-name="bk.components.Image"]');
        for(const img of images){
            img.click();
            await waitForIt(500);    
        }
        console.log("C3");
        let b = null;
        document.querySelectorAll('[data-bloks-name="bk.components.TextSpan"]').forEach((el)=>{
            if(el.innerHTML.trim().includes('Unlike')){b = el}
        });
        if(b){
            b.click();
            await waitForIt(1000)
        }
        console.log("C4");
        const delBtn = document.querySelector('button[tabindex="0"]');
        if(delBtn){
            delBtn.click();
            await waitForIt(4000);
        }

        await waitForIt(10000);
    }
}

// deleteLikedVideos();