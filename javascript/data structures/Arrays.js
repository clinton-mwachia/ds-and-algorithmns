/** creating an array */
const arr = [1, 2, 3, 4, 5, 6, 8, 30, 4];
console.log('Array:', arr);

/** array length */
console.log('Array Length:', arr.length);

/** accessing array elements */
console.log('First Element:', arr[0]);

/** Update an array element */
arr[0] = 100;
console.log('Updated Array:', arr);

/** add a new item to the array */
arr.push(40);
console.log('Push Array:', arr);

/** remove the last item from the array */
arr.pop();
console.log('Pop Array:', arr);

/** get the first ith item(s) from the array */
arr.splice(4);
console.log('Splice Array:', arr);

/** get the index of an item */
console.log('Index of:', arr.indexOf(4));

/** copying and array */
const arr_copy = [...arr];
console.log('array copy', arr_copy);

/** looping through an array */
arr.forEach(function (value, index) {
	console.log(index, value);
});

/** loop using maping */
console.log('looping using mapping');
arr.map((value, index) => {
	console.log(index, value);
});

/** for loop */
console.log('for loop...');
for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	console.log(element);
}

/** recognize an array */
console.log('IsArray?: ', Array.isArray(arr));

/** PRACTICE */
/**
 * TRY ALL ABOVE WITH ELEMENTS OF STRING
 */
