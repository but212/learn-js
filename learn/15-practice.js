const empty_obj = {};

empty_obj.is_empty = false;
console.log(empty_obj.is_empty);

empty_obj["fallback-string"] = "default";
console.log(empty_obj["fallback-string"]);

empty_obj.realize = "True love is broken";
console.log(empty_obj.realize);

empty_obj.realize = "True love is broken";
console.log(empty_obj.realize);

empty_obj["co-motive"] = "mia san mia";
console.log(empty_obj["co-motive"]);

empty_obj["co-motive"] = "wir sind wir";
console.log(empty_obj["co-motive"]);

empty_obj.is_ord = function (num) {
  return num % 2 === 1;
};

console.log(empty_obj.is_ord(40));
console.log(empty_obj.is_ord(39));

const id = {
  value: null,
  fmap: function (f) {
    return {
      value: f(this.value),
      fmap: this.fmap,
    };
  },
};

id.value = 30;
let result1 = id.fmap((x) => x * 2);
let result2 = id
  .fmap((x) => x * 3)
  .fmap((x) => x + 5)
  .fmap(empty_obj.is_ord);

console.log(id);
console.log(id.value);
console.log(result1);
console.log(result1.value);
console.log(result2);
console.log(result2.value);
