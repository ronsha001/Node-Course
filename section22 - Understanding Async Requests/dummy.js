const products = ['hi', null, 'hello'];
let isUpToDate = true;
const updatedProducts = products.filter(p => {
  if (p !== null) {
    return p !== null;
  } else {
    isUpToDate = false;
  }
});

console.log(isUpToDate);