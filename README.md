# hiraganize-for-grade

## Example

```javascript
// hiraganize(text, [grade 1..6]);

await hiraganize('七人の兄妹が港で笑っている。敵の反乱だ。');
```

Result

```
    Grade1 = ななにんのきょうだいがみなとでわらっている。てきのはんらんだ。
    Grade2 = 七人のきょうだいがみなとでわらっている。てきのはんらんだ。
    Grade3 = 七人の兄妹がみなとでわらっている。てきのはんらんだ。
    Grade4 = 七人の兄妹が港でわらっている。てきのはんらんだ。
    Grade5 = 七人の兄妹が港で笑っている。てきのはんらんだ。
    Grade6 = 七人の兄妹が港で笑っている。敵のはんらんだ。
```