export function popItemAtIndex(arr: Array<any>, index: number): any {
    const retThis: any = arr[index];
    arr.splice(index, 1);
    return retThis;
}

export function insertItemAtIndex(arr: Array<any>, index: number, item: any): void {
    // const left = arr.slice(0, index);
    // const right = arr.slice(index, arr.length);
    const rightStack = [];
    let i = arr.length - 1;
    while (i >= index) {
        rightStack.push(arr.pop());
        i--;
    }
    arr.push(item);
    while (rightStack.length > 0) {
        arr.push(rightStack.pop());
    }
}

// function test(): void {
//     let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     console.log("Before moving: ", a);
//     const moving = popItemAtIndex(a, 0);
//     console.log("Ater item is popped: ", a);
//     insertItemAtIndex(a, 9, moving);
//     console.log("After item is pushed again: ", a);
// }

// export default test();