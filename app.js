let friends = ["Tracy", "Fannie", "Benjamin", "Teresa", "Louise"];

 friendLoop:
 for (i of friends) {
     lyricLoop:
     for (j = 99; j > 0; j--) {
         if (j > 1) {
             if (j == 2) { 
                 console.log(j + " lines of code in the file, " + j + " lines of code; " + i + " strikes one out, clears it all out, " + (j - 1) + " more line of code in the file");
             } else {
                 console.log(j + " lines of code in the file, " + j + " lines of code; " + i + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
             }
         } else {
             console.log(j + " line of code in the file, " + j + " line of code; " + i + " strikes it out, clears it all out, no more lines of code in the file");
         }
     }
 }