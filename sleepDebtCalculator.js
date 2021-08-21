const getSleepHours = day => {
  switch(day) {
    case 'Monday':
    	return 8
    	break;
    case 'Tuesday':
    	return 5
    	break;    
    case 'Wednesday':
      return 3
      break;     
    case 'Thursday':
      return 4
      break;    
    case 'Friday':
      return 5
      break;     
    case 'Saturday':
      return 3
      break;      
    case 'Sunday':
      return 10
      break;
    default:
      return 'Error!';
    };
};


const getActualSleepHours = totalSleep => {
totalSleep = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

  return totalSleep;
 };


console.log( " The Actual Hours of sleep you had in the week is " + getActualSleepHours() + " hours! ");



const getIdealSleepHours = () => {
  const idealHours = 8 
  return idealHours * 4;
}

console.log(" The Ideal Hours of sleep recommended in a week is " + getIdealSleepHours() + " hours!");

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const sleepDebt = Math.abs(getIdealSleepHours - getActualSleepHours)
  
  if (actualSleepHours === idealSleepHours) {

    console.log("*********************************************************************************************");
    console.log("You supposed to have at least " + actualSleepHours  + " hours of sleep in a week and you had exactly the right amount of sleep in the week! Keep it up!" );
  } else if (actualSleepHours > idealSleepHours){
    console.log("*********************************************************************************************");
    console.log("You had a good sleep quality. You slept " + (actualSleepHours-idealSleepHours) + " hours more than you needed this week. ");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("*********************************************************************************************");
    console.log("You had " + (idealSleepHours - actualSleepHours) + " hours of sleep which is less than what you needed for this week. You need some rest."); 
  } else {
    console.log('You are not human');
  }
};

calculateSleepDebt();
  
