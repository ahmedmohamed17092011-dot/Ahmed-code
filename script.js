document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("typing-text");
    
    if (element) {
        // الاحتفاظ بالحاوية الأصلية
        const rawHTML = element.innerHTML.trim();
        element.innerHTML = ""; 
        
        let i = 0;
        const speed = 20; // سرعة الكتابة بالمللي ثانية

        function typeWriter() {
            if (i < rawHTML.length) {
                // التعامل مع سطر جديد <br>
                if (rawHTML.substring(i, i + 4).toLowerCase() === "<br>") {
                    element.innerHTML += "<br>";
                    i += 4;
                } 
                // التعامل مع فتح وسم <span class="...">
                else if (rawHTML.charAt(i) === '<') {
                    let closingTagIndex = rawHTML.indexOf('>', i);
                    if (closingTagIndex !== -1) {
                        element.innerHTML += rawHTML.substring(i, closingTagIndex + 1);
                        i = closingTagIndex + 1;
                    } else {
                        element.innerHTML += rawHTML.charAt(i);
                        i++;
                    }
                } 
                // كتابة الحروف العادية
                else {
                    element.innerHTML += rawHTML.charAt(i);
                    i++;
                }
                
                setTimeout(typeWriter, speed);
            }
        }
        
        typeWriter();
    }
});