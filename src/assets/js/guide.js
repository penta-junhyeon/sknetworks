var listGuide = listGuide||{};

listGuide.page = {
    init : function(){
        this.setList();
        this.setListTableHeightLimit();
    },
    setList : function(){
        var cnt = 0;
        var tag = "";
        // var gdCnt = 27;
        
        for(var j=0; j<guideData.length; j++){
            for(var i=0;i<guideData[j].length;i++){
                try{
                    cnt++;
                    if(guideData[j][i]["progress"] == 100){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='complete'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='complete split'>";
                        } else {
                            tag += "<tr class='complete'>";
                        }
                        tag += "<td>"+cnt+"</td>";
                    } else if(guideData[j][i]["progress"] == 101){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='development'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='development split'>";
                        } else {
                            tag += "<tr class='development new'>";
                        }
                        tag += "<td>"+cnt+"</td>";
                    } else if(guideData[j][i]["progress"] == 102){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='parameter'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='parameter split'>";
                        } else {
                            tag += "<tr class='parameter'>";
                        }
                        tag += "<td></td>";
                        cnt--;
                    } else if(guideData[j][i]["progress"] == 110){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='complete new'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='complete new split'>";
                        } else {
                            tag += "<tr class='complete new'>";
                        }
                        tag += "<td>"+cnt+"</td>";
                    } else if(guideData[j][i]["progress"] == 50){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='script'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='script split'>";
                        } else {
                            tag += "<tr class='script'>";
                        }
                        tag += "<td>"+cnt+"</td>";
                    } else if(guideData[j][i]["progress"] == 99){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='common'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='common split'>";
                        } else {
                            tag += "<tr class='common'>";
                        }
                        tag += "<td></td>";
                        cnt--;
                    } else if(guideData[j][i]["progress"] == 70){
                        if(guideData[j][i]["appoint"] =='leader'){ 
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='correct'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='correct split'>";
                        } else {
                            tag += "<tr class='correct'>";
                        }
                        tag += "<td>"+cnt+"</td>";
                    } else if(guideData[j][i]["progress"] == 1){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='delete'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='delete split'>";
                        } else {
                            tag += "<tr class='delete'>";
                        }
                        tag += "<td></td>";
                        cnt--;
                    } else if(guideData[j][i]["progress"] == 0){
                        if(guideData[j][i]["appoint"] =='leader'){
                            tag += "<tr class='subtit'>";
                            tag += "<td colspan='16'>" + guideData[j][i]["1depth"] + "</td>";
                            tag += "</tr>";
                            tag += "<tr class='nodata'>";
                        } else if(guideData[j][i]["appoint"] =='split'){
                            tag += "<tr class='nodata split'>";
                        } else {
                            tag += "<tr class='nodata'>";
                        }
                        tag += "<td>"+cnt+"</td>";
                    } else{
                        tag += "<tr>";
                        tag += "<td>"+cnt+"</td>";
                    }                
                    tag += "<td>"+guideData[j][i]["id"]+"</td>";
                    if(guideData[j][i]["class"] == undefined){
                        guideData[j][i]["class"] = "";
                    };
                    tag += "<td>"+guideData[j][i]["class"]+"</td>";
                    tag += "<td>"+guideData[j][i]["1depth"]+"</td>";
                    tag += "<td>"+guideData[j][i]["2depth"]+"</td>";
                    tag += "<td>"+guideData[j][i]["page-name"]+"</td>";
                    if(guideData[j][i]["type"] == undefined){
                        guideData[j][i]["type"] = "page"
                    }
                    tag += "<td>"+guideData[j][i]["type"]+"</td>";
                    tag += "<td>"+guideData[j][i]["planner-name"]+"</td>";
                    tag += "<td>"+guideData[j][i]["designer-name"]+"</td>";
                    tag += "<td>"+guideData[j][i]["publisher-name"]+"</td>";
                    tag += "<td>"+guideData[j][i]["start-date"]+"</td>";
                    tag += "<td>"+guideData[j][i]["end-date"]+"</td>";
                    if(guideData[j][i]["progress"] == 101 || guideData[j][i]["progress"] == 102) {
                        guideData[j][i]["progress"] = 100;
                        tag += "<td>"+guideData[j][i]["progress"]+"%</td>";
                    } else {
                        tag += "<td>"+guideData[j][i]["progress"]+"%</td>";
                    }
                    tag += "<td>";
                    if(guideData[j][i]["update"] == undefined){
                        guideData[j][i]["update"] = "";
                    };
                    tag += guideData[j][i]["update"] + "</td>";
                    tag += "<td><div class='table-url-link'>";
                    if(guideData[j][i]["type"] == "page"){                    
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='btn-view page-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>페이지보기</a>";
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["id"]+".html</a>";
                    } else if(guideData[j][i]["type"] == "param"){
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='btn-view tab-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>탭보기</a>";
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["id"]+"</a>";
                    } else if(guideData[j][i]["type"] == "popup"){
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='btn-view popup-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>팝업보기</a>";
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["id"]+".html</a>";
                        // tag += "<a href='../guide/popupView.html?url=.."+guideData[j][i]["url"]+"' target='_blank' class='btn-view popup-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>팝업보기</a>";
                        // tag += "<a href='../guide/popupView.html?url=.."+guideData[j][i]["url"]+"' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["id"]+".html</a>";
                    } else if(guideData[j][i]["type"] == "email"){
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='btn-view email-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>이메일보기</a>";
                        tag += "<a href='../"+guideData[j][i]["url"]+"' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["id"]+".html</a>";
                    } else if(guideData[j][i]["type"] == "popup-loading"){
                        tag += "<a href='../guide/popupView.html?url=.."+guideData[j][i]["url"]+"&type=loading' target='_blank' class='btn-view popup-loading-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>팝업보기</a>";
                        tag += "<a href='../guide/popupView.html?url=.."+guideData[j][i]["url"]+"&type=loading' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["url"]+".html</a>";                    
                    } else if(guideData[j][i]["type"] == "url"){
                        tag += "<a href='"+guideData[j][i]["url"]+"' target='_blank' class='btn-view url-view' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>URL보기</a>";
                        tag += "<a href='"+guideData[j][i]["url"]+"' target='_blank' class='txt-link' title='페이지를 새로운 창으로 열어서 보기' aria-label='페이지를 새로운 창으로 열어서 보기'>"+guideData[j][i]["url"]+"</a>";
                    }
                    tag += "</div></td>";
                    
                    if(guideData[j][i]["memo"] == undefined){
                        guideData[j][i]["memo"] = "";
                    };
                    tag += "<td><div class=\"height-limit\">"+guideData[j][i]["memo"]+"</div></td>";
                    tag += "</tr>";
                    
                } catch(e){
                    console.log(e.message)
                }
            } 
            // console.log(document.querySelector("#pageList" + j + " > tbody"));
            $("#pageList" + j + " > tbody").append(tag);
            cnt = 0;
            tag = "";
        }
    },
    setListTableHeightLimit : function(){
        // $('.height-limit').each(function(index,sender){
        //     if(sender.scrollHeight > sender.offsetHeight){
        //         var maxScroll = sender.scrollHeight - sender.offsetHeight;
        //         sender.scrollTop = maxScroll;
        //     } //console.log(sender.offsetHeight);
        // })
    },
}