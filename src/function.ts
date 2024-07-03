// function
// "?" is used for optional
function sum(a: number, b?: number): number {
    if(b)
  return a + b;
    else return a;

    // এখানে কন্ডিশন দিয়েছি না হলে সে আন্ডিফাইন্ড দেখাবে যখন b এর কোন মান থাকবে ।
}

sum(10, 20); // 30
sum(1)

// "?" is used for optional

// Default Value
function product(a: number, b: number = 1): number {
    return a * b;
}
// এখানে ডিফল্ট ভ্যালু দিয়েছি যদি কোন ভ্যালু না দেয়া হয় তাহলে সে 1 দেখাবে ।
product(10, 20); // 200
product(10); // 10