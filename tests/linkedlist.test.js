import { LinkedList } from "../src/modules/linkedlist.js";

describe("Linked List Test", () => {
  const list = new LinkedList();

  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");

  test("Return nodes in string (toString).", () => {
    expect(list.toString()).toBe(
      "( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null"
    );
  });
});
