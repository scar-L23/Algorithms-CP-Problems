function createPermutations(input) {
  const arr = input.split('');
  const N = arr.length;
  
  const perms = [];
  let rest;
  let picked;
  let restPerms;
  let next;

  if (N === 0) return [input];

  for (let i = 0; i < N; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);
    
    restPerms = createPermutations(rest.join(''));
   
    for (let j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(''));
    }
  }

  return perms;
}

export { createPermutations }




