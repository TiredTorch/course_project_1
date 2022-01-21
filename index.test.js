import {add} from "./index"

describe( "Testing add", () => {
    test("Should return 4 when pass 2 & 2", () => {
    const result = add(2, 2)
    expect(result).toBe(4)
})
}) 