/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
    
    /**
   * Modify the display of embedded islandora bookreader.
   */
    Drupal.behaviors.getParamByName = function(name, url){
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    Drupal.behaviors.embedBookReader = {
        attach: function(context, settings) {
            var shareLink = $(".BRicon.share.cboxElement");
            if(shareLink) {
                shareLink.remove();
            }
        
            var spanBRreturn = $("span#BRreturn");
            if(spanBRreturn) {
                spanBRreturn.remove();
            }
        
            // make the title font size smaller:
            var bookTitle = $("h1#page-title");
            if(bookTitle) {
                bookTitle.css("font-size", "16px");
            }
        
            var bookSearchForm = $("#booksearch");
            if(bookSearchForm) {
                bookSearchForm.remove();
            }
        
            var bookInfo = $(".BRicon.info");
            if(bookInfo) {
		bookInfo.remove();
            }

            var bookText = $(".BRicon.full_text");
            if(bookInfo) {
		bookText.remove();
            }

            var bookFullScreen = $(".BRicon.full");
            if(bookFullScreen) {
		bookFullScreen.click();
		bookFullScreen.remove();
            }

            var bookSearchForm = $("#booksearch");
            if(bookSearchForm) {
                bookSearchForm.remove();
            }

            var bookBRnavpos = $("div#BRnavpos");
            if(bookBRnavpos) {
                bookBRnavpos.remove();
            }

	    var metadataDiv = $("div.islandora-book-metadata");
	    if(metadataDiv) {
		metadataDiv.remove();
	    }

        
            // when display the book reader in the two page view mode, the BRtwopageview div top is set wrong:
            var bookBRtwopageview = $("div#BRtwopageview");
            if(bookBRtwopageview) {
                bookBRtwopageview.css("top", "-10px");
		bookBRtwopageview.css("position","relative");
            }
        
            // adjust the height of the book reader based on the iframe height:
            height = Drupal.behaviors.getParamByName("height");
            if(!height || null == height){
	        height = 800;
	    }
             var bookBRcontainer = $("div#BRcontainer");
             if(bookBRcontainer) {
		bookBRcontainer.css("position","relative");
		bookBRcontainer.css("overflow","hidden");
		bookBRcontainer.css("top", "40px");
 //               bookBRcontainer.css("height", parseInt(height)-105);
             }

            // hide the side bars to better fit the book viewer in the iframe:
              var body = $("body");
              if(body.hasClass("one-sidebar")){
                  body.removeClass("one-sidebar");
              }
              if(body.hasClass("sidebar-first")){
                  body.removeClass("sidebar-first");
              }
              if(!body.hasClass("no-sidebars")){
                  body.addClass("no-sidebars");
              }
                
        }
    }
})(jQuery);




