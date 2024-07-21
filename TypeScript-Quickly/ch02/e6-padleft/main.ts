// 任意类型的 padLeft
function padLeft(value: string, padding: any): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// 调用 padLeft 函数
console.log(padLeft("Hello world", 4));
console.log(padLeft("Hello world", "John says "));
console.log(padLeft("Hello world", true));

//     Hello world
// John says Hello world

// 第三条调用报错
//     throw new Error(`Expected string or number, got '${padding}'.`);
//     ^

// Error: Expected string or number, got 'true'.