export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  const result: number[] = [];

  // collection2 is descending — reverse with two-pointer merge
  let i = 0;
  let j = collection2.length - 1;
  while (i < j) {
    const temp = collection2[i];
    collection2[i] = collection2[j];
    collection2[j] = temp;
    i++;
    j--;
  }

  // Now perform 3-way merge
  let a = 0, b = 0, c = 0;
  while (a < collection1.length || b < collection2.length || c < collection3.length) {
    const candidates: [number, string][] = [];

    if (a < collection1.length) candidates.push([collection1[a], 'a']);
    if (b < collection2.length) candidates.push([collection2[b], 'b']);
    if (c < collection3.length) candidates.push([collection3[c], 'c']);

    let min = Math.min(...candidates.map(([val]) => val));
    let source = candidates.find(([val]) => val === min)![1];

    result.push(min);

    if (source === 'a') a++;
    else if (source === 'b') b++;
    else if (source === 'c') c++;
  }

  return result;
}
