/**
 * ## Comprehensive Analysis of Sorting Algorithms
Sorting algorithms are indispensable in computational theory and practice, each exhibiting distinct performance characteristics tailored to specific problem domains. This discourse evaluates a variety of sorting algorithms, their optimal application contexts, and detailed examples, emphasizing both theoretical underpinnings and pragmatic implementations.

---

### 1. Bubble Sort
**Algorithmic Characteristics**:
- **Time Complexity**: O(n^2) (average and worst-case scenarios)
- **Space Complexity**: O(1)
- **Primary Use Case**: Ideal for small datasets or pedagogical scenarios due to its straightforward implementation.

#### Procedural Steps:
- Iteratively compare adjacent elements, swapping them if they appear out of order.
- Repeat until no further swaps are necessary.

**Text Diagram:**
```
Unsorted: [5, 3, 8, 4, 2]
Pass 1:   [3, 5, 4, 2, 8]
Pass 2:   [3, 4, 2, 5, 8]
Pass 3:   [3, 2, 4, 5, 8]
Pass 4:   [2, 3, 4, 5, 8]
Sorted:   [2, 3, 4, 5, 8]
```

**JavaScript Implementation:**
```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
```

**Practical Applications**:
- Typically employed in instructional contexts or debugging exercises to elucidate sorting logic.

---

### 2. Selection Sort
**Algorithmic Characteristics**:
- **Time Complexity**: O(n^2)
- **Space Complexity**: O(1)
- **Primary Use Case**: Best suited for small-scale datasets.

#### Procedural Steps:
- Identify the smallest element in the unsorted segment and swap it with the first unsorted element.
- Progress through the unsorted portion until the entire dataset is ordered.

**Text Diagram:**
```
Unsorted: [64, 25, 12, 22, 11]
Step 1:   [11, 25, 12, 22, 64]
Step 2:   [11, 12, 25, 22, 64]
Step 3:   [11, 12, 22, 25, 64]
Step 4:   [11, 12, 22, 25, 64]
Sorted:   [11, 12, 22, 25, 64]
```

**JavaScript Implementation:**
```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        }
    }
    return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
```

**Practical Applications**:
- Frequently utilized in resource-constrained environments such as embedded systems.

---

### 3. Insertion Sort
**Algorithmic Characteristics**:
- **Time Complexity**: O(n^2) (average and worst-case scenarios), O(n) (best case for nearly sorted data)
- **Space Complexity**: O(1)
- **Primary Use Case**: Excels in scenarios involving nearly sorted datasets.

#### Procedural Steps:
- Sequentially extract elements and insert them into their proper positions within the sorted segment.

**Text Diagram:**
```
Unsorted: [12, 11, 13, 5, 6]
Step 1:   [11, 12, 13, 5, 6] 
Step 2:   [11, 12, 13, 5, 6] 
Step 3:   [5, 11, 12, 13, 6]
Step 4:   [5, 6, 11, 12, 13]
Sorted:   [5, 6, 11, 12, 13]
```

**JavaScript Implementation:**
```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));
```

**Practical Applications**:
- Frequently employed in systems processing small or partially ordered datasets, such as real-time transactional systems.

---

### 4. Merge Sort
**Algorithmic Characteristics**:
- **Time Complexity**: O(n log n) across all cases
- **Space Complexity**: O(n)
- **Primary Use Case**: Highly effective for large datasets due to its stability and divide-and-conquer strategy.

#### Procedural Steps:
- Recursively divide the dataset into halves until single-element arrays are formed.
- Merge the arrays in sorted order.

**Text Diagram:**
```
Unsorted: [38, 27, 43, 3, 9, 82, 10]
Divide:   [[38, 27, 43, 3], [9, 82, 10]]
          [[38, 27], [43, 3]] and [[9], [82, 10]]
Merge:    [[27, 38], [3, 43]] and [[9], [10, 82]]
          [3, 27, 38, 43] and [9, 10, 82]
Sorted:   [3, 9, 10, 27, 38, 43, 82]
```

**JavaScript Implementation:**
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
```

**Practical Applications**:
- Often leveraged for sorting extensive datasets, such as in log processing or distributed systems.
- **Elaboration**: In distributed systems, Merge Sort is pivotal for handling massive datasets that are split across nodes. By sorting locally on each node and merging results hierarchically, scalability and parallel efficiency are achieved. This is a common strategy in distributed frameworks such as Hadoop and Spark.

---

### 5. Quick Sort
**Algorithmic Characteristics**:
- **Time Complexity**: O(n log n) on average, O(n^2) in the worst case
- **Space Complexity**: O(log n) (recursion overhead)
- **Primary Use Case**: Widely applied for high-performance in-memory sorting.

#### Procedural Steps:
- Select a pivot element.
- Partition the dataset into subarrays containing elements less than and greater than the pivot.
- Recursively sort the partitions.

**Text Diagram:**
```
Unsorted: [10, 7, 8, 9, 1, 5]
Pivot:    5
Step 1:   [1], [5], [7, 8, 9, 10]
Step 2:   [1], [5], [[7, 8], [9, 10]]
Sorted:   [1, 5, 7, 8, 9, 10]
```

**JavaScript Implementation:**
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.filter(el => el < pivot);
    const right = arr.filter(el => el > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5]));
```

**Practical Applications**:
- Suitable for scenarios requiring efficient memory utilization, such as search engine indexing.
- **Elaboration**: Hybrid strategies, such as combining Quick Sort with Insertion Sort for small subarrays, mitigate Quick Sort’s worst-case scenario and enhance performance in production systems. These approaches are integral in databases and real-time analytics platforms.

---

### 6. Heap Sort
**Algorithmic Characteristics**:
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(1)
- **Primary Use Case**: Ideal for memory-constrained applications.

#### Procedural Steps:
- Construct a max heap from the dataset.
- Iteratively extract the maximum element and rebuild the heap.

**Text Diagram:**
```
Unsorted: [4, 10, 3, 5, 1]
Heapify:  [10, 5, 3, 4, 1]
Extract:  [1], [10, 5, 3, 4]
Rebuild:  [5, 4, 3, 1, 10]
Sorted:   [1, 3, 4, 5, 10]
```

**JavaScript Implementation:**
```javascript
function heapSort(arr) {
    let n = arr.length;

    const heapify = (arr, n, i) => {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

console.log(heapSort([4, 10, 3, 5, 1]));
```

**Practical Applications**:
- Widely utilized in scheduling systems requiring priority management.
- **Elaboration**: In production-grade systems, Heap Sort is integral for managing priority queues in task schedulers, event-driven architectures, and load-balancing mechanisms. For instance, operating systems frequently use heaps to manage job scheduling with varying priorities.

---

### Comparative Summary Table
| Algorithm      | Best Case     | Average Case   | Worst Case     | Space Complexity | Stability | Recursive | Parallelizable | Suitable Datasets |
|----------------|---------------|----------------|----------------|------------------|-----------|-----------|----------------|------------------|
| Bubble Sort    | O(n)          | O(n^2)         | O(n^2)         | O(1)             | Yes       | No        | No             | Small datasets   |
| Selection Sort | O(n^2)        | O(n^2)         | O(n^2)         | O(1)             | No        | No        | No             | Small datasets   |
| Insertion Sort | O(n)          | O(n^2)         | O(n^2)         | O(1)             | Yes       | No        | No             | Nearly sorted    |
| Merge Sort     | O(n log n)    | O(n log n)     | O(n log n)     | O(n)             | Yes       | Yes       | Yes            | Large datasets   |
| Quick Sort     | O(n log n)    | O(n log n)     | O(n^2)         | O(log n)         | No        | Yes       | Yes            | In-memory        |
| Heap Sort      | O(n log n)    | O(n log n)     | O(n log n)     | O(1)             | No        | No        | No             | Priority queues  |

---

### Strategies for High-Performance Systems
1. **Scalability**: Algorithms like Merge Sort and Quick Sort are optimal for distributed architectures handling large datasets.
2. **Resilience**: Employ hybrid methods—for instance, combining Quick Sort with Insertion Sort for handling smaller partitions.
3. **Future-Proofing**: Develop modular sorting utilities with extensible algorithmic strategies.

### Example: Distributed Sorting in E-Commerce Systems
Consider an e-commerce platform processing billions of records. A robust hybrid model might involve:
- **Quick Sort**: For in-memory processing on individual nodes.
- **Merge Sort**: For consolidating results across distributed nodes.

This layered approach ensures scalability, efficiency, and adaptability to dynamic workload demands.


 */

const { error } = require("console");
const { realpathSync } = require("fs");

/**
 *
 * ex : Unsorted: [5, 3, 8, 4, 2]
 * [5]
 *
 * time complexity = o(n2)
 */
// bubble sort
const bubbleSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  if (arr.length <= 1) return arr;

  const arrLength = arr.length;

  for (let i = 0; i < arrLength - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arrLength - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
};

//console.log(bubbleSort([5, 3, 8, 4, 2]));

//2. Selection Sort

/**
 *
 * ex : Unsorted: [5, 3, 8, 4, 2]
 *              : [5]
 *              : []
 *              : [1, 2, 3, 4, 5]
 *
 *
 * time complexity = o(n2)
 */
const selectionSort = (arr) => {
  // if not an array type throw type error
  if (!Array.isArray) {
    throw new TypeError("Input must be an array");
  }

  // handle length 0  and one element in the array
  if (arr.length <= 1) {
    return arr;
  }

  // find the smallest number in unsorted array swap with the first element of unsorted array
  const arrayLength = arr.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    let smallestIndex = i;
    for (j = i + 1; j < arrayLength; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }

    if (smallestIndex !== i) {
      [arr[smallestIndex], arr[i]] = [arr[i], arr[smallestIndex]];
    }
  }

  return arr;
};

//console.log(selectionSort([5, 3, 8, 4, 2]));

//### 3. Insertion Sort
/**
 *
 * ex : Unsorted: [5, 3, 8, 4, 2]
 *              : [2, 4, 3, 7, 9]
 *              : [5]
 *              : []
 *              : [1, 2, 3, 5,6, 7, 8, 4]
 *              : [1, 2, 3, 4,6, 7, 8, 4]
 *              : [7, 8, 9, 15,10, 1, 20, 2]
 *
 *
 *
 * time complexity = o(n2)
 */
const insertionSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError("input must be an array");
  }

  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {

    for (let j = i - 1; j >= 0; j--) {
      if (j >= 1 && arr[j] >= arr[j - 1] && arr[j] <= arr[j + 1]) {
        continue;
      } else if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(insertionSort([1, 7, 7, 7, 8, 9, 15, 10, 1, 1, 20, 20, 50, 70, 2]));
