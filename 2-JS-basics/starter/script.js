var tipsGen = {
    tips : [],
    final : [],
    calTips : function(x){
        for (var i = 0 ; i < x.length ; i ++ ){
            if (x[i] < 50){
                this.tips[i] = x[i] * 0.20;
            }else if (x[i] > 50 && x[i] < 200){
                this.tips[i] = x[i] * 0.15;
            }else if (x[i] > 200){
                this.tips[i] = x[i] * 0.10;
            }else {
                this.tips[i] = 0 ;
            }
            this.final[i] = x[i] + this.tips[i];
        }
        console.log('Array containing all Tips = '+this.tips);
        console.log('Array containing all final Paid = '+this.final);
    }
}
var bills = [124,48,268,180,42];
tipsGen.calTips(bills);

// Mark
var tipsGen2 = {
    tips : [],
    final : [],
    calTips : function(x){
        for (var i = 0 ; i < x.length ; i ++ ){
            if (x[i] < 100){
                this.tips[i] = x[i] * 0.20;
            }else if (x[i] > 100 && x[i] < 300){
                this.tips[i] = x[i] * 0.10;
            }else if (x[i] > 300){
                this.tips[i] = x[i] * 0.25;
            }else {
                this.tips[i] = 0 ;
            }
            this.final[i] = x[i] + this.tips[i];
        }
        console.log('Array containing all Tips = '+this.tips);
        console.log('Array containing all final Paid = '+this.final);
    }
}
var markBills = [77,475,110,45];
tipsGen2.calTips(markBills);

function calAvr(y) {
var avr = 0;
for (var a = 0; a < y.length ; a ++){
    avr += y[a];
}
avr = avr/y.length;
return avr;
}

console.log("John's Average Tips = "+calAvr(tipsGen.tips));
console.log("Mark's Average Tips = "+calAvr(tipsGen2.tips));

if (calAvr(tipsGen2.tips)>calAvr(tipsGen.tips)){
    console.log("Mark's family pay higher Tips than John's family");
}else{
    console.log("John's family pay higher Tips than Mark's family");
}