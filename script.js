function js_render(t,d){
    console.log("SHIT'S WORKING!")
    return t.replace(/\n/g,"~").replace(/\{([^\:\}]+)\}|\{ds\:(\w+)\}(.*?)\{\/ds\}/g,function(a,n,s,ts){
        h='';try
            {
                if(n)
                    return d[n];ds=d[s];for(c in ds)
                    {
                        if(ds.hasOwnProperty(c))h+=js_render(ts,ds[c])
                    }
            }catch(e){}
                return h
    }).replace(/~/g,'\n')
};
    
    
    function vypiskurzy(data){
        t = '<h1>Kurzy <a href="{url}">{banka}</a><hr></h1><table style="width:360px"><tr><td class="me"><b>Měna</b></td><td class="je"><b>Jednotka</b></td><td class="ku"><b>Kurz</b></td><hr></tr>'
        t += '{ds:kurzy}<tr><td>{nazev}</td><td align="right">{jednotka}</td><td align="right">{dev_stred}</td></tr>{/ds}'
        t += '</table><hr>'  
    
        
        html = js_render(t,data)
        document.getElementById("kl").innerHTML = html
        
    }
    setInterval(vypiskurzy(data), 60000)
