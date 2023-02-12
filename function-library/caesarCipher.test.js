import { caesarCipher } from "./caesarCipher";

test('Return string with letters shifted by key number', () => {
    expect(caesarCipher("banana", 3)).toBe("edqdqd");
});

test("Return a string with each letter's case preserved", () => {
    expect(caesarCipher("LOUD quiet", 4)).toBe("PSYH uymix");
});

test('Return string that wraps around the alphabet', () => {
    expect(caesarCipher("Yellow zebras", 5)).toBe("Djqqtb ejgwfx");
});

test('Return string with punctuation', () => {
    expect(caesarCipher("It's a secret to everyone!", 3)).toBe("Lw'v d vhfuhw wr hyhubrqh!");
});
