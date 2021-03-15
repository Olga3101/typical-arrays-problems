
exports.min = function min (array) 
{
  if ( array == undefined )
    return 0;

  let n = array.length;
  if ( n == 0 )
    return 0;

  let i;
  let minimum = Infinity;

   for ( i = 0; i < n; i++ ) 
   {
     if ( array[i] < minimum )
       minimum = array[i];
   }
  return minimum;
}

exports.max = function max (array) {
  if ( array == undefined )
    return 0;

  let n = array.length;
  if ( n == 0 )
    return 0;

  let i;
  let maximum = -Infinity;

   for ( i = 0; i < n; i++ ) 
   {
     if ( array[i] > maximum )
      maximum = array[i];
   }   
   return maximum;
}

exports.avg = function avg (array) {
  if ( array == undefined )
    return 0;

  let n = array.length;
  if ( n == 0 )
    return 0;

  let i;
  let av = 0;

  for ( i = 0; i < n; i++ ) 
  {
    av = av + array[i];
  }
  av = av / n;
  return av;
}