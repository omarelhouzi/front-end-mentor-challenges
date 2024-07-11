function calcule()
{
   var d=new Date();
   var c=0;
   var jour=parseInt(document.getElementById('day').value);
   var mois=parseInt(document.getElementById('mois').value);
   var annee=parseInt(document.getElementById('annee').value);
   
   
      if(jour>31 || jour<1)
      {
         document.getElementById('msgday').innerHTML+='Must be a valid day';
         document.getElementById('err').style.color='red';
         document.getElementById('day').style.borderColor='red'
         c=1;

      }
      if(mois<1 || mois>12)
      {
         document.getElementById('msgmois').innerHTML+='Must be a valid month';
         document.getElementById('errm').style.color='red';
         document.getElementById('mois').style.borderColor='red';
         c=1;
      }
      if(mois ===2 && jour>28)
      {
         document.getElementById('msgmois').innerHTML+='Must be a valid month';
         document.getElementById('errm').style.color='red';
         document.getElementById('mois').style.borderColor='red';
         c=1;
      }
      if(annee>d.getFullYear())
      {
         document.getElementById('msgannee').innerHTML+='Must be in the past';
         document.getElementById('erra').style.color='red';
         document.getElementById('annee').style.borderColor='red';
         c=1;
      }
   
    if(c==0)
   {
      var year=d.getFullYear()- annee;
      var month=d.getMonth()- mois;
      var day=d.getDate()- jour;
      month++;
      if(day<0)
      {
         month--;
         if(month%2==0)
         {
            day += 30;
         }
      else 
         day+=31;
    }
    
    if (month < 0) 
   {
      year--;
      month += 12;
   }



      document.getElementById('reslta').innerHTML=year;
      document.getElementById('resltm').innerHTML=month;
      document.getElementById('resltj').innerHTML=day;
   
   }
}