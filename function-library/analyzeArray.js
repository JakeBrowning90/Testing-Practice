function analyzeArray(array) {
    function getAverage(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        let average = total / array.length;
        return average;
    }
    
    function getMin(array) {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
    
    function getMax(array) {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
    const analysis = {};
    analysis.average = getAverage(array);
    analysis.min = getMin(array);
    analysis.max = getMax(array);
    analysis.length = array.length;
    console.log(analysis);
    return analysis;
}

export { analyzeArray };