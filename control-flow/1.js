function getGrade(score){
    if (score >= 90 && score <= 100) {
        return 'A+';
    }
    else if (score >= 80 && score < 90) {
        return 'A';
    }
    else if (score >= 70 && score < 80) {
        return 'B';
    }
    else if (score >= 60 && score < 70) {
        return 'C';
    }
    else if (score >= 33 && score < 59) {
        return 'D';
    }
    else if (score >= 0 && score < 32) {
        return 'Fail';
    }
    else {
        return 'Invalid score';
    }
}

console.log(getGrade(95)); // Output: A+
console.log(getGrade(85)); // Output: A
console.log(getGrade(75)); // Output: B
console.log(getGrade(65)); // Output: C
console.log(getGrade(50)); // Output: D
console.log(getGrade(20)); // Output: Fail
console.log(getGrade(-5)); // Output: Invalid score
console.log(getGrade(105)); // Output: Invalid score