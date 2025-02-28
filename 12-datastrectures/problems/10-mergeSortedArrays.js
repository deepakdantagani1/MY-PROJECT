/**
 * Below is a **concise summary** of our discussion about merging sorted arrays, the in-place “backward two-pointer” strategy, handling insufficient space in JavaScript, and a real-world use case:

---

### 1. The Merge Sorted Array Problem
- **Goal**: Merge two sorted arrays (`nums1`, `nums2`) so the final result is sorted and stored in `nums1` without extra space.
- **Typical Setup**: `nums1` has length \( m+n \); first \(m\) are valid, last \(n\) are placeholders (e.g., zeros). `nums2` has length \(n\).

---

### 2. Approaches
1. **Concatenate + Sort**  
   - *Time*: \(O((m+n)\log(m+n))\)  
   - *Space*: \(O(1)\) if in-place sort is possible  
   - *Simplicity*: Easiest to code, not the fastest for large inputs

2. **Two-Pointer from Front (with Extra Array)**  
   - *Time*: \(O(m+n)\)  
   - *Space*: \(O(m+n)\) for the temporary array  
   - *Simplicity*: Reasonable, but not true in-place

3. **Two-Pointer from Back** (In-Place)  
   - *Time*: \(O(m+n)\)  
   - *Space*: \(O(1)\) additional  
   - *Key Insight*: Compare from the end and place the larger element at the current end of `nums1`. Avoids overwriting elements you still need to process.

---

### 3. Why Merge from the Back?
- **Avoid Overwriting**: By placing the largest element in the last free position, you don’t overwrite unmerged elements in `nums1`.  
- **One Pass**: Each pointer (`p1` in `nums1`, `p2` in `nums2`) only moves leftward once.  
- **Optimal for Space**: Requires no extra array, just a few pointers.

---

### 4. Insufficient Space in the First Array (JS Perspective)
- If `nums1` does **not** already have enough slots:
  1. **Create a New Array** and merge/sort there (simple, uses extra memory).  
  2. **Resize `nums1`** (e.g., push placeholders) so it can accommodate both sets of data, then do the back-to-front merge in-place.

---

### 5. Real-World Use Case: Pre-Allocated Space
- **Inventory Updates**:
  - A large array (`nums1`) tracks sorted items and has **extra capacity** for new daily arrivals (`nums2`), also sorted.  
  - Each day, merge in-place from the back.  
  - Benefits:
    - Reduced memory fragmentation  
    - No need to create and copy into a new array daily  
    - Predictable resource usage in a high-throughput system

---

### 6. Key Takeaways
- **In-Place Merge** is ideal when you already have sufficient trailing space in the first array.  
- **Two-Pointer (Back to Front)** delivers \(O(m+n)\) time and \(O(1)\) extra space.  
- **If Space is Lacking**: Either resize the array or create a new one (pragmatic choice depends on memory constraints and performance needs).

---

**This high-level outline should help you recall the main points and reasoning behind in-place merging, its implementation details, and practical scenarios.**
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  /**
   * nums1 = [1,2,3,0,0,0] m =3, n=3
   * nums2 = [2,5,6]
   *
   * nums1 = [0,1,2,3,0,0,0]
   * nums2 = [2,5,6]
   *
   * nums1 = [1]
   * nums2 = []
   *
   * nums1 = [0]
   * nums2 = [1]
   *
   * nums1.length == m + n // first array has enough space for the two arrays
   * if m = 0 then nums1.length = n //if m has not elements then insert all the n into m// also all m elements are zeros
   * if n =0 then nums1 don't need any changes.
   *
   * nums2.length == n
   *
   * 0 <= m, n <= 200 // length of m and m can be zero to 200.
   *
   * 1 <= m + n <= 200 // either m or n must have one element in the list
   *
   * -109 <= nums1[i], nums2[j] <= 109 // values in array range between negative to positive...so it is possible to have zeros
   *
   */

  // time complexity  = n + log(m+n);
  let num1index = m;
  if (n > 0) {
    for (let i = 0; i < n; i++, num1index++) {
      nums1[num1index] == nums2[i];
    }
  }
  nums1 = nums1.sort();
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * for sorting numbers use array.sort((a, b) => a-b);
 * time complexity n + mlongm
 * space complexity is O(1);


 [1,2,3,3,0,0,0, 0]
[1,2,3] and [2,5,6, 7].
[1,2,2,3,5,6, 7]
 */

var merge = function (nums1, m, nums2, n) {
  // if(n=0) return nums1;
  // for(let i=m; i< nums1.length;i++ ){
  //     nums1[i] = 0;
  // }
  // let y=0
  // for(let i=m; i< nums1.length;i++) {
  //     nums1[i] = nums2[y];
  //     y++;
  // }
  // return nums1.sort((a, b) => a-b);

  if (n === 0) return nums1;
  if (m === 0) return nums2;
  let mIndex = m - 1;
  let nIndex = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nIndex >= 0) {
      if (nums2[nIndex] >= nums1[mIndex]) {
        nums1[i] = nums2[nIndex];
        nIndex--;
      } else {
        nums1[i] = nums1[mIndex];
        mIndex--;
      }
    } else {
      nums1[i] = nums1[mIndex];
      mIndex--;
    }
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));
